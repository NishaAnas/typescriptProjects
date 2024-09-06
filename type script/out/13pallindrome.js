"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
read.question('Enter the String:', (input) => {
    let cleanedString = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reversedString = cleanedString.split('').reverse().join('');
    if (cleanedString === reversedString) {
        console.log('Is Pallindrome');
    }
    else {
        console.log('Not Pallindrome');
    }
    read.close();
});
//# sourceMappingURL=13pallindrome.js.map