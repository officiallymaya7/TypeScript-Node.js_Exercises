var originalGuestList = ["Muskan", "Laiba", "Bushra", "Imsha"];
console.log("Original Invitations");
for (var i = 0; i < originalGuestList.length; i++) {
    console.log("Dear" + originalGuestList[i] + ",You are cordially invited to dinner.We would be honored by your presence!");
}
var guestWhoCantMakeIt = originalGuestList[1];
console.log("\nUnfortunately, " + guestWhoCantMakeIt + "can't make it to dinner.\n");
var newGuest = "Seher";
originalGuestList[1] = newGuest;
console.log("Updated Invitations: ");
for (var i = 0; i < originalGuestList.length; i++) {
    console.log(originalGuestList[i] + ", you are cordially invited to dinner.We would be honored by your presence!");
}
console.log("\nHere a great new! We found a bigger dinner table!\n");
originalGuestList.unshift("Amna");
originalGuestList.splice(3, 0, "Zara");
originalGuestList.push("Dua");
console.log("Extended Invitations: ");
for (var i = 0; +i < originalGuestList.length; +i++) {
    console.log(originalGuestList[i] + ", you are cordially invited to dinner. We would be honoured by your presence!");
}