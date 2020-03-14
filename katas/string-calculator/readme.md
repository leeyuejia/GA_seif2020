# String Calculator
### Introduction
This exercise covers the following concepts: 
- String manipulation
- Functions

Your objective is to write a function `.add()` that takes a `String` as an input and returns an `integer` as an output.

### Basic Requirements
Your code should be able to pass all the test cases listed below.

> **Info**
>
> If you find it hard to test a function that `returns` a value, remember that you can use `console.log` to test it.
 
```javascript
add('');
// should return 0
```

```javascript
add('1');
// should return 1

add('2');
// should return 2
```

```javascript
add('1,2');
// should return 3

add('10,20');
// should return 30
```

```javascript
add('1,2,3,1000,1005')
// should ignore numbers greater than or equal to 1000
// should return 6
```
### Bonus Requirements

> **Info**
>
> These requirements cover more advanced concepts. Tread carefully!

```javascript
add('1\n2');
// should recognize '\n' as a delimiter and return 3
```

```javascript
add('1\n2,3\n4');
// should return 10

add('1\n2\n3,4,5');
// should return 15
```

```javascript
add('-5,2');
// should throw an error with the message 'Negatives not allowed: -5'

add('-1,2,-3');
// should throw an error with the message 'Negatives not allowed: -1, -3'
````

```javascript
// user can define a single, custom char delimiter on the first line by using '//'
// a new line ('\n') denotes the end of the custom delimiter

add('//#\n1#2');
// custom delimiter is '#'
// should return 3

add('//$\n2$3');
// custom delimiter is '$'
// should return 5
```

```javascript
add('//***\n3***4')
// custom delimiter is '***'
// should return 7
```
