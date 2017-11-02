angular.module('app')
.component('listItem', {
  bindings: {
    item: '<',
    dateinput: '<',
    sample: '<', 
    comments: '<',
    anycomments: '<'

  },
  controller: function() {},
  templateUrl: '/templates/list-item.html'
});