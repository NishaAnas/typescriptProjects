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
        console.log(`Before sorting:${array}`);
        let sortedArray = array.sort((a, b) => b - a);
        console.log(`After Sorting: ${array}`);
        read.close();
    });
});
//# sourceMappingURL=12sortArray.js.map