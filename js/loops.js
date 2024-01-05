/* Looping Code! */
console.log('Looping code in JavaScript');
// Start here:

/* LOOPS */
// Computers are good for rapidly completing repetitive task.
// Loops are useful, because they are all about doing the same thing.
// Same thing over, and over, and over again.
// We are going to show an example from MDN:

/* FUNCTIONS */
// Create a function called random() which returns a result.
function random(number)
{
    // Multiply random (i.e. 0.53452542) with X (number).
    const result = Math.floor(
        Math.random() * number
    );
    // Return the result:
    return result;
}
// Create a function called draw() which does not return nothing.
// This is like a procedure.
function draw()
{
    // Creating in context a rectangular area to transparent black.
    ctx.clearRect(
        // The coordinate X:
        0, 
        // The coordinate Y:
        0, 
        canvas.width, 
        canvas.height
    );
    // For "i" from 0 until 100, repeat each step with +1:
    for(let i = 0; i < 100; i++)
    {
        // Begin the context path:
        ctx.beginPath();
        // Fill with color the context path:
        ctx.fillStyle = 'rgb(255 255 102 / 50%)';       // rgb(255, 255, 102);
        // Create an arc or circular arc to our context path:
        ctx.arc(
            // The X coordinate with the width of our canvas:
            random(canvas.width),
            // The Y coordinate with the height of our canvas:
            random(canvas.height),
            // The arc's radius value, like 50 degrees?:
            random(50),
            // The start of the angle:
            0,
            // The end of the angle:
            2 * Math.PI
        );
        // Now, we fill the context canvas with that drawing.
        ctx.fill();
    }
}
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
// Add an event to the button element with 'click' and invoke the draw() function.
btn.addEventListener('click', draw);