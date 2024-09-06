import * as readline from 'readline'
const read= readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
read.question('Enter your mark percentage:',(input1:string)=>{
    let totalmarks:number=parseFloat(input1);
    let grades:string;
    switch(true){
        case totalmarks>90:
            grades='A';
            break;
            case totalmarks>=80:
            grades='B';
            break;
            case totalmarks>=70:
            grades='C';
            break;
            case totalmarks>=60:
            grades='D';
            break;
            case totalmarks>=50:
            grades='E';
            break;
            default:
            grades='Failed';
            break;
    }
    console.log(`You have got the grade ${grades} for this ${totalmarks} marks`);
    read.close();
})