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
console.log("\n Unfortunately, we can only invite two people to dinner \n");
while (originalGuestList.length > 2) {
    var removedGuest = originalGuestList.pop();
    console.log("Sorry " + removedGuest + " , we can't invite you to dinner.");
}
console.log("\nInvitations for the two remainining guests: ");
for (var i = 0; i < originalGuestList.length; i++) {
    console.log(originalGuestList[i] + ", you are still invited to dinner. We apologize for the inconvenience.");
}
console.log("\n Number of people Invited to dinner: ", originalGuestList.length);
