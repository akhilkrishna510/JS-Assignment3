var readlineSync = require("readline-sync");
let num = readlineSync.question("enter the number: ");
if(num%2==0){
    console.log("The number entered is an even number");
 }
 else{
    console.log("The number entered is an odd number");
 }