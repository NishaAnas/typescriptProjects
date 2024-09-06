"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
read.question('Enter the size of the array:', (input1) => {
    let size = parseInt(input1);
    read.question('Enter the values of array1 (use comma for seperating elements):', (input2) => {
        let array = input2.split(',').map(Number);
        if (array.length !== size) {
            console.log(`Array  should have exactly ${size} elements.`);
            read.close();
            return;
        }
        let evenCount = array.filter(num => num % 2 === 0).length;
        console.log(`Even number count in the provided array is : ${evenCount}`);
        read.close();
    });
});
//# sourceMappingURL=11evenNumberCount.js.map