+++
tags = ["javascript", "console-log", "ie", "logging"]
featured = false
description = ""
date = "2014-10-27T00:00:00"
share = true
image = ""
title = "Preventing console.log issues in IE"
slug = "preventing-console-log-issues-in-ie"
author = "Curtis Timson"
draft = false
menu = ""
comments = true
+++

In some older browsers, including versions of Internet Explorer, `window.console` doesn't exist and therefore calling `console.log()` will result in an error.

One way of fixing this is to create a function which checks whether `console` exists and use this function instead:

    function consolelog(v){
        if (window.console
            && window.console.log){
            window.console.log(v);
        }
    }

However this requires all developers knowing about this function, and if someone forgets and directly calls `console.log()` then older browsers will still throw an error.

Therefore a better solution is to check whether `console.log()` exists, and if not, create an empty function which prevents the error occurring.

    if (!(window.console
        && window.console.log)){
        window.console = {
           log:function(v){return;}
        }
    }

Alternatively a better shorthand method would be:

    window.console = window.console || {log:function(a){}};
