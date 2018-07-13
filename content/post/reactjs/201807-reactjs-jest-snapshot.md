+++
tags = ["reactjs", "jest", "snapshot", "unit-testing"]
featured = false
description = "How to use Jest Snapshot unit testing with component mocking in ReactJs"
date = "2018-07-13T00:00:00"
share = true
#image = "images/post/.png"
title = "ReactJs Snapshot unit testing and mocking components"
slug = "reactjs-jest-snapshot-mocking"
author = "Curtis Timson"
draft = true
menu = ""
comments = true
postid = 35
+++
## What are Jest Snapshots?
[Jest](https://jestjs.io/) is a javascript unit testing framework developed by Facebook. This is primarily used with React, however can also be used with other frameworks, such as [AngularJs](/post/angularjs/angularjs-jest-unit-testing/).

Snapshots are a feature of Jest which will record an expected output state of a component.

>Capture snapshots of React trees or other serializable values to simplify testing and to analyze how state changes over time.

## Snapshot ReactJs Components

Take for an example the following ReactJs `List.js` Component:

