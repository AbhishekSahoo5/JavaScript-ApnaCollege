//String Methods---> There are built-in functions to manipulatr a string.
/*
----->str.toUpperCase()
----->str.LowerCase()
----->str.trim()-----to remove whitespaces
----->str.slice(start,end)----returns part of string
----->str1.concat(str2)------joins str2 with str1
----->str.replace(searchVal,newVal)
----->str.charAt(idx)
*/

let str="       Abhishek       ";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());
str="legend"
console.log(str.slice(3,7));
let s1="Abhi";
let s2="shek";
console.log(s1.concat(s2));
console.log(str.replace('l','Z'));
console.log(str.charAt(0));

//Original string is imutable we cannot directly manipulate the string
let stri="xerox";
stri=stri.replaceAll('x','P');
console.log(stri);



