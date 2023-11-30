/* WE ARE GOING TO FIGHT! */
// We got numbers here.
// The JavaScript arithmetic operators.
// +, -, *, /, %, ** (ES2016), ++, --
// A little introduction:
console.log('NUMBERS:');
// ------------------ //
/* You can use arithmetic with variables, literals, or expressions. */
let a = 56;     // Variable.
let b = 22;     // Variable.
let c = 3;      // Variables.
// The result:
// These operand are: 56, c, 43, a, 11, and b.
// The rest are operators.
let result = 56 * c + a / (a ** 2 - 43 - (11 + b)); // Expressions, literals, and variables.
// ------------------ //
// You can use floating numbers and they are always 64 bits floating point:
// And you can express numbers as scientific notation:
let numberScientificNotation = 123e5; // 12300000
let floatingNumber = 3.141516; // It's not PI number.
// The maximum level of decimals is 17.
// Floating point arithmetic is not always 100% accurate.
// Scientific notation:
console.log(numberScientificNotation);
// Floating number:
console.log(floatingNumber);
// ------------------ //
/* ADDING NUMBERS AND STRING */
// Numbers are adding.
// String are concatenated.
// You are going to use this operator: "+".
// Variables for testing purposes:
let x = 4;
let y = '4';
let texting = 'Lorem Ipsum';
// Look! You can multiply with `strings`.
console.log(x * y); // 16, and it works!
// Or pure strings.
console.log(texting + numberScientificNotation);
// ------------------ //
/* NOT A NUMBER or AKA NaN. */
// Represents that the number is not a legal number.
let notANumber = 'Pineapples';
let z = 5;
console.log(z * notANumber); // NaN.
// To verify if is a NaN:
console.log(isNaN(z * notANumber)); // TRUE.
// The type of NaN:
console.log(typeof(NaN)); // Number.
// ------------------ //