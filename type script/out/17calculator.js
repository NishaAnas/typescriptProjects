"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class Calculator {
    addition(a, b) {
        return a + b;
    }
    subtraction(a, b) {
        return a - b;
    }
    multiplication(a, b) {
        return a * b;
    }
    division(a, b) {
        if (b === 0) {
            throw new Error('Division by zero is not allowed');
        }
        return a / b;
    }
}
function menu() {
    console.log('Select an operation:');
    console.log('1. Addition');
    console.log('2. Subtraction');
    console.log('3. Multiplication');
    console.log('4. Division');
    rl.question('Enter your choice (1-4): ', (choice) => {
        rl.question('Enter first number: ', (num1) => {
            rl.question('Enter second number: ', (num2) => {
                const a = parseFloat(num1);
                const b = parseFloat(num2);
                const calculator = new Calculator();
                switch (choice) {
                    case '1':
                        console.log(`Result: ${calculator.addition(a, b)}`);
                        break;
                    case '2':
                        console.log(`Result: ${calculator.subtraction(a, b)}`);
                        break;
                    case '3':
                        console.log(`Result: ${calculator.multiplication(a, b)}`);
                        break;
                    case '4':
                        try {
                            console.log(`Result: ${calculator.division(a, b)}`);
                        }
                        catch (error) {
                            console.log(error.message);
                        }
                        break;
                    default:
                        console.log('Invalid choice');
                        break;
                }
                rl.close();
            });
        });
    });
}
menu();
//# sourceMappingURL=17calculator.js.map