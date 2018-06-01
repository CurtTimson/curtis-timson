+++
tags = ["html", "xslt"]
featured = false
description = ""
date = "2012-10-04T00:00:00"
share = true
image = ""
title = "How to prevent self-closing elements in XSLT"
slug = "how-to-prevent-self-closing-elements-in-xslt"
author = "Curtis Timson"
draft = false
menu = ""
comments = true
id = 33
aliases = [
    "/xslt/how-to-prevent-self-closing-elements-in-xslt/"
]

+++

If you are to put an element into XSLT without any child elements, the element will automatically close itself. Therefore, if you have the following markup:

~~~~
<div class="clear"></div>
~~~~

XSLT will automatically render this as:

~~~~
<div class="clear" />
~~~~

This is fine for most elements, however some elements such as `<div>` will behave differently if they are self-closed.

A good way of preventing this from happening is to add an empty value into the `<div>` element like so:

~~~~
<div class="clear"><xsl:value-of select="''"/></div>
~~~~

This will tell the XSLT rendering engine that there is some form of content inside the element, and therefore not to close itself. The rendered output would then be:

~~~~
<div class="clear"></div>
~~~~
