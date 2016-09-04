// for of loops

// 1 iterate through array
var fruits = ["apples", "bananas", "pears"];
for (var fruit of fruits) {
	if (fruit === "bananas") break;
	console.log(fruit);
}

// 2 iterate through string
var letters = "ABCDEF";
var count = 0;
for (var letter of letters) {
	count++;
}

module.exports = {
	"2": count
};