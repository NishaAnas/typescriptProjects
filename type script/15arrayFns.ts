import * as readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function main(): void {
    getArray((array) => {
        displayArray(array);
        rl.close();
    });
}
function getArray(callback: (array: number[]) => void): void {
    rl.question('Enter the size of the array: ', (size) => {
        const arraySize = parseInt(size);
        rl.question('Enter the values of the array (comma-separated): ', (arrayInput) => {
            const array = arrayInput.split(',').map(Number);
            if(arraySize!==array.length){
                console.log('Size mismatch');
                rl.close();
                return; 
            }
            callback(array);
        });
    });
}
function displayArray(array: number[]): void {
    console.log('Array values:');
    console.log(array.join(', '));
}
main();
