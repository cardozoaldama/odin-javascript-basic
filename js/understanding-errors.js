// Understanding Errors and Warnings...
console.log('Understanding Errors');

// Trying to throw an error:
// const a = 'Hello';
// const b = 'World';
// This will probably throw an error:
// console.log(c);
// First, this is the error:
// Uncaught ReferenceError: c is not defined.
// The type of the error is "ReferenceError";
// Also, the browsers will tell you the file which the error occur and the line (with the character);

/* ANOTHER IMPORTANT ERROR: Stack Trace */
// Example:

console.log('Stack Trace errors');

// Variable declarations and assignment:
let x = 5;
let y = 10;

// The function add() returns "z" variable...
function add()
{
    return z;
}

// The function print() calls add() function when it invokes:
function print()
{
    add();
}

// Trying to use the function print();
// print();

// These are the errors:
/**
 * Uncaught ReferenceError: z is not defined
    add ./js/understanding-errors.js:X
    print ./js/understanding-errors.js:X
    <anonymous> ./js/understanding-errors.js:X
    understanding-errors.js:X:Y
*/

/**
 * The Stack Trace lets you trace the evolution of an error back to its origin, which here is the declaration of add();
 */

/* Common types of errors */
// Syntax error:
function helloWorld()
{
    // My editor right a way tells me to put ";", but in reality is ():
    // console.log "Hello World"
    // The example will throw the following error:
    // Uncaught SyntaxError: unexpected token: string literal.
}

// Reference Error:
// Your variable doesn't exist or it has been spelled incorrectly.

// Type Error:
// Per MDN, a TypeError may be thrown when:
/**
 * An operand or argument passed to a function is incompatible with the type expected by that operator or function;
 * Or when attempting to modify a value that cannot be changed. (Constants)
 * Or when attempting to use a value in an inappropriate way.
 */

const str1 = 'Hello';
str1 = 'Trying to change you...';
// Throws an error: Uncaught TypeError: invalid assignment to const 'str1;
const str2 = 'JavaScript!';
const message = str1.push(str2);

// The error message will be:
/**
 * Uncaught TypeError: str1.push is not a function;
 * Probably push() is certainly a function, but it is not a String method, it is an Array method.
 */