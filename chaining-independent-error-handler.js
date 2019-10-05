// This is example of processing tasks in series. Here we see how to add error handler for individual task.

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
                          reject('chainB')
                        }, 3000);
                      })
}

let chainC = function () {
  return Promise.reject('Error in chainC')
}

chainA().then((data) => { // success handler for chainA
          console.log(data)
          return chainB().catch((err) => {  // error handler for chainB
            console.log('Error in ' + err)
            throw new Error(err)
          })
        }, (err) => {  // error handler for chainA
          console.log('Error in ' + err)
          throw new Error(err)
        }).then((data) => {  // success handler for chainB
            console.log(data)
            return chainC().catch((err) => {  // error handler for chainC
              console.log('Error in ' + err)
              throw new Error(err)
            })
        }).then((data) => { // success handler for chainC
            console.log(data)
            console.log('all async request were successfull')
        }).catch((err) => {  // common error handler for all tasks
            console.log('all async request were not successfull with error ' + err)
        })