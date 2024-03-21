var cars = [
    { make: "Tokyo", model: "Camry", year: 2022 },
    { make: "Honda", model: "Civic", year: 2021 },
    { make: "Ford", model: "Mustang", year: 2023 },
];
console.log("Information about cars: ");
for (var i = 0; i < cars.length; i++) {
    console.log((i + 1) + ".Make: " + cars[i].make);
    console.log(" Model: " + cars[i].model);
    console.log(" Year: " + cars[i].year);
    console.log();
}
