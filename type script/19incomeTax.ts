import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateIncomeTax(income: number): number {
    let tax = 0;

    if (income <= 250000) {
        tax = 0;
    } else if (income <= 500000) {
        tax = (income - 250000) * 0.05;
    } else if (income <= 1000000) {
        tax = (250000 * 0.05) + (income - 500000) * 0.20;
    } else if (income <= 5000000) {
        tax = (250000 * 0.05) + (500000 * 0.20) + (income - 1000000) * 0.30;
    } else {
        tax = (250000 * 0.05) + (500000 * 0.20) + (4000000 * 0.30) + (income - 5000000) * 0.30;
    }

    return tax;
}

rl.question('Enter the annual income: ', (incomeInput) => {
    const income = parseFloat(incomeInput);
    const taxAmount = calculateIncomeTax(income);
    console.log(`Income tax amount = ${taxAmount.toFixed(2)}`);
    rl.close();
});
