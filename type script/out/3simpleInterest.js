"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
read.question('Enter the principal amount:', (input1) => {
    let principle = parseFloat(input1);
    read.question('Enter the rate of Interest:', (input2) => {
        let rate = parseFloat(input2);
        read.question("Enter the time period:", (input3) => {
            let time = parseFloat(input3);
            let simpleInterest = (principle * rate * time) / 100;
            console.log(`The simple Interest for given principle amount is:${simpleInterest}`);
            read.close();
        });
    });
});
//# sourceMappingURL=3simpleInterest.js.map