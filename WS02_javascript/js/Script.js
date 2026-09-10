// STEP 1: Print text to the browser console is string ""
console.log("Hello World!");

// STEP 2: Variables

// Store text values in variables

const userName = "Kasperi";
const favoriteAnimal = "Koira";



// Print the variables to the console
console.log("My name is " + userName); 
console.log("My favorite animal is " + favoriteAnimal);
// STEP 3: User interaction
// Display a pop-up message
alert("Tervetuloa hienoille nettisivuilleni");



// Ask the user for their name
const visitorName = prompt("Mikä sinun nimesi on?");

// Print the user's answer
console.log(visitorName);
console.log("Terve " + visitorName + "! Tervetuloa javacriptin pariin!");

// Ask the user for their favorite animal
const visitorFavoriteAnimal = prompt("Mikä on sinun suosikkieläimesi?");

// Create a sentence using both answers
console.log("Terve " + visitorName + "! Sinun lempi oliosi on " + visitorFavoriteAnimal + ".");
// console.log("Hello, " + visitorName + "! Your favorite animal is " + visitorFavoriteAnimal + ".");

// ⭐⭐ BONUS Ask the user for their favorite animal.If their favorite animal is "Blue Elephant", print: Great choice! That's my favorite animal too!
if (visitorFavoriteAnimal === favoriteAnimal || visitorFavoriteAnimal === "koira") {
    console.log("Great choice! That's my favorite animal too!");
} else {
    console.log("Nice! Your favorite animal is " + visitorFavoriteAnimal + ".");
}
// ⭐⭐ BONUS Otherwise, print: Nice! Your favorite animal is [animal]. Can you figure out how to do this using if / else?

// const visitorFavoriteAnimal = prompt("What is your favorite animal?");