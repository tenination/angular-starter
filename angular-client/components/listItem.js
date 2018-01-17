angular.module('app')
.component('listItem', {
  bindings: {
    item: '<',
    dateinput: '<',
    sample: '<', 
  },
  controller: function() {},
  templateUrl: '/templates/list-item.html'
});