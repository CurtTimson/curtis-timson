+++
tags = ["reactjs", "react", "gatsbyjs", "fouc"]
featured = false
description = "How to add a 'no-js' body class with Gatsby to prevent FOUC"
date = "2019-09-10T00:00:00"
share = true
image = "images/post/gatsbylogo.png"
title = "Adding a body class in GatsbyJs to prevent flashing content"
slug = "add-body-class-gatsbyjs-fouc"
author = "Curtis Timson"
draft = true
menu = ""
comments = true
postid = 36
+++
Recently I've been working on a GatsbyJs project which includes the use of a theme which makes use of body classes to prevent [flashing of unstyled content](https://www.paulirish.com/2009/avoiding-the-fouc-v3/).

This concept isn't new and has been around for at least a decade, as Paul Irish's post shows, however still appears in modern app implementations.

This post aims to walk you through how to a "no-js" class to the body server-side with GatsbyJs, and then remove it on client load.

## Gatsby Setup
