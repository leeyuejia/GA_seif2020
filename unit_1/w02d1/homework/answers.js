////////////////////////////////
// Easy Going
////////////////////////////////
// for (let a=1; a<=20; a++) {
//     console.log(a);
// };

////////////////////////////////
// Get Even
////////////////////////////////
// for (let b = 0; b <=200; b++) {
//     if (b%2 === 0) {
//         console.log(b);
//     }
// };

////////////////////////////////
// Fizz Buzz
////////////////////////////////
// for (let c = 0; c<=200; c++) {
//     if (c%(3 * 5) === 0) {
//         console.log("fizzbuzz")
//     } else if (c%5 === 0) {
//         console.log("buzz")
//     } else if (c%3 === 0) {
//         console.log ("fizz")
//     } else {
//         console.log(c);
//     }
// };

////////////////////////////////
// Wild Wild Life
////////////////////////////////
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// plantee[2] = plantee[2] + 1
// console.log(plantee[2]);
// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// wolfy[3] = "Gotham City";
// console.log(wolfy[3]);
// Give D'Art a second hometown by adding "Hawkins"
// dart[4] = "Hawkins";
// console.log(dart[4]);
// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy"
// wolfy[0] = "Gameboy";
// console.log(wolfy[0]);
////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
// const TMNT = ["donatello", "Leonardo", "Raphael", "Michaelangelo"];
// for (x of TMNT) {
//     console.log (x.toUpperCase())
// };

////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\s Moving Case', 'Danjo Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Lige', 'Snatch', 'Fast and Furious'];
let sinking = favMovies.indexOf('Titanic');
console.log (favMovies[sinking] + " is the index " + sinking);
favMovies.pop(); //remove Fast and furious
favMovies.push("Guardian of the Galaxy"); // added guardian of galaxy to the last of the list
favMovies.sort(); //sort array from A-Z
favMovies.reverse(); //sort arrat from Z-a(in a reverse order)
favMovies.shift(); // Remove the first element of the array
let insert = favMovies.splice(2,1,"Inception", "The Dark Knight") //from position 2, remove the next element and replace with the new movie as a new element
console.log (insert + " , " + favMovies);
console.log(favMovies.length);
favMovies.unshift("Prestige");
console.log(favMovies);
//stopped at 7.

////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////