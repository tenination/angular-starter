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
	};
	this.anycomments = function(id) {
		console.log('ID PASSED IN IS', id);
		if (this.comments[`${id}`]) {
			console.log('EXISTS');
			console.log(this.comments[`${id}`]);
			return this.comments[`${id}`];
		}
	};
  itemsService.getAll((data) => {
    this.items = data;
    this.keys = Object.keys(data.near_earth_objects);
    this.sample = '2016-03-11';
    

  }, this.inputDateValue);

  itemsService.getComments((data) => {
  	console.log('COMMENTS ARRAY IS', data);
  	var commentsArray = data;
  	var commStorage = {};
  	for (var i = 0; i < commentsArray.length; i++) {
  		if (!commStorage[`${commentsArray[i].quantity}`]) {
  			commStorage[`${commentsArray[i].quantity}`] = [];
  		}
  		commStorage[`${commentsArray[i].quantity}`].push(commentsArray[i].description);
  	}

  	this.comments = commStorage;
    console.log('COMMENTS OBJECT IS', this.comments);

  });
})
.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});