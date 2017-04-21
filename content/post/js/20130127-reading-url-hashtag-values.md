+++
tags = ["hastag", "javascript"]
featured = false
description = ""
date = "2013-01-27T00:00:00"
share = true
image = ""
title = "Reading URL hashtag values"
slug = "reading-url-hashtag-values"
author = "Curtis Timson"
draft = false
menu = ""
comments = true
aliases = [
    "/js/reading-url-hashtag-values/"
]

+++

URL hashtags were primarily used in order to position the page scroll on load to a particular element.

With javascript we can access what the value of the hashtag is on page load.

    if (window.location.hash){
          var hash = window.location.hash.substring(1);
          alert("hashtag value is '" + hash + "'");
    }

This snippet first checks that the URL contains a hashtag, and then uses `substring()` to remove the hash (#) character from the start of the string. Therefore we are left with the value after the hash character.

We are then able to use this value as we wish.

For example, if we have a list of comments with ID’s in the form of "comment-12345" where "12345" is the comment ID, the URL including hashtag could be:

> www.domain.com/page#comment-12345

The page would automatically load at the anchored point, and then we could style that particular element on load. The following snippet also uses jQuery UI for animating the background colour:

    if (window.location.hash){
          var hash = window.location.hash.substring(1);
          if (hash.substring(0,7) == "comment"){
            $("#" + hash).css("background-color", "yellow")
            .animate({backgroundColor: "#ffffff"}, 2000);
          }    
    }
