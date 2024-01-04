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