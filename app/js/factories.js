homework.factory('parisApiFactory', function($resource, $rootScope){

  return {
    callApiEvents : function(lat, long){
      return $resource('https://api.paris.fr/api/data/1.4/QueFaire/get_geo_activities/?token=1031e12a318776149d3a48cd51915b616f863bf2b2956c897bd562391e0d0f2b&cid=0&tag=0&created=0&start=0&end=0&lat='+lat+'&lon='+long+'&radius=100&offset=0&limit=100', {}, {query: {method:'GET',isArray:false, cache:true}});
    },
    callApiDetailsEvent : function(id){
      return $resource('https://api.paris.fr/api/data/1.0/QueFaire/get_activity/?token=1031e12a318776149d3a48cd51915b616f863bf2b2956c897bd562391e0d0f2b&id='+id, {}, {query: {method:'GET',isArray:false, cache:true}});
    },
  }

});