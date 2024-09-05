// Function to calculate the sum of an array of numbers
function calculateSum(numbers) {
    let sum = 0; // Explicitly typed as number
    numbers.forEach((num) => {
        sum += num;
    });
    return sum;
}
// Tuple to store a name and an array of numbers
let data = ['Numbers List', [10, 20, 30, 40, 50]];
// Destructuring the tuple
let [listName, numberArray] = data;
console.log(`${listName}:`, numberArray);
console.log('Sum of the numbers:', calculateSum(numberArray));
//# sourceMappingURL=sumArray.js.map