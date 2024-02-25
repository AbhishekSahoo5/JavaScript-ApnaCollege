//We are given array pf marks of student. Filter out the marks of students that scored 90+.

let arr=[90,89,78,67,56,45];
let above60=arr.filter((val)=>{
    return val>60;
});
console.log(above60);