// default function parameters

// 1 default params
function getTax1( base = 100, tax = 0.07 ) {
	return base * (1 + tax);
}

// 2 params as variables for other params
function getTax2( base = 100, tax = base * 0.07 ) {
	return base + tax;
}

// 3 default params access variables in the context
function getTax3( base = 100, tax = base * 0.07, previous = getTax2() ) {
	return previous + (base + tax);
}

// 4 arguments does not include default paramters
function args(first, second = "included") {
	return arguments[0] + " " + arguments[1];
}

// look into dynamic functions


module.exports = {
	"1.1": getTax1(), //107
	"1.2": getTax1(undefined, 0.05), //105
	"2": getTax2(), //107
	"3": getTax3(), // 214
	"4": args("defaults") // "defaults undefined"
}