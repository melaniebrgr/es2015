// 1 .startsWith() and .endsWith()
let title = "One flew over the cuckoo\'s nest";

// 2 includes

// 3 unicode codepoint
let string = "Surfer's \u{1f3c4} blog";

// 4 string.normalize()
let surfer = "Mazatla\u0301n";

// 5 .repeat()

module.exports = {
	"1.1": title.startsWith("One"),
	"1.2": title.startsWith("ONE"),
	"1.3": title.endsWith("nest"),
	"2": title.includes("w ov"),
	"3": string,
	"4.1": surfer.length,
	"4.2": surfer.normalize().length,
	"5": "Na".repeat(10) + " batman!"
}