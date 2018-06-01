+++
tags = ["css", "jquery"]
featured = false
description = ""
date = "2012-10-07T00:00:00"
share = true
image = ""
title = "Creating a new rule for a CSS class in jQuery"
slug = "creating-a-new-rule-for-a-css-class-in-jquery"
author = "Curtis Timson"
draft = false
menu = ""
comments = true
id = 14
aliases = [
    "/jquery/creating-a-new-rule-for-a-css-class-in-jquery/"
]

+++

In jQuery, to add a new style to all elements which have a particular CSS class, we can simply call a function like the following:

    <div class="foobar">Lorem Ipsum</div>
    <div class="foobar">Dolor sit amet</div>

    function SetFooBarRed(){
        $(".foobar").css("background-color", "red");
    }

This will add the style `background-color:red` to all elements with the class `foobar`.

    <div class="foobar" style="background-color:red;">Lorem Ipsum</div>
    <div class="foobar" style="background-color:red;">Dolor sit amet</div>

However, if we have elements which are loaded into the DOM after the initial page load, then these new elements will not have the new style automatically added to them (as they were not included within the DOM when `SetFooBarRed()` was called).

    <div class="foobar" style="background-color:red;">Lorem Ipsum</div>
    <div class="foobar" style="background-color:red;">Dolor sit amet</div>
    <div class="foobar">consectetur adipiscing</div> <!-- No style attribute added -->

One way of achieving this would be to call `SetFooBarRed()` every time a new element with the class `foobar` is added to the DOM. However this could be inconsistent and would require extra work each time a foobar classed element is added.

An alternative solution, which would ensure every element with the class foobar included the new style would be to add this to the head as a new CSS rule as follows:

    $("<style type='text/css'> .foobar{ background-color:red;} </style>").appendTo("head");

Now all elements, including future added elements, will contain this new style, no different to if it was in the original stylesheet.
