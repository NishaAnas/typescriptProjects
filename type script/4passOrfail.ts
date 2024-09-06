import * as readline from 'readline'
const read= readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
read.question('Enter your mark:',(input1:string)=>{
    let mark:number=parseFloat(input1);
    if(mark>=50)console.log(`You have passed the exam`);
    else console.log(`You have Failed the exam`);
    read.close();
})