// Take it Easy
let rainBow = ['red','orange','yellow','green','blue','indigo','violet'];
console.log(rainBow[rainBow.indexOf('orange')]);

const yueJia = {
    favouriteFood: 'Ba Chor Mee',
    hobby: 'Design people(设计人)',
    place: 'Smallville',
    favDataType: {
        dataType: 'String',
        reason: ['simple','easy to use','easy to understand']
    }
}
console.log(yueJia.hobby)

//crazy object
const crazyObject = {
    taco: [{meat: 'steak',
           cheese: ['panela', 'queso', 'chihuahua']},
           {meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
          ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [{
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
      ]
    }
  }
  console.log(crazyObject.taco[1].salsa[crazyObject.taco[1].salsa.indexOf('omg my mouth is burning')]);
  console.log(crazyObject.larry.quotes[crazyObject.larry.quotes.indexOf('Pretty pretty prettayyyyy good')]);
  console.log(crazyObject.larry.nicknames[1])
  console.log(crazyObject.larry.characters[2].favourtieHobby)
let objectKeys = Object.keys(crazyObject.larry.characters[1]);
console.log(objectKeys.length)
console.log(objectKeys[0])

crazyObject.larry.quotes.push('I\m trying to elevate small talk to medium talk')
console.log(crazyObject.larry.quotes)

