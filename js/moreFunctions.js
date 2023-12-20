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

// Returning a boolean value there.
function isPositive(number)
{
    return number >= 0;
}

// Returning a random number from 0 to less than 1.
function randomNumber()
{
    return Math.random;
}

// The famous event listener for click. Easy to understand:
document.addEventListener('click', function() {
    console.log('CLICK');
})