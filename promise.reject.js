// Promise.reject() method is shortcut to reject promise.

let shortcuts_rej = Promise.reject("failed");

shortcuts_rej
  .then(value => console.log("Promise is resolved"))
  .catch(err => console.log("Promise is rejected"));