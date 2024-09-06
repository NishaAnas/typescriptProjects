function printPattern(rows: number): void {
    let number = 1;
    for (let i = 1; i <= rows; i++) {
        let row = '';
        for (let j = 0; j < i; j++) {
            row += `${number}  `;
            number++;
        }
        console.log(row.trim());
    }
}

printPattern(4);
