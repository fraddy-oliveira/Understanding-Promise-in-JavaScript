// Example shows a alternate way to define promises.

let fetchVehiclesPromise = new Promise(function(resolve, reject) {
  // this is executor function
  setTimeout(function() {
    resolve("alternative way to define promise");
  }, 2000);
});

let successCallback = data => {
  // this is success callback
  console.log(data);
};

let errorCallback = err => {
  // this is error callback
  console.log("fetching vehicles failed");
};

fetchVehiclesPromise.then(successCallback, errorCallback);