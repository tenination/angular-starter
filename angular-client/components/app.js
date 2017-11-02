angular.module('app')
.controller('AppCtrl', function(itemsService, $scope) {
	this.inputDateValue = '2015-11-01';
  itemsService.getAll((data) => {
    this.items = data;
    

  }, this.inputDateValue);
})
.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});