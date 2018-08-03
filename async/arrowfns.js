//implicit args->this, arguments
function sum(x, y) {
    console.log('in sum ...', arguments)
}

sum(2, 3)
sum()
sum(1, 2, 3, 4, 5)

//Function expression
var add =  function(x, y){
  return a + b;
}

//arrow function
 add = (a, b) => {
     return a + b;
 }


 console.log(add(4, 8))

 var squareIt =  x => x * x

 console.log(squareIt(2))

 var obj = {
     id: 100,
     print: function(){
       console.log('Id: ', this.id)
      /*setTimeout(function(){
        console.log('Id after 2 sec:  ', this.id)
       }, 2000)*/
       //Arrow functions will holds current object scope
       setTimeout(() => {
        console.log('Id after 2 sec:  ', this.id)
       }, 2000)
     }
 }

 obj.print()
