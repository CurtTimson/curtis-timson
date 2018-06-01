+++
tags = ["css-selectors", "front-end", "jsfiddle", "shortcut", "stackoverflow"]
featured = false
description = ""
date = "2014-07-04T00:00:00"
share = true
image = "images/post/jsfiddle.png"
title = "Quickly create HTML elements in jsFiddle"
slug = "quickly-create-html-elements-in-jsfiddle"
author = "Curtis Timson"
draft = false
menu = ""
comments = true
id = 32
aliases = [
    "/tools/quickly-create-html-elements-in-jsfiddle/"
]
+++

In case you haven't already heard of it, <a href="http://jsfiddle.net/">jsFiddle</a> is a web application which allows you to enter HTML, CSS and Javascript into different windows and render the output. It's a great tool for testing various front-end concepts, and then "fiddles" can be saved and shared.

Because of this feature it's a popular tool on <a href="http://stackoverflow.com/">StackOverflow</a> for demonstrating issues/solutions.

One feature I've come across is the ability to quickly create elements in the HTML window by using CSS selectors. This makes jsFiddle even more quick and easy to create demos!

For example if I write the following in the HTML window:

    div#a.b

And then hit tab, this will be converted to:

    <div id="a" class="b"></div>

Awesome!

This can be taken a step further to include nested elements:

    div#a.b>span.c

Which will produce:

    <div id="a" class="b"><span class="c"></span></div>

Or we can create multiple nested elements:

    div#a.b>span.c+span.d

Which will produce:

    <div id="a" class="b"><span class="c"></span><span class="d"></span></div>

Finally we can also add other attributes in the same way we would select them in CSS:

    a[href='http://curtistimson.co.uk']

Which produces:

    <a href="http://curtistimson.co.uk"></a>

<img src="../../../images/post/jsfiddle.gif" alt="jsfiddle" />
