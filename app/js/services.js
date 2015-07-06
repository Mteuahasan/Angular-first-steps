homework.service('userLocationService', function($q, $rootScope, parisApiFactory) {

  var that = this;

  that.init = function() {
    var data = null;
    var deferred = $q.defer()
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
          $rootScope.longitude = position.coords.longitude;
          $rootScope.latitude = position.coords.latitude;
          parisApiFactory.callApiEvents($rootScope.latitude, $rootScope.longitude).query().$promise.then(function(data) {
            deferred.resolve(data.data);
          });

        });
    }

    return deferred.promise;
  };

});