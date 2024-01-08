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

/*
Write pseudo code that tells a user that the number they entered is not a 5 or a 6
*/

// Input: One number.
// Output: A message that tells a user that the number entered isn't a 5 or a 6.

// Create a variable:
let numberUser = 0;
// Ask for the user to enter a number and assign to numberUser.
numberUser = prompt('Please, enter a number five or a number six.');
// Converts numberUser in Integer.
numberUser = parseInt(numberUser);
// Create a conditional if that numberUser is actually 5 or 6.
if (numberUser == 5)
{
    alert('The number entered is a five!');
}
else if (numberUser == 6)
{
    alert('The number entered is a six!');
}
else
{
    alert('NO! The number entered is not actually a five or a six.');
}
