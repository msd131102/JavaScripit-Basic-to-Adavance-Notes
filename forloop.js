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

// // // Problem 2: The Countdown

// // // Write a loop that counts backwards from 5 down to 1, and then prints the word "Blastoff!" at the very end.

// // // Hint: Start with let i = 5.

// // // Hint: Use i-- to go down.

// // // Hint: Put the "Blastoff" message outside and after the loop's curly braces {}.


let m;

for(m=5;m>=1;m--){
    console.log(m);
}

console.log("Blastoff");




// The "Skip Countdown" Challenge
// Write a loop that counts down from 20 to 0, but instead of counting by 1, it counts down by 5.

// Goal: Your output should be: 20 15 10 5 0 Lift off!

// Condition: Use i >= 0 to make sure the loop includes the number 0.

// Increment/Decrement: Use i -= 5 to subtract 5 each time.

let n;

for(n=20;n>=0;n -= 5){
    console.log(n);
}
console.log("Lift off!");


// The "Even Countdown" Challenge
// Write a loop that starts at 10 and counts down to 1. Inside the loop, use an if condition to only console.log() the number if it is Even.

// Goal: Your output should be: 10 8 6 4 2

// Hint: Start at 10, use i-- to go down by 1, and use if (i % 2 === 0) inside.


let f;
for(f=10;f>=1; f--){
    if(f % 2 === 0)
    console.log(f);
}
