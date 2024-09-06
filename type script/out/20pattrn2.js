function printPattern(rows) {
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
//# sourceMappingURL=20pattrn2.js.map