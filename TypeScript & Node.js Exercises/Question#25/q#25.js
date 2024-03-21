// Passing version
var alienColorPass = 'green';
if (alienColorPass === 'green') {
    console.log("Player just earned 5 points!");
}
// Failing version
var alienColorFail = 'red';
if (alienColorFail === 'green') {
    console.log("Player just earned 5 points!"); // This block won't be executed
}
