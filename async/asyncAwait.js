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
 const invokeSomefn = async () => {
     try {
        var result = await someTask(10);
        console.log("result: ", result)
     } catch (error) {
        console.log("result: ", error)
    }
 }

 invokeSomefn()

console.log('Finishing...')