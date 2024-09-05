//import the readline module
import * as readline from 'readline'

//create interface
const read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

//declare afunction find sum to find the sum of 2 numbers
function findSum():void{
    read.question('Enter the first Number:',(input1:string)=>{
        let num1:number=parseFloat(input1);
        read.question('Enter the second Number:',(input2:string)=>{
            let num2:number=parseFloat(input2);
            let sum:number=num1+num2;
            console.log(`Sum of the 2 input: ${sum}`);
            read.close();
        })
    });
}
//call function find sum
findSum();