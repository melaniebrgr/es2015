// classes

// 1 define and instantiate a class
class Task {
	constructor() {
		console.log("called when instanced");
	}
	showId() {
		return 99;
	}
}
let task = new Task();

let newClass = Task;
new newClass();

module.exports = {
	"1.1": typeof Task, //function
	"1.2": typeof task, //object
	"1.3": task instanceof Task, //true
	"1.4": task.showId(), //99
	"1.5": task.showId === Task.prototype.showId, //true
	"1.6": window.Task === Task //false
}