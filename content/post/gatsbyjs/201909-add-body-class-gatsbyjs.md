+++
tags = ["gatsbyjs", "react", "fouc"]
featured = false
description = "How to add a 'no-js' body class with Gatsby to prevent FOUC"
date = "2019-09-10T00:00:00"
share = true
image = "images/post/gatsbylogo.png"
title = "Adding a body class in GatsbyJs to prevent flashing content"
slug = "add-body-class-gatsbyjs-fouc"
author = "Curtis Timson"
draft = true
menu = ""
comments = true
postid = 36
+++
Recently I've been working on a GatsbyJs project which includes the use of a theme where a body class is used to prevent [flashing of unstyled content (FOUC)](https://www.paulirish.com/2009/avoiding-the-fouc-v3/).

This post aims to walk you through how to add a "no-js" class to the body server-side with GatsbyJs, and then remove it on client load.

## What is FOUC?
This concept isn't new and has been around for at least a decade, as [Paul Irish's post](https://www.paulirish.com/2009/avoiding-the-fouc-v3/) shows. There are now more modern ways of avoiding this, however it's still prevalent in modern HTML5 templates, and therefore still relevant if you're adopting one of these.

The basic concept is to have a class on the body which can be used in CSS stylesheets to determine whether or not javascript has been processed yet. This class is then removed using client-side javascript.

Therefore if we're to implement this concept in GatsbyJs we'll need to:

 - Add the class, `"no-js"` for example, to the `<body>` element server-side during build time
 - Serve the static HTML to the client
 - Process client-side javascript and then remove the `"no-js"` class


## Gatsby Setup
First we'll start by creating a new site using [Gatsby CLI](https://www.gatsbyjs.org/docs/quick-start/):

```bash
gatsby new gatsby-body-class-fouc
```

Once completed we can run our new Gatsby site in the browser with the following:

```bash
gatsby develop
```

Viewing the source code sent from the server will show that there is no body class attribute:

![](/images/post/gatsby-body-class/body-no-class.png)


## Gatsby API Hooks
When we created our new Gatsby site a number of new files are automatically created which allow us to hook into certain Gatsby APIs.

In particular the APIs we're interested in are:

 - [**SSR APIs**](https://www.gatsbyjs.org/docs/ssr-apis/) - `gatsby-ssr.js`
  - Allows the ability to hook into server side rendering *only* events
 - [**Browser APIs**](https://www.gatsbyjs.org/docs/browser-apis/) - `gatsby-browser.js`
  - Allows the ability to hook into client side rendering *only* events

### Adding body class with SSR API
The `onRenderBody` function in the SSR API allows us to hook into the build time of the HTML rendering.

Therefore by updating the `gatsby-ssr.js` to the following we can intercept this to add a new body class:

```js
exports.onRenderBody = ({ setBodyAttributes }) => {
  setBodyAttributes({
      className: 'no-js'
    });
};
```

Rebuild the site (`gatsby develop`) and check the source code from the server again. This time you should now see a `"no-js"` class being served on the `<body>`:

![](/images/post/gatsby-body-class/body-with-class.png)

### Removing body class with Browser API
Now the body class is being rendered from the server, we need to remove it client-side.

The `onClientEntry` function in the Browser API allows us to hook into the client side rendering of our application. Therefore this logic will not be applied during build time and only processed in the browser.

Updating the `gatsby-browser.js` to the following will intercept the client side processes and allow us to add an event listener to remove the class on load:

```js
exports.onClientEntry = () => {
  window.addEventListener('load', () => {
    document.body.className = document.body.className.replace(/\bno-js\b/, '');
  });
}
```

Now when refreshing the Gatsby application in the browser the `"no-js"` class will initially be attributted to the `<body>` element, but be removed on the window load event:

![](/images/post/gatsby-body-class/body-class-removed.png)

-----------

## Working Example

If you would like to see a working example of this, there is a GitHub repository available here:

https://github.com/curtistimson/gatsby-body-class-fouc

I hope this was useful, and if you have any questions please feel free to post in the comments below!