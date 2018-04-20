+++
tags = ["hosting", "hugo", "netlify", "continuous-integration"]
featured = false
description = "Step by step tutorial on how to host your Hugo site on Netlify with continuous integration"
date = "2018-04-20T00:00:00"
share = true
image = ""
title = "Hosting Hugo on Netlify"
slug = "hugo-netlify"
author = "Curtis Timson"
draft = true
menu = ""
comments = true
+++
Recently I've started migrating my static websites from GitHub Pages hosting over to Netlify.

This article will step through how to host your Hugo website on Netlify and show the benefits provided over using GitHub Pages.

## Why Netlify?

I've been using Netlify to host my static websites for the last few months as an alternative to GitHub Pages. The main advantages I've found for using Netlify over Github Pages are as follows.

### Continuous Integration

Netlify allows for the ability to build and deploy directly from your GitHub repository. This means that you can commit the source code of your Hugo application, and then this will automatically build into a static site, and deploy onto the Netlify servers.

The build process can also be provided on a per-branch basis. This means you can verify that your current build will build and deploy successfully once it's been merged into the branch linked for continuous integration.

### Easy, free, SSL/HTTPS setup

Netlify has an in-built ability to set up your Custom Domain with an SSL certificate, provided by Lets Encrypt. Once our Custom Domain DNS has been verified, it literally takes one click to set up SSL!

### Netlify CMS

With the inclusion of a few javascript and configuration files, Netlify can provide a free CMS panel in which users can edit content within the Hugo application.

This, combined with continuous integration, can provide at least the simplest features of a full stack CMS provider, such as Wordpress.

### Split Testing

This isn't a feature I've currently had chance to take advantage of, however Netlify's split testing provides the ability to serve your Hugo application from multiple GitHub branches enabling the ability for A/B Testing.

## Related Links

 - [Netlify](https://www.netlify.com/)
 - [Hugo](https://gohugo.io/)