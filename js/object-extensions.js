// object extensions

// 1 Object.setPrototypeOf()
let a = { x: 1 }, 
		b = { y: 2 };
Object.setPrototypeOf(a, b);

// 2 Object.assign()
let c = { c: 1 }, 
		d = { c: 2, d: 2 },
		target = {};
Object.defineProperty(c, "notEnumerable", {
	value: 10,
	enumerable: false
});
Object.assign(target, c, d, a);

// 3 Object.is()
let amount = NaN;

// 4 Object.getOwnPropertySymbols()
let article = {
	[Symbol.for("article")]: "My article"
}

module.exports = {
	"1": a.y,
	"2": target,
	"3": Object.is(amount, amount),
	"4": Object.getOwnPropertySymbols(article)
}