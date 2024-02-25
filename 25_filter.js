/*
Filter
------> creates a new array of elements that give true for a condition/filter.
eg. all even elements

*/

let arr=[1,2,3,4,5];
let evenArr=arr.filter((val)=>{
    return val%2==0;
});
console.log(evenArr);