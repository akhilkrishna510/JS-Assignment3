var readlineSync = require("readline-sync");
let num = readlineSync.question("enter the number :");

console.log('Multiplication Table of' ,num);
for(let i=1;i<=10;i++){
    console.log(num,'*',i,'=',num*i);
}