// Object literal extensions

// 1
var price = 12;
var quantity = 3;
var product = {
	price,
	quantity,
	calculateValue() {
		return this.price * this.quantity;
	}
}

// 2 'this' in methods set as object literal extensions behave like arrow function 'this'
var product2 = {
	price: 8,
	quantity: 1,
	calculateValue() {
		return this.price * this.quantity;
	}
}

// 3 variable/expression as property/method name
var field = "dynamic value";
var product3 = {
	[field]: price,
	[field + " 001"]: price,
	[field + " 002"]() {
		return price;
	}
}

module.exports = {
	"1.1": product, // {price:12, quantity:3}
	"1.2": product.calculateValue(), // 36
	"2": product2.calculateValue(), // 8?????
	"3.1": product3,
	"3.2": product3['dynamic value 002']() //12
}	


// Does not work as expected (tested in Chrome)
var price = 5.99, quantity = 10;
var productView = { 
	price:7.99, 
	quantity:1, 
	calculateValue() { 
		return this.price * this.quantity;
	}
};
productView.calculateValue() // 7.99, not 59.99 as expected