// We can use Promise.resolve method to resolve promise.

let shortcuts_res = Promise.resolve('passed');

shortcuts_res.then(value => console.log('Promise is resolved'))
             .catch(err => console.log('Promise is rejected'));