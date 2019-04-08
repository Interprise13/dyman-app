//Promises have 2 arguements. Resolve and Reject. resolve is for when everything works how you wanted it to. Reject is for when a problem has occured.


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
//        resolve('This is my resolved data');
        reject('Something went wrong!');
    }, 2000)
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
}).catch((error) => {
    console.log('error: ', error)
});

console.log('after');