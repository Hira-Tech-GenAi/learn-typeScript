"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//* use const where variable values do not change
const number = 5;
const number1 = 33;
const fName = "Ali";
//I suggest use let instead of var everywhere, 
//becuase let has blocked scope
if (true) {
    let z = 4;
    //use z
}
else {
    let z = "string";
    //use z
}
// console.log("let: " + z);// Error: z is not defined in this scope
