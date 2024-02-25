//for a given array with marks of students--> 85,97,44,37,76,60. Find the average marks of the entire class.

let marks=[85,97,44,37,76,60];
let sum=0;
for(let i of marks){
    sum+=i;
}
console.log("Averge marks= "+sum/marks.length);

//For a given array with prices of 5 items--> [250,645,300,900,50]. All items have an offer of 10% OFF on them. Chnage the array to store final price after applying offer.

let items=[250,645,300,900,50];
let i=0;
for(let val of items)
{
    let dis=val/10;
    items[i]-=dis;
    i++;
}
console.log(items);