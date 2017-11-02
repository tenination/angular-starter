angular.module('app')
.component('list', {
  bindings: {
    items: '<',
    dateinput: '<',
    sample: '<', 
    keys: '<'

  },
  controller: function() {
  },
  templateUrl: '/templates/list.html'
});