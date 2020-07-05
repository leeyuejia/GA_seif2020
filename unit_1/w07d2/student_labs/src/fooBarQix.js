
const containsThree = (number) => number.toString().includes("3");
const isDivisibleByThree = (number) => number % 3 === 0;
const isDivisibleByFive = (number) => number % 5 === 0;
const containsSeven = (number) => number.toString().includes("7");
const isDivisibleBySeven = (number) => number % 7 === 0;
const containsFive = (number) => number.toString().includes("5")

const fooBarQix = {
    compute(number) {
        // it is running this code first so if isDivisiblebyThree returns true, the first one will run
        if (number % 3 === 0 || containsThree(number)) return 'Foo';
        if (isDivisibleByFive(number)) return "Bar";
        if (isDivisibleBySeven(number) || containsSeven(number)) return "Qix";
        if (isDivisibleByThree(number) && isDivisibleByFive(number) && containsFive(number)) return "FooBarBar";
        if (isDivisibleByThree(number) && containsFive(number)) return "FooBar";
        return number.toString();
    }
};

module.exports = fooBarQix;