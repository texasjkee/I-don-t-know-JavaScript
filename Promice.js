const FULFILLED = 'fulfiled';
const PENDING = 'pending';
const REJECTED = 'rejected';

class MyPromise {}

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
