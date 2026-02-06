// the for loop is used to repeat a block of code a certain number of times 

// the syntax of the for loop is 
// for (initialization; codition; increment or decrement) {
// body of the loop//
// excute the code block} 

// for loop example 1

let j;
for(j=1;j<15;j++){
    console.log("*");
}


// // Problem 1: The Even Counter
// // Write a loop that prints only the even numbers from 2 to 10.

// // Goal: Output should be 2, 4, 6, 8, 10.

// // Hint: Think about how much you should increment i by each time (i++ vs i += 2).

let i = 2;
for(i=2;i<=10;i++){
    if(i % 2 == 0){
        console.log(i)
    }
}



// Problem 3: The Multiplier (Table of 5)
// Write a loop that calculates and prints the 5 times table up to 12.

// Goal: Output should look like 5, 10, 15 ... 60.

// Logic: Use a loop that runs from 1 to 12, and inside the loop, multiply the current number by 5.

let k = 5;

for(k=5;k<60;k++){
    if(k % 5 === 0){
        console.log(k);
    }
}


// Problem 4: The Accumulator (Total Sum)
// This one is tricky! Create a variable called total = 0. Use a loop to add every number from 1 to 10 into that total variable.

// Goal: After the loop finishes, console.log(total) should show 55.

// Hint: Inside the loop, use total = total + i;.


let total = 0;
for(let i=1;i<=10;i++){
    total = total + i;
}
console.log(total)