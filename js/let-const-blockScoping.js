//let, const and block scoping

//1
let arr = [];
for (var i=0; i<2; i++) {
	arr.push( function() {return i} );
}

//2
console.log(hoisted);
console.log(notHoisted);
var hoisted = "var is hoisted";
let notHoisted = "let is not hoisted, but babel will change it to var";

module.exports = {
	"1": arr[0]()
}