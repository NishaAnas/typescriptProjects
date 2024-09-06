import * as readline from 'readline'
const read= readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
function findOddSum(limit:number):number{
    let sum:number=0
    console.log(`Sum of this numbers`)
    for(let i:number=0;i<=limit;i++){
        if(i%2!==0){
            console.log(i)
            sum+=i;
        }
    }
    return sum;
}

read.question('Enter the limit:',(input1:string)=>{
    let limit:number=parseInt(input1);
    console.log(`sum of odd numbers upto the limit ${limit} is : ${findOddSum(limit)}`)
    read.close();
})