/* MORE FUNCTIONS IN JAVASCRIPT */
// Various functions:

// A simple "sum" function returning the sum...
function sum(a, b)
{
    return a + b;
}

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