const EventEmitter =  require('events')

class MyEmitter extends EventEmitter {
    dotask(callback) {
     console.log("starting doTask...")
     this.emit('begin')
     callback();
     this.emit('end')
     console.log("Finish doTask...")
    }
}

var myemitter =  new MyEmitter();
myemitter.on('begin', () => {console.log('In the being')})
myemitter.on('end', () => {console.log('In the end')})
myemitter.dotask(() => {console.log('This is the callback')})