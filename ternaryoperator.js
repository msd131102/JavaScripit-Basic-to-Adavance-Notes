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