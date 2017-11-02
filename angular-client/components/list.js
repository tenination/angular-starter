angular.module('app')
.component('list', {
  bindings: {
    items: '<',
    dateinput: '<',
    sample: '<', 
    keys: '<'

  },
  controller: function() {
  	console.log('THIS IN list', this);
  },
  templateUrl: '/templates/list.html'
});