+++
tags = ["css", "faux-styles", "font-face", "font-style", "font-weight"]
featured = false
description = ""
date = "2015-02-04T00:00:00"
share = true
image = "images/post/font.png"
title = "Using @font-face and preventing faux-styles"
slug = "using-font-face-and-preventing-faux-styles"
author = "Curtis Timson"
draft = false
menu = ""
comments = true
aliases = [
    "/less/using-font-face-and-preventing-faux-styles/"
]
+++
`@font-face` is used in CSS to define a custom font style for a web page.

Some custom fonts come with multiple type-faces for different weights and italic styles.

These are often defined with seperate `font-family` names for each type-face.

For example the "<a href="http://www.fontsquirrel.com/fonts/alegreya">Alegreya</a>" font could be defined as:

    @font-face{
        font-family:'alegreya';
        src: url('Fonts/Alegreya-Regular.otf');
    	font-weight: normal;
    	font-style: normal;
    }

    @font-face{
        font-family:'alegreya-bold';
        src: url('Fonts/Alegreya-Bold.otf');
    	font-weight: normal;
    	font-style: normal;
    }

    @font-face{
        font-family:'alegreya-italic';
        src: url('Fonts/Alegreya-Italic.otf');
    	font-weight: normal;
    	font-style: normal;
    }

This would then be applied in areas of CSS as such:

    div{
        font-family:'alegreya';
    }

    div{
        font-family:'alegreya-bold';
    }

    div{
        font-family:'alegreya-italic';
    }

The issue here is that unless another developer is aware, applying `font-weight:bold;` to the "alegreya" `font-family` will result in the browser applying it's own faux-bold styling rather than using the custom "Alegreya-Bold.otf" type-face. Likewise with italic styling.

The browser's interpretation of bold/italic will never be as nice as the custom designed type-face.

Below is an example of the browser's interpretation of italic vs the "Algreya-Italic.otf" file:

<strong>Browser Italic:</strong>
<img src="../../images/post/browser-font.jpg" alt="browser-font" width="490" height="65" class="alignnone size-full wp-image-171" />

<strong>Type-Face Italic:</strong>
<img src="../../images/post/type-face-italic.jpg" alt="type-face-italic" width="450" height="71" class="alignnone size-full wp-image-172" />

The best way to avoid this is to <strong>use the same font-family name for each definition</strong>.

For example:

    @font-face{
        font-family:'alegreya';
        src: url('Fonts/Alegreya-Regular.otf');
    	font-weight: normal;
    	font-style: normal;
    }

    @font-face{
        font-family:'alegreya';
        src: url('Fonts/Alegreya-Bold.otf');
    	font-weight: bold;
    	font-style: normal;
    }

    @font-face{
        font-family:'alegreya';
        src: url('Fonts/Alegreya-Italic.otf');
    	font-weight: normal;
    	font-style: italic;
    }

This can then be used by keeping the same `font-family` but adjusting the weight/style applied:

    div{
        font-family:'alegreya';
    }

    div{
        font-family:'alegreya';
        font-weight:bold;
    }

    div{
        font-family:'alegreya';
        font-style:italic;
    }
