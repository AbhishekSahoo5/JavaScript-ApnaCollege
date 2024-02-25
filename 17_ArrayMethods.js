//Array Methods

/*
push()----> add to end
pop()-----> delete from end & return
toString()-------> converts array to string
concat()----> joins multiple arrays & return result
unshift()----> add to start
shift()-----> delete from start & return
slice(start,end)---> returns a piece of the array
splice(start,delete,new)----> change original array(add,remove,replace)

*/

let arr=[1,2,3,4,5,6,7];
let arr1=arr.push(90);    //---> return new length
console.log(arr1);
console.log(arr);

console.log("----------------------------------------------------");

let arr3=arr.pop();      //---> returns the deleted value
console.log(arr3);
console.log(arr);

console.log("----------------------------------------------------");
let arr4=arr.toString();
console.log(arr4);
console.log(arr);

console.log("----------------------------------------------------");

let marvel=["thor","ironman","spiderman"];
let dc=["superman","batman"];
let mix=marvel.concat(dc);    //---> doesnot change the original array
console.log(mix);
console.log(marvel);
console.log(dc);

console.log("----------------------------------------------------");

let unshiftX=marvel.unshift("Captain");
console.log(unshiftX);
console.log(marvel);

console.log("----------------------------------------------------");

let shiftX=marvel.shift();
console.log(shiftX);
console.log(marvel);

console.log("----------------------------------------------------");

let array=[0,1,2,3,4,5,6];
let array2=array.slice(2,5);
console.log(array2);
console.log(array);

console.log("----------------------------------------------------");

let array3=array.splice(0,5,10);
console.log(array3);
console.log(array);


