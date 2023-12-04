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