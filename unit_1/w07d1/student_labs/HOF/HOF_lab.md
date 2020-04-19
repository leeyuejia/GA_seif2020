# Script data set

One area where higher-order functions shine is data processing. To process data, we’ll need some actual data. This chapter will use a data set about scripts—writing systems such as Latin, Cyrillic, or Arabic.

The example data set contains some pieces of information about the 140 scripts defined in Unicode. It is available in the coding sandbox for this chapter as the SCRIPTS binding. The binding contains an array of objects, each of which describes a script.

```Javascript
{
   name: "Coptic",
   ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
   direction: "ltr",
   year: -200,
   living: false,
   link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
}
```

Such an object tells us the name of the script, the Unicode ranges assigned to it, the direction in which it is written, the (approximate) origin time, whether it is still in use, and a link to more information. The direction may be "ltr" for left to right, "rtl" for right to left (the way Arabic and Hebrew text are written), or "ttb" for top to bottom (as with Mongolian writing).

The ranges property contains an array of Unicode character ranges, each of which is a two-element array containing a lower bound and an upper bound. Any character codes within these ranges are assigned to the script. The lower bound is inclusive (code 994 is a Coptic character), and the upper bound is non-inclusive (code 1008 isn’t).

## Getting Started

In today's `student_labs`, type your solutions in `05_higher_order.js`.

### Flatten
Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.

```javascript
let arrays = [[1, 2, 3], [4, 5], [6]];
 // Your code here.
 // → [1, 2, 3, 4, 5, 6]
```

### Your own loop
Write a higher-order function loop that provides something like a for loop statement. It takes a value, a test function, an update function, and a body function. Each iteration, it first runs the test function on the current loop value and stops if that returns false. Then it calls the body function, giving it the current value. Finally, it calls the update function to create a new value and starts from the beginning.
When defining the function, you can use a regular loop to do the actual looping.
```javascript
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
```

### Everything 
Analogous to the some method, arrays also have an every method. This one returns true when the given function returns true for every element in the array. In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.
Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.

```javascript
function every(array, test) {
   // Your code here.
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
 // → true
```

### Array Methods

#### Use array method `filter` to filter the scripts with the writing direction from top to bottom.

Your result should be something like:
```javascript
// → [{name: "Mongolian", …}, …]
```

#### Use array method `map` to map the scripts to an array of scripts' names.

Your result should be something like:
```javascript
 // → ["Adlam", "Arabic", "Imperial Aramaic", …]
```

#### Use the following function as the helper function and reduce function to find the Script with the Most Characters

```javascript
function characterCount(script) {
   return script.ranges.reduce((count, [from, to]) => {
       return count + (to - from);
   }, 0);
}
```

Your result should be something like:
```javascript
 // → {name: "Han", …}
```

### Composability

#### Use the following average function to the find the average year of living scripts and non-living scripts, respectively.
```javascript
function average(array) {
   return array.reduce((a, b) => a + b) / array.length;
}
```
Your result should be something like:
```javascript
// → 1165 for living scripts
// → 204 for non-living scripts
```

#### Use characterScript function to find the script for character (code is 121).
```javascript
function characterScript(code) {
   for (let script of SCRIPTS) {
       if (script.ranges.some(([from, to]) => {
           return code >= from && code < to;
       })) {
           return script;
       }
   }
   return null;
}
```

Which script is returned?

for/of loop can also be used on strings. Like codePointAt, this type of loop was introduced at a time where people were acutely aware of the problems with UTF-16. When you use it to loop over a string, it gives you real characters, not code units.
```javascript
let roseDragon = "🌹🐉";
for (let char of roseDragon) {
  console.log(char);
}
// → 🌹
// → 🐉
```
If you have a character (which will be a string of one or two code units), you can use codePointAt(0) to get its code.




## Hungry for More
We have a characterScript function and a way to correctly loop over characters. The next step is to count the characters that belong to each script. The following counting abstraction will be useful there:


```javascript
function countBy(items, groupName) {
   let counts = [];
   for (let item of items) {
       let name = groupName(item);
       let known = counts.findIndex(c => c.name === name);
       if (known === -1) {
           counts.push({ name, count: 1 });
       } else {
           counts[known].count++;
       }
   }
   return counts;
}

console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
```

The countBy function expects a collection (anything that we can loop over with for/of) and a function that computes a group name for a given element. It returns an array of objects, each of which names a group and tells you the number of elements that were found in that group.

It uses another array method—findIndex. This method is somewhat like indexOf, but instead of looking for a specific value, it finds the first value for which the given function returns true. Like indexOf, it returns -1 when no such element is found.

Using countBy, we can write the function that tells us which scripts are used in a piece of text.

```javascript
function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({name}) => name != "none");

  let total = scripts.reduce((n, {count}) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts.map(({name, count}) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
  }).join(", ");
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// → 61% Han, 22% Latin, 17% Cyrillic
```

The function first counts the characters by name, using characterScript to assign them a name and falling back to the string "none" for characters that aren’t part of any script. The filter call drops the entry for "none" from the resulting array since we aren’t interested in those characters.

To be able to compute percentages, we first need the total number of characters that belong to a script, which we can compute with reduce. If no such characters are found, the function returns a specific string. Otherwise, it transforms the counting entries into readable strings with map and then combines them with join.

#### Dominant writing direction
Write a function that computes the dominant writing direction in a string of text. Remember that each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).
The dominant direction is the direction of a majority of the characters that have a script associated with them. The characterScript and countBy functions defined earlier in the chapter are probably useful here.

```javascript
function dominantDirection(text) {
   // Your code here.
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
 // → rtl
```

## Use HOF to solve [Bond Films Challenge](unit_1/w03d3/homework/JS_Objects_and_Datatypes/README.md)
1. Create a new array called bondTitles with only the titles of the Bond films, and console.log the new array.
1. Create a new array oddBonds, of only the Bond films released on odd-numbered years.
1. Determine the total cumulative gross of the Bond franchise, and console.log the result. hint To make the grosses into usable numbers, look into the .replace Javascript method (there are many ways to do this, however). Look into parseInt also.
1. Console log the single movie object that contains the actor who starred in the least number of films.


[Reference](https://eloquentjavascript.net/05_higher_order.html)