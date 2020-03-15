const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(`After sort: ${favMovies.sort()}`);
favMovies.pop();
console.log(`After pop: ${favMovies}`);
favMovies.push('Guardians of the Galaxy');
console.log(`After reverse: ${favMovies.reverse()}`);
favMovies.shift();
console.log(`After shift: ${favMovies}`);
const movie = favMovies.unshift();
console.log(`After unshift: ${movie}`);
favMovies.splice(favMovies.indexOf('Django Unchained'), 1, 'Avatar');
console.log(`After splice: ${favMovies}`);
let alterMovies = favMovies.slice(Math.floor(favMovies.length / 2), favMovies.length);
console.log(`After slice: ${alterMovies}`);