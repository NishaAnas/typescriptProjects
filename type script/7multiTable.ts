import * as readline from 'readline'
const read= readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
read.question('Enter the number:',(input1:string)=>{
    let input:number=parseFloat(input1);
    read.question('Enter the Limit:',(input2:string)=>{
        let limit:number=parseInt(input2);
        for(let i:number=1;i<=limit;i++){
            console.log(`${input} X ${i} = ${input*i}`);
        }
        read.close();
    })
})