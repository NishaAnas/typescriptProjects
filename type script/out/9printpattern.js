"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function printPattern(limit) {
    for (let i = 1; i <= limit; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += j + ' ';
        }
        console.log(row.trim());
    }
}
read.question('Enter the limit:', (input1) => {
    let limit = parseInt(input1);
    printPattern(limit);
    read.close();
});
//# sourceMappingURL=9printpattern.js.map