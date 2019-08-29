# Functions

## Lesson objectives

_After this lesson students will be able to:_

1. Describe why we use functions
1. Declare a function
1. Invoke a function
1. Properly name a function
1. Write an arrow function with a parameter
1. Write an arrow function with multiple parameters
1. Write an arrow function with a return statement
1. Break a problem down into steps

## Setup

In `student_examples` for today, make a file `functions.js`

Test that a console.log will appear in Terminal when you run the file.

```
$ node functions.js
```

## Describe why we use functions

Using functions is another application of DRY. Don't Repeat Yourself. With a function, you can store code that can be used conveniently as many times as you wish, without having to rewrite the code each time.

## Defining a function

```javascript
const printBoo = () => {
	console.log('======');
	console.log('Boo!');
	console.log('======');
};
```

Always use **`const`** to declare your functions. It would be a strange day when a function would need to be reassigned.

The code will not run yet. The function needs to be **invoked**.

## Invoke a function

Use one line of code to run multiple lines of code

```javascript
printBoo();
```

Simply use the name of the variable and use **parentheses** to invoke the function.

If the parentheses are not included, the function will not run.

The invocation comes **after** the function definition. If you write it beforehand, it will be trying to invoke something that doesn't yet exist according to the interpreter.

This will work:

```javascript
const printBoo = () => {
	console.log('======');
	console.log('Boo!');
	console.log('======');
};

printBoo();
```

VS

This will not:

```javascript
printBoo();

const printBoo = () => {
	console.log('======');
	console.log('Boo!');
	console.log('======');
};
```

### Exercise

* Write a function `printSum` that will console.log the result of 10 + 10

**Extra Reps**

* Write a function `printTriangle` that will print these pound signs to the console (there are 5 console.logs inside the function):

	```
	#
	##
	###
	####
	#####
	```

* Make it so that `printTriangle` will print the pound signs using a for loop (there is a for loop and only 1 console.log inside the function).  

* Make it so that when you can invoke the function with the number of pound signs to print (not just hardcoded to print 5)

## Properly name a function

The variable you use for a function should contain a **verb**. Functions **do** something, most often:

* getting data
* setting data
* checking data
* printing data

If the purpose of your function is to check data, for example, use the verb `check` in the variable name.

Example function that contains a conditional:

```javascript
const checkInputLength = (input) => {
	if (input.length > 10) {
		console.log('input length is greater than 10');
	} else {
		console.log('input length is not greater than 10');
	}
};
```

Functions should try to do **only one thing**

If a function, called `checkInputLength`, does more than just check input, then it is a poor function.

Takeaway: Think about appropriate **verbs** to use in your function variable names. The verbs should indicate the **one thing** that the function does.

## Write an arrow function with a parameter

The preceding function, `checkInputLength` had a **parameter** called `input`.

Functions can receive input that modify their behavior a bit.  This input is called a **parameter**.

In the below example, the parameter is arbitrarily called `name`. We can call our parameters whatever we want - whatever makes semantic sense.

Using **concatenation** I can put the input into a string:

```javascript
const sayName = (name) => {
	console.log('Hello! My name is ' + name);
}
```

When we _invoke_ the function, we can specify the value of the parameter, this is called an **argument**:

```javascript
sayName("Frodo");
```

We can continue to invoke the function with whatever **arguments** we want:

```javascript
sayName("Merry");
sayName("Pippin");
sayName("Sam");
```

Each time, the output of the function will change to reflect the argument.

### Argument vs Parameter

The **argument** is the input, the **parameter** is how the input is represented in the function.

```javascript
const func = (PARAMETER) => {
	// some code
}

func(ARGUMENT);
```


## Write an arrow function with multiple parameters

A function can take any number of parameters.

```javascript
const calculateArea = (num1, num2) => {
	console.log(num1 * num2);
}
```

When you invoke the function, you generally want to supply the right number of arguments.

```javascript
calculateArea(4, 4)

```
> => 16

### Exercises

* Write a function called `minusOne` that takes a parameter `num`. Assuming the argument is a number, print the argument -1.

	```javascript
	minusOne(10);        // 9
	minusOne(100);       // 99
	minusOne(Infinity);  // Infinity
	```

* Write a function `makeSentence` that takes **three** parameters and **concatenates** them into a fully formed sentence.

	```javascript
	makeSentence('I', 'want', 'chimichangas');
	```

	> => 'Oh boy, do I want chimichangas or what?'

**Extra**

* Write a function called `getLastElement` that takes a parameter `arr`.
* Invoke the function with an **array** as the argument.
* The function should print the **last element** within the array.

	```javascript
	getLastElement([1, 2, 3, 4, 5, 6]);       // 6
	getLastElement(['a', 'b', 'c']);          // 'c'
	getLastElement([[1, 2, 3], [4, 5, 6]]);   // [4, 5, 6]
	```

	_Hint:_ `arr[arr.length - 1]`


**Extra**

* Write a function `divideThreeNums` that takes **three** parameters and prints the third parameter divided by the result of the second parameter divided by the first.

	```javascript
	divideThreeNums(10, 5, 2)   // 4
	divideThreeNums(30, 2, 9)   // 135
	```

## Write an arrow function with a return statement

Functions can pass information back to whatever line of code invoked them.

A contrived example:

```javascript
const ten = () => {
	return 10;
}

console.log(8 + ten());
```
> => 18

Here `ten()` gets replaced with whatever the `return` statement is.

This is the main difference between `return` and `console.log()`. The output value of a function can not come from a console.log.

```javascript
const ten = () => {
	console.log(10);
}
console.log(8 + ten());
```
> => 10
> => NaN

This is because it is trying to add 8 to `undefined`.

A function is only **defined** if it has a return value.

```javascript
const calculateArea = function(num1, num2) {
	return num1 * num2;
}
```

The `calculateArea` function has a **return value** of `num1` * `num2`. It does not just print to the console.

### use the returned value of an invoked function

Sometimes a returned value will not appear in your console. This is normal. **A return is not a console.log**. To see the return value of a function, you will want to console.log the invocation:

```javascript
console.log(calculateArea(2, 10));
```

> => 20

Since `calculateArea` **returns** a value, we can use the return value of `calculateArea` as an argument to an invocation of `calculateArea`.

```javascript
console.log(calculateArea(calculateArea(2, 3), calculateArea(9, 4)));
```

> => 216

### return: stopping a function

**RETURN** sends the value of your function immediately. You can use **return** to terminate the function.

Example: will the function return 0 or 1? (It won't return both)

```javascript
const example = (input) => {
	if (input == "none"){
		return 0;
	}
	return 1; // if input is "none" this line will not run
};
```

```javascript
example("none")     // 0
example("two");     // 1
```

## Break a problem down into steps

Write a function that will **return** true if a word is a Palindrome, or will **return** false if not.

* Problem solve one step at a time
* Each step might require research

Work in layers, one layer at a time. Don't jump ahead until each piece has been tested and works.

Determine if each step will require research, and research it.

* reverse the word (how?)
* check if the word is the same as the reverse (how?)
* return true or false

### Exercises

* Write a function that takes two parameters (strings) and returns `true` (Boolean) if the two strings are identical, `false` if not.

* Write a function that takes three parameters (numbers), sums them, converts the sum into a string and returns the string (eg. `"123"`)
	* Use your google-fu to research converting a number into a string
	* Invoke the function a couple of times with different arguments each time

* Experiment
	* What happens if you supply more arguments than there are parameters?
	* What happens if you supply fewer arguments than there are parameters?
