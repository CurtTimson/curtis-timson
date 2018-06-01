+++
tags = ["javascript", "negative-number"]
featured = false
description = ""
date = "2014-04-30T00:00:00"
share = true
image = ""
title = "Default negative variables to zero in javascript"
slug = "default-negative-variables-to-zero-in-javascript"
author = "Curtis Timson"
draft = false
menu = ""
comments = true
postid = 20
aliases = [
    "/js/default-negative-variables-to-zero-in-javascript/"
]
+++

If you need to default a value to `0` if its negative, you could do:

    var i = -45;
    if (i<0){
        i = 0;
    }
    console.log(i); //0

However, a shorter way of doing this would be to use [`Math.max()`][1] passing `0` as one of the parameters:

    var i = -45;
    i = Math.max(0,i);
    console.log(i); //0


Likewise [`Math.min()`][2] can be used to set a maximum value:

    var i = 999;
    i = Math.min(500,i);
    console.log(i); //500

Or combine the two to set an available range. For example a percentage variable could be sanitised to ensure its between 0 and 100:

    function sanitisePercentage(i){
        return Math.min(100,Math.max(0,i));   
    }

    console.log(sanitisePercentage(50));    //50
    console.log(sanitisePercentage(99999)); //100
    console.log(sanitisePercentage(-123));  //0

[View Demo][3]


  [1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  [2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
  [3]: http://jsfiddle.net/mHn7e/
