// Recommended way to create Promise.

let promise = new Promise(function(resolve, reject) {
  // this is executor function
  setTimeout(function() {
    resolve("kudos");
  }, 3000);
});

promise
  .then(function(data) {
    // this is success callback
    console.log("promise resolved. " + data);
  })
  .catch(function(err) {
    // this is error callback
    console.log("promise rejected with error: " + err);
  });