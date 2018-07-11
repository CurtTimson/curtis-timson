+++
tags = ["auth0", "nodejs", "expressjs", "promise-chain"]
featured = false
description = "How to retrieve Auth0 users details and email addresses with NodeJs Express"
date = "2018-07-06T00:00:00"
share = true
image = "images/post/auth0-nodejs-flow.png"
title = "Access user details and email address from Auth0 with NodeJs"
slug = "auth0-access-user-details-email-nodejs"
author = "Curtis Timson"
draft = true
menu = ""
comments = true
postid = 34
+++
[Auth0](https://auth0.com/) is a fantastic AaaS (_Authentication-as-a-Service_) provider which abstracts the complications of storing and managing user credentials and authentication.

However recently I struggled to obtain a list of user's email addresses from Auth0 within my back-end NodeJs application.

This tutorial will attempt to explain how exactly this can be achieved.

## Overview

For security purposes an Access Token must first be obtained before requesting the user details. Once obtained the user details can then be retrieved by forming an HTTP request per user.

The example below shows how a NodeJs application calls an MongoDB database in order to retrieve Auth0 User IDs before making several calls to Auth0.

![](/images/post/auth0-nodejs-flow.png)

 - Browser calls NodeJs application to obtain users
 - NodeJs calls MongoDB in order to return a list of specific User IDs
 - NodeJs calls Auth0 to obtain Access Token
 - NodeJs calls User API multiple times with Access Token to obtain user details

### Get Auth0 Access Token

Before we can obtain any user details we first aquire an [Access Token](https://auth0.com/docs/tokens/access-token).

The Access Token is in the form of [JWT](https://jwt.io/) and can be obtained in NodeJs by using the `auth0` [npm package](https://www.npmjs.com/package/auth0) with [AuthenticationClient](https://github.com/auth0/node-auth0#authentication-api-client).

The following method can be added to a NodeJs Express RESTful request which requires an Auth0 Access Token:

```js
let getAccessToken = (req, res, next) => {

    var AuthenticationClient = require('auth0').AuthenticationClient;

    var auth0 = new AuthenticationClient({
        domain: process.env.auth0Domain,
        clientId: process.env.auth0ClientId,
        clientSecret: process.env.auth0ClientSecret
    });

    auth0.clientCredentialsGrant(
        {
        audience: `https://${process.env.auth0Domain}/api/v2/`,
        scope: 'read:users'
        },
        function(err, response) {
        if (err) {
            res.status(500);
        }
        else{
            req.auth0AccessToken = response.access_token;
            return next();
        }
    });

}
```

`getAccessToken` requires the following properties from your Auth0 account. For security purposes these should never be stored in your source code and instead used as [environment variables](https://medium.com/ibm-watson-data-lab/environment-variables-or-keeping-your-secrets-secret-in-a-node-js-app-99019dfff716).

 - `auth0Domain`
 - `auth0ClientId`
 - `auth0ClientSecret`

This can then be tested in our requests as `req.auth0AccessToken`. For example:

```js
api.get('/users', getAccessToken, (req, res) => {
    let userIds = getUsersFromDB(); //Array of User IDs from MongoDB for example (to be used later)
    console.log('Auth0 Access Token', req.auth0AccessToken);
});
```

### Get User Details

Now we have an Access Token we can look at making requests for user details.

For each user a separate request must be made. Therefore when requesting multiple users we must make a promise chain to wait until all the data has been retrieved.

#### Auth0 User API

The user details can be obtained from the [Auth0 User API](https://auth0.com/docs/api/management/v2#!/Users/get_users) as follows:

```js
let getUser = (accessToken, userid) => {
    return requestPromise({
        url: `https://${process.env.auth0Domain}/api/v2/users/${userid}`,
        headers: {
            'authorization': `Bearer ${accessToken}`
        }
    });
}
```

The User API request requires the following:

 - Auth0 Access Token - The token we obtain above using `getAccessToken`.
 - User ID - The Auth0 User ID (e.g: `google-oauth2|1234567890`).

The [Auth0 User API documentation](https://auth0.com/docs/api/management/v2#!/Users/get_users) contains the full list of the response, but some useful properties are:

 - `email`
 - `username`
 - `user_metadata`
 - `nickname`

#### User API Promise Chain

As mentioned above we'll need a promise chain to ensure all user requests have responded before we proceed.

The example below ensures that even if one request returns an error then the promise chain resolves. This means that if one user isn't found, the rest are still returned.

```js
let getUsers = (auth0AccessToken, userIds) => {
    return new Promise((resolve, reject) => {

        let auth0UserPromises = [];

        userIds.forEach(userId => {
            auth0UserPromises.push(getUser(auth0AccessToken, userId));
        });

        //Return all promises as success, even if auth0 could not find the user
        Promise.all(auth0UserPromises.map(p => p.catch(() => undefined))).then(auth0Users => {
                            
            var model = auth0Users.map(user => (
                email: user.email,
                username: user.username,
                user_metadata: user.user_metadata
                nickname: user.nickname
            ));

            resolve(model);
        });

    });
};
```

We can then use `getUsers` in our original `GET /users` request:

```js
api.get('/users', getAccessToken, (req, res) => {
    let userIds = getUsersFromDB(); //Array of User IDs from MongoDB for example (to be used later)
    
    getUsers(req.auth0AccessToken, userIds).then(users => {
      res.json(users);  
    });
    
});
```

Hopefully this has helped explain to you how to obtain user details from Auth0. If you have any questions please feel free to comment below!