var names = ["Bushra", "Laiba", "Imsha", "Habiba", "Muskan"];
for (var i = 0; i < names.length; i++) {
    console.log("Friend" + (i + 1 + ":" + names[i]));
}
var friends = ["Maya", "Bushra", "Laiba"];
friends.forEach(function (friends) {
    var friendsCircle = friends + " " + "Khan";
    console.log(friendsCircle);
});
var buddy = ["Maya", "Laiba", "Imsha"];
buddy.forEach(function (buddy) {
    var buddycircle = buddy;
    console.log(buddycircle);
});
