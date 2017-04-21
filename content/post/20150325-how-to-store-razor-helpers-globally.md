+++
tags = ["app_code", "asp.net", "asp.net-mvc", "helper", "razor"]
featured = false
description = ""
date = "2015-03-25T00:00:00"
share = true
image = ""
title = "How to store razor helpers globally"
slug = "how-to-store-razor-helpers-globally"
author = "Curtis Timson"
draft = false
menu = ""
comments = true
+++
ASP.NET MVC Razor helpers are a great way of reducing duplicated code by containing code snippets in a View which can then be called multiple times.

    <div>
        @DisplayGreeting("Curtis")
    </div>

    @helper DisplayGreeting(string name)
    {
        <span>Hello @name</span>
    }

However what if you wish to call this same helper on another View?

In which case the helper can be stored in a seperate View in the "App_Code" folder.

For example create a new View in the "App_Code" folder called "MyHelpers.cshtml":

<img src="../../images/post/HelpersSolutionExplorer.jpg" alt="HelpersSolutionExplorer" width="209" height="112" class="alignnone size-full wp-image-229" />

Move the helper code into this file:

<img src="../../images/post/MyHelpersView.jpg" alt="MyHelpersView" width="319" height="108" class="alignnone size-full wp-image-230" />

Then the helper can be called from the previous view by using `MyHelpers.DisplayGreeting`:

    <div>
        @MyHelpers.DisplayGreeting("Curtis")
    </div>

This way any View within the same ASP.NET MVC Application can then make use of this helper.
