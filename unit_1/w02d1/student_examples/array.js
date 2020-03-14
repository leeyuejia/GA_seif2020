
const num = 0;
const str = 'strings are cool';
const bool = true;
const arr = [];


console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof arr);
console.log(Array.isArray(arr))

const ghostBusters = ["Venkman", "Spengler", "Stantz",
    "Zeddemore", "Melnitz", "Barrett", "Tully"];
console.log(ghostBusters[0]);
console.log(ghostBusters[1]);
console.log(ghostBusters.length);
console.log(ghostBusters[4 - 1]);
const veggies = ["red pepper", "leek", "pumpkin", "cauliflower"];
veggies[1] = "spinach";
console.log(veggies);

const numbers = [21, 18, 5, 3, 2, 1, 1];
numbers[2] = 'red pepper';
console.log(numbers);
numbers[0] *= 10;
console.log(numbers);

const shortArray = ['first', 'middle', 'last'];
console.log(shortArray[Math.floor(shortArray.length / 2)]);

const kitchenSink = ["Dirty spoon", "sponge", "plate with gunk", "soap", "water"];
for (let i = 0; i < kitchenSink.length; i += 2) {
    console.log("This is in my sink: " + kitchenSink[i]);
};

const drSeuss = ["Cat in the Hat", "Green Eggs and Ham", "Grinch",
    "Thing One", "Thing Two", "Cindy Loo Who", "JoJo McDodd"];
for (let i = 0; i < drSeuss.length; i++) {
    if (i % 2 === 1) {
        console.log('i ' + i + ' ' + drSeuss[i]);
    }
}

const foodSelections = ["pizza", "apple", "seaweed", "artichoke", "tea", "ice cream", "sushi", "tacos"];

for (let i = 0; i < foodSelections.length; i++) {
    if ((i === 5) || (i % 2 === 0)) {
        console.log(foodSelections[i]);
    }
};

// log the element index that is divisible by 2 and 3
for (let i = 0; i < foodSelections.length; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
        console.log(foodSelections[i]);
    }
}

const looneyTunesChars = ["Bugs Bunny", "Daffy Duck", "Tweety",
                        "Sylvester", "Elmer Fudd", "Porky Pig", "Taz"];
let randomNumber = Math.floor(Math.random() * looneyTunesChars.length);
console.log(looneyTunesChars[randomNumber]);
for(let i = 0; i < looneyTunesChars.length; i++) {
    if(i % 2 === 1) {
        console.log(looneyTunesChars[i]);
    }
}
