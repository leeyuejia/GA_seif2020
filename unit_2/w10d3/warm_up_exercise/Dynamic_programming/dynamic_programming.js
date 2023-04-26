// fibonanci seq [1,1,2,3,5,8,13,21 ] arr length is 8
// using dynamic programming and memoization. 
// using dynamic programming
function memoFibo(n) {
    const result = []; // initialize Array
    for (let i = 0; i <= n ; i++) {
        if(i == 0) result[0] = 0
        if (i == 1) result[1] = 1
        else if (i >= 2) {
            result[i] = result[i-2] + result[i-1]
        } 
        }
    return result 
}

console.log(memoFibo(8))


// using memoization
var fibonacci = (function () {
    var memo = [0, 1];
    var fib = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
          result = fib(n - 1) + fib(n - 2);
          memo[n] = result;
        }
        return result;
        };
    return fib;
  }());

console.log(fibonacci(8))

// Dynamic Programming - recursive + memoization (lina example, to be studied)

let memo = [];
let result = null;

const fib = (n, memo) => {
    if (memo[n] !== undefined) {
        return memo[n];
    }
    else {
        if (n === 1 || n === 2) {
            result = 1;
        }
        else {
            result = fib(n - 1, memo) + fib(n - 2, memo)
        }
        memo[n] = result;
    }
    return result;
}
