/* Exercises about Pseudocode to JavaScript */

/*
Write pseudo code that reads two numbers and multiplies them together and print out their product.
*/

// Input: Two numbers.
// Output: Their product.

// Create three variables.
let number1 = 0;
let number2 = 0;
// You can multiply these numbers right now. The result will be zero.
let product = number1 * number2;
// Ask the user for two numbers and assign them in number1 and number2.
number1 = prompt('Please, insert a number:', 1);
number2 = prompt('Please, insert another number:', 2);
// Convert those input numbers in integers.
number1 = parseInt(number1);
number2 = parseInt(number2);
// Now, multiply again, because those numbers were zero before.
product = number1 * number2;
// Print out the result in an alert().
alert('The result of ' + number1 + ' * ' + number2 + ' is: ' + product);
