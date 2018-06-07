angular.module('ct', ['lastfm-nowplaying'])
  .controller('mainCtrl', ['$scope', function($scope){

      $scope.lastFmConfig = {
        apiKey: 'f3c3bb60dc23d1431a15c557e1db8de6',
        user: 'curty_',
        containerClass: 'lastfm-content'
      };

  }]);

(function(window){

  if (window && ga){

    window.onpopstate = function(event) {
      ga('send', 'pageview', document.location.pathname);
    };

  }
  
})(window);
