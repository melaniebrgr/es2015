//let, const and block scoping

//1 let and const are block-scoped
let arr1 = [];
for (var i=0; i<2; i++) {
	arr1.push( function() {return i} );
}

let arr2 = [];
for (let i=0; i<2; i++) {
	arr2.push( function() {return i} );
}

//3 const cannot be reassigned
const PASSWORD = "password";
// PASSWORD = "new password";

module.exports = {
	"1.1": arr1[0](), //2
	"1.2": arr2[0](), //0
	"2.1": hoisted, //undefined
	// "2.2": notHoisted //ReferenceError
	"3": PASSWORD //typeError
}

//2 let and const are not hoisted, unlike var
var hoisted = "var is hoisted";
let notHoisted = "let is not hoisted, but note that babel will change it to var";