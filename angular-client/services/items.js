angular.module('app')
.service('itemsService', function($http) {
  this.getAll = function(callback, input) {
    return $http.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${input}&end_date=${input}&api_key=t5Rklsmd6ulGUv9qOX7RDXvGYpH3an33kdKV1nIB`)
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

