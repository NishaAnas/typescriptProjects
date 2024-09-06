function checkHeight(my_height) {
    try {
        if (isNaN(my_height)) {
            throw new Error("notANumberError");
        }
        else if (my_height > 75) { // Assuming height greater than 75 is huge
            throw new Error("hugeHeightError");
        }
        else if (my_height < 1) { // Assuming height less than 1 is tiny
            throw new Error("tinyHeightError");
        }
        else {
            console.log("Height is valid");
        }
    }
    catch (err) {
        console.log(err.message);
    }
}
checkHeight("seven");
checkHeight(77);
checkHeight(0);
checkHeight(8);
//# sourceMappingURL=27height.js.map