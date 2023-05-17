var readlineSync = require("readline-sync");
let day = readlineSync.question("enter the number: ");
if(day==1){
    console.log("The day is SUNDAY");
}
else if(day==2){
    console.log("The day is MONDAY");
}
else if(day==3){
    console.log("The day is TUESDAY");
}
else if(day==4){
    console.log("The day is WEDNESDAY");
}
else if(day==5){
    console.log("The day is THURSDAY");
}
else if(day==6){
    console.log("The day is FRIDAY");
}
else if(day==7){
    console.log("The day is SATURDAY");
}
else{
    console.log("The entered number is wrong");
}