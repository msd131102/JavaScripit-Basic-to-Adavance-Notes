// The ternary operator is a shorthand for an if-else statement. It takes three operands .
// The syntax is: condition ? expressionIfTrue : expressionIfFalse

//  the ternary operator 

let age = 48;
let birth;
//  THE MOST HIGH NUMBER IS DECLEAR FIRST
if (age >= 45){
    birth = "Senior";
}
else if(age >= 20){
    birth = "adult";
}
else{
    birth = "Child";
}

console.log(birth); // OUTPUT SENIOR


// the simple in the ternary operator

let age1 = 21;
let birth1 = age1>= 45 ? "Senior" : age1 >= 20 ? "Adult" : "child";

console.log(birth1);




//  the ternary operator 


let pen = 15;

let buy = pen >= 100 ? "Powerfull" : pen >= 20 ? "Low Pen" : "Good pen";
console.log(buy);


// /// the ternary operator is going on condition? = experation ? : experation2 ? : 


// Challenge 1: The Discount Calculator
// You have a variable totalBill. You want to give a discount if the customer spends a lot of money.

// Goal: Create a variable discount.

// Logic: If totalBill is 100 or more, discount should be 20. Otherwise, discount should be 0.

let totalBill = 80;
let discount = totalBill >= 100 ? 20 : 0;

console.log(discount);


// Challenge 2: Odd or Even?
// You have a variable num. Use the remainder operator (%) inside your ternary to check if a number is even or odd.

// Goal: Create a variable parity.

// Logic: If num % 2 is 0, parity should be "Even". Otherwise, it should be "Odd".

// JavaScript
let num = 10;
let parity = num % 2 === 0 ? "Even" : "Odd";
console.log(parity);

// Challenge 3: Boss Level (Nested Ternary)
// This one mimics your "Age" code from earlier. You need to check three possibilities in one line.

// Goal: Create a variable speedStatus.

// Logic: 1. If speed is more than 100, status is "Too Fast". 2. If speed is between 60 and 100, status is "Normal". 3. If speed is less than 60, status is "Too Slow".

// JavaScript
let speed = 55;
let speedStatus = speed >=100 ? "Too Fast" : speed >=60 ? "Normal" : "Too Slow";
console.log(speedStatus);