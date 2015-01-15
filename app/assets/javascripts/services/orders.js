app.factory('Orders', ['$resource', function($resource) {
  return $resource(
    "/orders/:id",
    {update: {method: "PATCH"}}
  );
}]);