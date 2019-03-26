(function(window){

  if (window && ga){

    window.onpopstate = function(event) {
      ga('send', 'pageview', document.location.pathname);
    };

  }
  
})(window);
