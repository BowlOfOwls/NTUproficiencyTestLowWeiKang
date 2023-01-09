/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console
    Task 2
    - invoke the function "swap"
*/

function swap(x, y){
    // Task 1: Add code here
    if (typeof x != "number" || typeof y != "number") {
      return -1;
    }
    
    console.log('initial value of x : ' + x + '\n initial value of y : ' + y)
    
    y = [x, x = y][0];
    console.log('final value of x : ' + x + '\n final value of y : ' + y)
}

// Task 2: Add code here

const a = 5;
const b = 20;

swap(a,b);