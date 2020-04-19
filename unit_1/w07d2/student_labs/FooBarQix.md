## Instructions

`fooBarQix` is an app that has a single method called `compute`. Compute takes one number as input and returns a string
 as output:
```javascript
fooBarQix.compute(1);
// returns "1"
```

__However, if the number follows one of the rules listed below, `compute` returns a word instead.__

For example, numbers that are divisible by 3 but do not contain 3 return the word "Foo":
```javascript
fooBarQix.compute(6);
// returns "Foo"
```

Write your app following the [TDD development lifecycle](https://en.wikipedia.org/wiki/Test-driven_development#Test-driven_development_cycle) to ensure good code quality. Your app is considered completed once it has implemented **all** the rules stated below.

## Rules

- If the number is divisible by 3 __or__ contains 3, return "Foo" instead of 3

  ```javascript
  fooBarQix.compute(6)
  // returns "Foo" as 6 is divisible by 3
  
  fooBarQix.compute(13)
  // returns "Foo" as 13 contains 3
  ```
- If the number is divisible by 5 __or__ contains 5, return "Bar" instead of 5
  ```javascript
  fooBarQix.compute(10)
  // returns "Bar" as 10 is divisible by 5
  ```
- If the number is divisible by 7 __or__ contains 7, return "Qix" instead of 7
  ```javascript
  fooBarQix.compute(14)
  // returns "Qix" as 14 is divisible by 7
  
  fooBarQix.compute(17)
  // returns "Qix" as 17 contains 7
  ```
- More than one rule can apply at the same time
  ```javascript
  fooBarQix.compute(15)
  // returns "FooBarBar" as 15 is divisible by 3, is divisible by 5, and contains 5
  ```
- Prioritize the "divisor" rule over the "contains" rule 
  ```javascript
  fooBarQix.compute(51)
  // returns "FooBar" as 51 is divisible by 3 and contains 5
  ```

## Recommended Order of Tests
Remember that when practicing TDD, __you should always start with the simplest test first__. Here is a list of tests I recommend that you start with:
1. Return "1" when the input is 1
2. Return "Foo" when the input is divisible by 3 but does not contain 3 (i.e. input is 6)
3. Return "Bar" when the input is divisible by 5 but does not contain 5 (i.e. input is 10)
4. Return "Qix" when the input is divisible by 7 but does not contain 7 (i.e. input is 14)
5. Return "FooBar" when the input is divisible by 3 and 5 but does not contain either number (i.e. input is 60)
6. Return "FooQix" when the input is divisible by 3 and 7 but does not contain either number (i.e. input is 21)
7. Return "BarQix" when the input is divisible by 5 and 7 but does not contain either number (i.e. input is 140)

You should be able to figure out the rest of the tests on your own!