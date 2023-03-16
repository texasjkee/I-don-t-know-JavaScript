//Class initialization
class Box {
	constructor(name) {
		console.log('Creating Class')
		this.name = name
	}
	hi() {
		console.log('Hello ' + this.name)
	}
}

//instance
let myBox = new Box('John')
let myBox1 = new Box()
// myBox.name = 'John'

const obj = {
	age: 20
}

const analogObj = obj;
analogObj.age = 10;

myBox.hi();
myBox1.hi();
// Box.hi();
