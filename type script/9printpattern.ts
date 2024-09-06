import * as readline from 'readline'
const read= readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
function  printPattern(limit:number):void{
    for(let i:number=1;i<=limit;i++){
        let row='';
        for(let j:number=1;j<=i;j++){
            row+=j+' '
        }
        console.log(row.trim());
    }
}

read.question('Enter the limit:',(input1:string)=>{
    let limit:number=parseInt(input1);
    printPattern(limit);
    read.close();
})