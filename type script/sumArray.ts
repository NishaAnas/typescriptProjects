// Function to calculate the sum of an array of numbers
function calculateSum(numbers: number[]): number {
    let sum: number = 0; // Explicitly typed as number
    
    numbers.forEach((num: number) => {
      sum += num;
    });

    return sum;
  }

  // Tuple to store a name and an array of numbers
  let data: [string, number[]] = ['Numbers List', [10, 20, 30, 40, 50]];

  // Destructuring the tuple
  let [listName, numberArray] = data;

  console.log(`${listName}:`, numberArray);
  console.log('Sum of the numbers:', calculateSum(numberArray));
  