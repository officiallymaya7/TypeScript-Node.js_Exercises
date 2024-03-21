let animals: string[] = ['Dog', 'Cat', 'Rabbit'];

// Print the name of each animal using a for loop
console.log("Animal names:");
for (let animal of animals) {
  console.log(animal);
}

// Print a statement about each animal using a modified for loop
console.log("\nStatements about each animal:");
for (let animal of animals) {
  console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Additional sentence outside the for loop
console.log("\nAny of these animals would make a great pet!");
