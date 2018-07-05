+++
tags = ["callback-function", "delay", "javascript", "jquery"]
featured = false
description = ""
date = "2012-08-05T00:00:00"
share = true
image = ""
title = "Using jQuery callback functions"
slug = "using-jquery-callback-functions"
author = "Curtis Timson"
draft = false
menu = ""
comments = true
postid = 13
aliases = [
    "/jquery/using-jquery-callback-functions/"
]

+++

I’ve heard questions in the past regarding how to run a script after a jQuery animation or event has been completed.

The majority of these believe that you need to delay the script for a few seconds, allowing the animation to complete before the 2nd function is called. For example:

```js
$foo.load("MyWebPage.html");
$foo.delay(1000).css("color", "red");
```

Here, the jQuery object $foo is being loaded with a web page’s content, then while this is happening a delay of 1000 milliseconds is set, before the css colour is changed to red.

This is not the best method, and can cause various problems. The load time of MyWebPage.htm will be a variable amount of time. Therefore it is not possible to estimate how long the delay needs to be set for.

Setting the delay to 1000 milliseconds could result in the css being set before or after the content has loaded, and not when the content has loaded.

Fortunately, a lot of jQuery methods also provide a callback function. This allows us to run a function when the current function has completed.

The script below will run the load function on $foo, and once this has finished executing, the css function will then be executed.

```js
$foo.load("MyWebPage.html", function(){
    $(this).css("color", "red");
});
```

This means you don’t need to guess how long the first function will take to complete, and also ensures that the 2nd function is consistently ran precisely after the 1st has completed.
