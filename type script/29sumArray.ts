function myFilter(myArray: number[], callback: (num: number) => boolean): number {
    let sum = 0;

    // Summing the elements of myArray
    for (let num of myArray) {
        sum += num;
    }

    // Checking if the sum is even or odd using the callback
    if (callback(sum)) {
        console.log(`Sum is even: ${sum}`);
    } else {
        console.log(`Sum is odd: ${sum}`);
    }

    return sum;
}

// Callback function to check if the number is even
function isEven(num: number): boolean {
    return num % 2 === 0;
}

const myArray = [1, 2, 3, 4, 5];
const result = myFilter(myArray, isEven);  // Passing the array and the callback
console.log(`The sum of the array is: ${result}`);
