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

// Exercise: Which values does the while loop show?

let i = 0;
// i = 0;
// Prefix:
while(++i < 5) console.log(i);
// 1°: ++i = 1 and it is less than 5, so: 1.
// 2°: ++i = 2 and it is less than 5, so: 2.
// 3°: ++i = 3 and it is less than 5, so: 3.
// 4°: ++i = 4 and it is less than 5, so: 4.
// 5°: ++i = 5 and it is NOT less than 5, so: FALSE.
i = 0;
// Postfix:
while(i++ < 5) console.log(i);
// 1°: i++ = 0 and it is less than 5, so: 1.
// 2°: i++ = 1 and it is less than 5, so: 2.
// 3°: i++ = 2 and it is less than 5, so: 3.
// 4°: i++ = 3 and it is less than 5, so: 4.
// 5°: i++ = 4 and it is less than 5, so: 5.
// 6°: i++ = 5 and it is NOT less than 5, so: FALSE.

console.log('For Loop:');
// FOR Loop.
// Prefix:
for(let i = 0; i < 5; ++i) console.log(i);
// Postfix:
for(let i = 0; i < 5; i++) console.log(i);

// Output even numbers:
console.log('Even numbers from 2 to 10:');
for(let i = 0; i <= 10; i++)
{
    // We can ignore curly braces if there is just one statement:
    if (i % 2 != 0) continue;
    console.log(i);
}

console.log('Replace "for" with "while":');
// Replace "for" with "while":
/*
for (let i = 0; i < 3; i++)
{
    console.log(`Number: ${i}!`);
}
*/
let iterator = 0;
while (iterator < 3)
{
    console.log(`Number: ${iterator}!`);
    iterator++;
}

// Repeat until the input is correct:
let inputNumber
console.log('Repeat until the input is correct.');
do {
    inputNumber = parseInt(prompt('Enter a number greater than 100.'));
    if (inputNumber <= 100)
    {
        console.log('NOPE! You have done bad.', inputNumber);
        console.log('I want your input a number more than 100.');
    }
    else
    {
        console.log('YAY! Now that is what we are talking about!', inputNumber);
    }
} while (inputNumber <= 100);