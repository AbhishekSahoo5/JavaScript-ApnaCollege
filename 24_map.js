/*
Map
--> Creates a new array with the results of some operation. The value its callback returns are used to form new array 
*/

let arr=[1,2,3,4,5];
let newArr=arr.map((val)=>{
    return val*2;
})
console.log(newArr);

console.log("-----------------------------");

/*
Difference between forEach and map

forEach---> is used when you need to calculate something and print something.

map---> is used when you need to create a new array using those values.
*/

