app.factory('ItemsList', ['Items', function(Items) {
  return {
    items: Items.query()
  };
}]);