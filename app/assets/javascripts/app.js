var app = angular.module('AmazonApp', ['ngResource']);

app.controller('MainCtrl', ['$resource', '$scope', function($resource, $scope) {
  var Items = $resource(
    '/items/:id',
    {id: '@id'},
    {update: {method: 'PATCH'}}
  );
  var Orders = $resource('/orders');
  $scope.items = Items.query();
  $scope.cart = {
    items: [],
    total: 0,
    totalItems: function() {
      var x = 0;
      $scope.items.forEach(function(e){
        if (e.amountInCart > 0) {
          x += e.amountInCart;
        }
      });
      return x;
    }
  };

  $scope.resetCart = function() {
    $scope.cart.items = [];
    $scope.cart.total = 0;
    $scope.items.forEach(function(e) {
      e.amountInCart = 0;
    });
  };

  $scope.addToCart = function(item) {
    if (item.quantity === 0) {
      item.quantity = "WE AIN'T GOT NO MO GTFO";
    } else if (typeof item.quantity !== "string") {
      item.quantity--;
      $scope.cart.total += item.price;
      if ($scope.cart.items.indexOf(item) > -1) {
        // item.amountInCart++;
        $scope.cart.items[$scope.cart.items.indexOf(item)].amountInCart++; //this is absurd
        // console.log($scope.cart.items[$scope.cart.items.indexOf(item)]);
      } else {
        item.amountInCart = 1;
        $scope.cart.items.push(item); //amountincart is not updated correctly (clone instead of link)
      }
    }
  };

  $scope.removeFromCart = function(item) {
    item.quantity++;
    item.amountInCart--;
    $scope.cart.total -= item.price;
    if (item.amountInCart === 0) {
       var idx = $scope.cart.items.indexOf(item);
       if (idx > -1) {
        $scope.cart.items.splice(idx, 1);
       }
    }
  };

  $scope.checkout = function(cartTotal, name, itemsInCart) {
    // console.log(cartTotal, name, itemsInCart);
    var order = {
      person: name,
      cost: cartTotal
    };

    var newOrder = new Orders(order);
    newOrder.$save();

    itemsInCart.forEach(function(e) {
      var itemToModify = Items.get({id: e.id}, function(it) {
        it.quantity = e.quantity;
        it.$update();
      });
    });

    $scope.resetCart();

    $scope.name = "";

  };
}]);