//Loops---> Loops are used to execute a piece of code again and again

//To print your name 5 times
for(let i=0;i<5;i++)
{
    console.log("Abhishek Sahoo");
}
console.log("---------------------------------------------------------");
//calculate sum from 1 to n
let sum=0;
for(let i= 1;i<=5;i++)
{
    sum+=i;
}
console.log(sum);
console.log("---------------------------------------------------------");

//******Infinite Loop----> A loop that never ends */


//While Loop
let i=10;
while(i>=0)
{
    console.log(i);
    i--;
}
console.log("---------------------------------------------------------");

//do-while loop-------> run atleast once...
do{
    console.log(i);
    i--;
}while(i>=0);
console.log("---------------------------------------------------------");

//for-of loop------> for iteration (not used for objects)
let str="Abhishek Sahoo";
for(let i of str)
{
    console.log(i);
}

//calculate size of string
let size=0;
for(let i of str)
{
    size++;
}
console.log("Size=",size);

console.log("---------------------------------------------------------");

//for-in looop---------> used for objects
let student={
    name:"Abhishek Sahoo",
    regdNo:2141019026,
    section:"A",
    college:"ITER"
};
for(let i in student)
{
    console.log(`Key=${i}--------Value=${student[i]}`);
}

