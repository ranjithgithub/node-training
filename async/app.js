console.log('starting app...')

function process(callback){
    console.log('In process..')
    callback();
    console.log('In process completed ...')
}

process(function(){
  console.log('In process callback ...');
})

setTimeout(function(){
    console.log('in timeout of 3 sec')
}, 3000)

setTimeout(function(){
    console.log('in timeout of 0 sec')
}, 0)

console.log('finishing app..')