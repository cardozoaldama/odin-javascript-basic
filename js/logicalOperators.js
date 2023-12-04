/* Logical operators */
// There are four logical operators in JavaScript: AND, OR, NOT, And the Nullish Coalescing.
// The AND (&&)
// The OR (||)
// The NOT (!)
// And the nullish coalescing (??).
console.log('LOGICAL OPERATORS!')

// START
// The "OR" operator (||)
let trueValue = true;       // Working with booleans.
let falseValue = false;     // Also, data type Boolean.
let result;                 // This can be useful.

// There are for possible logical combinations:
console.log(trueValue || falseValue);   // True, true.
console.log(trueValue || falseValue);   // Also, true.
console.log(falseValue || trueValue);   // Yes, true.
console.log(falseValue || falseValue);  // Now you are false.
// This example is for classic programming.
// You need almost one true in your sentence to be truly.
// Also, it converts your data in booleans:
console.log('Converting!', 1 || 0, 'and it doesn\'t converting into a "TRUE".');     // It will be true. It returns the original value of that operand.
// We could do more conditions here with 'if' sentences:
if (trueValue || falseValue || trueValue)
{
    // In this case, it will be true and this sentence will be executed by the truly condition:
    console.log('The value will be truly here.');
}
else if (falseValue || falseValue || trueValue) {
    // Of course, it is quite difficult to get into here.
    console.log('In this case, also it will be truly');
}
else {
    // Almost impossible.
    console.log('To get into here, everyone must be falsy.');
}
// The OR (||) finds the first truthy value.
result = trueValue || falseValue || trueValue;
// This is the algorithm:
// - Evaluates operands from left to right.
// - For each operand, converts it to boolean. If the result is "true",.stops and returns the original value of that operand.
// - If all operands have been evaluated (all were "false", for example), returns the last operand.
console.log('The first one:', result); // The first one will be returned.

//Another feature of OR (||) operator is the so-called "short-circuit" evaluation:
// When the OR executed the value "TRUE", without even touching the others arguments:
"use strict";
console.log('' || 'printed' || 'not printed'); // The second value will printed.

/* THE AND OPERATOR (&&) */
// It will return you TRUE, if everything is TRUE. Otherwise, it will be FALSE.
console.log('The AND operator');
console.log(trueValue && trueValue);        // True.
console.log(trueValue && falseValue);       // False.
console.log(falseValue && trueValue);       // False.
console.log(falseValue && falseValue);      // False.
// An example using "if" statement.
let hour = 5;       // 05:00 PM
let minute = 30;    // 00:30 PM
if (hour == 5 && minute == 30)
{
    // This will be TRUE anyway.
    console.log('The time is: 05:30 PM');
}
// Also, you can evaluated with numbers, just as with OR operator:
if (1 && 0 && 1)
{
    // This result in FALSE, so it won't executed here.
    console.log('No truly?');
    /*
    ———————————No truly?———————————
    ⠀⣞⢽⢪⢣⢣⢣⢫⡺⡵⣝⡮⣗⢷⢽⢽⢽⣮⡷⡽⣜⣜⢮⢺⣜⢷⢽⢝⡽⣝
    ⠸⡸⠜⠕⠕⠁⢁⢇⢏⢽⢺⣪⡳⡝⣎⣏⢯⢞⡿⣟⣷⣳⢯⡷⣽⢽⢯⣳⣫⠇
    ⠀⠀⢀⢀⢄⢬⢪⡪⡎⣆⡈⠚⠜⠕⠇⠗⠝⢕⢯⢫⣞⣯⣿⣻⡽⣏⢗⣗⠏⠀
    ⠀⠪⡪⡪⣪⢪⢺⢸⢢⢓⢆⢤⢀⠀⠀⠀⠀⠈⢊⢞⡾⣿⡯⣏⢮⠷⠁⠀⠀
    ⠀⠀⠀⠈⠊⠆⡃⠕⢕⢇⢇⢇⢇⢇⢏⢎⢎⢆⢄⠀⢑⣽⣿⢝⠲⠉⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⡿⠂⠠⠀⡇⢇⠕⢈⣀⠀⠁⠡⠣⡣⡫⣂⣿⠯⢪⠰⠂⠀⠀⠀⠀
    ⠀⠀⠀⠀⡦⡙⡂⢀⢤⢣⠣⡈⣾⡃⠠⠄⠀⡄⢱⣌⣶⢏⢊⠂⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⢝⡲⣜⡮⡏⢎⢌⢂⠙⠢⠐⢀⢘⢵⣽⣿⡿⠁⠁⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠨⣺⡺⡕⡕⡱⡑⡆⡕⡅⡕⡜⡼⢽⡻⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⣼⣳⣫⣾⣵⣗⡵⡱⡡⢣⢑⢕⢜⢕⡝⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⣴⣿⣾⣿⣿⣿⡿⡽⡑⢌⠪⡢⡣⣣⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⡟⡾⣿⢿⢿⢵⣽⣾⣼⣘⢸⢸⣞⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠁⠇⠡⠩⡫⢿⣝⡻⡮⣒⢽⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    —————————————————————————————
    */
}
// AND finds the first falsy value:
result = falseValue && trueValue && trueValue;
/**
 * Evaluates operands from left to right.
 * For each operand, converts it to a boolean. If the result is FALSE, stops and returns the original value of that operand.
 * If all operands have been evaluated (all were truthy for example), returns the last operand.
 * The difference between AND and OR is that, the AND returns the first falsy value and the OR returns the first truly value.
 */
// The second operand is returned:
console.log('Returns 0: 1 && 0 (', 1 && 0, ')');
console.log('Returns 5: 1 && 5 (', 1 && 5, ')');
// The first operand is returned:
console.log('Returns null: null && 5 (', null && 5, ')');
console.log('Returns 0: 0 && "what?": (', 0 && "what?", ')');
// Pay attention, please: Do not replace "if" with AND and OR. Even if the shorter way to write "if" in your sentences.
// Remember, AND has high priority than OR.

/* The NOT operator (!) */
// Returns the inverse value and converts your operand to boolean type.
console.log('The NOT operator:')
// For instance:
console.log(!true);     // It returns "FALSE".
console.log(!0);        // It returns "TRUE".
// A double NOT is sometimes used for converting a value to boolean type:
console.log(!!'I was an empty string!');        // It returns TRUE.
console.log(!!null);                            // Now you are basically FALSE.
// Here, you can use a built-in BOOLEAN function:
console.log(Boolean('I was an empty string!')); // True.
console.log(Boolean(null));                     // False.
// In this case, the operator NOT is executed first and is the highest of all logical operators.

// END
/***********************/