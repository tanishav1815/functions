//1. Create one function with zero parameter having a console statement;



function greet() {
    console.log( 'Hello everyone!' );
  }
  greet()

//2. Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

function sum(x,y){
    console.log(x+y);
}
sum(3,4)

//3. Create one arrow function

const difference =(a,b) =>
{
    let x;
    x= a-b;
    console.log(x); 

}
difference(5,3)



//4. "Print output: 
// var x = 21;
// var girl = function () {
//     console.log(x);
//     var x = 20;
// };
// girl ();"



var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl (); //undefined


// 5. "Print output: 
// var x = 21;
// girl ();
// console.log(x)
// function girl() {
//     console.log(x);
//     var x = 20;
// };
// "


var x = 21;
girl();
console.log(x);
function girl() {
    console.log(x);
    var x= 20;
};
girl()   //21




// 6.
// var x = 21;
// a();
// b();
// console.log(a);
// a = function() { //reference error.
    
//    x = 20;
//   console.log(x);
// };
// b = function() {
    
//     x = 40;
//    console.log(x);
// };  




//7. Write a function that accepts parameter n and returns factorial of n



let n=8;
factorial=1;
for (let i=n; i>=1; i--)
{
    factorial=factorial*i;
    console.log(factorial);
}