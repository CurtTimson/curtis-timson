+++
tags = ["hosting", "hugo", "netlify", "continuous-integration", "static-site"]
featured = false
description = "Step by step tutorial on how to host your static site on Netlify with continuous integration"
date = "2018-05-10T15:40:00"
share = true
image = "images/post/hugo-netlify/hugo-netlify-tn.png"
title = "Hosting Hugo on Netlify"
slug = "hugo-netlify"
author = "Curtis Timson"
menu = ""
comments = true
+++
Recently I've started migrating my static websites hosting from [GitHub Pages](https://pages.github.com/) to [Netlify](https://www.netlify.com/).

This article will step through how to host your static website on Netlify and show the benefits provided over using GitHub Pages. I'll be using a recent [Hugo](https://gohugo.io/) site I developed as an example of how to migrate.

However, the majority of this tutorial **is not Hugo specific** and is in fact relevant for all static site deployments. Only the build commands and publish directory will vary dependant on your tech stack.

## Contents

- [Why Netlify?](#why-netlify)
    - [Continuous Integration](#continuous-integration)
    - [Easy, free, SSL/HTTPS setup](#easy-free-sslhttps-setup)
    - [Content Delivery Network](#content-delivery-network)
    - [Netlify CMS](#netlify-cms)
    - [Split Testing](#split-testing)
- [Netlify Site Setup](#netlify-site-setup)
    - [Create a new site](#create-a-new-site)
        - [Branch to deploy](#branch-to-deploy)
        - [Build command](#build-command)
        - [Publish directory](#publish-directory)
- [Custom Domains](#custom-domains)
    - [Changing the site name](#changing-the-site-name)
    - [Setting Custom Domains](#setting-custom-domains)
    - [SSL/TLS certificate](#ssltls-certificate)
    - [Force HTTPS](#force-https)
- [Continuous Integration / Delivery](#continuous-integration-delivery)


## Why Netlify?

I've been using Netlify to host my static websites for the last few months as an alternative to GitHub Pages. The main advantages I've found for using Netlify over Github Pages are as follows.

### Continuous Integration

Netlify allows for the ability to build and deploy directly from your GitHub repository. This means that you can commit the source code of your Hugo application, and then this will automatically build into a static site, and deploy onto the Netlify servers.

The build process can also be provided on a per-branch basis. This means you can verify that your current build will build and deploy successfully once it's been merged into the branch linked for continuous integration.

GitHub Pages on the other hand, only allows a specific branch (`gh-pages`) to be deployed, and this (at least for Hugo projects) has to be the post-build version of the application, not the source. However, I do believe they provide better support for another static site generator, [Jekyll](https://jekyllrb.com/).

### Easy, free, SSL/HTTPS setup

Netlify has an in-built ability to set up your Custom Domain with an SSL certificate, provided by [Lets Encrypt](https://letsencrypt.org/). Once our Custom Domain DNS has been verified, it literally takes a few clicks to set up SSL!

### Content Delivery Network

Some developers might be used to proxying their static sites through a CDN, such as [Cloudflare](https://www.cloudflare.com/), in order to improve their user's download speeds.

However Netlify provides this support internally, removing this complication from our DNS setup. [Read more](https://www.netlify.com/blog/2017/03/28/why-you-dont-need-cloudflare-with-netlify/).

### Netlify CMS

With the inclusion of a few javascript and configuration files, Netlify can provide a [free CMS panel](https://www.netlifycms.org/) in which users can edit content within the Hugo application.

This, combined with continuous integration, can provide at least the simplest features of a full stack CMS provider, such as Wordpress.

### Split Testing

This isn't a feature I've currently had chance to take advantage of, however Netlify's split testing provides the ability to serve your Hugo application from multiple GitHub branches enabling the ability for A/B Testing.


## Netlify Site Setup

The following section will walk through the setup of a static site with Netlify.

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

This is the directory in your post-build application which Netlify will deploy. For hugo projects this is `public`.

![Build options](/images/post/hugo-netlify/build-options.png)

Hitting "Deploy Site" will then create the site and start the first deployment! 🚀

![Site overview](/images/post/hugo-netlify/site-overview.png)


## Custom Domains

By default Netlify will create a subdomain under Netlify.com with a randomly generated name (`https://random-name.netlify.com`).

However, Netlify provides the ability to change the site name, and more importantly point a custom domain to the site.

### Changing the site name

If you don't currently have a Custom Domain you can change the netlify site name instead. This can be done from the Overview page by going to "Site Settings".

### Setting Custom Domains

To point a custom domain to your Netlify site first go to "Settings" then "Domain management" and hit "Add custom domain".

![Custom domain](/images/post/hugo-netlify/custom-domain.png)

Once you've added your domain you'll be provided with hostnames and prompted to point your domain to these hostnames from your domain provider.

### SSL/TLS certificate

As described above Netlify provides an easy way to setup SSL/TLS certificates for your custom domain with the help of [Lets Encrypt](https://letsencrypt.org/).

To do this first you must verify the DNS configuration. This can be done within the Domain Management section.

If you receive an error initially this may be because the hostname switch hasn't yet completed, which can take [up to 48 hours](https://www.smashingmagazine.com/2011/05/introduction-to-dns-explaining-the-dreaded-dns-delay/). However in my experience this is usually far less.

![DNS verify fail](/images/post/hugo-netlify/dns-verify-fail.png)

Once this has been verified you'll be prompted to either use Let's Encrypt or provide your own certificate

Unless you already have your own certificate ready, click on "Let's Encrypt Certificate".

A dialog will then appear with the option to provision a certificate.

![Lets Encrypt](/images/post/hugo-netlify/lets-encrypt.png)

Hit "Provision certificate", and that's it! Your application can now be securely served via HTTPS.


### Force HTTPS

Finally, there is the option beneath the SSL setup to force HTTPS so that any calls to HTTP will be redirected to your secure domain.


## Continuous Integration / Delivery

Now that Netlify is hosting the application we can also take advantage of the Continuous Integration and Continuous Delivery benefits provided.

Whenever a Git Pull Request is made, Netlify will run the build command against the branch to test everything is working as expected.

![Netlify CI](/images/post/hugo-netlify/netlify-ci.png)

Once the pull request has been merged into the deploy branch (in this example, `master`) then Netlify will build and deploy the changes to the production environment.

![Netlify CD](/images/post/hugo-netlify/netlify-cd.png)

------------

I hope this tutorial helps explain the ease at which we can set up a free CI/CD environment for our static applications using Netlify. If you have any questions, please comment below!


## Related Links

 - [Netlify](https://www.netlify.com/)
 - [Netlify CMS](https://www.netlifycms.org/)
 - [Hugo](https://gohugo.io/)