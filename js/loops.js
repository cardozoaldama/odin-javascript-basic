/* Looping Code! */
console.log('Looping code in JavaScript');
// Start here:

/* LOOPS */
// Computers are good for rapidly completing repetitive task.
// Loops are useful, because they are all about doing the same thing.
// Same thing over, and over, and over again.
// We are going to show an example from MDN:

/* Drawing 100 random circles in the screen. */
// Declare a constant button selecting from the document the button element.
const btn = document.querySelector('button');
// Declare a constant canvas selecting from the document the canvas element.
const canvas = document.querySelector('canvas');
// Declare a context for the actual constant canvas in 2D.
const ctx = canvas.getContext('2d');
// Add an event where the content is loaded, invoke the arrow function inside:
document.addEventListener('DOMContentLoaded', () =>
{
    // The width of our canvas, get from the width of the client document.
    canvas.width = document.documentElement.clientWidth;
    // The height of our canvas, get from the height of the client document.
    canvas.height = document.documentElement.clientHeight;
});