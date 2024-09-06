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
read.question('Enter the size of the array:', (input1) => {
    let size = parseInt(input1);
    read.question('Enter the values of array1 (use comma for seperating elements):', (input2) => {
        let array1 = input2.split(',').map(Number);
        if (array1.length !== size) {
            console.log(`Array 1 should have exactly ${size} elements.`);
            read.close();
            return;
        }
        read.question('Enter the values of array2 (comma seperated :', (input3) => {
            let array2 = input3.split(',').map(Number);
            if (array2.length !== size) {
                console.log(`Array 2 should have exactly ${size} elements.`);
                read.close();
                return;
            }
            console.log(`Before Swapping:`);
            console.log(`Array1: ${array1}`);
            console.log(`Array2: ${array2}`);
            [array1, array2] = [array2, array1];
            console.log(`After Swapping:`);
            console.log(`Array1: ${array1}`);
            console.log(`Array2: ${array2}`);
            read.close();
        });
    });
});
//# sourceMappingURL=10interchangeArrays.js.map