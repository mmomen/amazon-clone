var app = angular.module('AmazonApp', ['ngResource']);

app.controller('MainCtrl', ['$resource', '$scope', function($resource, $scope) {
  var Items = $resource('/items/:id', {id: '@id'});
  $scope.items = Items.query();
  $scope.cart = [];

  $scope.addToCart = function(item) {
    if (item.quantity === 0) {
      item.quantity = "WE AIN'T GO NO MO GTFO";
      // var idx = $scope.items.indexOf(item);
      // $scope.items[idx].$delete();
    } else if (typeof item.quantity !== "string") {
      item.quantity--;
      $scope.cart.push(item.id);
    }
  };
}]);