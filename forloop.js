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