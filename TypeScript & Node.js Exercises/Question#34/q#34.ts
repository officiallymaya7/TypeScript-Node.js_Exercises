let favoritePizzas: string[] = ['Pepperoni', 'Margherita', 'BBQ Chicken'];

// Print the name of each pizza using a for loop
console.log("Pizza names:");
for (let pizza of favoritePizzas) {
  console.log(pizza);
}

// Print a sentence about each pizza using a modified for loop
console.log("\nSentences about each pizza:");
for (let pizza of favoritePizzas) {
  console.log(`I like ${pizza} pizza.`);
}

// Additional sentence outside the for loop
console.log("\nI really love pizza!");

for (let i=0; i < favoritePizzas.length; i++){
  console.log(`I like ${favoritePizzas}`);
}

favoritePizzas.forEach((favoritePizzas) => {
  console.log(`I like ${favoritePizzas}`)
}

)