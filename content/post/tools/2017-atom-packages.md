+++
tags = ["atom", "ide", "packages"]
featured = false
description = "x Atom Packages which are useful for front-end development"
date = "2017-08-22T00:00:00"
share = true
title = "x Useful Atom Packages"
slug = "x-useful-atom-packages"
author = "Curtis Timson"
draft = true
menu = ""
comments = true
+++

If you're unfamiliar with Atom, it's an open source IDE developed by [GitHub](http://github.com) which I currently use for front-end development projects.

When initially installed Atom isn't very rich in features, however it's heavily customisable through [packages](https://atom.io/packages). At the time of writing there are over *6000 packages* available to install.

## How to install atom packages
Atom packages can either be installed using CLI or through Atom itself.

To install through Atom go to **Settings → Install** and search for the package which you wish to install.

![File Icons](/images/post/atom/package-install.png)

Alternatively installing via CLI is much quicker and requires only the following command:

```
apm install <package name>
```

## Packages

Below are some packages I recommend:

### File Icons

https://github.com/file-icons/atom

![File Icons](/images/post/atom/file-icons.png)

**Settings → Install → file-icons** | `apm install file-icons`

File Icons updates the tree-view and tab icons within Atom to show an icon which represents the file type. This is very handy when quickly trying to find a particular file, and also adds a bit of colour to the UI.

![File Icons Example](/images/post/atom/file-icons-example.png)

----------------------


### Minimap

https://github.com/atom-minimap/minimap

![Minimap Example](/images/post/atom/minimap-example.png)

**Settings → Install → minimap** | `apm install minimap`

Minimap adds a small preview of the contents of the file alongside the scrollbar. This is helpful for quick navigation, and also gives a perspective of whereabouts in the file you're at.

----------------------

## Pigments

https://github.com/abe33/atom-pigments

![Atom Pigments](/images/post/atom/pigments-logo.png)

**Settings → Install → pigments** | `apm install pigments`

Atom Pigments visualises CSS colours such as Hex and RGB. But it also parses css-preprocessor variables as well as functions. One feature the below animation doesn't represent which I find most helpful is that it will also pick up the value of preprocessor variables even from other files.

![Atom Pigments](/images/post/atom/pigments-example.gif)

-------------------------

## Highlight Selected

https://atom.io/packages/highlight-selected

![Highlight Selected](/images/post/atom/highlight-example.gif)

**Settings → Install → pigments** | `apm install pigments`

The Highlight Selected package is simple, but very useful. When you select a word in the document, all other instances of this word are highlighted.

--------------------------

## Todo Show

https://atom.io/packages/todo-show

![Todo Show](/images/post/atom/todo-example.png)

**Settings → Install → todo show** | `apm install todo-show`

Todo Show will collate all the `TODO` comments throughout your code and display them in a quick table. Each record will also have a quick link through to the file and line of code containing the `TODO`.

---------------------------
