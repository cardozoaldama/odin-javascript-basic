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

/* BIGINT */
// The bigInt is special, because the default "number" data type is kinda limited (not at all) because it only contains a max and a min amount of data (default int).
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
// Invoke the bigInt using the "n" letter appending to the end of your integer!
console.log(9007199254740991n); // Now that number is bigInt!

/* STRINGS! */
// Using strings is easy, you can use them by adding:
/**
 * - Simple quotes: ''
 * - Double quotes: ""
 * - Backticks: ``
 */
// Practically simple and double quotes is that, they are the same in JavaScript.
// However, backticks are "extended functionality" quotes. You can embed variables with them.
let firstName = 'John';
// Embed a variable:
console.log(`Hello, ${firstName}!`); // Hello, John!
// Embed an expression:
console.log(`The result is ${54 / 34.00}`); // The result is that.
// The ${} becomes a part of the string.
// Do we have "char" data type? Nope, we don't have it here.

/* BOOLEAN */
// The "logic" type. And it only contains two values: FALSE and TRUE.
let isNameFieldChecked = true; // Yes, nameFieldChecked.
let isAgeFieldChecked = false; // No, ageFieldChecked.
// Also, use some calculus here:
let isNumberGreater = 16 > 36; // This case, returns false.
console.log(isNumberGreater); // False.

/* THE "NULL" VALUE */
// The special "null" value does not belong to any of the "types".
// It forms a separate type of its own which contains only the "null" value:
let ages = null; // Literally, NULL. 
/* "Null" it is not a reference to a non-existing object or a null pointer. 
It's just a special value which represents "nothing", "empty", or "value unknown"!
*/
// The ages is unknown.

/* THE "UNDEFINED" VALUE */
// Another special value and it makes a type of its own.
// Meaning that "a value is not assigned".
// If you declare a variable and you don't assigned a value on it, of course it will be: UNDEFINED!
let agesUndefined = undefined;
console.log(agesUndefined); // Of course, undefined.