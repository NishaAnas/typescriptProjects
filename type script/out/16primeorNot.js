"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function isPrime(num) {
    if (num <= 1)
        return false;
    if (num <= 3)
        return true;
    if (num % 2 === 0 || num % 3 === 0)
        return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0)
            return false;
    }
    return true;
}
rl.question('Enter a number: ', (input) => {
    const number = parseInt(input);
    if (isPrime(number)) {
        console.log('Entered number is a Prime number');
    }
    else {
        console.log('Entered number is not a Prime number');
    }
    rl.close();
});
//# sourceMappingURL=16primeorNot.js.map