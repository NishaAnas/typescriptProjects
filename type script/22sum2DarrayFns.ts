import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let matrix1: number[][] = [];
let matrix2: number[][] = [];
let sumMatrix: number[][] = [];

function main(): void {
    rl.question('Enter the size of arrays: ', (size) => {
        const arraySize = parseInt(size);

        console.log('Enter the values of array 1 (space-separated rows):');
        getArray(matrix1, arraySize, () => {
            console.log('Enter the values of array 2 (space-separated rows):');
            getArray(matrix2, arraySize, () => {
                addArray(matrix1, matrix2, sumMatrix);
                displayArray(sumMatrix);
                rl.close();
            });
        });
    });
}

function getArray(matrix: number[][], size: number, callback: () => void): void {
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

function addArray(matrix1: number[][], matrix2: number[][], sumMatrix: number[][]): void {
    for (let i = 0; i < matrix1.length; i++) {
        const row: number[] = [];
        for (let j = 0; j < matrix1[i].length; j++) {
            row.push(matrix1[i][j] + matrix2[i][j]);
        }
        sumMatrix.push(row);
    }
}

function displayArray(matrix: number[][]): void {
    console.log('Sum of array 1 and array 2:');
    matrix.forEach(row => console.log(row.join(' ')));
}

main();
