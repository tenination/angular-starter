angular.module('app')
.controller('AppCtrl', function(itemsService, $scope) {
	this.inputDateValue = '2015-11-01';
  itemsService.getAll((data) => {
    this.items = data;
    this.keys = Object.keys(data.near_earth_objects);
    this.sample = '2016-03-11';
    

  }, this.inputDateValue);
})
.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});