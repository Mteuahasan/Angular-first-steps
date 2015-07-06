'use strict';

var homework = angular.module('homework', ['ngRoute', 'ngResource', 'ngMap', 'ngSanitize', 'ngStorage'])

.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/home', {
    templateUrl: 'partials/home.html',
    controller: 'dataParisCtrl'
  })
  .when('/event/:id', {
    templateUrl: 'partials/event.html',
    controller: 'detailsEventCtrl'
  })
  .when('/favorites', {
    templateUrl: 'partials/fav.html',
    controller: 'favoritesCtrl'
  })
  .otherwise({
    redirectTo: '/home'
  });

});

var Tools = Tools || {};

 Tools.helpers = {
   htmlDecode : function(input){
     var e = document.createElement('div');
     e.innerHTML = input;
     if(null == e.childNodes[0].nodeValue){
      return e.childNodes.length === 0 ? "" : e.childNodes[0].innerHTML;
     }
     else if(null !== e.childNodes[0].nodeValue || typeof e.childNodes[0].nodeValue !== 'undefined') {
      return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    } else {
      return e.childNodes.length === 0 ? "" : e.childNodes[0].innerHTML;
    }
   }
 };
