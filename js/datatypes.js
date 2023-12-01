/* DATA TYPES IN JAVASCRIPT! */

// We have eight data types in JavaScript.
// We can put any type in a variable.
// Example with no errors:
let message = "Hello there!";   // It's a string.
message = 12345;                // It's a number.
// This is called "dynamically typed".

/* Numbers: */
// This is basically the "Number" type:
let number1 = 123;              // Numbers, integer ones.
number1 = 12.34;                // Numbers, but floating ones.
// Also, number type is "Infinity" and "NaN" which is Not a Number:
let numberInfinity = Infinity;  // Literally, it is infinity.
let notANumber = NaN;           // Literally, it is not a number.
// Using examples:
console.log(numberInfinity);    // Printing the infinity number.
console.log(notANumber);        // Printing our NaN.
console.log(number1 + notANumber); // Trying adding "number1" plus "notANumber".
console.log(notANumber ** 0);       // Probably the result will be the number: 0
// All of this is safer, for now. Mathematical operations in JavaScript is safe, mostly of the time.