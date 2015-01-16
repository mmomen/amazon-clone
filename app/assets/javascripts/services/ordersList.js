app.factory('OrdersList', ['Orders', function(Orders) {
  return {
    orders: Orders.query()
  };
}]);