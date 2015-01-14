app.controller('ItemsCtrl', ['$resource', '$scope', 'Items', 'Cart', function($resource, $scope, Items, Cart) {
  $scope.items = Items.query();
  $scope.addToCart = function(item) {
    Cart.addToCart(item);
  };
}]);