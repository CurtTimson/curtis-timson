+++
tags = ["asp.net-mvc", "browser", "cache", "cache-buster", "performance"]
featured = false
description = "A cache-buster is a unique string which is appended to a URL in the form of a query string"
date = "2014-09-25T00:00:00"
share = true
image = "images/post/cache-buster-example.png"
title = "What is cache busting?"
slug = "what-is-cache-busting"
author = "Curtis Timson"
draft = false
menu = ""
comments = true
postid = 10
aliases = [
    "/front-end-dev/what-is-cache-busting/"
]
+++

A cache-buster is a unique string which is appended to a URL in the form of a [query string][1].

It is generally not read by the server-side and is used purely to form a unique URL. For example:

    /Scripts/foo.js?v=1

This is often used on client side files such as Javascript, CSS and Images in order to force a browser/cache-system to retrieve the latest version of a file from its source.

When a webpage is downloaded, any associated files are also downloaded and stored in the browser's cache. This is for performance purposes so that the webpage doesn't have to download the files every time the page is refreshed.

However, as a developer, if you are to make a change to any of those files, you need to ensure the client will download the latest version.

Therefore the cache-buster query string can be updated so that the browser doesn't recognise the file in it's cache and downloads a new version.

Here a different types of cache-buster methods you can use:


<strong>Static Cache-Buster</strong>

When the file is updated, all references to the file could be manually updated to increment a version number.

For example:

    <script type="text/javascript" src="/Scripts/foo.js?v=1"></script>

Becomes:

    <script type="text/javascript" src="/Scripts/foo.js?v=2"></script>

However this isn't a clean solution because this task will have to be carried out every time the file is updated. And in cases where its forgotten, browsers will potentially still use an older version of the file.

<strong>Date/Time Cache-Buster</strong>

The current date/time could be appended to the reference so that every call to the webpage will return a unique cache-buster. For example this can be done like so in .NET MVC:

    <script type="text/javascript" src="@string.Format("/Scripts/foo.js?v={0}", DateTime.Now.Ticks)"></script>

However this won't be great for performance, and defeats the point of browsers caching files at all.


<strong>Software Version Cache-Buster</strong>

Another method of cache-busting is to use the Software Version of the application. This ensures that whenever a new version of the application is deployed, the cache-buster will be updated:

    <script type="text/javascript" src="/Scripts/foo.js?v=2014.9.25.75285"></script>

The down-side to this method is that a change could be made to the application which creates a new version number  even when a change to the file has not been made. In which case the browser would download the file again when it already has the file stored locally in cache.


<strong id="_hashed">Hashed-Content Cache-Buster</strong>

My preferred method of cache-busting is to create a hash of the content and use this as the cache-buster.

This is the same method that [ASP.NET MVC Bundling & Minification][2] uses for it's cache-busting.

    <script type="text/javascript" src="/Scripts/foo.js?v=r0sLDicvP58AIXN_mc3QdyVvVj5euZNzdsa2N1PKvb81"></script>

The advantage of this is that you could set a really long `max-age` value, such as a 1 year, in your `Cache-Control` header and be confident that this won't be persisted once the content has changed.

----------


Whichever method you choose, cache-busting is a great way to ensure your clients are using the most up-to-date version of your files.


  [1]: http://en.wikipedia.org/wiki/Query_string
  [2]: http://www.asp.net/mvc/tutorials/mvc-4/bundling-and-minification
