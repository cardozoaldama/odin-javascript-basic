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

/*
Write pseudo code that performs the following: Ask a user to enter a number. If the number is between 0 and 10, write the word blue. If the number is between 10 and 20, write the word red. If the number is between 20 and 30, write the word green. If it is any other number, write that it is not a correct color option.
*/

// Input: A number.
// Output: If number between 0 and 10, blue. Between 10 and 20, red. Between 20 and 30, green. Other number is not a correct color option.

// Create a variable as integer called numberColor.
let numberColor = 0;
// Ask for the user to enter a number.
numberColor = prompt('Enter a number, please.');
// Convert numberColor in an integer.
numberColor = parseInt(numberColor);
// Conditionals.
if (numberColor < 0 || numberColor > 30)
{
    alert('It is not a correct color option...');
}
else if (numberColor >= 20 && numberColor <= 30)
{
    alert('Green');
}
else if (numberColor >= 10 && numberColor <= 20)
{
    alert('Red');
}
else
{
    alert('Blue');
}

/*
Write pseudo code to print all multiples of 5 between 1 and 100 (including both 1 and 100).
*/

// Input: Anything.
// Output: Multiples of 5 between 1 and 100 (including them).

// Create a mini title:
console.log('All multiples of 5 between 1 and 100:')
// Create a variable that you can use as multiple of 5.
let multipleNumber = 5;
// Create an iterator.
let i = 1;
// Create a stop number.
let stopNumber = 100;
// While i is less or equal to 100:
while (i <= stopNumber)
{
    if (i % multipleNumber != 0)
    {
        i++;
        continue;
    }
    console.log(i);
    i++;
}
