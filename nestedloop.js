// // Pattern print 

// the nested loop is a loop  It involves placing one loop inside another, where the outer loop executes for each iteration of the inner loop. 

// Problem 1: The Star Square
// Create a 3x3 square of stars.

// Goal: Output should look like this:

// ***
// ***
// ***
// Hint: You need two loops.

// The outer loop handles the rows (up to 3).

// The inner loop handles printing the 3 stars for that row.


for(let i =1;i<=3; i++){
    let row = "";
    for(let j =1;j<=3;j++){
          row = row + "*";
    }
    console.log(row)
}


