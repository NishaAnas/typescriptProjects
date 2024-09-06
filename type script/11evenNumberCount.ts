import * as readline from 'readline'
const read= readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

read.question('Enter the size of the array:',(input1:string)=>{
    let size:number=parseInt(input1);
        read.question('Enter the values of array1 (use comma for seperating elements):',(input2:string)=>{
            let array=input2.split(',').map(Number);
                if (array.length !== size) {
                    console.log(`Array  should have exactly ${size} elements.`);
                    read.close();
                    return;
                }
                let evenCount:number=array.filter(num=>num%2===0).length;
                console.log(`Even number count in the provided array is : ${evenCount}`);
                    read.close();
                })
        })