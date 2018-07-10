+++
tags = ["auth0", "nodejs"]
featured = false
description = "How to retrieve to Auth0 users details and email addresses with NodeJs"
date = "2018-07-06T00:00:00"
share = true
#image = "images/post/.jpg"
title = "Access user details and email address from Auth0 with NodeJs"
slug = "auth0-access-user-details-email-nodejs"
author = "Curtis Timson"
draft = true
menu = ""
comments = true
postid = 34
+++
[Auth0](https://auth0.com/) is a fantastic AaaS (_Authentication-as-a-Service_) provider which abstracts the complications of storing and managing user credentials and authentication.

However recently I struggled to obtain a list of user's email addresses from within my back-end NodeJs application.

This tutorial will attempt to explain how exactly this can be achieved.

## Overview

For security purposes an Access Token but first be obtained before calling the user details. Once obtained the user details can then be retrieved by forming an HTTP request per user.

The example below shows how a NodeJs application calls an MongoDB database in order to retrieve Auth0 User IDs before making several calls to Auth0.

![](/images/post/auth0-nodejs-flow.png)