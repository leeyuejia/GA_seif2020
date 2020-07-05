//1. Create an object that has a property that is an array. Log one of the elements of that array.
const foodChoice = {
    fastFood: ['KFC', 'MacD', 'Long John Silver', 'BurgerKing'],
    restaurantFood: {
        japan: ['SushiTei', 'ichiban boshi', 'sakae sushi'],
        chinese: 'Crystal Jade',
        german: 'Brozeit'
    }
}
console.log('Choice of food is ' + foodChoice.fastFood[2])
console.log(Object.keys(foodChoice.restaurantFood)[1])
//2. Create an object that has a property that is an object. Log one of the properties of that inner object.
let restaurantFoodKeys = foodChoice.restaurantFood
for (let key in restaurantFoodKeys) {
    if (restaurantFoodKeys[key] == 'Crystal Jade')
        console.log(key)
}
//3. Create an array that has an object in it. Log one of the properties of that object.
const chips = [
    {
        cheapBrand: 'jack and jill',
        popularity: 'good'
    },
    {
        goodBrand: 'Lays',
        popularity: 'Not good'
    },
    {
        expensiveBrand: 'Kettles',
        popularity: 'good'
    }
]
console.log(Object.keys(chips[1])[1])

//4. Create an array that has an array as one of its elements. Log one of the elements of the inner array.
const array = [
    ['shopping', 'eating', 'pinic', 'hotel'], ['netflix', 'gaming', 'boardgame', 'cooking']
]
console.log(array[0][2])

//1. Create a function that returns an object. Log a value of that object (hint: call the function and then call a property on the return value).
const returnObject = () => {
    return foodChoice.restaurantFood
};
console.log(returnObject().chinese)
//2. Create a function that returns an object that has an array. Log one of the elements of that array.
console.log(returnObject().japan[0])
//3. Create a function that returns a function. Call that inner function

const weapon = ['MP5', 'GPMG', 'SAR21']
console.log(weapon.map(words => words + 'silencer'))

const selectWeapon = (silencer) => {
    console.log(weapon.map(attachment => attachment + ' ' + silencer() + ' Is attached'))
}
const silencer = () => {
    return 'silencer';
}
selectWeapon(silencer)

//Model a Vending Machine
const vendingMachine = {
    snacks: [
        { price: 2, name: 'KitKat' },
        { price: 2.5, name: 'Hershey Bar' },
        { price: 5, name: 'Awfully chocolate' }
    ],
    vend: (choice) => {
        return vendingMachine.snacks[choice - 1].name;
    }
}

console.log(vendingMachine.vend(1))
// CALLBACKS
const operateNums = (num, callBack) => {
    return callBack(num)
}
const multByTwo = (num) => {
    return num * 2;
};
const squareNum = (num) => {
    return num * num;
}
console.log(operateNums(3, multByTwo))
console.log(operateNums(4, squareNum))

// FUNCTION DEFINITION PLACEMENT
// const bar = () => {
//     console.log('bar here');
// }
// const foo = () => {
//     console.log('foo here');
// }
// foo();
// bar();

// ERROR READING
// foo(); //Calling function should be place after the funct definition

// const foo //missing and equal sign// = () =>{
//     console.log('hi');
// }

//section 3 
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

