"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function add2DArrays() {
    rl.question('Enter the size of arrays: ', (size) => {
        const arraySize = parseInt(size);
        const matrix1 = [];
        const matrix2 = [];
        console.log('Enter the values of array 1 (space-separated rows, comma-separated values):');
        readMatrix(matrix1, arraySize, () => {
            console.log('Enter the values of array 2 (space-separated rows, comma-separated values):');
            readMatrix(matrix2, arraySize, () => {
                const sumMatrix = matrix1.map((row, i) => row.map((value, j) => value + matrix2[i][j]));
                console.log('Sum of 2 arrays is:');
                sumMatrix.forEach(row => console.log(row.join(' ')));
                rl.close();
            });
        });
    });
}
function readMatrix(matrix, size, callback) {
    let rowsRead = 0;
    rl.on('line', (line) => {
        if (rowsRead < size) {
            matrix.push(line.split(' ').map(Number));
            rowsRead++;
            if (rowsRead === size) {
                callback();
            }
        }
    });
}
add2DArrays();
//# sourceMappingURL=14twoDArray.js.map