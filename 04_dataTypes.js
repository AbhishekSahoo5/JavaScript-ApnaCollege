//Primitive Data types
/*
1. Number
2. String
3. Boolean
4. BigInt
5.Symbol
6. Null
7. Undefined
*/

let num=10;
console.log(num,"---------->", typeof num);

let name="Abhishek";
console.log(name,"---------->", typeof name);

let isFollowing=true;
console.log(isFollowing,"---------->", typeof isFollowing);

let bi=BigInt('1234');
console.log(bi,"---------->", typeof bi);

let sy=Symbol('ABS');
console.log(sy,"---------->", typeof sy);

let n=null;
console.log(n,"---------->", typeof n);

let z=undefined;
console.log(z,"---------->", typeof z);

//**********No-primitive Datatypes****************
// Objects------------> Array, functions
//Object is a collection of values of different datatypes.

const student={
    name:"Abhishek",
    "Regd No":2141019026,
    cgpa:8.18,
    isPass:true,
    age:20,
};
student["age"]+=1;

console.log(student["name"]);
console.log(student["Regd No"]);
console.log(student.cgpa);
console.log(student["age"]);
console.log(typeof student);
console.log(typeof student["name"]);

//to get error in const object we have to change all the elements of the object



