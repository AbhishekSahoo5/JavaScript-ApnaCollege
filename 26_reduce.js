/*
Reduce
------> Performs some operation & reduces the array to single value. It returns that single value.

*/
let arr=[1,2,3,4,5];
let output=arr.reduce((res,curr)=>{
    return res+curr;
});
console.log(output);

//to find the largest element
let ar=[89,12,34,67,0,90];
let largest=ar.reduce((prev,curr)=>{
    return prev>curr?prev:curr;
});
console.log(largest);