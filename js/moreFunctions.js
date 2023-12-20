/* MORE FUNCTIONS IN JAVASCRIPT */
// Various functions:

// -------
// A simple "sum" function returning the sum...
// Also, this is a normal function:
function sum(a, b)
{
    return a + b;
}

// The arrow Function of SUM:
// Now it is called "sum2"
let sum2 = (a, b) => a + b;
// This "sum2" is exactly as "sum", just using arrow functions.
// We don't use curly braces and return statement, because it assumes we want to return "a + b".

// ---------

// -----------
// Returning a boolean value there.
// This is the regular function:
function isPositive(number)
{
    return number >= 0;
}

// Now the arrow function called "isPositive2":
let isPositive2 = number => number >= 0;
// When we have only one argument, we can omit the parenthesis.
// And it is still working!

// -----------

// -------------
// Returning a random number from 0 to less than 1.
// Regular function for "randomNumber":
function randomNumber()
{
    return Math.random;
}

// The arrow function version:
let randomNumber2 = () => Math.random;
// When we don't have any arguments, please use empty parenthesis.
// The rest is the same as we saw.

// -----------

// --------------
// Now... Functions inside to other functions:
// The famous event listener for click. Easy to understand:
// That "function()" without any name is called anonymous function.
document.addEventListener('click', function() {
    console.log('CLICK');
})

// The arrow function:
document.addEventListener('click', () => console.log('CLICK'));
// That function is the same as the other up there.

// -----------

// EXAMPLES OF USING THE ARROW FUNCTION:
// This is a "Person" class:
// I didn't see OOP just yet...
class Person
{
    // This is a constructor?
    constructor(name)
    {
        // We are going to use the variable with itself...
        this.name = name;
    }
    // Print the name of the arrow...
    printNameArrow()
    {
        // The setTimeout() function using arrow function:
        setTimeout(() => 
        {
            // Inside of the arrow function:
            console.log('Arrow:', this.name);
        },
        // Outside of the arrow function:
        100);
    }
    printNameFunction()
    {
        // This setTimeout() are using anonymous function():
        setTimeout(function()
        {
            // Inside of this anonymous function:
            console.log('Function:', this.name);
        },
        // Outside of the anonymous function:
        100);
    }
}