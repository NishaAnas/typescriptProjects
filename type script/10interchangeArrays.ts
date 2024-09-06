import * as readline from 'readline'
const read= readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

read.question('Enter the size of the array:',(input1:string)=>{
    let size:number=parseInt(input1);
        read.question('Enter the values of array1 (use comma for seperating elements):',(input2:string)=>{
            let array1=input2.split(',').map(Number);
                if (array1.length !== size) {
                    console.log(`Array 1 should have exactly ${size} elements.`);
                    read.close();
                    return;
                }
                read.question('Enter the values of array2 (comma seperated :',(input3:string)=>{
                    let array2=input3.split(',').map(Number);
                    if (array2.length !== size) {
                        console.log(`Array 2 should have exactly ${size} elements.`);
                        read.close();
                        return;
                    }
                    console.log(`Before Swapping:`);
                    console.log(`Array1: ${array1}`);
                    console.log(`Array2: ${array2}`);
                    [array1,array2]=[array2,array1];
                    console.log(`After Swapping:`);
                    console.log(`Array1: ${array1}`);
                    console.log(`Array2: ${array2}`);
                    read.close();
                })
        })
})