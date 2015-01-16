app.controller('ItemsCtrl', ['$resource', '$scope', 'ItemsList', 'Cart', function($resource, $scope, ItemsList, Cart) {
  $scope.items = ItemsList.items; //ItemsList grabs the items, querying the items here would cause the quantities to not be set correctly
  $scope.addToCart = function(item) {
    Cart.addToCart(item);
  };
}]);