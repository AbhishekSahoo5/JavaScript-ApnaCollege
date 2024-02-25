//Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.


function noOfVowels(str){
    let count=0;
    for(let i of str){
        if(i=='a' ||
        i=='e' ||
        i=='i' ||
        i=='o' ||
        i=='u'){
            count++;
        }
    }
    return count;
}
console.log(noOfVowels("abhishek"));

//Same Question using Arrow Function

let vowels=(str)=>{
    let count=0;
    for(let i of str){
        if(i=='a' ||
        i=='e' ||
        i=='i' ||
        i=='o' ||
        i=='u'){
            count++;
        }
    }
    return count;
}
console.log(vowels("abhishek"));
