"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function findOddSum(limit) {
    let sum = 0;
    console.log(`Sum of this numbers`);
    for (let i = 0; i <= limit; i++) {
        if (i % 2 !== 0) {
            console.log(i);
            sum += i;
        }
    }
    return sum;
}
read.question('Enter the limit:', (input1) => {
    let limit = parseInt(input1);
    console.log(`sum of odd numbers upto the limit ${limit} is : ${findOddSum(limit)}`);
    read.close();
});
//# sourceMappingURL=8sumOfOdd.js.map