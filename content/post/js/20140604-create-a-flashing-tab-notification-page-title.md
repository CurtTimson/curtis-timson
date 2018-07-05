+++
tags = ["javascript", "notification", "page-title"]
featured = false
description = "Learn how to create flashing page title, or use/fork the existing version"
date = "2014-06-04T00:00:00"
share = true
image = "images/post/newchatmessage.png"
title = "Create a flashing tab notification page title"
slug = "create-a-flashing-tab-notification-page-title"
author = "Curtis Timson"
draft = false
menu = ""
comments = true
postid = 21
aliases = [
    "/js/create-a-flashing-tab-notification-page-title/"
]
+++

Page title notifications switch between the default page title and a notification message continously in order to grab the user's attention. This is commonly used with chat applications.

<img src="../../../images/post/newchatmessage.gif" alt="newchatmessage" />

I've written a small javascript object which can be used to switch on and off page title notifications.

To activate the page title notification call the following:

```js
pageTitleNotification.on("New Message!");
```

Then call the following to turn it off:

```js
pageTitleNotification.off()
```

The default speed is 1000 milliseconds, but this can be customised by passing a 2nd parameter to the `on()` function.

```js
pageTitleNotification.on("New Message!", 5000);
```

## Download

There are various ways you can integrate this into your project:

### npm
Run the following `npm install` command:

```js
npm install flashing-page-title-notification --save
```

https://www.npmjs.com/package/flashing-page-title-notification

### Minified file

Download the minified javascript version from GitHub:

<a href="https://github.com/curttimson/Flashing-Page-Title-Notification/blob/master/dist/PageTitleNotification.min.js" target="_blank">PageTitleNotification.min.js</a>

## Demo

https://curttimson.github.io/Flashing-Page-Title-Notification/Demo/Index.html

## GitHub

Full source code available on GitHub. Please feel free to raise any issues or pull requests!

https://github.com/CurtTimson/Flashing-Page-Title-Notification
