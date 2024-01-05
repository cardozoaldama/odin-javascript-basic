/* We are going to learn about Arrays... */
// Code begins:
console.log('Welcome to the world of Arrays!');

// An array is a special variable, which can hold more than one value:
const gtaCars = ['Banshee', 'ZR-350', 'Sultan'];
// This array is better than:
/**
 * let car1 = 'Banshee';
 * let car2 = 'ZR-350';
 * let car3 = 'Sultan';
 */

// You can create an array like this:
const gtaWeapons = [
    'M4',
    'AK-47',
    'Molotov'
];

// Or you can also create an array, and then provide the elements:
const gtaCitizen = [];
gtaCitizen[0] = 'Male01';
gtaCitizen[1] = 'Male06';
gtaCitizen[2] = 'Female09';

// A good practice is declaring an array with `const`.

/* Creating arrays with `new` keyword. */
// From the constant `gtaLocations` create an new array with these values:
const gtaLocations = new Array('Chinatown', 'Groove Street', 'El Corona');
// All of these methods are same, so we can use array literal method instead of this.

/* Accessing Array Elements */

// The index number is the key and you can put inside of it whatever you like.
// Of course, numbers it must be.
let person1 = gtaCitizen[2];
// The printing out must be the third element.
console.log(person1);
// The index starts with 0, the second element is 1.

/* Changing an Array Element */

// For some reason you could change a value from given index in an array.
console.log(gtaCitizen[0]);
// Changing now the content.
gtaCitizen[0] = 'Female01';
console.log(gtaCitizen[0]);

/* Converting an Array to a String */

// Use the method `toString()` that converts an array to a string of (comma separated) array values.
// Using console.log() should work for now.
console.log(gtaWeapons.toString());

/* Access the Full Array */
// You can access the full array by referring to the array name.
console.log(gtaLocations);
// I think we can use console.table() to access the array.
console.table(gtaLocations);
// This kind of print in console is more effective with arrays than the actual console.log();

/* Arrays are objects */
// For me, right now, it is not a surprise. Arrays are a special type of objects.
// Use `typeof` operator in JavaScript that returns "object" for arrays.
// However, arrays use numbers to access its elements, because objects use names to access its members.

// An example of an array:
const someone = ['John', 'Smith', 66];
// You can access someone's name or last name with numbers.
console.log(someone[0], someone[1]);        // John Smith
// An example of an object:
const box = {firstName: 'Alex', lastName: 'Smith', age: 46};
// You can access box's name or last name by members:
// I think you can print like this:
console.log(box.firstName, box.lastName);
// I wanna play something, and it is actually rewrite those values.
someone[0] = 'Alex';
box.firstName = 'John';
// Now, print the results.
console.log(someone[0], someone[1]);
console.log(box.firstName, box.lastName);

/* Array elements can be Objects */
// Arrays are so special in JavaScript and you can have objects in an array, functions in an array, arrays in an array... Awesome.
// Your variables could be objects.
// Let's create a box which has arrays in an array.
const gtaBox = [];
// Literally, the whole array in array.
gtaBox[0] = gtaCars;
gtaBox[1] = gtaCitizen;
gtaBox[2] = gtaLocations;
gtaBox[3] = gtaWeapons;
// It is beautifully. Looks like a matrix or something.
console.table(gtaBox);

/* Array properties and methods */
// You have built-in array properties and methods here, in JavaScript!
console.log(gtaBox.length);     // Returns the number of elements.
console.log(gtaWeapons.sort());   // Sorts the array.
// Also, you can access the first element like this:
console.log(gtaBox[0]);
// And the last element like this:
console.log(gtaBox[gtaBox.length - 1]);

/* Adding array elements */
// Use push() method and it is easy to use.
// Before:
console.table(gtaWeapons);
// After:
gtaWeapons.push('Deagle');
console.table(gtaWeapons);
// You can add new elements using the length property:
// Before:
console.table(gtaCitizen);
// After:
gtaCitizen[gtaCitizen.length] = 'Male11';
console.table(gtaCitizen);
// Carefully don't add highest indexes because you will get in trouble with undefined values by empty holes in an array!
console.log(gtaCars[434]);      // Undefined.
const testingUndefinedArray = ['A', 'B', 'C', 'D'];
testingUndefinedArray[44] = 'Yes';
console.table(testingUndefinedArray); // From 4 to 43 is undefined. XD

/* Associative Arrays */
// Many programming languages support arrays with named indexes.
// However, JavaScript does not support these features.
// I don't know why, and I don't know what is an associative array, but well, what do we can do?
// In JavaScript, arrays always use numbered indexes.
// Don't use named indexes, because JS will redefine an array to an object.

// Example:
const persona = [];
persona[0] = 'Felix';
persona[1] = 'Fecit';
persona[2] = 18;
console.log(persona.length);
console.log(persona[0]);

/* The difference between arrays and objects */
// Arrays are numbered indexes.
// Objects are named indexes.

// Use objects when you want the element names to be strings.
// Use arrays when you want the elements name to be numbers.

// Remember: JS has a built-in array constructor `new Array()`.
// Use the literal instead:
const points = new Array();
const commas = [];
// These are the same form of array creation.

// This creation...
const example1 = [50];
// is not the same as:
const example2 = new Array(50);
// The example1 creates an array with one element, and element's value is 40.
// The example2 creates an array with 50 undefined elements.

// Use `instanceof` if a variable is actually an array.
// This example returns true:
console.log(gtaBox instanceof Array);