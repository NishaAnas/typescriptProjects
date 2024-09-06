"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class Matrix {
    constructor() {
        this.matrix = [];
    }
    getArray(size, callback) {
        let rowsRead = 0;
        rl.on('line', (line) => {
            if (rowsRead < size) {
                this.matrix.push(line.split(' ').map(Number));
                rowsRead++;
                if (rowsRead === size) {
                    callback();
                }
            }
        });
    }
    displayArray() {
        console.log('Array elements are:');
        this.matrix.forEach(row => console.log(row.join(' ')));
    }
}
function main() {
    const matrix = new Matrix();
    rl.question('Enter the size of the array: ', (size) => {
        const arraySize = parseInt(size);
        console.log('Enter the array values (space-separated rows):');
        matrix.getArray(arraySize, () => {
            matrix.displayArray();
            rl.close();
        });
    });
}
main();
//# sourceMappingURL=23oopArray.js.map