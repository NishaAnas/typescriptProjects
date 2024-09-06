import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function multiplyAdjacentValues(array: number[]): number[] {
    const result: number[] = [];
    for (let i = 0; i < array.length - 1; i++) {
        result.push(array[i] * array[i + 1]);
    }
    return result;
}

rl.question('Enter the array limit: ', (limitInput) => {
    const limit = parseInt(limitInput);
    const values: number[] = [];

    console.log('Enter the values of array (space-separated):');
    rl.on('line', (line) => {
        values.push(...line.split(' ').map(Number));
        if (values.length === limit) {
            const multipliedValues = multiplyAdjacentValues(values);
            console.log('Output:');
            console.log(multipliedValues.join(' '));
            rl.close();
        }
    });
});
