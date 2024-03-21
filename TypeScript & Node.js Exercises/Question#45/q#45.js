var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createCar(manufacturer, modelName, options) {
    if (options === void 0) { options = {}; }
    return __assign({ manufacturer: manufacturer, modelName: modelName }, options);
}
// Call the function with required information and additional options
var myCar = createCar("Toyota", "Camry", { color: "blue", optionalFeature: "sunroof" });
// Print the Object that's returned
console.log("My Car:", myCar);
