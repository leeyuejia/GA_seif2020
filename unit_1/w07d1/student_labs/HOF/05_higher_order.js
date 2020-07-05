const SCRIPTS = require('./scripts.js');

function characterScript (code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}

function countBy (items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({ name, count: 1 });
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

function textScripts (text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : 'none';
    }).filter(({ name }) => name != 'none');

    let total = scripts.reduce((n, { count }) => n + count, 0);
    if (total == 0) return 'No scripts found';

    return scripts.map(({ name, count }) => {
        return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(', ');
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
/*
let arrays = [[1, 2, 3], [4, 5], [6]];

let reducedArray = arrays.reduce((acc, curr) => {
        let NewArr = acc.concat(curr)
        return NewArr 
});

console.log(reducedArray)


// for (let i = 3; i >= 0; i--) {
//     console.log(i)
// }


const loop = (start,condition, step, action) => {
    for (let i = start; condition(i); i = step(i)) {
        action(i)
    }
}
loop(3, n => n > 0, n => n - 1, console.log);

//EVERY METHOD
function every(array, test) {
    array.every(test);
};
//LOOP METHOD
function every(array, test) {
    for (el of array) {
        if (test(el)) {
        } 
        else 
        return false;
    }
    return true;
};
//SOME METHOD
function every(array,test) {
    return array.some(test)
}
console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));

// ARRAY METHODS

//filter
console.log(SCRIPTS.filter(script => script.direction === "ttb"))

//map
let newArr = []
SCRIPTS.map(el => newArr.push(el.name))
console.log(newArr)

// HELPER
function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
 }

 let answer = SCRIPTS.reduce((acc, curr) => {
    return characterCount(acc) > characterCount(curr) ? acc: curr})
console.log(answer)

//Composability

function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
 }

let arrayLiving = []
let arrayNonLiving = []
SCRIPTS.map(el => {
    if (el.living === true)
    arrayLiving.push(el.year)
    else arrayNonLiving.push(el.year)
})

console.log(Math.floor(average(arrayLiving)))
console.log(Math.round(average(arrayNonLiving)))*/

