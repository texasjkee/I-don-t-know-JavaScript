//Class initialization
class Box {
	_age  = 219;

	constructor(name, age) {
		console.log('Creating Class')
		this.name = name
		this.age = age
	}

	hi() {
		console.log('Hello ' + this.name)
	}
	
	set age(value) {
		this._age = value;
		console.log('Change')
	}
	
	get age() {
		return this._age
	}
}

//instance
let myBox = new Box('John');
let myBox1 = new Box('Otis');
// myBox.name = 'John'

const obj = {
	age: 20
}

const analogObj = obj;
analogObj.age = 10;

myBox.hi();
myBox1.hi();
// Box.hi();
