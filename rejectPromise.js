// Below example shows us that we can also reject promise using Throwing Error.
// Apart from rejection this example also show whichever settlement instruction come first then promise is settled to that state. Like here Throwing Error is settled first instead of Reject promise.

let promise = new Promise(function (resolve, reject) {
  throw new Error('calcution error');   // throw will reject promise
  reject('Reject!');
});

promise.then(function (value) {
          console.log(value)
        }).catch(function (err) {
          console.log(err)
        });