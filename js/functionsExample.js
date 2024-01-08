/* FUNCTIONS EXAMPLE */

// LIKE VOID FUNCTIONS
// These kind of functions don't return any values:
// Use the keyword "function" and sayHi function's name.
function sayHi()            // Without parameters.
{
    // The body the function:
    console.log('Hi!');
    console.log('Bye');
}

// Function for sum:
function sum(a, b)          // With two parameters.
{
    console.log('First argument:', a);
    console.log('Second argument:', b);
    console.log(a + b);     // The sum of a + b.
}

// LIKE FUNCTIONS with Return:
// These kind of functions allow to return values:
// Subtract function:
function substract(x, y)      // Take two parameters.
{
    return x - y;             // Return the subtraction of x - y.
    // The Return will exit the function and every else will cancel or exit.
    console.log('I will never be executed. :(');
}

// We are going to call our function:
sayHi();
// Could call anytime.
sayHi();
sayHi();
sayHi();
// Calling "sum" function:
// If you don't pass some arguments, JS pass as undefined.
sum(5, 5);
// Example, undefined with NaN.
sum();

// Using return functions:
let sus = substract(5, 5);      // You need to assign a variable or something so that the function will return you something.
// Print the "sus":
console.log(sus);