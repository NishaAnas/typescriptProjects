//import readline module for getiing input from the console
import * as readline from 'readline';

//create interface for readline
const read= readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

//asking question in the console
read.question('Enter the input you want to display:',(char:string)=>{

    //display the input in the console
    console.log(`You have entered:${char}`);
    //close the interface
    read.close();
})

