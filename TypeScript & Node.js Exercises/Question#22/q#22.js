// Intentionally creating an array with 3 elements
var myArray = [1, 2, 3];
// Intentionally causing an array index error
var indexWithError = 5; // Trying to access an index that doesn't exist
try {
    // Accessing the array with the incorrect index
    var valueAtIndex = myArray[indexWithError];
    console.log("Value at index ".concat(indexWithError, ": ").concat(valueAtIndex));
}
catch (error) {
    // Catching the error and handling it
    console.error("Error: ".concat(error.message));
    // Correcting the error by using a valid index
    var validIndex = 1; // Choosing a valid index
    var correctedValue = myArray[validIndex];
    console.log("Corrected value at index ".concat(validIndex, ": ").concat(correctedValue));
}
