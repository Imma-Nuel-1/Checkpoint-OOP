// index.js

// **Product Class**
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// **ShoppingCartItem Class**
class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  calculateTotalPrice() {
    return this.product.price * this.quantity;
  }
}

// **ShoppingCart Class**
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  getTotalItems() {
    return this.items.length;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  displayCartItems() {
    const cartElement = document.getElementById("cart");
    cartElement.innerHTML = "";
    this.items.forEach((item) => {
      const cartItemElement = document.createElement("div");
      cartItemElement.textContent = `Product: ${item.product.name}, Quantity: ${
        item.quantity
      }, Total Price: ${item.calculateTotalPrice()}`;
      cartElement.appendChild(cartItemElement);
    });
  }
}

// **Testing the Objects**
// Create products
const product1 = new Product(1, "Apple", 10.99);
const product2 = new Product(2, "Banana", 0.99);
const product3 = new Product(3, "Orange", 1.99);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(new ShoppingCartItem(product1, 2));
cart.addItem(new ShoppingCartItem(product2, 3));
cart.addItem(new ShoppingCartItem(product3, 1));

// Display the cart
cart.displayCartItems();

// Remove an item from the cart
cart.removeItem(cart.items[1]);

// Display the cart again
cart.displayCartItems();
