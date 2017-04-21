+++
tags = ["angularjs", "array", "controller", "javascript", "spa"]
featured = false
description = ""
date = "2015-06-02T00:00:00"
share = true
image = "images/post/angularjs-logo-1024x547.png"
title = "Setting up a simple AngularJS app to display an array"
slug = "setting-up-a-simple-angularjs-app-to-display-an-array"
author = "Curtis Timson"
draft = false
menu = ""
comments = true
+++
<a href="https://angularjs.org/">AngularJS</a> is a powerful Single-Page-Application javascript framework created by Google.

The following is a simple tutorial on how to set up an AngularJS application to display a javascript array of user information.

First of all we'll start by creating our javascript array. The following is an array of user information containing details of Name, Gender and Location.

    var userData= [
        {
            Name: "John Smith",
            Gender: "M",
            Location: "Wales"
        },
        {
            Name: "Sally Smith",
            Gender: "F",
            Location: "USA"
        },
        {
            Name: "Curtis Timson",
            Gender: "M",
            Location: "England"
        },
        {
            Name: "Sam Wallace",
            Gender: "M",
            Location: "England"
        },
        {
            Name: "Caroline James",
            Gender: "F",
            Location: "Scotland"
        }
    ];

Next we'll set up the HTML application container required:

    <div ng-app="myApp"></div>

We can then initialise this as an Angular application by calling `angular.module()`. This will become the scope of our application. Therefore our `myApp` will not be able to influence HTML outside of this container.

    var myApp = angular.module("myApp", []);

Now that the application has a variable, `myApp`, we can add a controller to it and create a new variable containing the user data:

    myApp.controller("myController", function($scope){
       $scope.users = userData;
    });

Therefore `$scope.users` now references our original array of user data.

Going back to our HTML, we can now back a reference to the controller:

   <div ng-app="myApp" ng-controller="myController"></div>

Within this `div` element we can now access the `users` variable. Therefore we can create an unordered list element, and by using `ng-repeat` create a loop of list items. AngularJS uses `{{ }}` to be able to access properties of the current object in the loop.

    <div ng-app="myApp" ng-controller="myController">
        <ul>
            <li ng-repeat="user in users">{{user.Name}} | {{user.Location}}</li>
        </ul>
    </div>

Here we are looping through all `user in users` to display multiple `li` elements and display the Name and Location of each user.

And that's it!

Below is a working example of the above tutorial I've put together on jsFiddle. Feel free to edit it and play around.

<iframe width="100%" height="300" src="//jsfiddle.net/Curt/oLtchsb6/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
