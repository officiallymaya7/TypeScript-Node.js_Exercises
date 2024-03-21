var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function makeGreat(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great ".concat(magicians[i]));
    }
    return greatMagicians;
}
var magicianNames = ["Merlin", "David Copperfield", "Houdini", "Penn & Teller"];
// Call makeGreat with a copy of the array
var greatMagicians = makeGreat(__spreadArray([], magicianNames, true));
// Show the original array
console.log("Original Magicians:");
showMagicians(magicianNames);
// Show the array with "the Great" added
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
