/* CONDITIONALS EXAMPLE */
// Here we are going to practice having some fun:
// The select tag with its options:
// Creating two constants.
// Using this "document.querySelector()" to acquired our tags.
const select = document.querySelector('select');
const para = document.querySelector('p'); // When its value is changed, the "setWeather()" function is run.
// We are going to add an Event Listener:
// And the "setWeather" is not created yet.
// Also, the "select" is our select over there and will trigger an event if something is "changed":
select.addEventListener('change', setWeather);
// The function "setWeather()"
function setWeather() // Added with addEventListener.
{
    // Creating the constant "choice"!
    // The assignment value is "select.value".
    // "select.value" is... Our select over there, but precisely its actual value.
    const choice = select.value;
    // In these cases, we are using the === operator.
    // para.textContent means: Put a string inside of this variable (para)
    if (choice === 'sunny')
    {
        para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
    }
    else if (choice === 'rainy')
    {
        para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
    }
    else if (choice === 'snowing')
    {
        para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
    }
    else if (choice === 'overcast')
    {
        para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
    }
    // If we got nothing, just an empty string.
    // This is the final wave, fight!
    else
    {
        para.textContent = '';
    }
}

/* Using ternary operator (?) */
// We cannot define "select" again, we did before. Let's use it again.
// const select = document.querySelector('select');
// What we can do is this:
const selectTheme = document.getElementById('theme');
// This one, yes, we need to create it. We need to select our HTML.
const html = document.querySelector('html');
// This code below said "Select the padding style of the body document... Set the value to 10px."
// The "document.body" selects the begin and end of your BODY.
document.body.style.padding = '10px';
// The function UPDATE.
// This function needs two arguments, bgColor, and textColor:
function update(bgColor, textColor)
{
    // We are going to use "style" background-color for the HTML.
    html.style.backgroundColor = bgColor;
    // Also, set the style color to "textColor" for HTML.
    html.style.color = textColor;
}
// The end of this function.
// Using "addEventListener" here. When "select" changes its value:
selectTheme.addEventListener('change', () => // I don't know what it does mean.
    // Using the ternary operator.
    selectTheme.value === 'black'        // Condition.
    ? update('black', 'white')      // TRUE!
    : update('white', 'black'),     // FALSE!
);
// End of this example.