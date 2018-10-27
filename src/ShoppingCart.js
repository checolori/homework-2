class ShoppingCart {

    constructor() {
      this.cart = [];
    }
  
    getItems() {
      return this.cart;
    }
  
    addItem(itemName, quantity, price) {
      this.cart.push({
        name: itemName,
        quantity: quantity,
        pricePerUnit: price
      });
    }
  
    clear() {
      this.cart = [];
    }
  
    total() {
      return this.cart.reduce(
        (accumulator, itemToProcess) =>
          accumulator + itemToProcess.quantity * itemToProcess.pricePerUnit, 0
      );
    }
  }
  
  module.exports = ShoppingCart;