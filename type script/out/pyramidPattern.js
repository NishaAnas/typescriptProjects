// Function to print a pyramid pattern
function printPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let row = '';
        // Print spaces
        for (let j = 0; j < rows - i; j++) {
            row += ' ';
        }
        // Print stars
        for (let k = 0; k < 2 * i - 1; k++) {
            row += '*';
        }
        console.log(row);
    }
}
// Calling the function to print a pyramid of 5 rows
printPyramid(5);
//# sourceMappingURL=pyramidPattern.js.map