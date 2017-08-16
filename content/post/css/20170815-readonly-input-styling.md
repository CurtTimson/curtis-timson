+++
tags = ["css", "readonly", "input"]
featured = false
description = "How to style readonly attributes on inputs with CSS"
date = "2017-08-15T00:00:00"
share = true
image = "images/post/input-readonly.png"
title = "Styling readonly attributes with CSS"
slug = "style-readonly-attribute-css"
author = "Curtis Timson"
draft = true
menu = ""
comments = true
+++
There may be times in which you need to style inputs which have been set with a readonly state.

In which case you can simply include the `readonly` attribute in your CSS selector to target this particular state:

```
input[readonly]
{
    background-color:#ccc;
}
```

<script async src="//jsfiddle.net/uzyH5/1394/embed/html,css,result/dark/"></script>
