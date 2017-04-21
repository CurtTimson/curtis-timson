+++
tags = ["es6", "javascript", "function", "parameters"]
featured = false
description = ""
date = "2016-10-05T00:00:00"
share = true
image = "images/post/es6-parameter.jpg"
title = "Default parameters with ES6"
slug = "default-parameters-es6"
author = "Curtis Timson"
draft = false
menu = ""
comments = true
+++
With ES5 if you wish to set default parameters on a javascript function you would be required to check the value and supply a default if one hadn't been set.

    var myFunction = function(arg1, arg2){
       arg1 = arg1 || 25;
       arg2 = arg2 || true;

       //do something
    }

Even this has problems as passing in `0` for `arg1` or `false` for `arg2` would both evaluate as "falsey" and therefore set the default values.

However with ES6 we can now set default parameters within the parameter definition resulting in cleaner and more readable code!

    var myFunction = function(arg1 = 25, arg2 = true){   
       //do something
    }
