// Number extensions

//1 Number.parseInt 
//2 Number.parseFloat
//3 Number.isNan
//4 Number.isFinite

module.exports = {
	"1": Number.parseInt === parseInt, //true
	"2": Number.parseFloat === parseFloat, //true
	"3.1": isNaN("NaN"), //true
	"3.2": Number.isNaN("NaN"), //false
	"4.1": isFinite("8000"), //true
	"4.2": Number.isFinite("8000") //false
}