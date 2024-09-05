"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import the readline module
const readline = require("readline");
//create interface
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//declare afunction find sum to find the sum of 2 numbers
function findSum() {
    read.question('Enter the first Number:', (input1) => {
        let num1 = parseFloat(input1);
        read.question('Enter the second Number:', (input2) => {
            let num2 = parseFloat(input2);
            let sum = num1 + num2;
            console.log(`Sum of the 2 input: ${sum}`);
            read.close();
        });
    });
}
//call function find sum
findSum();
//# sourceMappingURL=2sum.js.map