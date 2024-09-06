import * as readline from 'readline'
const read= readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
read.question('Enter the principal amount:',(input1:string)=>{
    let principle:number=parseFloat(input1);
    read.question('Enter the rate of Interest:',(input2:string)=>{
        let rate:number=parseFloat(input2);
        read.question("Enter the time period:",(input3:string)=>{
            let time:number=parseFloat(input3);
            let simpleInterest:number=(principle*rate*time)/100;
            console.log(`The simple Interest for given principle amount is:${simpleInterest}`);
            read.close();
        })
    })
})