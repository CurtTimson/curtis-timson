+++
tags = ["alert", "console", "debug", "javascript", "log"]
featured = false
description = ""
date = "2013-03-28T00:00:00"
share = true
image = ""
title = "console.log() vs alert() when debugging"
slug = "console-log-vs-alert-when-debugging"
author = "Curtis Timson"
draft = false
menu = ""
comments = true
aliases = [
    "/js/console-log-vs-alert-when-debugging/"
]

+++

Using `console.log()` is a great way of getting quick results about what variables are holding what values at which point, and which areas of code are being called, without having to debug.

Before javascript debugging became so accessible, one of the only ways of checking the values of your variables would be to call `alert()`. However, this wasn’t ideal as it would stop the script from running while the `alert()` was displayed, preventing the script from continuing its usual process.

[A common case][1] where this is an issue is when testing AJAX calls using `alert()` to debug. The AJAX call would be made followed by an `alert()`. This would give the AJAX request a few seconds to respond and execute the callback function.

When the `alert()` is removed, the script following after the AJAX request would happen in milliseconds, whereas the AJAX response would take a second or so to return.

As `console.log()` doesn’t stop the script from running, the returned value is stored in the console for viewing.

Another advantage of using `console.log()` over `alert()` is that you can capture more than just string values. By passing an object to the console log, you can expand this and view all properties of the object.

For example if we have the following javascript variable:

    var obj = {
        foo: "bar",
        baz: "qux"
    };

If we call `alert(obj)` this will return `[object Object]`, which isn’t very helpful.

However if we call `console.log(obj)` this will return the object to the browser’s console which we can then open and inspect.


  [1]: http://stackoverflow.com/questions/2142682/script-only-works-while-alert-box-is-in-the-script
