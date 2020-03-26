// const car = {
// 	color: "blue",
// 	hp: 4000,
//     year: 1989,
//     parts: ['wheels', 'windows'],
//     factory: {
//         name: 'Toyota',
//         country: 'Japan',
//     },
//     drive: () => {
//         console.log('drive forward');
//     },
//     stop: () => {
//         console.log('stop the car');
//     }, 
//     beep: () => {
//         console.log('Dooooo.....');
//     },
//     'first name': "Danny"
// };
// console.log(car['first name']);

// console.log(car);
// let keyName = 'hp';

// console.log(car.hp);
// //it will do an evaluation inside square bracket if it's a varabile passed in
// console.log(car[keyName]);
// //it will not do evaluation on the keyName but just use it as the key.
// console.log(car.parts[1]);
// // car.drive();
// car['drive']();
// // car.stop();
// // car.beep();
// // console.log(car.factory.name);
// // console.log(car.factory);


// const name = "eason";
// const age = 25;
// const person = { name, age };

// console.log(person);

// const objectByInteger = {
//     1: "first one",
//     2: "second one"
// };
// console.log(objectByInteger['1']);

//square bracket and dot sync
// [key] dot syntax key cannot a variable
// let student = {};
// for(let i = 0; i < 5; i++) {
//     student['key' + i] = i;
// }
// console.log(student);

// console.log(person.job);

// person.job = 'Software Engineer';

// if(person.job) {
//     console.log('The person has a job property, ' + person.job);
// } else {
//     console.log('The person doesn\'t have a job property');
// }

// let name = 'yes';
// const char = {
//     name: 'Ogre',
//     HP: 100,
//     DEF: 80,
//     ATK: 50,
//     defend: function() {
//         console.log(this);
//         console.log(this.name + ' defended.');
//     },
//     attack: () => {
//         console.log(this.name + 'attack you.');
//     },
// };

// char['defend'](char);
// let i = 1;
// var obj = { // does not create a new scope
//     i: 10,
//     b: () => console.log(this.i, this),
//     c: function () {
//         console.log(this.i, this);
//     }
// }

// obj.b(); // prints undefined, Window {...} (or the global object)
// obj.c(); // prints 10, Object {...}

// const adventurer = {
// 	name: "Timothy",
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"]
// };

// console.log(adventurer.belongings);
// console.log(adventurer.belongings[0]);

// const adBel = adventurer.belongings;
// for(let i = 0; i < adBel.length; i++) {
//     console.log(adBel[i]);
// }

// const adventurer = {
// 	name: "Timothy",
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"],
// 	companion: {
// 		name: "Velma",
// 		type: "Bat"
// 	}
// };

// console.log(adventurer.companion.name);

// const adventurer = {
// 	name: "Timothy",
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"],
// 	companion: {
// 		name: "Velma",
// 		type: "Bat",
// 		companion: {
// 			name: "Tim",
// 			type: "Parasite"
// 		}  
// 	}
// }

// console.log(adventurer.companion.companion.name);

// const adventurer = {
// 	name: 'Timothy',
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"],
// 	companion: {
// 		name: "Velma",
// 		type: "Bat",
// 		companion: {
// 			name: "Tim",
// 			type: "Parasite",
// 			belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
// 		}  
// 	}
// };
// console.log(adventurer.companion.companion.belongings[2]);

// const movies = [ { title: "Tokyo Story" },  { title: "Paul Blart: Mall Cop" }, { title: "L'Avventura" } ];
// console.log(movies[0].title);
// for (let i=0; i < movies.length; i++) {
// 	console.log(movies[i].title);
// }

// const movie = { title: "L'Avventura", director: "Michelangelo Antonioni", 
// year: 1960 };
// //for ... in loop
// for(let key in movie) {
//     console.log(movie[key]);
// }

// const keys = Object.keys(movie);

// for(let i = 0; i < keys.length; i++) {
//     console.log(movie[keys[i]]);
// }

// const foo = {
//     someMethod:()=>{
//         console.log('oh hai');
//     }
// };

// foo['someMethod']();//logs 'oh hai!'

// const foo = [{someProperty:'weee'}, 2, 3];

// console.log(foo[0].someProperty);

// const foo = [
//     ["0,0", "0,1", "0,2"],
//     ["1,0", "1,1", "1,2"],
//     ["2,0", "2,1", "2,2"]
// ];

// console.log(foo[1][2]); //1,2

// const movies = [ 
//     { title: "Tokyo Story", actors: ['Peter', 'Mark', 'Julia'] },  
//     { title: "Paul Blart: Mall Cop" }, 
//     { title: "L'Avventura" } 
// ];
// console.log(movies[0].actors[0]);

const foo = [
    1,
    "hi",
    () => {
        console.log('fun');
    },
    () => {
        console.log('Ok');
    }
];

foo[3]();