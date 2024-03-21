// Version 1: Alien color is green
let alienColor1 = 'green';

if (alienColor1 === 'green') {
  console.log("Player just earned 5 points for shooting the alien!");
} else {
  console.log("Player just earned 10 points!");
}

// Version 2: Alien color is not green
let alienColor2 = 'red';

if (alienColor2 === 'green') {
  console.log("Player just earned 5 points for shooting the alien!"); // This block won't be executed
} else {
  console.log("Player just earned 10 points!");
}
