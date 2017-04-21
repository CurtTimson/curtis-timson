+++
tags = ["javascript", "event-handlers", "jQuery", "namespace"]
featured = false
description = "How to better manage jQuery event handlers"
date = "2014-05-05T00:00:00"
share = true
image = ""
title = "Namespacing jQuery event handlers"
slug = "namespacing-jquery-event-handlers"
author = "Curtis Timson"
draft = false
menu = ""
comments = true
aliases = [
    "/jquery/namespacing-jquery-event-handlers/"
]
+++

If we are to attach 2 or more event handlers to an element these will become stacked and run linear in the order they were attached.

For example:

    $(".foo").on("click", function(e){
        console.log("bar");
    });

    $(".foo").on("click", function(e){
        console.log("baz");
    });

If `.foo` is then clicked, the browser console will log:

    "bar"
    "baz"

If we wish to remove these event handlers we can call:

    $(".foo").off("click");

Simple.

However, what if we wish to only remove 1 of these event handlers and retain the other? This is where [jQuery event namespacing][1] comes in handy.

When adding the event handlers we can include a namespace name which will act as a reference when removing the event:

    $(".foo").on("click.barevent", function(e){
       console.log("bar");
    });

    $(".foo").on("click.bazevent", function(e){
       console.log("baz");
    });

Here `click` has been changed to `click.xxxx` where `xxxx` is the name of the namespace for this particular event handler.

With this in place we can remove 1 of the event handlers by referencing it's namespace when calling `.off()`.

For example if we wish to remove only the "bar" console log, we can call:

    $(".foo").off("click.barevent");

Therefore if `.foo` is then clicked, the browser console will only log:

    "baz"

<iframe width="100%" height="300" src="http://jsfiddle.net/qasfp/embedded/result,js,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

[1]: http://api.jquery.com/event.namespace/
