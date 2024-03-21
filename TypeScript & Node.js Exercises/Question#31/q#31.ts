let age = 25; // Set the age for testing
let users = []; // List of users, initially empty

// Check if the list of users is not empty
if (users.length > 0) {
  // Determine the life stage based on age
  if (age < 2) {
    console.log("The person is a baby.");
  } else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
  } else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
  } else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
  } else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
  } else {
    console.log("The person is an elder.");
  }
} else {
  console.log("We need to find some users!");
}

// Remove all usernames from the array to simulate an empty list
users = [];

// Check if the list of users is empty after removal
if (users.length === 0) {
  console.log("We need to find some users!");
}
