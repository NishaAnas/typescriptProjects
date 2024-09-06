"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
read.question('Enter the number:', (input1) => {
    let input = parseFloat(input1);
    read.question('Enter the Limit:', (input2) => {
        let limit = parseInt(input2);
        for (let i = 1; i <= limit; i++) {
            console.log(`${input} X ${i} = ${input * i}`);
        }
        read.close();
    });
});
//# sourceMappingURL=7multiTable.js.map