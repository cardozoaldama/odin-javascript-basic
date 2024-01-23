// DOM manipulation and Events

// Acquire the container of the document.
const container = document.querySelector('.container');
// Show the first element of the .container.
console.dir(container.firstElementChild);
// Obtaing controls of the document.
const controls = document.querySelector('.controls');
// Show now the sibling of .controls.
console.dir(controls.previousElementSibling);
// Create a div element from a div constant.
const div = document.createElement('div');
// Append elements:
container.appendChild(div);
// You could remove it.
container.removeChild(div);
// You can append a new element like this:
container.insertBefore(div, controls);
// You can add and manipulate inline CSS styles.
div.style.backgroundColor = 'blue';
div.style.height = '200px';
div.style.width = '200px';
// It works in that way and you cannot merge CSS kebab-cased with camelCase.

// You can append an attribute for your nodes.
div.setAttribute('id', 'theDiv');
console.dir(div.getAttribute('style'));
div.textContent = 'This is a new div from JavaScript.';
div.innerHTML = '<span>This is my generated span...</span>';

// Another example we will using:
const container2 = document.querySelector('#container2');

const content2 = document.createElement('p');
content2.classList.add('content2');
content2.textContent = 'This is the glorious text-content!';

container2.appendChild(content2);

// A little exercise:
// Create a paragraph with red color inside of the second container.
const paraRed = document.createElement('p');
paraRed.textContent = 'Hey I\'m red!';
paraRed.style.color = 'red';
container2.appendChild(paraRed);

// Insert a h3 with blue color inside of the second container.
const h3Blue = document.createElement('h3');
h3Blue.textContent = 'I\'m a blue h3!';
h3Blue.style.color = 'blue';
container2.appendChild(h3Blue);

// Create a div with pink background and black borders, inside of the second container.
const divPink = document.createElement('div');
divPink.style.backgroundColor = 'pink';
divPink.style.border = '1px solid black';
container2.appendChild(divPink);
// Insert contents inside of divPink.
// Create a h1 inside of pink div.
const h1InsideDiv = document.createElement('h1');
h1InsideDiv.textContent = 'I\'m in a div';
divPink.appendChild(h1InsideDiv);
// Also, create a p inside of pink div too.
const pInsideDiv = document.createElement('p');
pInsideDiv.textContent = 'ME TOO!';
divPink.appendChild(pInsideDiv);
// End of these exercises.

/* EVENTS */
// Events are a kind of magic, kinda. It is like when something is actioned, it is appeared something.
// In a webpage, you can listen and react to these events.
// Three primary ways to do this:
/**
 * Specify functions attributes directly on HTML elements. You can set properties of form on[eventType].
 * On the DOM nodes in your JavaScript.
 * You can attach event listeners to the DOM nodes in your JavaScript.
 */
// Using events with 'BTN' and addEventListener:
const btn = document.querySelector('#btn');
btn.addEventListener('click', alertHelloWorld);

// Creating a function and use it along with addEventListener:
function alertHelloWorld()
{
    alert('Hello World!');
}