// Define the make_shirt function with default values
function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("T-Shirt Summary: Size ".concat(size, ", Message: \"").concat(message, "\""));
}
// Call the function to make a large shirt with the default message
make_shirt();
// Call the function to make a medium shirt with the default message
make_shirt('Medium');
// Call the function to make a shirt of any size with a different message
make_shirt('Small', 'TypeScript is awesome!');
