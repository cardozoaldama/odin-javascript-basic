/* CONDITIONALS EXAMPLE */
// Here we are going to practice having some fun:
// The select tag with its options:
// Creating two constants.
// Using this "document.querySelector()" to acquired our tags.
const select = document.querySelector('select');
const para = document.querySelector('p');
// We are going to add an Event Listener:
// And the "setWeather" is not created yet.
// Also, the "select" is our select over there and will trigger an event if something is "changed":
select.addEventListener('change', setWeather);
// The function "setWeather()"
function setWeather()
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
    else
    {
        para.textContent = '';
    }
}