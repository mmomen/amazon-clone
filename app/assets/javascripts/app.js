var app = angular.module('AmazonApp', ['ngResource']);

app.controller('MainCtrl', ['$resource', '$scope', function($resource, $scope) {
  var Items = $resource('/items/:id', {id: '@id'});
  $scope.items = Items.query();
  $scope.cart = [];
  $scope.cartTotal = 0;

  $scope.addToCart = function(item) {
    if (item.quantity === 0) {
      item.quantity = "WE AIN'T GO NO MO GTFO";
    } else if (typeof item.quantity !== "string") {
      item.quantity--;
      $scope.cartTotal += item.price;
      if ($scope.cart.indexOf(item) > -1) {
        console.log('f');
        item.amountInCart++;
      } else {
        $scope.cart.push(item);
        item.amountInCart = 1;
      }
    }
  };
}]);