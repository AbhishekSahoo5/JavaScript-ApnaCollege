//String is a sequence of characters used to represent text

//create a string
let str="Abhishek Sahoo";

//inBuilt functions
/*
1. str.length
2. str[index]--> to access the individual character of string
*/
console.log(str.length);
for(let i=0;i<=str.length;i++)
{
    console.log(str[i]);
}

//String interpolation
let obj={
    name:"Abhishek",
    college:"ITER",
};
console.log(`Hii this is ${obj.name}, and I am from ${obj.college} College`);