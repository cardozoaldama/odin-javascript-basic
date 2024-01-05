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