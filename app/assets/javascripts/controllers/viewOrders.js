app.controller('ViewOrdersCtrl', ['$resource', '$scope', 'OrdersList', 'Cart', function($resource, $scope, OrdersList, Cart) {
  $scope.orders = OrdersList.orders;
}]);