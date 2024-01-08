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
// Creating toUpper() function for dogs and so on.
function toUpper(string)
{
    return string.toUpperCase();
}
// Creating bDog() function for filtering dogs with the letter B.
function bDog(dog)
{
    return dog.startsWith('B');
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

/* LOOPING THROUGH A COLLECTION */
// Remember what is something that is ordered and is a collection?
// It is: Arrays!
// That is one type of collection, of course.
// Set and Map are collections too.

// The For Of Loop.
// It is a basic tool and you can loop with this through a collection.
const dogs = ['Golden Retriever', 'Dachshund', 'Siberian Husky', 'Poodle', 'Bulldog', 'Border Collie'];
// For each elements in dogs[] assign that element in dog.
for (const dog of dogs)
{
    console.log(dog);
}
// Map and Filter.
// Those things are specialized loops for collections.
// You can use map() to do something to each item in a collection and create a new collection containing the changed items:
const upperDogs = dogs.map(toUpper);
// You literally pass a function into dogs.map();
console.log(upperDogs);
// ["GOLDEN RETRIEVER", "DACHSHUND", "SIBERIAN HUSKY", "POODLE", "BULLDOG", "BORDER COLLIE"]
// You can use filter() to test each item in a collection, and create a new collection containing only items that match:
const filteredDogs = dogs.filter(bDog);
// Looks like map() here, however in return we receive a boolean.
console.log(filteredDogs);
// ["Bulldog", "Border Collie"]

// We can use these tools like arrow functions.
const filtered = dogs.filter((dog) => dog.startsWith('D'));
console.log(filtered);
// ["Dachshund"]

/* Doing a countdown from 10 to 0 */
// If it is ten, the output must be: "Countdown 10";
// If it is zero, the output must be: "Blast Off!";
// If it is other number, just print the number.

console.log('Countdown Numbers!');

for (let i = 10; i >= 0; i--)
{
    switch (i)
    {
        case 10:
            console.log('Countdown', 10);
            break;
        case 0:
            console.log('Blast Off!');
            break;
        default:
            console.log(i);
    }
}