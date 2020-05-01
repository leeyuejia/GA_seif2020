const citizens = ['😷', '😷', '😷', '😷', '😷', '😷', '😷', '😌', '😷'];

const isWearingMask = citizen => {
    return citizen === '😷';
};

// accepting a predicate function but return a boolean
const allWearingMasks = citizens.every(isWearingMask);

console.log(allWearingMasks);

const someWearingMasks = citizens.some(isWearingMask);

console.log(someWearingMasks);


// accepting a predicate function but return a array
const justTheCitizensWearingMasks = citizens.filter(isWearingMask);

console.log(justTheCitizensWearingMasks);

const isNotWearingMask = citizen => {
    return citizen !== '😷';
};

// accepting a predicate function but return a element
const theCitizenNotWearingMask = citizens.find(isNotWearingMask);

console.log(theCitizenNotWearingMask);

// accepting a predicate function but return a index
const theIndexOfCitizenNotWearingMask = citizens.findIndex(isNotWearingMask);

console.log(theIndexOfCitizenNotWearingMask);


// accepting a transformation function to transform the original array into a new array
const residentsBeforeCircuitBreaker = [
    '🤑',
    '🤧',
    '🤨',
    '😏',
    '😘',
    '😃',
    '🤬',
    '😭',
    '😨'
];

const circuitBreaker = () => {
    return '🏡😷';
};

const residentsDuringCircuitBreaker = residentsBeforeCircuitBreaker.map(
    circuitBreaker
);

console.log(residentsDuringCircuitBreaker);

// for loop replacement without returning a new array
residentsBeforeCircuitBreaker.forEach(el => {
    console.log(el);
});

// Reduce - total/sum/max/min/combined
// datasource:
// https://data.europa.eu/euodp/en/data/dataset/covid-19-coronavirus-data
const data = require('./covid-19-sg.json');
// const maxData = data.reduce((maxData, dayData) =>
//     dayData.cases > maxData.cases ? dayData : maxData
// );
// console.log(maxData);


// const totalConfirmed = data.reduce((totalConfirmed, dayData) => {
//     totalConfirmed += parseInt(dayData.cases);
//     return totalConfirmed;
// }, 0);
// console.log(totalConfirmed);


const totalConfirmed = data.reduce(
    (totalConfirmed, { cases }) => (totalConfirmed += parseInt(cases)),
    0
);
console.log(totalConfirmed);

// The splice() method changes the contents of an array
// by removing or replacing existing elements and/or adding
// new elements in place.
const ingredients = ['🌶', '🍅', '🥕', '🥦'];

while (ingredients.length > 0) {
    console.log(`Currently chopping ${ingredients[0]}`);
    ingredients.splice(0, 1);
}

console.log('👩‍🍳👨‍🍳 All ingredients chopped!!', ingredients);


function range (start, end, step) {
    if (!step) step = 1;
    let array = [];

    if (step > 0) {
        for (let i = start; i <= end; i += step) array.push(i);
    } else {
        for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
}

function sum (array) {
    let total = 0;
    for (let i = 0; i < array.length; i++)
        total += array[i];
    return total;
}

console.log(sum(range(1, 10)));


Array.prototype.sum = function () {
    let total = 0;
    for (let i = 0; i < this.length; i++) total += this[i];
    return total;
};

console.log([1, 2, 3, 4, 5].sum());
console.log([1, 2, 3].sum());


console.log(range(1, 10, 1).sum());


for (let i = 0; i < 10; i++) {
    console.log(i);
}
 
function repeatLog (n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}
 
function repeat (n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}
 
repeat(3, console.log);
 
let labels = [];
repeat(5, i => {
    labels.push(`Unit ${i + 1}`);
});
console.log(labels);


function greaterThan (n) {
    return m => m > n;
}
let greaterThan10 = greaterThan(10);

// console.log(greaterThan10);
console.log(greaterThan10(11));
// → true


function verbose (f) {
    return (...args) => {
        console.log('calling with', args);
        let result = f(...args);
        console.log('called with', args, ', returned', result);
        return result;
    };
}

// console.log(Math.min(3, 2, 1));
console.log(verbose(Math.min)(3, 2, 1));


function unless (predicate, then) {
    if (!predicate) then();
}

const hasCEOApproved = false;
const workFromHome = () => {
    console.log('Work From Home');
};
unless(hasCEOApproved, workFromHome);
