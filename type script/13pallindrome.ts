import * as readline from 'readline'
const read= readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
read.question('Enter the String:',(input:string)=>{
    let cleanedString:string = input.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    let reversedString:string=cleanedString.split('').reverse().join('');
    if(cleanedString===reversedString){
        console.log('Is Pallindrome')
    }else{
        console.log('Not Pallindrome');
    }
    read.close();
})