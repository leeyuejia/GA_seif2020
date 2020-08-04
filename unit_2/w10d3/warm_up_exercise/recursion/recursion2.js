// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion


//tribonacci function on leet code 
/**
 * 
 * @param {number} n
 * @return {number} 
 */

var tribonacci = function (n) {
    if(n===0) return 0;
    if(n===1 || n ===2) return 1;
    return tribonacci(n-3) + tribonacci(n-2) + tribonacci(n-1); // time complexity is 3** n
};
// tribonacci(10)





function findMax(array){
    function findMaxRecursive(array,i) {
      if (i === array.length -1) {
        return [i];
      }
      return Math.max(findMaxRecursive(array,i+1), array[i]);
    }
    return findMaxRecursive(array,0)
      // This function returns the largest number in a given array.
  }
  
  // my example
  // function factorial(num, sum) {
  //     // This function returns the factorial of a given number.
  //     sum = sum || 1;
  //     if (num === 0) {
  //     return sum 
  //     };
  //     sum = sum * num
  //     num = num - 1
  //     return factorial(num, sum)
  //   }
  // factorial(3)
  
  function factorial (n) {
    function factorialRecursive(n) {
      if(n ===1 || n ===0) return 1;
      return n * facorialRecursive(n-1);
    }
    return factorialRecursive(n);
  }
  
  
  // function fibonacci(num,num1,num2,num3){
  //     num1 = num1 || 1
  //     num2 = num2 || 1
  //     num3 = num1 + num2;
  //     if (num3 >= num && num3 === num) {
  //         return true
  //     }
  //     else if (num3 >= num && num3 !== num) {
  //         return false
  //     }
  //     num1 = num2
  //     num2 = num3
  //     num3 = num1 + num2;
  //     return fibo(num, num1,num2,num3)
  // }
  
  function fibonacci (n) {
    if (n===0) return 0
    if(n===1 || n === 2) return 1;
    return fibonacci(n-1) + fibonacci(n-2)
  }
      // This function returns the Nth number in the fibonacci sequence.
      // https://en.wikipedia.org/wiki/Fibonacci_number
      // For this function, the first two fibonacci numbers are 1 and 1
  
  
  function coinFlips(){
    if(n ===1) {
      return ['H', 'T']
    }
    const result = coinFlips(n-1);
    return [...result.map(el => el + 'H'),
           ...result.map(el => el + 'T')];
      // This function returns an array of all possible outcomes from flipping a coin N times.
      // Input type: Integer
      // For example, coinFlips(2) would return the following:
      // ["HH", "HT", "TH", "TT"]
      // H stands for Heads and T stands for tails
      // Represent the two outcomes of each flip as "H" or "T"
  }
  
  function letterCombinations(array){
    function letterCombinationsRecursive(array) {
      if(array.length ==1) {
        return array;
      }
      const current = arreay[array.length -1]
      const temp = letterCombinationRecursive(array.splice(0,array.length -1))
      return [current,...temp, ...temp.map(e => e + current), ...temp.map(e => current + e)];
      }
    return letterCombinationsRecursive(array);
      // This function returns an array of all combinations of the given letters
      // Input type: Array of single characters
      // For example, letterCombinations(["a","b","c"]) would return the following:
      // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
  }
  // Test Script below, DO NOT TOUCH 
  
  mocha.setup('bdd');
  const expect = chai.expect;
  
  describe('findMax', ()=>{
      it('should find the largest number in an array', ()=>{
          let testArray = [3,4,2,1,2];
          expect(findMax(testArray)).to.equal(4);
      });
      it('should work for negative numbers', ()=>{
          let testNegatives = [-1, -4, -2];
          expect(findMax(testNegatives)).to.equal(-1);
      });
  })
  
  describe('factorial', ()=>{
      it('should accurately calculate factorials', ()=>{
          expect(factorial(3,1)).to.equal(6);
          expect(factorial(5,1)).to.equal(120);
      });
  })
  
  describe('fibonacci', ()=>{
      it('should accurately return base cases', ()=>{
          expect(fibonacci(1)).to.equal(1);
          expect(fibonacci(2)).to.equal(1);
      });
      it('should accurately calculate subsequent numbers', ()=>{
          expect(fibonacci(3)).to.equal(2);
          expect(fibonacci(4)).to.equal(3);
          for(let i = 3; i < 10; i++){
              expect(fibonacci(i)).to.equal(fibonacci(i-1)+fibonacci(i-2));
          }
      });
  })
  
  describe('coinFlips', ()=>{
      it('should return an array', ()=>{
          expect(Array.isArray(coinFlips(2))).to.equal(true);
      });
      it("should include all possibilities", ()=>{
          let results = coinFlips(4);
          expect(results.includes("HHHH")).to.equal(true);
          expect(results.includes("HTHT")).to.equal(true);
          expect(results.includes("TTTT")).to.equal(true);
          expect(results.length).to.equal(16);
      });
  })
  
  describe('letterCombinations', ()=>{
      it("should return an array", ()=>{
          expect(Array.isArray(letterCombinations(["a","b","c"]))).to.equal(true);
      });
      it("should include single letter results", ()=>{
          expect(letterCombinations(["a","b","c"]).includes("b")).to.equal(true);
      });
      it("should include combinations in different order", ()=>{
          expect(letterCombinations(["a","b","c"]).includes("ba")).to.equal(true);
          expect(letterCombinations(["a","b","c"]).includes("ab")).to.equal(true);
      });
      it("should include full-length combinations", ()=>{
          expect(letterCombinations(["a","b","c"]).includes("bac")).to.equal(true);
          expect(letterCombinations(["a","b","c"]).includes("cab")).to.equal(true);
      });
  })
  
  mocha.run()