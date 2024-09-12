# Shopping Cart using Object-Oriented JavaScript (OOJ)

This implementation demonstrates a shopping cart system using Object-Oriented JavaScript (OOJ) approach. The system consists of three classes: `Product`, `ShoppingCartItem`, and `ShoppingCart`.

## Classes

### Product

* Represents a product with properties: `id`, `name`, and `price`

### ShoppingCartItem

* Represents a shopping cart item with properties: `product` and `quantity`
* Has a method `calculateTotalPrice()` to calculate the total price of the item

### ShoppingCart

* Represents a shopping cart with an array of `ShoppingCartItem` instances
* Has methods:
	+ `getTotalItems()`: returns the total number of items in the cart
	+ `addItem(item)`: adds an item to the cart
	+ `removeItem(item)`: removes an item from the cart
	+ `displayCartItems()`: displays the cart items with their total prices

