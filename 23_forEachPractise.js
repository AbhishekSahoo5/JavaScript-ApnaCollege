//for a given array of numbes, print the square of each value using the forEach loop.

let arr=[1,2,3,4,5];
arr.forEach((val)=>{
    console.log(val*val);
});

//Another way
let calSquare=(num)=>{
    console.log(num*num);
};
arr.forEach(calSquare);