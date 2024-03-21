let car = 'subaru';
let numberValue = 42;
let fruits = ['apple', 'banana', 'orange'];

// Tests for equality and inequality with strings
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota');

// Tests using the lower case function
console.log("Is car.toLowerCase() === 'subaru'? I predict True.");
console.log(car.toLowerCase() === 'subaru');

// Numerical tests
console.log("Is numberValue === 42? I predict True.");
console.log(numberValue === 42);

console.log("Is numberValue > 50? I predict False.");
console.log(numberValue > 50);

// Tests using "and" and "or" operators
console.log("Is car == 'subaru' and numberValue === 42? I predict True.");
console.log(car == 'subaru' && numberValue === 42);

console.log("Is car == 'honda' or numberValue > 50? I predict False.");
console.log(car == 'honda' || numberValue > 50);

// Test whether an item is in an array
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.indexOf('banana') !== -1);

// Test whether an item is not in an array using indexOf
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(fruits.indexOf('grape') === -1);
