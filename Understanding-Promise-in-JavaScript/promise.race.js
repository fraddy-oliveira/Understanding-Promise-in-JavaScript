// From array of Promises, when we want to the promise which settles down to resolve or reject state first than Promise.race() method is there to do work for us.

let promiseA = new Promise(function (resolve, reject) {
  setTimeout(resolve, 400, 'A');
});

let promiseB = new Promise(function (resolve, reject) {
  setTimeout(resolve, 300, 'B');
});

Promise.race([promiseA, promiseB])
      .then(value => console.log('Promise ' + value + ' is resolved'))
      .catch(err => console.log('Promise ' + err + ' is rejected'))