///  Verbal Questions 
// Parameter is a definition for the method
// Argument is the defined varaibles that is passed into the function via the parameter.

// Return is the output of the function. function stops at the return point. 
// Console.log is print out information but does not do any changes to the info being print out. 

// PALINDROME

const checkPalindrome = (string) => {
    if (typeof string === 'string') {
        let reverseString = string.toLowerCase().split().reverse().join();
        console.log(reverseString)
        if (reverseString === string.toLowerCase()) {
            return true
        } else return false;
    } else {
        return "Your string is not a string"
    }
}

console.log(checkPalindrome('Radar'))
console.log(checkPalindrome('Borscht'))

const checkPrime = (num) => {
    for (i=1; i <=num; i++) {
        if(Math.sqrt(i) === parseInt(Math.sqrt(i))) {
            if(i%2 !== 0) {
                console.log(i)
            }
        }
    }
}

checkPrime(100)