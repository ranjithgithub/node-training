var x = 10;
var y;

console.log('x = ', x)
var x =  50;
console.log('y = ', y)
//console.log('z = ', z) // Reference error

function fn() {
  var x = 50;
  console.log('x in fn:', x);
  //console.log('message', message);
  if (x < 100) {
    let message =  'hello'
    console.log('message', message);
  }
  //console.log('message', message);
}
fn();