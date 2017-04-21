+++
tags = ["best-practice", "encapsulation", "javascript", "patterns", "revealing-module", "singleton"]
featured = true
description = ""
date = "2014-10-09T00:00:00"
share = true
image = "images/post/module-pattern.png"
title = "Mixing Revealing Module and Singleton Javascript Patterns"
slug = "mixing-revealing-module-and-singleton-javascript-patterns"
author = "Curtis Timson"
draft = false
menu = ""
comments = true
aliases = [
    "/js/mixing-revealing-module-and-singleton-javascript-patterns/"
]
+++

Until recently I've been using the Singleton pattern for my javascript objects.

This works well as my functions are namespaced and therefore the risk of clashing object names across Javascript files is reduced.

For this example I've created a singleton pattern javascript object which will show an alert window displaying "hello world".

    var MyFunction = {
       Init: function(){
          this.Config.foo = "hello world";
       },
       Config:{
          foo:null
       },
       ShowAlert:function(){
          alert(this.Config.foo);
       }
    }

    MyFunction.Init();
    MyFunction.ShowAlert();

[View Demo][1]

With this object it's possible for me to change the value of `foo` so that the alert displays a different message.

    MyFunction.Init();
    MyFunction.Config.foo = "lorem ipsum";
    MyFunction.ShowAlert();

[View Demo][2]

However, what if I didn't want it to be possible to change `foo` outside of the `MyFunction` object itself? This is where the "Revealing Module" javascript pattern comes in use.

Using the Revealing Module pattern we can encapsulate "private" functions and expose only the functions that we wish to.

    var MyFunction = function(){

        var foo = null;

        function Init(){
          foo = "hello world";   
        }

        function ShowAlert(){
         alert(foo);   
        }

        return {
            Init: Init,
            ShowAlert: ShowAlert
        };
    }();

    MyFunction.Init();
    MyFunction.ShowAlert();

[View Demo][3]

With this pattern only `Init` and `ShowAlert` are exposed outside of the object. Outside the scope of `MyFunction` its not possible to change `foo`.

This works great, but I believe it loses the organisation and scale-ability of the singleton pattern.

Therefore we can change the functions in `MyFunction` to use a Singleton pattern and expose functions from with this inner object using the Revealing Module pattern:

    var MyFunction = function(){

        var _ = {
           Init: function(){
              _.Config.foo = "hello world";
           },
           Config:{
              foo:null
           },
           ShowAlert:function(){
              alert(_.Config.foo);
           }
        }

        return {
            Init: _.Init,
            ShowAlert: _.ShowAlert
        };
    }();

    MyFunction.Init();
    MyFunction.ShowAlert();

[View Demo][4]

Another additional benefit of this mixed pattern is that we can have a complex singleton structure, which can expose particular functions with more "friendly" names.

Using our existing example, `ShowAlert` might be nested inside other objects:

    var MyFunction = {
       Init: function(){
          this.Config.foo = "hello world";
       },
       Config:{
          foo:null
       },
       UI:{
            Display:{
                ShowAlert:function(){
                    alert(MyFunction.Config.foo);
                }
            }
        }
    }

With the Singleton pattern we would have to call `MyFunction.UI.Display.ShowAlert`.

With the Module/Singleton pattern this can be exposed as just `ShowAlert` despite its more complex position in the object structure.

    var MyFunction = function(){

        var _ = {
           Init: function(){
              _.Config.foo = "hello world";
           },
           Config:{
              foo:null
           },
           UI:{
                Display:{
                    ShowAlert:function(){
                        alert(_.Config.foo);
                    },
                }
            }
        }

        return {
            Init: _.Init,
            ShowAlert: _.UI.Display.ShowAlert
        };
    }();

    MyFunction.Init();
    MyFunction.ShowAlert();

[View Demo][5]

I'm still reasonably new to adopting this Singleton/Module pattern mix-up, so if you have any suggestions or questions, all comments are welcome!


  [1]: http://jsfiddle.net/4ooz9okd/
  [2]: http://jsfiddle.net/4ooz9okd/1/
  [3]: http://jsfiddle.net/4ooz9okd/2/
  [4]: http://jsfiddle.net/4ooz9okd/3/
  [5]: http://jsfiddle.net/4ooz9okd/4/
