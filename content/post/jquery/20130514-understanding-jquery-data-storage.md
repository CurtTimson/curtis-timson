+++
tags = ["data-attributes", "expando", "html5", "jQuery", "jquery-data"]
featured = true
description = "It is a common misunderstanding that .data('key') is simply a shortcut for .attr('data-key')"
date = "2013-05-14T00:00:00"
share = true
image = "images/post/jquery.jpg"
title = "Understanding jQuery data() storage"
slug = "understanding-jquery-data-storage"
author = "Curtis Timson"
draft = false
menu = ""
comments = true
aliases = [
    "/jquery/understanding-jquery-data-storage/"
]
+++

It is a common misunderstanding that `.data("key")` is simply a shortcut for `.attr("data-key")`.

`.data()` does read HTML5 data attributes, but this is only the first time it is called, as per the [documentation][1]:

> The data- attributes are pulled in the first time the data property is
> accessed and then are no longer accessed or mutated (all data values
> are then stored internally in jQuery).

After they've been read once, they are then stored in jQuery's cache object, `$.cache`.

Each element with a data attribute is assigned an index in the `$.cache` object.

From then on, any calls to `.data()` or any setting of data values via `.data("key", "value")` are then stored in the `$.cache` object.

----------

This can be proved by comparing the values of `.attr("data-key")` and `.data("key")` after a value has been set for `data("key")`:

~~~~
var $myDiv = $(".myDiv");

//Display value before changing the data
alert($myDiv.data("foo")); //Displays "bar"

//Change the data value
$myDiv.data("foo", "baz");

//Display the value after changing the data
alert($myDiv.data("foo")) //Displays "baz"

//Display the value of the elements "data-foo" attribute
alert($myDiv.attr("data-foo")); //Displays "bar"
~~~~

[Click here to see a jsFiddle example][2]

----------

To find where this data is stored in the jQuery cache, we can use `$.expando` to find its cache index, and then write this to the console to see the data.

For example if I have the following HTML markup:

~~~~
<div class="myDiv" data-foo="bar"></div>
~~~~

Once `.data()` has been set on this element, we can access its jQuery cache index by calling:

~~~~
$(".myDiv")[0][$.expando]
~~~~

This will return an integer value of the index position in the jQuery cache. Therefore we can use the following to output the data in the console:

~~~~
var $myDiv = $(".myDiv");
$myDiv.data("foo", "baz");
var cacheIndex = $myDiv[0][$.expando];
console.log($.cache[cacheIndex]);
~~~~

This then outputs:

![Console log output][3]

[Click here to see a jsFiddle example][4]

In reality you will never need to do this as the data can be accessed far easier using the `.data()` function, but its useful to understand how this data is stored.

[1]: http://api.jquery.com/data/#data-html5
[2]: http://jsfiddle.net/tCG8m/
[3]: http://i.stack.imgur.com/mlcZ7.jpg
[4]: http://jsfiddle.net/tCG8m/1/
