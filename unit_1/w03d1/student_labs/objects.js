// const person = {firstname:'Bond', lastname:'James', services:'MI6', age:'unknown', breed:"Humans"};

// const dog = {name:'Moonflake', services:'MI6', age:'unknown', breed:"unknown"};
// console.log(dog);

// const celebrity = {name:'Christian', age:'47', isCurrentlyTweeting: true};
// console.log(celebrity);
// console.log(celebrity.age);
// console.log(celebrity.isCurrentlyTweeting);
// if (celebrity.isCurrentlyTweeting === true) {
//     console.log('turn off twitter');
// }


// const macros = {};

// macros.protein = 'tempeh';
// macros.carbohydrates ='spuds';
// macros.fats = 'olive oil';

// console.log(macros);

// const guitar = {string:'6', isAcoustic:true,};

// guitar.string = 100;
// console.log(guitar.string);

// guitar.isAcoustic = false;
// console.log(guitar.isAcoustic);

// guitar.belongsTo = 'Dimebag Darrell';
// console.log(guitar.belongsTo);

// guitar.belongsTo = 'Mr.Rogers';
// console.log(guitar);

// const testObjects = {};
// testObjects['this is a test'] = 'test'
// console.log(testObjects['this is a test']);
// testObjects['2'] = "I\m just messing around with objects";
// console.log(testObjects['2']);

///STUDENT LABS, OBJECT_LAB

// const me = {};

// me.name = 'Lee Yue Jia';
// me.age = '32';
// me.email ='leeyuejia@gmail.com';
// console.log(me);
// console.log(me.name);
// me.age = 1000 + " years old"
// console.log(me.age);
// me['place of residence'] = "Harborfront";
// console.log(me['place of residence']);

///Slimer

// const monster = {
//     name: "Slimer",
//     color: "greenish",
//     type: "plasm or ghost or something"
//  };
//  console.log(monster.name);
//  monster.type = 'creature';
//  monster.age = 6
//  console.log('type is ' + monster.type + ' age is ' + monster.age);

 ///Ogres


//STARTING POINT

let adventurer = {
        name: 'Hero',
        hitPoint: 100,
        atk:15,
        magicatk:3,
        def:10,
    };
let monster = {
        name: 'ogre',
        hitPoint:120,
        atk:18,
        magicDef:10,
        def:5
    };

const main = () => {
        while (adventurer.hitPoint > 0 || monster.hitPoint >0) {
            showstatus ();
            askForAction ();
            if (adventurer.hitPoint <= 0) {
                alert(monster.name + ' has won')
                break;
            } else if (adventurer.hitPoint <=0) {
                alert(adventurer.name + ' has won')
                break;
            } 
        }
        gameOver();
    };

 const showstatus =() => {
     alert(adventurer.name + " have " + adventurer.hitPoint + "and" + monster.name + "have" + monster.hitPoint);
 }
 const askForAction = () => {
     showstatus();
     const choice = prompt('An Orge had appear!', 'use atk / use magic / def / restart');
     if (choice === 'use atk') {
         ogrehurt();
      } else if (choice ==='use magic') {
        orgeLaugh();
      } else if (choice ==='def') {
          orgeScream ();
      } else if (choice ===' restart') {
          start();
      } else { 
          alert('Input invalid');
      }
    };

//ENDPOINT
const gameOver =() => {
    const choice = prompt('Restart?', 'Yes / No');
    if (choice === 'Yes') {
        main();
    }
    if (choice === 'No') {
        console.log('Thank you for playing!')
    }
};

//ORGE ACTIONS//
const orgehurt = () => {
    monster.hitPoint -= adventurer.atk;
    alert(adventurer.name + " has attack " + monster.name);
    alert(adventurer.name + ' has ' + adventurer.hitPoint + " and " + monster.name + ' has ' + monster.hitPoint);
    orgeturn();
}

const orgeLaugh = () => {
    monster.hitPoint -= adventurer.magicatk;
    alert(adventurer.name + " has cast magic on " + monster.name);
    alert(adventurer.name + ' has ' + adventurer.hitPoint + " and " + monster.name + ' has ' + monster.hitPoint);
    orgeturn();
}

const orgeScream = () => {
    monster.hitPoint -= 0;
    alert(adventurer.name + " defended against " + monster.name);
    alert(adventurer.name + ' has ' + adventurer.hitPoint + " and " + monster.name + ' has ' + monster.hitPoint);
    orgeturn();
}

//ORGE TURN//
const orgeTurn =() => {
    let orgeChoice = ['use atk','use magicdef','use def',]
    const choice = prompt('Orge turn', orgeChoice[Math.floor(Math.random())]);
    if (choice === 'use atk') {
       adventurerhurt();
     } else if (choice ==='use magicdef') {
       adventurerLaugh();
     } else if (choice ==='use def') {
       adventurerScream ();
     } else { 
         alert('Input invalid');
         adventurerTurn ();
     }
   };

//ADVENTURER TURN//
 const adventurerhurt = () => {
     adventurer.hitpoint -= (monster.atk + adventurer.def);
     alert(orge.name + " has attack " + adventurer.name);
     alert(adventurer.name + ' has ' + adventurer.hitPoint + " and " + monster.name + ' has ' + monster.hitPoint);
     askForAction();
 };

 const adventurerLaugh = () => {
    adventurer.hitpoint -= 0;
    alert(orge.name + " has cast shield");
    alert(adventurer.name + ' has ' + adventurer.hitPoint + " and " + monster.name + ' has ' + monster.hitPoint);
    askForAction();
};

const adventurerScream = () => {
    adventurer.hitpoint -= 0;
    alert(orge.name + " has defended against " + adventurer.name);
    alert(adventurer.name + ' has ' + adventurer.hitPoint + " and " + monster.name + ' has ' + monster.hitPoint);
    askForAction();
};



main();
