+++
tags = ["angularjs", "jest", "unit-test", "javascript", "code-coverage"]
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

Jest, a unit testing framework by Facebook, is commonly associated with the React framework. However Jest is not specifically for React, and can be used to test any javascript code you wish.

Recently I've started using Jest with AngularJs 1.6 and have put together a step-by-step guide on how to get setup.

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

## Create Angular Service

For the purpose of this example I've created a simple module with a service that does some basic calculations.

For now I've left out the logic within the functions to show that these tests fail.

### mathservice.js
```
angular.module('mathmodule', [])
  .factory('mathservice', function(){

    var addTwoNumbers = function(x, y){

    };

    return {
      addTwoNumbers
    };
  });
```

## Create Jest unit test file

Next we'll create the unit test file for testing our AngularJs service.

In this file we are:

 - Requiring the files needed for the test. We require AngularJs, Angular Mocks and the actual service we're testing, `mathservice.js`.
 - Describing our tests. In this instance we're describing the service and the function in the service which we are going to test.
 - Mocking the module and injecting the service.
 - Setting up several tests to ensure we receive the correct output from the service.


### mathservice.test.js
```
require('../node_modules/angular/angular.min.js');
require('../node_modules/angular-mocks/angular-mocks.js');
require('./mathservice.js');

describe('Math service - addTwoNumbers', function(){

  beforeEach(
    angular.mock.module('mathmodule')
  );

  var _mathservice;

  beforeEach(inject((mathservice) => {
    _mathservice = mathservice;
  }));

  it('1 + 1 should equal 2', function(){
    var actual = _mathservice.addTwoNumbers(1,1);
    expect(actual).toEqual(2);
  });

  it('10 + 5 should equal 15', function(){
    var actual = _mathservice.addTwoNumbers(10,5);
    expect(actual).toEqual(15);
  });

  it('50 + 80 should equal 130', function(){
    var actual = _mathservice.addTwoNumbers(50,80);
    expect(actual).toEqual(130);
  });

});
```

### Run the tests and see the failed output

Run `npm test` and you should see the following output:

![Jest Fail Output](/images/post/jest/jest-example-fail.png)

### Add logic to the service and re-run the tests

Now if we update our service with the correct logic and re-run the tests we should see them all pass:

![Jest Pass Output](/images/post/jest/jest-example-pass.png)
