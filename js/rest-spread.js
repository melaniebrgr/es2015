// rest and spread

// 1 rest parameter
function category1(product, ...categories) {
	return categories;
}

// 2 function and arguments length ignore the rest parameter
function category2(product, ...categories) {
	return arguments.length;
}

// 3 spread operator
var numbers = [24, 26, 18];
var maxNum = Math.max(...numbers);

// 4 spread to new array
var newMaxNum = [...numbers];

// 5 spread empty (could happen if data failed to load)
var empty = [...[,,]];

// 6 spread strings
var name = [..."Melanie"];

module.exports = {
	"1.1": category1("apple", "banana", "orange"), //["banana", "orange"]
	"1.2": category1("apple"), //[]
	"1.3": category1.length, //1
	"2.1": category2(), //0
	"2.2": category2("apple", "banana", "orange"), //3
	"3": maxNum, //26
	"4": newMaxNum, // [24, 26, 18]
	"5": empty, // [undefined, undefined]
	"6": name //["M", "e", "l", "a", "n", "i", "e"]
}