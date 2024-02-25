//Arrays ----> Collections of items (linear)

//create Array
let marks=[90,91,92,93,94,95,96];
console.log(marks);
console.log(marks.length);

let heros=["ironman","thor","superV","kingKong"];
console.log(heros);
console.log(heros.length);


let mixData=["Abhishek",1,true,null,undefined];
console.log(mixData);
console.log(mixData.length);
console.log("--------------------------------------");

//Looping over Array
for(let i=0;i<heros.length;i++)
{
    console.log(heros[i]);
}
console.log("--------------------------------------");

//for of loop (preffered for array)
for(let i of heros){
    console.log(i);
}

console.log("--------------------------------------");

//for in loop
for(let i in heros){
    console.log(heros[i]);
}
console.log("--------------------------------------");
for(let i of heros){
    console.log(i.toUpperCase());
}

