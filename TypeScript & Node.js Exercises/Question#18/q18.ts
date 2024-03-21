// Step 1: Create an array of places to visit
let placesToVisit = ["Tokyo","Paris","Russia","America"]

// Step 2: Print the array in its original order
console.log("Original Order" , placesToVisit)

// Step 3: Print the array in alphabetical order without modifying it
console.log("Alphabetical Order:" , [...placesToVisit].sort())

// Step 4: Show that the array is still in its original order
console.log("Original Order(unchanged):", placesToVisit)

// Step 5: Print the array in reverse alphabetical order without changing it
console.log("Reverse Alphabetical order: ",[...placesToVisit].sort().reverse())

// Step 6: Print the array in its original order
console.log("Original Order(unchanged)" , placesToVisit)

// Step 7: Reverse the order of the array
placesToVisit.reverse()
console.log("Reverse Order: ",placesToVisit)

// Step 8: Reverse the order again to get back to the original order
placesToVisit.reverse()
console.log("Back to original order: ",placesToVisit)

// Step 9: Sort the array in alphabetical order
placesToVisit.sort()
console.log("Sorted in Alphabetical order: ",placesToVisit)


// Step 10: Sort the array in reverse alphabetical order
placesToVisit.sort((a,b) => b.localeCompare(a))
console.log("Sorted in reverse Alphabetical Order:  " ,placesToVisit)

