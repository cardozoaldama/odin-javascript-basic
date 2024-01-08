/* CLEAN CODE theory by The Odin Project */
console.log('CLEAN CODE');
// I am going to explain to clean our code... Theory first, practice after.

/* Overview */
/**
 * As developers we read most of the time instead of writing.
 * As beginners, we don't need to self up ourselves for not writing elegant code, just yet.
 * We need to read, read, and read. Actually, get off your phone and read more. It will help a lot.
 */

// We got an example here:

// Bad naming:
const x = function (z) {
    let w = 0;z.forEach(
function (q) {
        w += q;
    });return w;
};

x([2, 2, 2]);

// Good naming, consistency, and code:
const sumArray = function (array) {
    let sum = 0;
    array.forEach(function (number) {
        sum += number;
    });
    return sum;
};

sumArray([2, 2, 2]);

// This good example is great for long term maintain support. Also, it is meaningful.

/* Naming functions and variables */
// Get inspiration with these functions:
/**
 * function getPersonAge();
 * function getPlayerScore();
 * function getEnemyWater(); XDXD
 */
// Variables: Should always begin with a noun or an adjective.
// Functions: Should always begin with a verb.

const numberOfThings = 9999;
const myName = 'Fer';
const selected = false;

function getCount() {
    return numberOfThings;
}

function isSelected(booleanValue) {
    // Why? Because we want to update!
    booleanValue = false;
    return booleanValue;
}

/* Using searchable and immediately understandable names. */
// Using values as undeclared variables is not a good idea because remember you can forget stuff and things and so on.
// This is a good idea:
const MILLISECONDS_PER_HOUR = 60 * 60 * 1000;   // Could be 3,600,000
// Multiply the time value by 3,600,000;
// Much better...
setTimeout(stopTimer, MILLISECONDS_PER_HOUR);

/* About comments... */
// This is a real one... Honestly, I abuse the comments because is fun.
// Comments are great, but we cannot abuse them. Remember that code is actually comments.
// We do not need to comment our code mostly because we are using Git.
// Our comments cannot track changes, our dear Git does.
// Also, we can eliminate our old and ancient codes if we need it instead of comment them.

// Function in use:
let aVariable = isSelected(true);
// We don't longer use these:
// isSelectedOld();
// isSelectedAncient();
// isSelectedForFun();

// In our commentary, we need to tell why and not how.
// We use pseudo code apart from our main code, so we need to tell why of our actually code.
// Also, if our code is readable enough, we do not need comments at all!

// This function increments the value of index to move to the next element.
function moveToNextElement() {
    index = index + 1;
    return index;
}
// We can delete the comment because the function is itself explanatory.

// Also, we can explain formulas in our readable code, just like this one:
function calculateBMI(height, weight) {
    // The formula for BMI is weight in kilograms divided by height in meters squared.
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi;
    // This comment helps to refresh the reader on how BMI is calculated in plain English.
}