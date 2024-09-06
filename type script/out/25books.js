// Library array containing books with title, author, and reading status
const library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];
// Function to display the reading status of each book
function displayReadingStatus(books) {
    books.forEach(book => {
        if (book.readingStatus) {
            console.log(`Already read '${book.title}' by ${book.author}.`);
        }
        else {
            console.log(`You still need to read '${book.title}' by ${book.author}.`);
        }
    });
}
// Call the function to display reading status
displayReadingStatus(library);
//# sourceMappingURL=25books.js.map