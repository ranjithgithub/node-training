console.log('... in app.js');

global.test = "hello app.js";

require('find-me');
const findMe =  require('find-me');
//console.log(findMe)

//console.log('require cahce...', require.cache)
//node app.js -->module
//console.log(module);

//const myLib =  require('my-lib');
//console.log(myLib)

const _ =  require('lodash')
const os =  require('os')
//console.log(os)
const functions = require('./functions')
console.log(functions.add(10, 6))

const data = require('./data')
//console.log(data)
