// Regular expression extensions

// 1 regexp with astral plane unicode characters
let pattern1 = /\u{1f3c4}/u,
		pattern2 = /^.Surfer/u;

// 2 y flag
let pattern3 = /900/y,
		pattern4 = /900/y;
pattern4.lastIndex = 3;

module.exports = {
	"1.1": pattern1.test('🏄'),
	"1.2": pattern2.test('🏄Surfer'),
	"2.1": pattern3.lastIndex,
	"2.2": pattern3.test("800900"),
	"2.3": pattern4.test("800900")

}