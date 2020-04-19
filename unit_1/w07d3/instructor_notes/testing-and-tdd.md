## Objectives
1. Introduce testing and automated testing
1. Explain the differences between testing and test driven development
1. Demonstrate the TDD lifecycle and commonly used tools in TDD
    - Red (fail), green (pass), and blue (refactor)
    - Assertion and testing libraries (`chai` and `jest`)
1. Introduce clean code principles during refactoring
    - Meaningful names
    - DRY
    - Single responsibility principle
    - Reliance on abstractions
    
## Introduction
When we write code, it is usually part of a larger application meant to solve some problem or execute some tasks. 

> ### We should write code in small, progressive steps, and test our code at every stage. 

That way, when we string our small chunks of code together (i.e. functions, classes, modules, etc.)
we know that our code will run it its entirety.

As we write code, we should **test** it to ensure that everything is working as intended. 
One of the simplest forms of testing is to run the code we've written, i.e. manual testing.

## What is manual testing?
Manual testing is the simplest form of testing we can attempt. To manually test a piece of
 code, we simply run the code we've written and **observe** whether it is performing as we intended. Let's take a 
 look `helloWorld` function, for example:

```$xslt
// This function above simply logs the text 'hello world' in your console. 
const helloWorld = () => console.log('hello world');
```
To test whether it is working, we might simply run it our browser or within `NodeJS`. 

> ### Manual testing is great when we're running small pieces of code that are not very complex.

But when we have to test a complex code with a lot of scenarios, manual testing is tedious 
and even detrimental to the development of the app. One of the main problems with manual testing is that it is very error-prone. 

Humans simply cannot test code as accurately as a machine can.  We need to execute **automated
testing** if we want to ensure that there are no mistakes in the way that we test code.
 
## What is automated testing? 
> ### Automated testing means writing some specification code (or **test code**) that tests your application code (or **source code**).

