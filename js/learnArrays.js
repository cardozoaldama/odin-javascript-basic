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