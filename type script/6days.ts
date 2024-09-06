import * as readline from 'readline'
const read= readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
read.question('Give the input for displaying days of the week:',(input1:string)=>{
    let input:number=parseInt(input1);
    let day:string;
    switch(input){
        case 1:
        day='Monday';
        break;
        case 2:
        day='Tuesday';
        break;
        case 3:
        day='Wednesday';
        break;
        case 4:
        day='Thursday';
        break;
        case 5:
        day='Friday';
        break;
        case 6:
        day='Saturday';
        break;
        case 7:
        day='Sunday';
        break;
        default:
        day='Invalid Entry';
        break;
    }
    console.log(`According to your input the day is ${day}`);
    read.close();
})