function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("No items selected. Please choose some ingredients.");
    }
    else {
        console.log("Items: " + items.join(", "));
    }
    console.log("------------------------");
}
// Call the function three times with different numbers of arguments
orderSandwich("Bread", "Turkey", "Cheese", "Lettuce");
orderSandwich("Ham", "Cheese");
orderSandwich(); // No arguments
