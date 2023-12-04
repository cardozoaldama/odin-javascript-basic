/* CONDITIONALS IN JAVASCRIPT! */

/* COMPARISONS: */
// They are operators, comparisons operators.
// We have "<, >, <=, >=, ==, !="
// Remember use "=" is for assignment and use "==" for comparing two numbers or strings if they are "equal".
let value1 = 'Gees'; // You can compare numbers or strings.
let value2 = '55'; // Also, try to change the value of those variables.
console.log(value1 > value2); // Greater than.
console.log(value1 < value2); // Less than.
console.log(value1 >= value2); // Greater or equal than.
console.log(value1 <= value2); // Less or equal than.
console.log(value1 == value2); // Equal than.
console.log(value1 != value2); // Not equal than.

// You can also try to compare "undefined" and "null":
console.log('UNDEFINED AND NULL');
// Declaring variables and initialize them:
const valueUndefined = undefined;   // "undefined" and const.
const valueNull = null;             // "null" and const.

console.log(valueNull > valueUndefined); // This is false.
console.log(valueUndefined == valueNull); // This is true. Why? Because they are a sweat couple. Or it is because the "coercion" in the language.

// Boolean():
console.log('Boolean();');
// You can also use Boolean():
console.log(Boolean(true)); // True.
console.log(Boolean(5 > 34)); // False.
// Our sweet couple:
console.log(Boolean(null == undefined)); // True.
// But they behave different when you use strict equal for data type: ==
console.log(Boolean(null === undefined)); // Now it's false.
// The strict equal (you have also strict distinct !==) serves that if something is equal to something even with data types.
console.log('Strict equal and distinct');
console.log(Boolean('5' === 5)); // False.
console.log(Boolean('5' !== 5)); // True.

/* CONDITIONALS! */
// We have different types of conditions: if, else, else if, and switch.
console.log('CONDITIONALS IF, ELSE, AND SWITCH');
// The first instruction is "if":
if (valueUndefined == valueNull) 
{
    // If the condition is true, of course this block of code will be executed.
    console.log('Yes, your', valueUndefined, 'is equal to', valueNull);
}
// A little exercise:
/* 
if (hour < 18) {
    greeting = 'Good day';
}
// You need to declare those variables first.
*/
// Now, the second instruction is "else" with "if":
if (valueNull === valueUndefined) 
{
    // You will be executed if the conditions is true.
    console.log('They are the same in something, but not equal strictly.');
}
else
{
    // You will be executed anyway if nothing is true.
    console.log('Okay, they are kind of...');
}
// End of if-else.

// Now we are going to learn about else if statement.
console.log('If, else if, else...');
if (value1 > value2)
{
    // If it is true, you are going down here.
    console.log(value1, '>', value2);
}
else if (value1 === value2)
{
    // If it is false up side, it will be down here if it is true.
    console.log(value1, ' is different than ', value2);
}
else
{
    // If everything is false, here will be executed:
    console.log('Everything is false.');
}
// The end of else, if.

/* THE SWITCH STATEMENT! */
// A switch statement can replace multiple "if" checks.
// It gives a more descriptive way to compare a value with multiple variants. 
let sumNumbers = 2 + 2;
// Switch Case:
switch(sumNumbers) // It allows us to add arbitrary expressions too!
{
    case 3:     // If sumNumbers === 3
        console.log('Too small!');
        break;  // Break and don't ask for others below you.
    case 4:     // If sumNumbers === 4
        console.log('Exactly!');
        break;  // Again, break it down!
    case sumNumbers + 1:     // If sumNumbers + 1 === 5
        console.log('Too big...');
        break;  // Break It Down Again!
    default:    // It's like "else".
        console.log('It\'s over...');
}
// End of Switch statement.