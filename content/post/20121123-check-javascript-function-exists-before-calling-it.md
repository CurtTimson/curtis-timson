+++
tags = ["function", "javascript"]
featured = false
description = ""
date = "2012-11-23T00:00:00"
share = true
image = ""
title = "Check javascript function exists before calling it"
slug = "check-javascript-function-exists-before-calling-it"
author = "Curtis Timson"
draft = false
menu = ""
comments = true

+++

On large applications, there may be some instances where you need to make a call to a function which belongs in a different javascript file.

There might also be a case where this javascript file isn’t always included on every page, and should only be called *if* it is included.

If we are to call this function, and it hasn't been included, a javascript error will be returned.

Therefore we need to first check that the functions exists in the current context. Using `typeof` we can determine whether the browser detects the function name as a function, and run it only if it exists:

    if (typeof(foo) === 'function'){
       foo();
    }
