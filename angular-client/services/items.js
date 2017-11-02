angular.module('app')
.service('itemsService', function($http) {
  this.getAll = function(callback, input) {
    var now = new Date();
    console.log('WE ARE IN ITEMS.JS', input);
    var dateQuery = `${now.getFullYear()}` + '-'+ `${now.getMonth()+1}`.padStart(2, '0') + '-' +`${now.getDate()}`.padStart(2, '0');
    console.log(dateQuery);
    dateQuery = input;
    return $http.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${dateQuery}&end_date=${dateQuery}&api_key=t5Rklsmd6ulGUv9qOX7RDXvGYpH3an33kdKV1nIB`)
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

