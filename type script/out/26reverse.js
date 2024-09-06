function reverseString(my_string) {
    try {
        // Try to reverse the string
        const reversedString = my_string.split('').reverse().join('');
        console.log(`Reversed string is : ${reversedString}`);
    }
    catch (err) {
        // Catch and print the error message
        console.log(`Error : ${err.message}`);
    }
    finally {
        // Print the type of my_string
        console.log(`Type of my_string is : ${typeof my_string}`);
    }
}
reverseString("1234");
reverseString(Number(1234));
//# sourceMappingURL=26reverse.js.map