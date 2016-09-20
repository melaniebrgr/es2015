// classes

// 1 define and instantiate a class
class Task {
	constructor() { console.log("Task constructor called when instanced"); }
	showId() {
		return 99;
	}
}
let task = new Task();

let newClass = Task;
new newClass();

// 2 extends
class Project {
	constructor(name) { console.log(`Project constructor called when instanced with name: ${name}`); }
}
class SoftwareProject extends Project {}
let project = new SoftwareProject('Mazatlan');

// 3 extends & super
class Mammal {
	constructor() { console.log("Mammal constructor called when instanced"); }
	getLegCount() { return 4; }
}
class Dog extends Mammal {
	constructor() {
		super(); // not optional!
		console.log("Dog constructor called when instanced");
	}
}
let pedro = new Dog();

module.exports = {
	"1.1": typeof Task, //function
	"1.2": typeof task, //object
	"1.3": task instanceof Task, //true
	"1.4": task.showId(), //99
	"1.5": task.showId === Task.prototype.showId, //true
	"1.6": window.Task === Task, //false
	"3.1": pedro,
	"3.2": pedro.getLegCount() //4
}