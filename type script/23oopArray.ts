import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Matrix {
    private matrix: number[][] = [];

    getArray(size: number, callback: () => void): void {
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

    displayArray(): void {
        console.log('Array elements are:');
        this.matrix.forEach(row => console.log(row.join(' ')));
    }
}

function main(): void {
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
