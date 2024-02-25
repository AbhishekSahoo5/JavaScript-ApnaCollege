//Functions---> Block of code that performs a specific task, can be invoked whenever needed

console.log("abc".toUpperCase());
console.log([1,2,3].push(99));


function aboutme(){
    console.log("I am Abhishek");
}
aboutme();

function allAboutMe(name,whatIDo)
{
    console.log(`Hii I am ${name} and I an a ${whatIDo}`);
}
allAboutMe("Abhishek","Web developer");

//Functions minimize redundancy(repeatation)

function sum(a,b)
{
    return a+b;
}
let sum1=sum(10,15);
console.log(sum1);

