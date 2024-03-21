type Car = {
    manufacturer: string;
    modelName: string;
    color?: string;
    optionalFeature?: string;
};

function createCar(manufacturer: string, modelName: string, options: Partial<Car> = {}): Car {
    return {
        manufacturer,
        modelName,
        ...options
    };
}

// Call the function with required information and additional options
const myCar = createCar("Toyota", "Camry", { color: "blue", optionalFeature: "sunroof" });

// Print the Object that's returned
console.log("My Car:", myCar);
