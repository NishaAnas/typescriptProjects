import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateGrade(writtenTest: number, labExams: number, assignments: number): number {
    const weightedAverage = (writtenTest * 0.7) + (labExams * 0.2) + (assignments * 0.1);
    return weightedAverage;
}

rl.question('Enter the marks scored by the students\nWritten test = ', (writtenTestInput) => {
    const writtenTest = parseFloat(writtenTestInput);
    
    rl.question('Lab exams = ', (labExamsInput) => {
        const labExams = parseFloat(labExamsInput);
        
        rl.question('Assignments = ', (assignmentsInput) => {
            const assignments = parseFloat(assignmentsInput);
            
            const grade = calculateGrade(writtenTest, labExams, assignments);
            console.log(`Grade of the student is ${grade.toFixed(1)}`);
            rl.close();
        });
    });
});
