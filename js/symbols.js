// 1 symbol basics, nb. does not use 'new' keyword
let eventSymbol = Symbol.for('event');
let eventSymbol2 = Symbol('event');
let eventSymbol3 = Symbol.for('event');

// 2 as object properties
let article = {
	title: "My Life",
	[Symbol.for('article')]: "My Article"
}

module.exports = {
	"1.1": typeof eventSymbol,
	"1.2": eventSymbol.toString(), //"Symbol(resize event)""
	"1.3": eventSymbol === eventSymbol2,
	"1.4": eventSymbol === eventSymbol3,
	"1.5": Symbol.keyFor(eventSymbol3),
	"2.1": article[Symbol.for('article')],
	"2.2": Object.getOwnPropertyNames(article),
	"2.3": Object.getOwnPropertySymbols(article)
}