// This is the external JavaScript file, for more complex scripts.
// Our dear console:
console.log('Hello world from the JavaScript file (external)!');

// VARIABLES:
// They are kind of storage containers for data in our code:
// In order to create variables in JavaScript, the only way was `var` statement.
// Nowadays we got two more ways to create variables: `const` and `let`.

// An online shop and a chat application needs variables.
// For now, to create a variable in JavaScript, use the `let` keyboard:
let message; // Declares a variable with the name "message".
// Use the (=) operator to put some data into it.
message = 'Hello'; // Store the string 'Hello'.
// Our string is stored and saved into the memory area associated with the variable.
alert(message); // Shows the variable content.
// The alert() shows us a little window in our browser.
// We can also declare multiple variables in one line:
// let user = 'Neo', age = 25, message = 'Hello';
// But developers recommend to use one line for the sake of readability.
// Here is the multiline variant:
/*
    let message = 'Trinity';
    let age = 24;
    let user = 'Neo';
    It's longer, but it is easy to read.
*/
/* USE `let` INSTEAD `var`! */
// In order scripts, we may also find this:
var messageVar = 'Hello';
// This is old-school fashion way.
// We can change the value of our variable anytime:
message = 'World!'; // The 'Hello' has been removed.
// We can copy variables from one into the other!
let finalMessage; // It's empty, but we declared this!
finalMessage = messageVar; // Now we got 'Hello' from `messageVar`.

/* DECLARING TWICE TRIGGERS AN ERROR! */
/*
    let message = "This";
    let message = "These"; // SyntaxError: 'message' has already been declared.
*/

// You have limits using variables!
// - Only letters, digits, or the symbols $ and _.
// - The first character must not be a digit.
let userName;
let test123;
let do_things;
// Multiple words, use camelCase.
// And the $ and _ have no special meaning.
let $ = 5;
let _ = 5;
alert($ + _); // <----- 10.

/* CASE MATTERS! */
let apple; // Different.
let APPLE; // Also, different.

// We have reserved names:
// let let;
// let return;
// An assignment without `use strict`:
num = 5; // This is a bad practice...
alert(num);

/* CONSTANTS */
// You can declare a constant variable, use `const` instead of `let`:
const myBirthday = '28.04.2001'; // This cannot reassigned.
// myBirthday = 'xd'; Uncaught TypeError: Assignment to constant variable.
// Wanna be untouchable? Use `const`!
// AND USE UPPERCASE CONSTANTS!
// Use colors here:
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
/* 
    - This is much easier to remember.
    - It's much easier to mistype the hexadecimal than the `const`.
    - When reading your code, is much more meaningful.
    For `hard-coded` values, use constants UPPERCASE.
*/