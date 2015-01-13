var app = angular.module('AmazonApp', ['ngResource']);

app.controller('MainCtrl', ['$resource', '$scope', function($resource, $scope) {
  var Items = $resource('/items/:id', {id: '@id'});
  $scope.items = Items.query();
  $scope.cart = {
    items: [],
    total: 0
  };

  $scope.addToCart = function(item) {
    if (item.quantity === 0) {
      item.quantity = "WE AIN'T GO NO MO GTFO";
    } else if (typeof item.quantity !== "string") {
      item.quantity--;
      $scope.cart.total += item.price;
      if ($scope.cart.items.indexOf(item) > -1) {
        item.amountInCart++;
      } else {
        $scope.cart.items.push(item);
        item.amountInCart = 1;
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
}]);