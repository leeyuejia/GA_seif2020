# HIGHER-ORDER FUNCTIONS

# Objectives
1. Explain predicate function
1. Use predicate function in array functions
1. Explain the different array functions
1. Explain the higher-order functions

## Imagine these are the singapore residents.
```javascript
const citizens = ["😷", "😷", "😷", "😷", "😷", "😷", "😷", "😌", "😷"];
```

In traditional grammar, a predicate is one of the two main parts of a sentence. For example, "John [is yellow]". John is the subject, and is yellow is the predicate, which modifies the description of the subject. It is usually headed with a verb. Predicate is a condition about a subject. From Google Dictionary, predicate is something which is affirmed or denied concerning an argument of a proposition.

```javascript
const isWearingMask = citizen => {
  return citizen === "😷";
};
```


## Accepting a predicate function but return a boolean. 

> ### Array methods every, some.

```javascript
const allWearingMasks = citizens.every(isWearingMask);

console.log(allWearingMasks);

const someWearingMasks = citizens.some(isWearingMask);

console.log(someWearingMasks);
```

## Accepting a predicate function but return a array. 

> ### Array method filter.
```javascript
const justTheCitizensWearingMasks = citizens.filter(isWearingMask);

console.log(justTheCitizensWearingMasks);

const isNotWearingMask = citizen => {
  return citizen !== "😷";
};
```

## Accepting a predicate function but return a element.
> ### Array method find.
```javascript
const theCitizenNotWearingMask = citizens.find(isNotWearingMask);

console.log(theCitizenNotWearingMask);
```


## Accepting a predicate function but return a index.
> ###  Array method findIndex
```javascript
const theIndexOfCitizenNotWearingMask = citizens.findIndex(isNotWearingMask);

console.log(theIndexOfCitizenNotWearingMask);
```

## Accepting a transformation (1 to 1 mapping) function to transform the original array into a new array.

> ### Array method map
```javascript
const residentsBeforeCircuitBreaker = [
  "🤑",
  "🤧",
  "🤨",
  "😏",
  "😘",
  "😃",
  "🤬",
  "😭",
  "😨"
];
```

```javascript
const circuitBreaker = () => {
  return "🏡😷";
};

const residentsDuringCircuitBreaker = residentsBeforeCircuitBreaker.map(
  circuitBreaker
);

console.log(residentsDuringCircuitBreaker);
```

## Get total, sum, max, min ,combined.
> ### Array method reduce

datasource: [World covid-19](https://data.europa.eu/euodp/en/data/dataset/covid-19-coronavirus-data)
```javascript
const data = require("./covid-19-sg.json");
const maxData = data.reduce((maxData, dayData) =>
  dayData.deaths > maxData.deaths ? dayData : maxData
);
console.log(maxData);
```
```javascript
const data = require("./covid-19-sg.json");
const totalConfirmed = data.reduce((totalConfirmed, dayData) => {
  totalConfirmed += dayData.cases;
  return totalConfirmed;
}, 0);
console.log(totalConfirmed);
```
```javascript
const data = require("./covid-19-sg.json");
const totalConfirmed = data.reduce(
  (totalConfirmed, { cases }) => (totalConfirmed += cases),
  0
);
console.log(totalConfirmed);
```


## Ok, Ok. All these array methods create a new array. Is there any array method change the original array **in-place**?
Yes. The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

```javascript
const ingredients = ["🌶", "🍅", "🥕", "🥦"];

while (ingredients.length > 0) {
  console.log(`Currently chopping ${ingredients[0]}`);
  ingredients.splice(0, 1);
}

console.log("👩‍🍳👨‍🍳 All ingredients chopped!!");
```



## Give me the range of integers from 1 to 10, get their total sum.

```javascript
let total = 0, count = 1;
while (count <= 10) {
   total += count;
   count += 1;
}
console.log(total);

let total = 0;
for (let i = 1; i <= 10; i++) {
    total += i;
}
```

### If I want to get the range of integers from 1 to 50/100/1000/5000, then how? 
### Get their total sum of an array of number. 
### We have two questions here. 
1. How to make a generic function to generate range of integers from start value to end value?
1. How to write a generic function to sum an array of numbers?

```javascript
function range(start, end, step) {
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
```

## Abstracting Repetition

```javascript
for (let i = 0; i < 10; i++) {
   console.log(i);
}

function repeatLog(n) {
   for (let i = 0; i < n; i++) {
       console.log(i);
   }
}

function repeat(n, action) {
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
```

## We normally use array method foEach to abstract the for loop
> ### Array Method forEach
```javascript
residentsBeforeCircuitBreaker.forEach(el => {
  console.log(el);
});
```

- OK, Functions are also regular values - nothing remarkable
- Higher-Order Function allow us to abstract over actions, not just values

> ### Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions

There are two types of Higher-Order Functions:
1. Functions that create new functions
1. Functions that change other functions
1. Functions that provide new types of control flow

## Functions that create new functions
```javascript
function greaterThan(n) {
   return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
 // → true
 ```

## Functions that change other functions
 ```javascript
function verbose(f) {
   return (...args) => {
       console.log("calling with", args);
       let result = f(...args);
       console.log("called with", args, ", returned", result);
       return result;
   };
}

Math.min(3, 2, 1);
verbose(Math.min)(3, 2, 1);
```

## Functions that provide new types of control flow
![Unless](https://media.giphy.com/media/443fTQRDiAtAJHKGIm/giphy.gif)
### Unless CEO has approved that you can go to office, you must work from home.
```javascript
function unless(predicate, then) {
   if (!predicate) then();
}

const hasCEOApproved = false;
const workFromHome = () => {
  console.log("Work From Home");
};
unless(hasCEOApproved, workFromHome);
```
