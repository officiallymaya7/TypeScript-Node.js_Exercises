// Intentionally creating an array with 3 elements
const myArray = [1, 2, 3];

// Intentionally causing an array index error
const indexWithError = 5; // Trying to access an index that doesn't exist

try {
  // Accessing the array with the incorrect index
  const valueAtIndex = myArray[indexWithError];
  console.log(`Value at index ${indexWithError}: ${valueAtIndex}`);
} catch (error) {
  // Catching the error and handling it
  console.error(`Error: ${error.message}`);
  
  // Correcting the error by using a valid index
  const validIndex = 1; // Choosing a valid index
  const correctedValue = myArray[validIndex];
  console.log(`Corrected value at index ${validIndex}: ${correctedValue}`);
}


