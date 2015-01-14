app.controller('CartCtrl', ['$resource', '$scope', 'Items', 'Cart', function($resource, $scope, Items, Cart) {
  $scope.cart = Cart;
  $scope.removeFromCart = function(item) {
    Cart.removeFromCart(item);
  };
}]);