'use strict';

homework.controller('dataParisCtrl', function($scope, userLocationService) {

  userLocationService.init().then(function(data) {
    $scope.events = data;
  }, function(data){
  });
});

homework.controller('detailsEventCtrl', function($scope, $routeParams, $sce, parisApiFactory, $localStorage) {
  var title = '';

  parisApiFactory.callApiDetailsEvent($routeParams.id).query().$promise.then(function(data){
    var description = data.data[0].description;
    var title = data.data[0].nom;
    var lieu = data.data[0].lieu;
    var adresse = data.data[0].adresse;
    var id = data.data[0].idactivites;
    function exists() {
      for(var i = 0; i < $localStorage.eventFav.length; i++){
        if($localStorage.eventFav[i].id === id)
          return true;
      }
      return false;
    }
    if(!exists()) {
      $scope.canFav = false;
    } else {
      $scope.canFav = true;
    }

    $scope.eventLat = data.data[0].lat;
    $scope.eventLon = data.data[0].lon;
    $scope.description = function() {
      return $sce.trustAsHtml(Tools.helpers.htmlDecode(description));
    };
    $scope.title = function(){
      return $sce.trustAsHtml(Tools.helpers.htmlDecode(title));
    }
    $scope.lieu = function(){
      return $sce.trustAsHtml(Tools.helpers.htmlDecode(lieu));
    }
    $scope.adresse = function(){
      return $sce.trustAsHtml(Tools.helpers.htmlDecode(adresse));
    }
    $scope.name = title;
    $localStorage.$default({
        eventFav: []
    });

    $scope.storeFav = function(){
      if(!exists()) {
        $localStorage.eventFav.push({'nom' : title, 'id': id });
        $scope.canFav = false;
      } else {
        for(var i = 0; i < $localStorage.eventFav.length; i++){
          if($localStorage.eventFav[i].id === id){
            var deleteIndex = i;
          }
        }
        $localStorage.eventFav.splice(deleteIndex, 1);
        $scope.canFav = true;
      }
    }

  }, function(data){

  })
});

homework.controller('favoritesCtrl', function($scope, $localStorage) {
  $scope.events = $localStorage.eventFav;
});
