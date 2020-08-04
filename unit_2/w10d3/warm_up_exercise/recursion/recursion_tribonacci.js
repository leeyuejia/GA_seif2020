// add up all fibonacci numbers give the n position of that number
// example
// Input: n = 4
// Output: 4
// Explanation:
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4

//using recursive
var tribonacci = function (n) {
    if(n===0) return 0;
    if(n===1 || n ===2) return 1;
    return tribonacci(n-3) + tribonacci(n-2) + tribonacci(n-1); // time complexity is 3** n
};

//using recursive
function tribo (n) {
    let t1 = 0, t2=1, t3=1;

    for (i=1 ; i < n; i++) {
        temp = t3;
        t3 = t1 + t2 + t3
        t1 = t2
        t2 = temp;
    }
    return t2;
}

function tribo2 (n) {
    if(n ===0) return 0;
    if(n ===1 || n===2) return 1;
    const array = new Array(n+1).fill(0);
    array[1] = 1
    array[2] = 1
    for (let i = 3; i <= n; i++) {
        array[i] = array[i-1] +array[i-2] + array[i-3];
    }
    console.log(array)
    return array[n]
}

console.log(tribo(10))
console.log(tribo2(10))
console.log(tribonacci(10))
