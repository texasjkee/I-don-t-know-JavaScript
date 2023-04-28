const FULFILLED = 'fulfiled';
const PENDING = 'pending';
const REJECTED = 'rejected';

class MyPromise {
	constructor(executor) {
		this.state = PENDING;
		this.result = undefined;

		const resolve = (value) => {
			if (this.state === PENDING) {
				this.state = FULFILLED;
				this.result = value;
			}
		}
		
		const reject = (error) => {
			if (this.state === PENDING) {
				this.state = REJECTED;
				this.result = error;
		}
	}
	executor(resolve, reject)
}

//Promise does not block the thread
const promise = new Promise((resolve, rejected) => {
  setTimeout(() =>{
    resolve('error')
  },10)
}).then((value) => {
  console.log(value)
}, (error) => {
  console.log(error)
})
