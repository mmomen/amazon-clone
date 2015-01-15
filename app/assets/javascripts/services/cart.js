app.factory('Cart', ['$resource', function($resource) {
  var addToCart = function(item) {
    item.quantity--; //reduce quantity
    if (item.quantity === 0) {
      item.isDisabled = true; //disabled button if no items are left
    }

    var index = this.items.indexOf(item); //grab index in cart
    if (index > -1) {
      this.items[index].cartQn++; //if item exists in cart, increment quantity of the item
    } else {
      item.cartQn = 1; //set quantity of this item in the cart to 1, this will create this property
      this.items.push(item); //push the item to the cart
    }

    this.totalItems++; //add to cart's total items
    this.totalPrice += item.price; //add to cart's total cost
  };

  var removeFromCart = function(item) {
    item.isDisabled = false; //re-enable the add to cart button  
    item.quantity++; //add back to item's quantity
    item.cartQn--; //drop item's cartQn
    this.totalItems--; //drop total items in cart
    this.totalPrice -= item.price; //drop total price by price of item
    if (item.cartQn === 0) {
      var index = this.items.indexOf(item);
      this.items.splice(index, 1); //remove item from cart if cartQn is 0
    }
  };

  var resetCart = function() {
    this.items = [];
    this.totalPrice = 0;
    this.totalItems = 0;
  };

  return {
    items: [],
    totalPrice: 0,
    totalItems: 0,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    resetCart: resetCart
  };
}]);