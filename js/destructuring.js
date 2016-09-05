// Destructuring

// 1 destructuring arrays
let names = ["Melanie", "Cynthia", "Burger"];
let [first, middle, last] = names;

// 2 skip variable, nesting
let salaries = ['38000', '43000', ['73000', '86000']];
let [low, , [high, ceo]] = salaries;

// 3 desctructuring with parameters
function reviewSalary([low, average], high = "80000") {
 return average;
}

// 4 destructuring objects
let salary4 = {
	low: '38000',
	average: '43000',
	high: '73000'
};
let { low: low4, average: average4, high: high4 } = salary4; 

module.exports = {
	"1.1": first, // "Melanie"
	"1.2": middle, // "Cynthia"
	"1.3": last, // "Burger"
	"2": ceo, // "86000"
	"3": reviewSalary(['38000', '43000']), // "43000"
	"4": high4
}