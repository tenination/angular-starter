angular.module('app')
.service('itemsService', function($http) {
  this.getAll = function(callback) {
    $http.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-11-01&end_date=2017-11-01&api_key=t5Rklsmd6ulGUv9qOX7RDXvGYpH3an33kdKV1nIB')
    .then(function({data}) {
      if(callback) {
        callback(data);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  };
});


