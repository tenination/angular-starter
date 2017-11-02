angular.module('app')
.controller('AppCtrl', function(itemsService, $scope) {
	this.inputDateValue = '2013-09-22';
	this.handleChange = function() {
		console.log(this.inputDateValue);
		if (this.inputDateValue.length === 10) {
			console.log('length is 10');
			console.log('itemService being invoked');
			itemsService.getAll((data) => {
    		this.items = data;
    		this.keys = Object.keys(data.near_earth_objects);
    		this.sample = '2016-03-11';
  			}, this.inputDateValue);

		}
	}
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