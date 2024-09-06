"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
read.question('Give the input for displaying days of the week:', (input1) => {
    let input = parseInt(input1);
    let day;
    switch (input) {
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;
        case 3:
            day = 'Wednesday';
            break;
        case 4:
            day = 'Thursday';
            break;
        case 5:
            day = 'Friday';
            break;
        case 6:
            day = 'Saturday';
            break;
        case 7:
            day = 'Sunday';
            break;
        default:
            day = 'Invalid Entry';
            break;
    }
    console.log(`According to your input the day is ${day}`);
    read.close();
});
//# sourceMappingURL=6days.js.map