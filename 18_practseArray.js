/*
Create an array to store companies--->
"Bloomberg","Microsoft","Uber","Google","IBM","Netflix"

a) Remove the first company from the array
b)Remove Uber & Add Ola in its place
c)Add Amazon at the end
*/

let arr=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

// a)
arr.shift();
console.log(arr);

//b)
arr.splice(1,1,"Ola");
console.log(arr);

//c)
arr.push("Amazon");
console.log(arr);