![Test Code Meme](https://i.imgflip.com/3x41z9.jpg)

The idea of writing test code just to test source code seems like an unnecessary and tedious process. Why should anyone 
do it? Is it worth it? Here's a look at some benefits and drawbacks of writing automated test code:

- Advantages:
    - Accurate documentation of code behavior
    - Refactoring code becomes safer
    - Can be used with deployment tools
    
- Disadvantages: 
    - Time consuming
    - Steep learning curve
    - Mocking data is complicated 
    
## Can you show me how to write a simple automated test?
Here are the things that we need to start writing any automated tests:
1. **Test runner** - A test runner is a library that can execute tests for us. For this lesson we are going to use a 
library called [Jest](https://jestjs.io/) to run the tests for us

1. **Test assertion library** - A test assertion library is one which can check that our tests are passing as intended. 
For this lesson we are going to use a library called [Chai](https://www.chaijs.com/).

1. **A test file** - The place where we are going to write our test code.

1. **A file with source code** - The place where we are going to write the code for our application.

## That seems like a lot of things I have to prepare! Can you walk me through on how I can set all those things up?
I have prepared this repository to install `Jest` and `Chai`. You will simply need to run the following commands to 
install them:

```javascript 1.8
git pull upstream master
```

As usual, this command will update your `master` branch with the content for this lesson. 

```bash
npm install
```

`npm install` instructs your `npm`, your package manager, to install the libraries that we are going to use.

As for the files, you can find a `src` and `tests` folder within the `w07d3/student_examples` folder. You will notice that the `tests` folder has a file called `script.test.js`. 

It is **necessary** for your to include the `.test` prefix to `.js` as that is how `Jest` recognizes that the file is to be tested. 

## I've checked out the files, but I don't understand what's happening in the `script.test.js` file. Can you explain it to me?

At the very top of the file we see:
```javascript 1.8
const chai = require('chai');
const expect = chai.expect;
const calculator = require('../src/calculator');
```
The first line `imports` the `chai` library within this test file. `chai` is a test assertion library, a collection of
code written by other developers. It contains many methods we can use to check that our tests are running as expected.
I personally like using `chai`'s `expect` library, and have assigned it to the variable `expect`.

The line `const calculator = require('../src/calculator')` is meant to import local code from the specified directory.
 We are going to store our code for a calculator in a file called `calculator.js` and import it into this test file.
 
Right now, there's nothing in `calculator.js`.
 
## Wait, importing of files? How is that happening?
When you use `require`, `NodeJS` is helping to import all the JavaScript code within that file and run it in wherever
it is imported. When you use `require` on an installed library like `chai`, `NodeJS` looks for the files installed and
automatically imports them for you. When you use `require` and specify a local directory, `NodeJS` imports files from 
that specified directory.

You will also need to `export` the code in local files, but we'll go through how to do that later.

## Ok ok, great. What's that `describe` and `it`?
`describe` is used to describe the group of tests you have written. 
This is often called a `test suite`. `it` is used to describe a specific test within a `test suite`. In 
this example here the first test is to check that the number `1` is equal to `1`.

> ### This condition is being checked with `expect`, a test assertion function. Test assertions check that one condition matches another. If they do not match, an error is thrown.

## How do I run this test and see the results?
To run this file, you will need to use an `npm script`. I have written one in the `course-materials/package.json`, and 
called it `test`. To run this script, use the following command in your terminal: 

```bash
npm run test
```

This script will tell `Jest`, your test runner, to check all the tests within the `unit-1` folder, including this 
`script.test.js`. Since you are checking that 1 is equal to 1 (and it does), the test passes.

If you would like to learn how to write your own test script, you will need to know the `jest` api, which you can 
find at [their website](https://jestjs.io/).

## How do I write another test?
We can add more tests to our `test suite` by adding more `it` blocks. 

Let's try to add a second test that verifies that whether 1 + 1 equals to 2:

```javascript 1.8
const chai = require('chai');
const expect = chai.expect;
const calculator = require('../src/calculator');

describe('calculator', () => {
    it('should check that 1 is equal to 1', () => {
        expect(1).to.equal(1);
    });
    
    it('should pass if 1 + 1 equals to 2', () => {
        
    });
});
```

Right now, this test block does nothing. We have to include an `expectation` within the 
it block to specify what we want our test to do:

```javascript 1.8
const chai = require('chai');
const expect = chai.expect;
const calculator = require('../src/calculator');

describe('calculator', () => {
    it('should check that 1 is equal to 1', () => {
        expect(1).to.equal(1);
    });
    
    it('should pass if 1 + 1 equals to 2', () => {
        expect(1 + 1).to.equal(2);
    });
});
```

When we run `npm run test` in our terminal, this test passes too! Great!

What if we want to use functions that we are importing from `calculator.js`? First, we need to add a calculator object
in your calculator file. So, in `calculator.js`:

```javascript 1.8
const calculator = {};
// this creates an empty calculator object
```

Then, you need to allow the calculator to be exported. This is done by using `module.exports`, which is another `NodeJS`
function to export code from within a file. In this scenario, we want to export the object called
calculator, so we should assign the calculator to the export:

```javascript 1.8
const calculator = {};
// this creates an empty calculator object

module.exports = calculator;
```

Now your calculator can be used in the test file! Let's write a test to test the add function. So in 
`calculator.test.js`, let's write a test to check that when I use the calculator's `add` function and add 1 to 2, I 
will get the value 3:

```javascript 1.8
const chai = require('chai');
const expect = chai.expect;
const calculator = require('../src/calculator');

describe('calculator', () => {
    it('should check that 1 is equal to 1', () => {
        expect(1).to.equal(1);
    });
    
    it('should pass if 1 + 1 equals to 2', () => {
        expect(1 + 1).to.equal(2);
    });

    it('should return 3 when I add 1 to 2', () => {
        expect(calculator.add(1,2)).to.equal(3);
    });  
});
```

If we run our test now... wait, it fails! That's because we haven't written any code in our calculator, and it cannot
use any add method. So, we need to go back to our calculator to finish up the add method:

```javascript 1.8
const calculator = {};
// this creates an empty calculator object

calculator.add = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
}

module.exports = calculator;
```

Finally, if we run `npm run test` again, all our tests should pass. Congratulations! You've just
written some automated tests in the style of TDD.

## Whoa! What is Test Driven Development (TDD) again?
Writing automated tests, in the process that we done above, is fundamentally what TDD is all about.

> ### TDD is not simply about writing automated test cases for your code. TDD is the process of writing test code and applying specific principles when doing so.

### Red, green and refactor
![Red Green Refactor](https://miro.medium.com/max/390/1*srsgq3niqqd1YcBgKEN2lg.png)

One of the main principles of TDD is applying the **red-green-refactor** cycle of test writing. 
Each color reflects a step in the TDD cycle:
 
 - In **Red**, we write a test first, before any code is written, and we run the test. This test automatically fails,
 which is why it is the color red. 
 
 - In **Green**, we write the least amount of code as possible to pass the test. Green is the color indication of the
 test passing.
 
 - In **Refactor, or blue**, we should now try to refactor our code before we write any
 new code or tests. In this stage, because we have already written tests, we can refactor
 our code without the fear of wondering whether we will break anything.
 
 1. Once we are done refactoring, can write another test for another piece of functionality, and continue the process.
 
### A closer look at refactoring

Possibly the most important step in the TDD lifecycle is refactoring. It is the only stage when you should re-examine 
the design of the code, and to clean up any mess that was created.

> ### It is safe to refactor your code only after you pass all tests, because there was a stable state that the code can be reverted to.
 
Usually, the difficulty in refactoring is in deciding what should be refactored. To ease this process, I am suggesting
a list of principles you can consider when refactoring your code, below. This list is ordered in ascending difficulty of 
execution:

#### 0. Use meaningful names
Some coders argue that naming is one of the most difficult things about coding, and maybe they have a point - but that 
shouldn't discourage you from at least trying to keep your variables and functions as well-named as you can manage.

For a start, all `boolean` variables or `boolean` returning functions could be prefixed by the appropriate verbs:

```
const hasColor = true;
const isLoggedIn = false;
const shouldUserValidateData = user => user.isNewlyRegistered();
```
Recently, we also wrote some functions that execute ajax calls and that insert HTML elements into our html page. Here 
are some suggested names for such functions:

```javascript 1.8
const getComplaintsByBorough = borough => {
    return $.ajax({
        url: `https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=${borough}`,
    });
}

const buildComplaintRow = (data) => {
    return $('<div>').text(`agency: ${data.agency}`);
}
```
It is tempting to be lazy and to name variables like `num1` or `x`, but in the long run they will just confuse you and
make the development of your app slower.

#### 1. No magic numbers
Magic numbers are hard-coded `string` or `number` values that lie around in your code, with no meaning or purpose 
attached to them. You don't want to have code like that lying around! 

![Slob](https://media.giphy.com/media/3o6Mb79cyIW0ZcyAqk/giphy.gif)

> ### Magic numbers should always be refactored and reassigned to variables/constants that hold some kind of business value

Here's a good example of magic numbers you can refactor. Let's imagine we have a function that can compute your weight
in Newtons: 

```javascript 1.8
const computeWeightInNewtons = mass => {
    return mass * 9.81;
}
``` 

Not everyone is going to remember the significance of 9.81, and it might be clearer to store that value in a `const` 
instead:

```javascript 1.8
const GRAVITATIONAL_CONSTANT = 9.81;
const computeWeightInNewtons = mass => {
    return mass * GRAVITATIONAL_CONSTANT;
}
```

Your code will still work exactly the same, but it will also be much easier to read and understand.

#### 2. Single Responsibility Principle
Every piece of code, whether it is a class, function or module, should have only a single responsibility, i.e. it 
should only do one thing. Here's an example of some semi-pseudo code involving a poorly-written function that registers
 a user:
 
```javascript 1.8
const registerUser = (email, password) => {
    if (emailValidator.isValid(email)) {
        if (password.length < 20 && passwordValidator.isValid(password)) {
            const existingUser = usersService.getUser(email);
            if (existingUser) {
                return 'user is already existing!'
            } else {
                const newUser = db.createUser(email, password)
                    .then(() => 'user created!')
                    .catch(err => err.message);
            }       
        } else {
            return 'password is either invalid or too long'
        }
    } else {
        return 'the email is not valid!'
    }
}
```

What did you think about the code above? I frequently see code that is written like that - it is difficult to understand
 and even harder to debug. Usually when there are a lot of nested `if` `else` blocks, it means the function is doing
 too many things at once. 
 
 Being a good coder means questioning whether certain functions and systems within your app are indeed doing what
 they were set out to do. Sometimes the questions asked don't have a clear answer - should a `registerUser` function 
 also be checking whether the password is too long/short, or whether the user currently exists? The answer isn't
 always immediately obvious, so the best thing we can manage is to strive for any code that we write to do 1 thing, and
 1 thing well.

#### 3. Don't repeat yourself
Repeating code that you have written can make it more error prone. It also drastically inflates the number of lines of
code in your app. Try to consolidate logic into `functions` where possible. When you combine this with well-named
functions, your code becomes significantly more readable. For example, I've seen a lot of students write out `jquery`
code like so:

```javascript 1.8
$(() => {
    const $apple = $('<div>').addClass('fruit').text('apple');
    const $pear = $('div').addClass('fruit').text('pear');
    const $orange = $('div').addClass('fruit').text('orange');
    $('.container').append($apple);
    $('.container').append($pear);
    $('.container').append($orange);
});
```

Since the logic for creating a fruit div is repeated several times, why not let a single function handle all the work?

```javascript 1.8
const buildFruitDiv = fruitName => $('<div>').addClass('fruit').text(fruitName);
$(() => {
    const $apple = buildFruitDiv('apple');
    const $pear = buildFruitDiv('pear');
    const $orange = buildFruitDiv('orange');
    $('.container').append($apple);
    $('.container').append($pear);
    $('.container').append($orange);
});
```

And once your code has reached this stage, you might think it would be possible to just use a loop instead to build
and append all the fruits:

```javascript 1.8
const buildFruitDiv = fruitName => $('<div>').addClass('fruit').text(fruitName);
const buildAndAppendFruitDivs = fruitNameArray => {
    fruitNameArray.forEach(fruitName => {
        const $fruitDiv = buildFruitDiv(fruitName);
        $('container').append($fruitDiv);
    });
};

$(() => {
    buildAndAppendFruitDivs(['apple', 'pear', 'orange']);
});
```

#### 3. Rely on abstractions

Let us imagine a `function` that takes in the name of a fruit as a `string` (either an apple, pear, or an orange) and 
returns us the color of the fruit as a `string`. It is very tempting to write the function like so:

```javascript 1.8
const getFruitColor = fruitName => {
    if (fruitName === 'apple') {
        return 'red';
    } else if (fruitName === 'pear') {
        return 'green';
    } else if (fruitName === 'orange') {
        return 'orange';
    }
}

getFruitColor('apple');
// returns 'red'

getFruitColor('pear');
// returns 'green'

getFruitColor('orange');
// returns 'orange'
```

This function above works fine, but can become unwieldy if we start adding more and more fruit to the list. One of the
ways to deal with this kind of repetition is to abstract the input value as an `object` instead. For instance, we could
say that `getFruitColor` takes in only objects, which *represent the fruit*. So our code would look a bit like:

```javascript 1.8
const apple = { 
    name: 'apple', 
};

const pear = { 
    name: 'pear',
};

const orange = {
    name: 'orange',
};

const getFruitColor = fruit => {
    if (fruitName === 'apple') {
        return 'red';
    } else if (fruitName === 'pear') {
        return 'green';
    } else if (fruitName === 'orange') {
        return 'orange';
    }
}

getFruitColor(apple);
// returns 'red'

getFruitColor(pear);
// returns 'green'

getFruitColor(orange);
// returns 'orange'
```

Ok, seems weird that we added more lines of code without actually making the `getFruitColor` function any simpler. We
still have to add a `color` key to the fruit to make this work:

```javascript 1.8
const apple = { 
    name: 'apple', 
    color: 'red',
};

const pear = { 
    name: 'pear',
    color: 'green',
};

const orange = {
    name: 'orange',
    color: 'orange',
};

const getFruitColor = fruit => {
    return fruit.color;
}

getFruitColor(apple);
// returns 'red'

getFruitColor(pear);
// returns 'green'

getFruitColor(orange);
// returns 'orange'
```

Now that we're using abstractions for our `fruit`, we can continuously add more fruit to our code without making the
code more repetitive or harder to maintain. 