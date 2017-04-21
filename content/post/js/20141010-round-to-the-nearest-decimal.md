+++
tags = ["javascript", "function", "round"]
featured = false
description = ""
date = "2014-10-10T00:00:00"
share = true
image = ""
title = "Round to the nearest decimal"
slug = "round-to-the-nearest-decimal"
author = "Curtis Timson"
draft = false
menu = ""
comments = true
+++

If we need round to the nearest whole number, we can use the `Math.round()` function to return this:

    Math.round(1.34234); //returns 1

However what if we need to round to a decimal place? For example 0.5.

The following function can be used to do just that, and the logic itself can be adapted to be used for other languages too (C#, SQL etc).

    function roundToMultiple(value, multiple){
        var t = (1/multiple);
        return (Math.round(value*t)/t).toFixed(2);
    }

This can then be used like so:

    roundToMultiple(1.34234, 0.5);  //returns 1.50
    roundToMultiple(1.34234, 0.25); //returns 1.25
    roundToMultiple(1.34234, 0.1);  //returns 1.30
    roundToMultiple(1.34234, 0.05); //returns 1.35

It can also be used to round to values greater than 1:

    roundToMultiple(25.3423423, 4); //returns 24.00
