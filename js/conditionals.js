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