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
		try{
			executor(resolve, reject)
		} catch (error) {
			reject(error);
		}
	}
}

// Promise does not block the thread
const promise = new myPromise((resolve, rejected) => {
    resolve('success')
})

console.log(promise);