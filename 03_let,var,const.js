//Always use let or const 
//don't use var----> because var can be redeclared which created confusion

/*
Var:- Variable can be re-declared & updated. A global scope variable.

let:- Variable cannot be re-declared but can be  updated. A block scope variable.

const:- Variable cannot be re-declared or updated. A black scope variable.
*/

let fullName="Abhishek";
let price=56789;
console.log(fullName,price);

const age=24;
// age=26; ----------------> error as we are trying he change a const variable
console.log(age);

//let is blocked scope
let a=5;
{
    let a=6;
    console.log(a);
}
console.log(a);


//var is global scoped
var b=1;
{
    var b=2;
    console.log(b);
}
console.log(b);