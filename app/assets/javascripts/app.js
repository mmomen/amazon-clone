var app = angular.module('AmazonApp', []);

app.controller('MainCtrl', ['$scope', function($scope) {
  $scope.cart = [];
  $scope.items = [
    {
      id: 1,
      name: "Angular Book",
      description: "Favorite book about Angular",
      price: 10,
      quantity: 3,
      url: "https://www.ng-book.com/images/flatbook-ngbook-small.png"
    },
    {
      id: 2,
      name: "Leather Jacket",
      description: "Genuine leather. Not fake.",
      price: 100,
      quantity: 100,
      url: "http://images.leatherup.com/images/product/large/XS-151-300-1.jpg"
    }
  ];

  $scope.addToCart = function(item) {
    if (item.quantity === 0) {
      item.quantity = "WE AIN'T GO NO MO GTFO";
    } else if (typeof item.quantity !== "string") {
      item.quantity--;
      $scope.cart.push(item.id);
    }
    
  };
}]);