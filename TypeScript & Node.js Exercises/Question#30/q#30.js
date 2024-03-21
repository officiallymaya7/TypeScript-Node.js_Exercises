var usernames = ['admin', 'Eric', 'Alice', 'Bob', 'Charlie'];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
var users = ["Maya", "Ukasha", "Admin"];
for (var _a = 0, users_1 = users; _a < users_1.length; _a++) {
    var user = users_1[_a];
    if (user === 'Admin') {
        console.log("Hello Admin");
    }
    else {
        console.log("Hello \"".concat(user, "\",how are you doing"));
    }
    console.log();
}
