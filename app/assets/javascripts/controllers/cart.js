app.controller('CartCtrl', ['$resource', '$scope', 'Items', 'Cart', 'Orders', function($resource, $scope, Items, Cart, Orders) {
  $scope.cart = Cart;
  
  $scope.removeFromCart = function(item) {
    Cart.removeFromCart(item);
  };

  $scope.checkout = function(totalPrice, name, cartItems) {

    if (cartItems.length === 0) {
      alert("wuz u doin? u tryin to chexout but u aint bought notin!1!");
    } else {
      var order = {
        person: name,
        cost: totalPrice
      };

      var newOrder = new Orders(order);
      newOrder.$save(); //posts new order object

      cartItems.forEach(function(item) {
        Items.get({id: item.id}, function(sourceItem) {
          sourceItem.quantity = item.quantity;
          sourceItem.$update(); //update backend with new quantity after checkout
        });
      });

      Cart.resetCart();
      $scope.person.name = "";
    }
    
  };
}]);