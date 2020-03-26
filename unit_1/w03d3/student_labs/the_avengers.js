// const ironMan = {
//     regularName: 'Anthony Edward "Tony" Stark',
//     abilities: ['genius-level intellect', 'proficient scientist and engineer', 'powered armor suit'],
//     marvelMovieAppearances: {
//         ironMan: true,
//         theHulk: true,
//         ironManTwo: true,
//         thor: false,
//         captainAmerica: false,
//         theAvengers: true,
//         ironManThree: true,
//         thorTwo: false,
//         captainAmericaTwo: false,
//         guardiansOfTheGalaxy: false,
//         avengersTwo: true,
//         antMan: false,
//         captainAmericaThree: true,
//         doctorStrange: false,
//         guardiansOfTheGalaxyTwo: false,
//         spiderManHomecoming: false,
//         thorThree: false,
//         blackPanther: false,
//         avengersThree: true
//     },
//     jarvisAreYouThere: () => {
//        console.log('At your service, sir')
//     }
// }
// console.log(ironMan.abilities[2])
// let i = 0
// while (i<ironMan.abilities.length) {
//     console.log(ironMan.abilities[i])
//     i++;
// };
// console.log(ironMan.marvelMovieAppearances.spiderManHomecoming);
// ironMan.marvelMovieAppearances.spiderManHomecoming = true;
// ironMan.jarvisAreYouThere();

// const createCaptain = () => {
//         return {
//             abilities: ['America butt', 'Shield bash', 'Peak Human Strength'],
//             aliases: {
//                 superheroName: 'Captain America'
//             },
//             sayPhrase:() => {
//                 return 'I can do this all day'
//             }
//         }

//     };
// console.log(createCaptain().aliases.superheroName)
// console.log(createCaptain().abilities[2])
// console.log(createCaptain().sayPhrase());

// const blackWidow = {
//     aliases: {
//         realName: 'Natasha Alianovna Romanova',
//         otherNotableAliases: ['Nat','Natalie Rushman','Lucy']
//     }
// }
// console.log(blackWidow.aliases.realName)
// console.log(blackWidow.aliases.otherNotableAliases[1])

/// Avengers Nested
// const theAvengers = [
//     { name: 'Tony Stark', superheroName: 'Iron Man'},
//     { name: 'Steve Rogers', superheroName: 'Captain America' },
//     { name: 'Bruce Banner', superheroName: 'The Hulk'},
//     { name: 'Thor' },
//     { name: 'Natasha Romanoff', superheroName: 'Black Widow' },
//     { name: 'Clint Barton', superheroName: 'Hawkeye' }
//   ]

// for (let i=0; i<theAvengers.length; i++) {
//     console.log(theAvengers[1].name)
// };

// const instruments = {
//     banjo: ["1920 gibson", "deering", "washburn"],
//     guitar: {
//       acoustic: ["martin", "taylor", "santa cruz", "gibson"],
//       electric: ["fender Strat", "telecaster", "PRS", "languedoc"],
//       nylon: ["baldwin", "cordoba"]
//     },
//     mandolin: ["eastman", "weber", "collings"]
//   }

//   console.log(instruments.guitar.electric[1]);
//   console.log(instruments.guitar.acoustic[2]);
//   console.log(instruments.banjo[2]);
//   console.log(instruments.mandolin[1]);

//   for(Eguitar of instruments.guitar.electric) {
//       console.log(Eguitar)
//   }

//   instruments.vocal = ['U2','radiohead']
//   console.log(instruments)

// const garmonbozia = {
//     meltedFace: true,
//     wobblyArms: true,
//     mysteryMeats: [
//       'Schlimmbinooks',
//       'blangs',
//       { place: 'Akrotiri', treasures: ['Minoan temples', 'volcanoes'] },
//       { type: 'Yuck-tops', deliverables: [
//         'Nevermind',
//         { zone: 'safety-zone' },
//         { zone: false, true: true },
//         () => {
//           return () => {
//             return () => {
//               return () => {
//                 return () => {
//                   return { website: 'Gossipcop.com', what: {
//                     offering: 'creamed corn', location: 'dark'
//                   }
//                   }
//                 }
//               }
//             }
//           }
//         }
//        ]
//       }
//     ]
//   }
//   console.log(garmonbozia.mysteryMeats[3].deliverables[3]()()()()().what.offering)

//Extra Methods
const person = {
    jump: () => {
        console.log('fly!');
    }
};

person.jump();

const generateCar = ()=>{
    return {
        drive(){
            console.log("Vroom");
        }
    }
}

generateCar().drive();

const account = {
    tweet: () => {
        return {
            message: "fun"
        }
    }
}
console.log(account.tweet().message);

const me = {
    foo: () =>{
        return {
            array: [2.5, 7, true]
        }
    }
}
console.log(me.foo().array[1]);

const baz = {
    foo:()=> {
        return{
            matt: {
                travel: 'boat'
            }
        }
    }
};
console.log(baz.foo().matt.travel);

const factory ={
    createCar:()=> {
        return {
            startEngine:()=> {
                return 'yeah'
    }
    }
}
};

console.log(factory.createCar().startEngine());

const matt = {
    blink: () =>{
        return ()=>{
            console.log('hi')
        }
    }
}

matt.blink()();

const list = [
    'dogs',
    false,
    3.5,
    ()=>{
        return {
            funStuff: ()=>{
                console.log('yaaassss');
            }
        }
    }
];

list[3]().funStuff()

const foo = [
    'asdfasdf',
    'matt',
    false,
    6,
    ()=>{
        return ()=>{
            console.log('yes!');
        }
    },
    {
        dog:'blue'
    }
];
foo[4]()();