+++
tags = ["angularjs", "jest", "unit-testing", "javascript", "code-coverage", "npm"]
featured = false
description = "AngularJs with Jest unit testing"
date = "2017-11-05T00:00:00"
share = true
image = "images/post/angularjs-logo-1024x547.png"
title = "AngularJs with Jest Unit Testing"
slug = "angularjs-jest-unit-testing"
author = "Curtis Timson"
draft = true
menu = ""
comments = true
+++

[Jest](https://facebook.github.io/jest/), a unit testing framework by Facebook, is commonly associated with the React JS library. However Jest is not specifically for React, and can be used to test any javascript code you wish.

Recently I've been using Jest with AngularJs 1.6 and have put together the following step-by-step guide on how to get setup.

This guide includes:

 - Installing Angular Mocks and Jest CLI
 - Creating an AngularJs Service
 - Create Jest unit test file
 - Running Jest tests with failed example
 - Correcting service and running successful Jest tests
 - TL;DR - Full Working Example on GitHub

## Install Angular Mocks and Jest CLI

To use Jest with AngularJs you will require the Angular Mocks and Jest CLI packages, which can be installed using npm:

```
npm i angular-mocks --save-dev
npm i jest-cli --save-dev
```

In your `package.json` file the `test` script can then be set to `jest`:

```
"scripts": {
  "test": "jest"
},
```

## Create AngularJs Service

For the purpose of this example I've created a simple module with a service that does some basic calculations.

For now I've left out the logic within the functions to show that these tests fail.

<script src="https://gist.github.com/curttimson/570f07e81d8e87e191315418f4aaab27.js"></script>

## Create Jest unit test file

Next we'll create the unit test file for testing our AngularJs service.

In this file we:

 - Require the files needed for the test. This includes the AngularJs framework, Angular Mocks and the actual service we're testing, `mathservice.js`.

```
require('../node_modules/angular/angular.min.js');
require('../node_modules/angular-mocks/angular-mocks.js');
require('./mathservice.js');
```

 - Create a `describe` function which will group our tests together in the same block. In this instance the block is for testing the `addTwoNumbers` function specifically.

```
describe('Math service - addTwoNumbers', function(){
```

 - Mock the AngularJs module and inject the service. This will load the module and service so that we are able to reference the service to call the function.

```
beforeEach(
  angular.mock.module('mathmodule')
);

var _mathservice;

beforeEach(inject((mathservice) => {
  _mathservice = mathservice;
}));
```

 - Set up several tests to ensure we receive the expected output from the function. Individual tests are set up by calling the `it` function. Each `it` function then calls the `addTwoNumbers` function and compares the actual result with the expected result by calling `expect`.

```
it('1 + 1 should equal 2', function(){
  var actual = _mathservice.addTwoNumbers(1,1);
  expect(actual).toEqual(2);
});
```

<script src="https://gist.github.com/curttimson/924072c168afe2754738ef3f86b39a3e.js"></script>

## Run the tests and see the failed output

Run `npm test` and you should see the following output:

![Jest Fail Output](/images/post/jest/jest-example-fail.png)

## Add logic to the service and re-run the tests

Now if we update our service with the correct logic and re-run the tests we should see them all pass:

<script src="https://gist.github.com/curttimson/2ed147ad4d98c9bcb9e694d8861f65bd.js"></script>

![Jest Pass Output](/images/post/jest/jest-example-pass.png)

## Full Working example

A full working example of this is available on GitHub:

https://github.com/curttimson/angularjs-jest-example
