import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function add2DArrays(): void {
    rl.question('Enter the size of arrays: ', (size) => {
        const arraySize = parseInt(size);
        const matrix1: number[][] = [];
        const matrix2: number[][] = [];

        console.log('Enter the values of array 1 (space-separated or comma-separated values):');
        readMatrix(matrix1, arraySize, () => {
            console.log('Enter the values of array 2 (space-separated or comma-separated values):');
            readMatrix(matrix2, arraySize, () => {
                const sumMatrix = matrix1.map((row, i) =>
                    row.map((value, j) => value + matrix2[i][j])
                );

                console.log('Sum of 2 arrays is:');
                sumMatrix.forEach(row => console.log(row.join(' ')));
                rl.close();
            });
        });
    });
}

function readMatrix(matrix: number[][], size: number, callback: () => void): void {
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