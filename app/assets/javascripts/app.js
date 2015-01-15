var app = angular.module('AmazonApp', ['ngResource', 'ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "/assets/templates/items.html",
      controller: "ItemsCtrl"
    })
    .when("/cart", {
      templateUrl: "/templates/cart.html",
      controller: "CartCtrl"
    })
    .otherwise({
      redirectTo: "/asdasd" //fail on purpose
    });
});