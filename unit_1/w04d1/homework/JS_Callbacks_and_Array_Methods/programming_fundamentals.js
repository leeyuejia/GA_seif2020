// DRY
//
// KISS
// Avoid creating a YAGNI
// Do the simplest thing that could possibly work
// Don't make me think
// Write code for the maintainer
// Single responsibility principle
// Avoid premature optimization
// Separation of concerns

const f = l => {
    // f is the name of the function while l is the parameters that passed into the function
    let es = 0, p = 0, c = 1, n = 0
    // when this function runs, variables are assigned to
    while (c <= l) {
    //a loop with condition that says " while variable c is less than or equals to l",
      n = c + p;
    // while the condition is true, var n = the sum of c and p
      [c, p] = [n, c]
    //destructuring arrays where value of c = n and value of p = c
      es += (c % 2 === 0) ? c : 0
    // es adds value of c if c is multiples of 2, if not adds 0
    }
    return es
    // if the while condition not fulfilled, return the value of es
  }
console.log(f(55))

const f2 = limit => {
    //
    let evenSum = 0;
    let last = 0;
    let current = 1;
    while (current <= limit) {
      let next = current + last;
      [current, last] = [next, current]
      if (current % 2 === 0) {
        evenSum += current;
      }
    }
    return evenSum
  }
  console.log(f2(55))
  //f2 can be called sumOfEvenNums
  //Semicolon is necessary to inform computer that the argument ends here
  const a = 2 + 2;
const b = 4;
debugger;
const c = 2;
debugger;
console.log(a);
console.log(b);
console.log(c);