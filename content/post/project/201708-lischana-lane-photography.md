+++
tags = ["project", "hugo", "lastfm", "twitter", "nodejs", "heroku"]
featured = false
description = "Read about how a recent Hugo project was built and what components were used"
date = "2017-08-23T00:00:00"
share = true
title = "Lischana Lane Photography Portfolio"
slug = "lischana-lane-photography"
author = "Curtis Timson"
comments = true
draft = true
+++
[screenshot of site here]

Recently I deployed a new version of a photography portfolio, [lischana-lane.co.uk](http://lischana-lane.co.uk), and would like to share the various tools/components I have used to build this.

## Hugo

[hugo logo]

Similar to this blog site, lischana-lane.co.uk is built with Hugo, the static site generator. You can read more about Hugo in a previous blog post:

https://curtistimson.co.uk/post/cms/moving-wordpress-hugo/

### Hugo Theme

The base theme for the Hugo application is the [Hugo Creative Theme](https://github.com/digitalcraftsman/hugo-creative-theme). However this theme was customised to include some additional features, as listed below.

## Unitegallery with Flickr / Youtube

[screenshot of unitegallery page]

The original Hugo Creative Theme had support for projects, however these followed a more blog post style format. Therefore this section was customised to provide support for Flickr albums and Youtube videos.

The front-matter in the project markdown files was customised to include a new `FlickrId` property which correlates with a Flickr Album for fetching the correct images for each project. These are then rendered to the page.

## Twitter

[screenshot of tweet]

Another customisation made to the theme was to add the latest tweet from the Portfolio owner beneath the projects. Previously this was a static text area driven from the `config.toml` file.

To do this a new NodeJs application was created and deployed to Heroku in order to return the latest tweet in JSON format:

https://lischana-lane-tweet.herokuapp.com/latest-tweet

This NodeJs application is available as a public GitHub repository, [nodejs-twitter](https://github.com/curttimson/nodejs-twitter) if you would like to make use of it yourself.

## Lastfm nowplaying

[screenshot lastfm-nowplaying]

The final customisation made to the theme was to include the portfolio owner's latest played track recorded on Last.fm.

This was done by using the lastfm-nowplaying AngularJs module which is currently used on this blog site.

Like with nodejs-twitter, this is also available as a public repository:

https://github.com/curttimson/lastfm-nowplaying

It's also available as a node package:

```
npm install --save lastfm-nowplaying
```

## GitHub

If you're interested in learning more about this application you can view the source code on GitHub. Feel free to raise any issues you may find!

https://github.com/curttimson/lischana-lane
