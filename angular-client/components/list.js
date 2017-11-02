angular.module('app')
.component('list', {
  bindings: {
    items: '<',
    dateinput: '<',
    sample: '<', 
    keys: '<', 
    comments: '<',
    anycomments: '<'

  },
  controller: function() {
  },
  templateUrl: '/templates/list.html'
});