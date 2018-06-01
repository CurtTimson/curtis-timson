+++
tags = ["angularjs", "array", "filter", "javascript", "json", "ng-repeat"]
featured = false
description = ""
date = "2015-06-24T00:00:00"
share = true
image = "images/post/angularjs-logo-1024x547.png"
title = "Filtering arrays in AngularJS"
slug = "filtering-arrays-in-angularjs"
author = "Curtis Timson"
draft = false
menu = ""
comments = true
id = 2
aliases = [
    "/angularjs/filtering-arrays-in-angularjs/"
]
+++
Previously <a href="https://curtistimson.co.uk/post/angularjs/setting-up-a-simple-angularjs-app-to-display-an-array/" title="Setting up a simple AngularJS app to display an array">I wrote an article</a> on how to display data from a simple javascript array using AngularJS.

Following on from that this next article will show you how to filter that same array by particular properties.

In the previous article I used the following HTML markup with AngularJS to loop through an array of users to display their Name and Location:

    <div ng-app="myApp" ng-controller="myController">
        <ul>
            <li ng-repeat="user in users">{{user.Name}} | {{user.Location}}</li>
        </ul>
    </div>

If we wish to filter this array by users only located in England then we can pass a filter to the `ng-repeat` property such as:

    ng-repeat="user in users | filter:{Location:'England'}"

<h3>Filter by multiple properties in AngularJS</h3>

If we wish to filter by multiple properties we can extend the filter object to include a second property:

~~~~
    ng-repeat="user in users | filter:{Location:'England', Gender:'M'}"
~~~~

This will filter the array by users with a Location of "England" and a Gender of "M".

<iframe width="100%" height="200" src="//jsfiddle.net/Curt/oLtchsb6/6/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

<h3>Filter by complex conditions</h3>

Sometimes you may wish to filter your array by more complicated conditions.

For example you might have an array of users, and each user has an array of posts they've made.

~~~~
    var data = [
        {
            Name: "John Smith",
            Gender: "M",
            Location: "Wales",
            Posts:[
                {
                    date: "Jan 2015",
                    message: "lorem ipsum"
                },
                {
                    date: "Mar 2015",
                    message: "lorem ipsum"
                }
            ]
        },
        .....
    ];
~~~~

If you need to filter by users who have made a post in June 2015 this could be abstracted into a <strong>Custom Filter</strong>.

    myApp.filter("UserFilter", function(){

        return function(users, postDate){

            var addUser;
            var selectedUsers = [];
            for(i=0;i<users.length;i++){

                addUser = false;

                for(j=0;j<users[i].Posts.length;j++){
                    if(users[i].Posts[j].date == postDate){
                        addUser = true;                    
                    }
                }

                if (addUser){
                    selectedUsers.push(users[i]);
                }
            }

            return selectedUsers;
        };

    });

Then this can be added to the `ng-repeat` statement:

    <li ng-repeat="user in users | UserFilter: 'June 2015'">

See Demo: <a href="https://jsfiddle.net/py9g1L1k/1/" target="_blank">https://jsfiddle.net/py9g1L1k/1/</a>

<h3>Using multiple parameters with custom AngularJS filters</h3>

You might wish to also filter by the user's location. In which case a second parameter can be passed to the `ng-repeat` attribute using a colon (`:`):

    <li ng-repeat="user in users | UserFilter: 'June 2015':'England'">

Then the custom filter can be changed to accept a 3rd parameter and include additional logic to filter by the location:

    myApp.filter("UserFilter", function(){

        return function(users, postDate, location){

            var addUser;
            var selectedUsers = [];
            for(i=0;i<users.length;i++){

                addUser = false;

                if (users[i].Location == location){

                   for(j=0;j<users[i].Posts.length;j++){
                       if(users[i].Posts[j].date == postDate){
                           addUser = true;                    
                       }
                   }

                   if (addUser){
                       selectedUsers.push(users[i]);
                   }

                }
            }

            return selectedUsers;
        };

    });

<iframe width="100%" height="300" src="//jsfiddle.net/py9g1L1k/2/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
