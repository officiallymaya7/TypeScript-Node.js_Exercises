let currentUsers = ['John', 'Alice', 'Bob', 'Charlie', 'Eve'];
let newUsers = ['Bob', 'Dave', 'EVE', 'Frank', 'Grace'];

// Loop through the new_users list
for (let newUser of newUsers) {
  // Check if the new username is already in the current_users list (case-insensitive)
  let isUsernameTaken = currentUsers.some((user) => user.toLowerCase() === newUser.toLowerCase());

  // Print messages based on the result
  if (isUsernameTaken) {
    console.log(`Username '${newUser}' is not available. Please enter a new username.`);
  } else {
    console.log(`Username '${newUser}' is available.`);
  }
}
