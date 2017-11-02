angular.module('app')
.controller('AppCtrl', function(itemsService, $scope) {
	var now = new Date();
	var dateQuery = `${now.getFullYear()}` + '-'+ `${now.getMonth()+1}`.padStart(2, '0') + '-' +`${now.getDate()}`.padStart(2, '0');
	this.inputDateValue = dateQuery;
	this.handleChange = function() {
		if (this.inputDateValue.length === 10) {
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