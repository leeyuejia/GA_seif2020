/*function factorial (n) {
    if (n == 0) {
        return 1;
    } else {
        return factorial(n - 1) * n;
    }
}

function range (start, end, step) {
    if (step == null) step = 1;
    let array = [];

    if (step > 0) {
        for (let i = start; i <= end; i += step)
            array.push(i);
    } else {
        for (let i = start; i >= end; i += step)
            array.push(i);
    }
    return array;
}

function sum (array) {
    let total = 0;
    for (let i = 0; i < array.length; i++)
        total += array[i];
    return total;
}

console.log(range(1, 10));
console.log(sum(range(1, 10)));

function greaterThan (n) {
    return m => m > n;
}

let greaterThanTen = greaterThan(10);
let greaterThanTwenty = greaterThan(20);

console.log(greaterThanTen(11));

console.log(greaterThan(10)(11));

console.log(greaterThanTwenty(22));

function noisy (f) {
    return (...args) => { // (3, 2, 1)
        console.log('calling with', args);
        let result = f(...args); // f(3, 2, 1) the (...args) means it can take in many arguments. 
        console.log('called with', args, ', returned', result);
        return result;
    };
}
noisy(Math.min)(3, 2, 1);
noisy(Math.min)(3, 2, 1, 6, 8);
noisy(Math.min)(3, 2, 1, 6, 8, 10, 11);

console.log(noisy(Math.min)(3, 2, 1, 6, 8, 10, 11));

/**
 * @summary This function will apply action on number from 0 ... n (n is not inclusive)
 * @param {Number} n 
 * @param {Function} action 
 */
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

let arrays = [[1,2,3],[4,5],[6]] 
let newArrays = []
console.log(arrays.reduce((acc,cur) => newArrays.push(acc)))

console.log(arrays.concat(arrays))
console.log(arrays.reduce((acc,cur) => acc + cur))