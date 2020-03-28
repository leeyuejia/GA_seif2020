const a = 3
const b = 5
debugger;
const c=9
const d = a+b+c
debugger;

const coundown =(num) => {
    if (num!=0) {
        debugger;
        countdown(num -1);
    } else {
        return
    }
};

coundown(10)

const fo1 = ()=>{
    console.log("I'm the function 'foo'");
}
const bar = (param1)=>{
    console.log("I'm about to execute a callback");
    param1();
}
bar(fo1);

setTimeout(()=>{
    console.log('hi');
}, 2000);

// Below is a documentation of the function and what the function would entails
// "/**" will activate the in built api which the function can access.          
/**
 * @description
 * @param {string} designation
 * @param {number} age
 * @return {void} 
 * @summary console longs the description
 */
const describePeople = (designation, age)=> {
    const finalString = designation +'is' + age +'years old';
    console.log(finalString)
};
describePeople('yuejia', 31)

console.log(parseInt('18')); // parse string into integer
console.log(parseFloat('19.34523')) // convert string into a float
console.log((18).toString()); // convert integer to string
console.log(isNaN(1)); // is parameter a NaN? returns a boolean
console.log(5 + parseInt('5'));
const a =() => {};
console.log(typeof a); // returns data type of a