//EVERY 
console.log(nums.every(check => check >= 0));
console.log(panagram.every(word => word.length < 8));
//FILTER
console.log(nums.filter(numbers => numbers < 4));
console.log(panagram.filter(words => words.length % 2 === 0));
//Find
console.log(nums.find(numbers => numbers % 5 === 0));
console.log(panagram.find(theWord => theWord.length > 4));
//Findindex
console.log(nums.findIndex(numbers => numbers % 3 === 0));
console.log(panagram.findIndex(theWord => theWord.length < 2));
//For Each
console.log(nums.forEach(numbers => console.log(numbers * 3)));
// FOR EACH Number push it into a new array
let newArray = []
nums.forEach(numbers => newArray.push(numbers * 3))
// OR
for (const numbers in nums) {
    newNum = numbers * 3
    newArray.push(newNum)
}
console.log(newArray)
//Map
const newArrayOfNums = nums.map(numbers => numbers * 100)
console.log(newArrayOfNums)
const panagramUpper = panagram.map(words => words.toUpperCase())
console.log(panagramUpper)
let array1 = []
panagram.map(words => array1.push(words.toUpperCase()))
console.log(array1)
//Some
console.log(nums.some(number => number % 7 === 0));
console.log(panagram.some(words => words.split('').includes('a')))
//Reduce
console.log(nums.reduce((currentSum, nextNum) => currentSum + nextNum));
console.log(panagram.reduce((currentWord, nextNum) => currentWord + ' ' + nextNum));
//sort
console.log(nums.sort((a, b) => a - b))
console.log((nums.sort((a, b) => a - b)).reverse())
console.log(panagram.join().toLowerCase().split(',').sort())
console.log(panagram.join().toLowerCase().split(',').sort().reverse())

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
const arrayOfLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const sortedPanagram = panagram.join('').toLowerCase().split('').sort()
console.log(sortedPanagram)

function removeDuplicates(arr) {
    return arr.reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], []);
    //I found this solution online,but I do not understand what does the false returns. ie, "[...acc,curr], []"
}
console.log(removeDuplicates(sortedPanagram))
console.log(arrayOfLetters.join())
console.log(removeDuplicates(sortedPanagram).join() === arrayOfLetters.join())

const products = [
    {
        "name": "allen wrench",
        "price": 2.99,
        "description": "handy tool"
    },
    {
        "name": "cornucopia",
        "price": 5.99,
        "description": "festive holiday decoration"
    },
    {
        "name": "banana",
        "price": 0.99,
        "description": "full of potassium"
    },
    {
        "name": "guillotine (cigar)",
        "price": 10.59,
        "description": "behead your stub"
    },
    {
        "name": "jack-o-lantern",
        "price": 3.99,
        "description": "spooky seasonal fun"
    },
    {
        "name": "doggie treat (box)",
        "price": 5.99,
        "description": "fido loves 'em"
    },
    {
        "name": "egg separator",
        "price": 3.99,
        "description": "it separates yolks from whites"
    },
    {
        "name": "LED lightbulb",
        "price": 6.55,
        "description": "It's super-efficient!"
    },
    {
        "name": "owl pellets",
        "price": 3.99,
        "description": "Don't ask what they used to be."
    },
    {
        "name": "flag",
        "price": 5.99,
        "description": "catches the breeze"
    },
    {
        "name": "hair brush",
        "price": 6.99,
        "description": "fine boar bristles"
    },
    {
        "name": "iridium (one gram)",
        "price": 19.36,
        "description": "corrosion-resistant metal"
    },
    {
        "name": "quark",
        "price": 0.01,
        "description": "Very small"
    },
    {
        "name": "turtleneck",
        "price": 19.99,
        "description": "available in black and slightly-darker black"
    },
    {
        "name": "kaleidoscope",
        "price": 8.25,
        "description": "tube with moving plastic pieces inside"
    },
    {
        "name": "mitt (leather)",
        "price": 15,
        "description": "regulation sized"
    },
    {
        "name": "nothing",
        "price": 10,
        "description": "Hey, if you pay us, we won't ask any questions."
    },
    {
        "name": "violin",
        "price": 2000,
        "description": "Talk about a JS fiddle..."
    },
    {
        "name": "yoyo",
        "price": 1,
        "description": "We had to pull some strings to get this one in."
    },
    {
        "name": "pincushion",
        "price": 1.99,
        "description": "You'll get 'stuck' on it"
    },
]
//filter for products less than $10 
//USING LOOP
let filterProducts = []
for (let index = 0; index < products.length; index++) {
    if (products[index].price < 10) {
        filterProducts.push(products[index].name)
    }
};
console.log(filterProducts)
//USING filter() , however It returns many array with each word in an array
const modifiedWords = products.filter((word, index, arr) => {
    let filterProducts = []
    if (arr[index].price < 10) {
        filterProducts.push(arr[index].name)
    } else {
        return false
    }
    console.log(filterProducts)
})
console.log(modifiedWords)

//USING FILTER() 2, However filtered returns array of objects.

console.log(products.filter(element => element.price < 10))

//SORT
console.log(products.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));


