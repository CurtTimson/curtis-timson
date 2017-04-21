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
aliases = [
    "/js/create-a-flashing-tab-notification-page-title/"
]
+++

Page title notifications switch between the default page title and a notification message continously in order to grab the user's attention. This is commonly used with chat applications.

<img src="../../images/post/newchatmessage.gif" alt="newchatmessage" width="245" height="45" class="alignnone size-full wp-image-71" />

I've written a small javascript object which can be used to switch on and off page title notifications.

To activate the page title notification call the following:

    PageTitleNotification.On("New Chat Message!");

Then call the following to turn it off:

    PageTitleNotification.Off();

The default speed is 1000 milliseconds, but this can be customised by passing a 2nd parameter to the `On()` function.

    PageTitleNotification.On("New Chat Message!", 5000);

**Download**
To use this download the minified javascript version here:

<a href="https://github.com/CurtTimson/Flashing-Page-Title-Notification/blob/master/PageTitleNotification.min.js" target="_blank">PageTitleNotification.min.js</a>

Or you can use the un-minified source code here:

    var PageTitleNotification = {
        Vars:{
            OriginalTitle: document.title,
            Interval: null
        },    
        On: function(notification, intervalSpeed){
            var _this = this;
            _this.Vars.Interval = setInterval(function(){
                 document.title = (_this.Vars.OriginalTitle == document.title)
                                     ? notification
                                     : _this.Vars.OriginalTitle;
            }, (intervalSpeed) ? intervalSpeed : 1000);
        },
        Off: function(){
            clearInterval(this.Vars.Interval);
            document.title = this.Vars.OriginalTitle;   
        }
    }

**View Demo**
<a href="http://fiddle.jshell.net/Curt/w8QBM/show/light/" target="_blank">http://fiddle.jshell.net/Curt/w8QBM/show/light/</a>

Hope this comes in help, comment if you have any issues/suggestions!

**UPDATE - November 2015**

New improved version now available on GitHub.

<a href="https://github.com/CurtTimson/Flashing-Page-Title-Notification" target="_blank">https://github.com/CurtTimson/Flashing-Page-Title-Notification</a>
