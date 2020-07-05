 ///Ogres


//STARTING POINT

let adventurer = {
    name: 'Hero',
    hitPoint: 20,
    atk:15,
    magicatk:3,
    def:10,
};
let monster = {
    name: 'ogre',
    hitPoint: 20,
    atk:18,
    magicDef:10,
    def:5
};

//ORGE ACTIONS//
const ogreHurt = () => {
monster.hitPoint -= adventurer.atk;
alert(adventurer.name + " has attack " + monster.name);
alert(adventurer.name + ' has ' + adventurer.hitPoint + " and " + monster.name + ' has ' + monster.hitPoint);
ogreTurn();
}

const ogreLaugh = () => {
monster.hitPoint -= adventurer.magicatk;
alert(adventurer.name + " has cast magic on " + monster.name);
alert(adventurer.name + ' has ' + adventurer.hitPoint + " and " + monster.name + ' has ' + monster.hitPoint);
ogreTurn();
}

const ogreScream = () => {
monster.hitPoint -= 0;
alert(adventurer.name + " defended against " + monster.name);
alert(adventurer.name + ' has ' + adventurer.hitPoint + " and " + monster.name + ' has ' + monster.hitPoint);
ogreTurn();
}

//ORGE TURN//
const ogreTurn = () => {
let ogreChoice = ['use atk','use magicdef','use def',]
const choice = prompt('Ogre turn', ogreChoice[Math.floor(Math.random())]);
if (choice === 'use atk') {
   adventurerHurt();
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
const adventurerHurt = () => {
 adventurer.hitPoint -= (monster.atk + adventurer.def);
 alert(monster.name + " has attack " + adventurer.name);
 alert(adventurer.name + ' has ' + adventurer.hitPoint + " and " + monster.name + ' has ' + monster.hitPoint);
 askForAction();
};

const adventurerLaugh = () => {
adventurer.hitpoint -= 0;
alert(monster.name + " has cast shield");
alert(adventurer.name + ' has ' + adventurer.hitPoint + " and " + monster.name + ' has ' + monster.hitPoint);
askForAction();
};

const adventurerScream = () => {
adventurer.hitpoint -= 0;
alert(monster.name + " has defended against " + adventurer.name);
alert(adventurer.name + ' has ' + adventurer.hitPoint + " and " + monster.name + ' has ' + monster.hitPoint);
askForAction();
};


//GAMEFLOW 
const main = () => {
while (adventurer.hitPoint > 0 || monster.hitPoint > 0) {
    showstatus ();
    
    if (adventurer.hitPoint <= 0) {
        alert(monster.name + ' has won')
        break;
    } else if (adventurer.hitPoint <=0) {
        alert(adventurer.name + ' has won')
        break;
    } 
    askForAction ();
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
 ogreHurt();
} else if (choice ==='use magic') {
ogreLaugh();
} else if (choice ==='def') {
  ogreScream ();
} else if (choice ===' restart') {
  main();
} else { 
  alert('Input invalid');
}
};

const gameOver =() => {
const choice = prompt('Restart?', 'Yes / No');
if (choice === 'Yes') {
main();
}
if (choice === 'No') {
alert('Thank you for playing!')
}
};
//ENDPOINT


main();
