var currentUsers = ['John', 'Alice', 'Bob', 'Charlie', 'Eve'];
var newUsers = ['Bob', 'Dave', 'EVE', 'Frank', 'Grace'];
var _loop_1 = function (newUser) {
    // Check if the new username is already in the current_users list (case-insensitive)
    var isUsernameTaken = currentUsers.some(function (user) { return user.toLowerCase() === newUser.toLowerCase(); });
    // Print messages based on the result
    if (isUsernameTaken) {
        console.log("Username '".concat(newUser, "' is not available. Please enter a new username."));
    }
    else {
        console.log("Username '".concat(newUser, "' is available."));
    }
};
// Loop through the new_users list
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    _loop_1(newUser);
}
