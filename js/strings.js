/* STRINGS IN JAVASCRIPT! */
// We are going to use string data type with some functions just right here.
// These some commons functions:
/**
String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String charAt()
String charCodeAt()
String split()
*/

// Initial variables:
let firstName = 'Calamardo';
let lastName = 'Calamarity';
let abecedary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// Normally will print:
console.log(firstName, lastName);
console.log(abecedary);
// String length:
console.log(abecedary.length); // This abecedary has 26 letters.

/* Extracting string parts: */
// Three methods: slice(start, end), substring(start, end), substr(start, length);
// Let's go!
console.log(firstName.slice(0, 7));  // It returns "Calamar". The seven (end) is not included.
console.log(lastName.substring(0, 7)); // It returns... "Calamar" too!
console.log(abecedary.substr(0, 7)); // It returns: ABCDEFG. It is deprecated.

/* REPLACING STRING CONTENT: */
let welcomeBack = 'Welcome pal, friend!';
// Using the function and it returns a string. It doesn't change its string.
// Notice that our replace() is case sensitive.
let newWelcomeBack = welcomeBack.replace('pal', 'back'); // Welcome back, friend!
// Printing!
console.log(newWelcomeBack);
// You could use also regular expressions to enhance your replace() method.
newWelcomeBack = welcomeBack.replace('PAL', 'backend'); // It doesn't work.
console.log(newWelcomeBack); // Welcome pal, friend! (Same as welcomeBack variable)
// If you really want to, we can omit case sensitive with a regular expression: /i
newWelcomeBack = welcomeBack.replace(/PAL/i, 'backend'); // Without using quotes when you are using regular expressions.
console.log(newWelcomeBack); // Now it works! Welcome backend, friend!
// You can also use "replaceAll()" and JavaScript introduces it in 2021.
console.log(welcomeBack.replaceAll('friend', 'FRIEND')); // For me, it's working.