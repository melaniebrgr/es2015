// Template literals

// 1 template literals
var name = {
	first: "Melanie",
	last: "Burger"
}
var msg = `Hello ${name.first} ${name.last}`;

// 2 escape template strings
var msg2 = `Hello ${name.first} \${name.last}`;

// 3 respect for white space
var msg3 = `Hello 
my name is 
${name.first} 
${name.last}`;

// 4 expressions
var msg4 = `Hello ${name.first} ${name.last + 2}`;

// 5 tragged template literals (still not sure how they work)
function processInvoice(segments, ...values) {
	console.log(segments);
	console.log(values);
}
let invoiceNum = "1250";
let amount = "2000";
processInvoice `Invoice: ${invoiceNum} for ${amount}`;

module.exports = {
	"1": msg, // "Hello Melanie Burger"
	"2": msg2, // "Hello Melanie ${name.last}"
	"3": msg3,
	"4": msg4 // "Hello Melanie Burger2"
}