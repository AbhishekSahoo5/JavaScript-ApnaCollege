/*
forEach loop in Array
arr.forEach (call Back Function)

callback Function: Here, it is a function to execute for each element in the array.

*****A callback is a function passed as an argument to another function.

*/



let arr=[1,2,3,4,5];

arr.forEach((val)=>{
    console.log(val+5);
});

console.log("--------------------------------------");
//there are three parameter in the forEach

arr.forEach((val,index,arr)=>{
    console.log(val+2,2,arr);
});

//IQ) What are higher Order functions/methods
// -----> Higher order functiosn are those function which takes other functions as parameters or return a functions. eg. forEach()

