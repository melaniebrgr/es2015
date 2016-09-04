// arrow functions

// 1 this input results in that output
var getPrice1 = () => 5.99;

// 2 no parens for single param
var getPrice2 = count => count * 2;

// 3 parens for multiple params
var getPrice3 = (count, tax) => count * tax;

// 4 multi-line
var getPrice4 = (count, tax) => {
	var price = count * 2;
	price = price * (1 + tax);
	return price;
}

// 5 lexical this
document.addEventListener('click', function() { console.log('normal function', this); }); //#document
document.addEventListener('click', () => console.log('arrow function', this)); //Window

var baz = () => this;
var foo = {
	bar: () => this
};
console.log(baz()); // Window (if executed from console: CommonJS wraps in function)
console.log(foo.bar()); //Window (if executed from console: CommonJS wraps in function)

var invoice = {
	number: 123,
	es5func: function() { return this }, // invoice
	es6func: () => this, // Window (if executed from console: CommonJS wraps in function)
	mixed: function() { return () => this } // invoice
}
var invoice2 = { number: 456 };
invoice.es6func.bind(invoice2)(); // Window, you cannot bind an arrow function


module.exports = {
	"1": typeof getPrice1,
	"2": getPrice2(3),
	"3": getPrice3(100, 0.1),
	"4": getPrice4(100, 0.1)
	"5.1": baz(), // CommonJS wraps in function so 'this' returns object which may be unexpected
	"5.2": foo.bar() // CommonJS wraps in function so 'this' returns object which may be unexpected
};