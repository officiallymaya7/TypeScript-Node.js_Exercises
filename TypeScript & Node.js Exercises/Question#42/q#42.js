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
showMagicians(makeGreat(magicianNames));
