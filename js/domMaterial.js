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
const paraRed = document.createElement('p');
paraRed.textContent = 'Hey I\'m red!';
paraRed.style.color = 'red';
container2.appendChild(paraRed);

const h3Blue = document.createElement('h3');
h3Blue.textContent = 'I\'m a blue h3!';
h3Blue.style.color = 'blue';
container2.appendChild(h3Blue);