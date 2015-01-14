app.controller('ItemsCtrl', ['$resource', '$scope', 'Items', function($resource, $scope, Items) {
  $scope.items = Items.query();
}]);