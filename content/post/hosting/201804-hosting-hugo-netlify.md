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

This article will step through how to host your Hugo website on Netlify and show the benefits provided over using GitHub Pages. I'll be using a recent site I developed as an example of how to migrate.

## Contents
 - [Why Netlify?](#why-netlify)
 - [Netlify Setup](#netlify-setup)

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


## Netlify Setup

If you haven't already, go ahead and create a free account on [Netlify](https://www.netlify.com/).

### Create a new site

Once you're on the dashboard click on the "New site from Git" button to be taken through to the site creation.

![Create a new site](/images/post/hugo-netlify/create-new-site.png)

Select your Git provider (in this tutorial I'm using GitHub) and select the repository from your account.

Once you have selected the repository you'll be presented with some build options:

#### Branch to deploy
For this project I'm using the `master` branch

#### Build command
This should be the command you usually manually run to produce your production ready Hugo site.

For this Hugo project I use a separate config file for production so the command is:

```
hugo --config config-prod.toml
```

#### Publish directory

This is the directory which Netlify will deploy. For hugo projects this is `public`.

![Build options](/images/post/hugo-netlify/build-options.png)

Hitting "Deploy Site" will then create the site and start the first deployment!

![Site overview](/images/post/hugo-netlify/site-overview.png)


## Custom Domains

By default Netlify will create a subdomain under Netlify.com with a randomly generated name (`https://random-name.netlify.com`).

In this instance it's "vibrant-morse-276f48".

However, Netlify provides the ability to change the site name, and more importantly point a custom domain to the site.

### Changing the site name

If you don't currently have a Custom Domain you can change the netlify site name instead. This can be done from the Overview page by going to "Site Settings".

### Setting Custom Domains

To point a custom domain to your Netlify site first go to "Settings" then "Domain management" and hit "Add custom domain".

![Custom domain](/images/post/hugo-netlify/custom-domain.png)






## Related Links

 - [Netlify](https://www.netlify.com/)
 - [Hugo](https://gohugo.io/)