+++
tags = ["css", "dry", "font-face", "less"]
featured = false
description = ""
date = "2015-02-04T22:00:00"
share = true
image = ""
title = "Managing @font-face definitions with LESS"
slug = "managing-font-face-definitions-with-less"
author = "Curtis Timson"
draft = false
menu = ""
comments = true
id = 8
aliases = [
    "/css/managing-font-face-definitions-with-less/",
    "/less/managing-font-face-definitions-with-less/"
]
+++

A typical `@font-face` definition looks something like this:

    @font-face {
      font-family: 'CustomWebFont';
      src: url('customwebfont.eot');
      src: url('customwebfont.eot?#iefix') format('embedded-opentype'),
           url('customwebfont.woff2') format('woff2'),
           url('customwebfont.woff') format('woff'),
           url('customwebfont.ttf')  format('truetype'),
           url('customwebfont.svg#svgFontName') format('svg');
      font-weight:normal;
      font-style:normal;
    }

Here we are defining the font's name, weight, style, and providing various file types for cross-browser compatibility.

If a web application is using different web fonts, or even a different weight/style (bold/italic) for the same web font, then this code has to be practically repeated several times.

This goes against <a href="http://en.wikipedia.org/wiki/Don%27t_repeat_yourself">DRY methodology</a> and results in increased maintenance and management.

However, using <a href="http://lesscss.org/features/#mixins-feature">LESS mixins</a> we can abstract these properties making the definitions more readable.

Add the following to your LESS file:

    .font-face(@font-family, @filepath, @font-weight, @font-style){
        @font-face {
            font-family: @font-family;
            src: url('@{filepath}.eot');
            src: url('@{filepath}.eot?#iefix') format('embedded-opentype'),
                url('@{filepath}.woff2') format('woff2'),
                url('@{filepath}.woff') format('woff'),
                url('@{filepath}.ttf')  format('truetype'),
                url('@{filepath}.svg#svgFontName') format('svg');
            font-weight:@font-weight;
            font-style:@font-style;
        }
    }

Then, for the example above, this can be used as follows:

    .font-face('CustomWebFont', 'customwebfont', normal, normal);

If we want to use 4 different type-faces for this web font then it is simply just 4 lines to write:

    .font-face('CustomWebFont', 'customwebfont', normal, normal);
     .font-face('CustomWebFont', 'customwebfont_bold', bold, normal);
     .font-face('CustomWebFont', 'customwebfont_italic', normal, italic);
     .font-face('CustomWebFont', 'customwebfont_bolditalic', bold, italic);

This would then output the following in our rendered CSS:

    @font-face {
      font-family: 'CustomWebFont';
      src: url('customwebfont.eot');
      src: url('customwebfont.eot?#iefix') format('embedded-opentype'), url('customwebfont.woff2') format('woff2'), url('customwebfont.woff') format('woff'), url('customwebfont.ttf') format('truetype'), url('customwebfont.svg#svgFontName') format('svg');
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: 'CustomWebFont';
      src: url('customwebfont_bold.eot');
      src: url('customwebfont_bold.eot?#iefix') format('embedded-opentype'), url('customwebfont_bold.woff2') format('woff2'), url('customwebfont_bold.woff') format('woff'), url('customwebfont_bold.ttf') format('truetype'), url('customwebfont_bold.svg#svgFontName') format('svg');
      font-weight: bold;
      font-style: normal;
    }
    @font-face {
      font-family: 'CustomWebFont';
      src: url('customwebfont_italic.eot');
      src: url('customwebfont_italic.eot?#iefix') format('embedded-opentype'), url('customwebfont_italic.woff2') format('woff2'), url('customwebfont_italic.woff') format('woff'), url('customwebfont_italic.ttf') format('truetype'), url('customwebfont_italic.svg#svgFontName') format('svg');
      font-weight: normal;
      font-style: italic;
    }
    @font-face {
      font-family: 'CustomWebFont';
      src: url('customwebfont_bolditalic.eot');
      src: url('customwebfont_bolditalic.eot?#iefix') format('embedded-opentype'), url('customwebfont_bolditalic.woff2') format('woff2'), url('customwebfont_bolditalic.woff') format('woff'), url('customwebfont_bolditalic.ttf') format('truetype'), url('customwebfont_bolditalic.svg#svgFontName') format('svg');
      font-weight: bold;
      font-style: italic;
    }
