// Here we will go through how to do our task in series and chaining of promises is perfect example of it. In order to do tasks each task should return promise. There should be error handler function defined at last in the chaining so last error handler deal with any error that is not handled. Check the example and also experiment with it.

let chainA = function () {
  return new Promise((resolve, reject) => {
                        setTimeout(function () {
                          resolve('chainA')
                        }, 1000);
                      })
}

let chainB = function () {
  return new Promise((resolve, reject) => {
                        setTimeout(function () {
                          resolve('chainB')
                        }, 3000);
                      })
}

let chainC = function () {
  return Promise.reject('Error in chainC')
}

chainA().then((data) => {
          console.log(data)
          return chainB()
        }).then((data) => {
          console.log(data)
          return chainC()
        }).then((data) => {
          console.log(data)
          console.log('all async request were successfull')
        }).catch((err) => {
          console.log('common error handle')
          console.log('all async request were not successfull with error ' + err)
        })