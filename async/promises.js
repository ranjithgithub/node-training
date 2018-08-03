//class promise

function someTask(arg){
    //Long running task

    return new Promise(function(resolve, reject){
        console.log('In promise...')
        if(arg > 50) {
            setTimeout(() => {
                var result =  arg * 2
                resolve(result);
            }, 2000)
        } else{
            setTimeout(() => {
                var result =  arg * 8
                reject(result)
            }, 2000)
        }
    })
    
}

var handle = someTask(100)
handle
  .then((result) => {
      console.log('Resolve', result)
  }, (result) => {
    console.log('Reject', result)
  })

Promise
.all([Promise.resolve('a', Promise.reject('b'), someTask(200))])
.then(result => {
    console.log('All resolved', result)
}, result => {
    console.log('All resolved', result)
})

Promise
.race([Promise.resolve('a', Promise.reject('b'), someTask(20))])
.then(result => {
    console.log('All resolved', result)
}, result => {
    console.log('All resolved', result)
})

console.log('Finishing...')