const fs  = require('fs')
const EventEmitter = require('events')

class TaskEmitter extends EventEmitter {

}
const taskEmitter  = new TaskEmitter()
/*function writeTask(taskName, desc) {
     var task = {
         taskName,
         desc
     }

    var tasks = []
     
    return new Promise(function(resolve, reject){
        readTask()
            .then((data) => {
               tasks = data
            })
            .catch((err) =>{
                tasks = []
                console.log('Some error in read')
            })
            .then(() => {
                tasks.push(task)
                fs.writeFile('tasks.json', JSON.stringify(tasks), (err) => {
                    if(err) {
                        console.log('Some error')
                        reject(err)
                    }else {
                        resolve(task)
                        console.log('done')
                    }
                });

            })
        })
}*/

function writeTask(taskName, desc) {
    var task = {
        taskName,
        desc
    }

   var tasks = []
    
   return new Promise(async function(resolve, reject){
       
       try {
        var data = await readTask()
        tasks =  data
       } catch (error) {
        tasks = []
       }

       tasks.push(task)
       fs.writeFile('tasks.json', JSON.stringify(tasks), (err) => {
            if(err) {
                console.log('Some error')
                reject(err)
            }else {
                resolve(task)
                 console.log('done')
            }
        });
           
    })
}

function readTask() {
    return new Promise(function(resolve, reject){
        fs.readFile('tasks.json', (err, data) =>{
            if(err) {
                reject(err)
                taskEmitter.emit('error', err)
            }else {
                resolve(JSON.parse(data))
                taskEmitter.emit('data', JSON.parse(data))
            }
        })
    })
    
}

module.exports = {writeTask, readTask, taskEmitter}