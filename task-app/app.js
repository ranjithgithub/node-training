console.log('In the tasks application')
const yargs = require('yargs')
const fs =  require('fs')
const tasks =  require('./tasks')
//console.log(process.argv)

yargs
    .command("add", "To add new task", () => {
       return yargs.options({
        task: {
            decription: "The task name",
            demand: true,
            alias: "t"
        },
        desc: {
            decription: "The task desc",
            demand: true,
            alias: "d"
        }
       })
    })
    .command("list", "To list all tasks")
    .help()
console.log(yargs.argv)

process.on("uncaughtException", (err) => {
  console.log("uncaughtException", err)
  process.exit(-1)
})
tasks.taskEmitter.on('data' , (data) => {
    console.log("In the data event")
    data.forEach(item => {
        console.log(`Task name  ${item.taskName} `)
        console.log(`Task desc  ${item.desc} `)
    })
})

tasks.taskEmitter.on('error' , (err) => {
    console.log("In the error event", err)
})
const command = process.argv[2]
if(command ===  "add"){
    var taskName =  yargs.argv.task
    var desc =  yargs.argv.desc
    console.log(' Add mode', taskName, desc)
   /* var task  = {
        taskName: taskName,
        desc: desc
    }
    fs.writeFileSync('tasks.json', JSON.stringify(task))*/

    tasks
    .writeTask(taskName, desc)
    .then((task) => {console.log('task added', task), (err) => console.log(err)})
} else if (command === 'list'){
    console.log('List mode')
    tasks
    .readTask()
   /* .then((data) => {
        data.forEach(element => {
            console.log(element)
        });
    }, (err) => {
        console.log(err)
    })*/

} else {
    console.log('unknown command')
}