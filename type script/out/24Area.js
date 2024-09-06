"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class Area {
    circle(radius) {
        return Math.PI * radius * radius;
    }
    square(side) {
        return side * side;
    }
    rectangle(length, width) {
        return length * width;
    }
    triangle(base, height) {
        return 0.5 * base * height;
    }
}
class MyClass extends Area {
    static main() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        const area = new MyClass();
        rl.question('Enter your choice\n1. Circle\n2. Square\n3. Rectangle\n4. Triangle\n', (choice) => {
            switch (choice) {
                case '1':
                    rl.question('Enter the radius: ', (radiusInput) => {
                        const radius = parseFloat(radiusInput);
                        console.log(`Area of the circle is: ${area.circle(radius).toFixed(2)}`);
                        rl.close();
                    });
                    break;
                case '2':
                    rl.question('Enter the side length: ', (sideInput) => {
                        const side = parseFloat(sideInput);
                        console.log(`Area of the square is: ${area.square(side).toFixed(2)}`);
                        rl.close();
                    });
                    break;
                case '3':
                    rl.question('Enter the length: ', (lengthInput) => {
                        const length = parseFloat(lengthInput);
                        rl.question('Enter the width: ', (widthInput) => {
                            const width = parseFloat(widthInput);
                            console.log(`Area of the rectangle is: ${area.rectangle(length, width).toFixed(2)}`);
                            rl.close();
                        });
                    });
                    break;
                case '4':
                    rl.question('Enter the base: ', (baseInput) => {
                        const base = parseFloat(baseInput);
                        rl.question('Enter the height: ', (heightInput) => {
                            const height = parseFloat(heightInput);
                            console.log(`Area of the triangle is: ${area.triangle(base, height).toFixed(2)}`);
                            rl.close();
                        });
                    });
                    break;
                default:
                    console.log('Invalid choice');
                    rl.close();
            }
        });
    }
}
MyClass.main();
//# sourceMappingURL=24Area.js.map