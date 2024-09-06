"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function main() {
    getArray((array) => {
        displayArray(array);
        rl.close();
    });
}
function getArray(callback) {
    rl.question('Enter the size of the array: ', (size) => {
        const arraySize = parseInt(size);
        rl.question('Enter the values of the array (comma-separated): ', (arrayInput) => {
            const array = arrayInput.split(',').map(Number);
            if (arraySize !== array.length) {
                console.log('Size mismatch');
                rl.close();
                return;
            }
            callback(array);
        });
    });
}
function displayArray(array) {
    console.log('Array values:');
    console.log(array.join(', '));
}
main();
//# sourceMappingURL=15arrayFns.js.map