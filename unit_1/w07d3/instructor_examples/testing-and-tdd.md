## Objectives
- Introduce testing and automated testing
- Explain the differences between testing and test driven development
- Demonstrate the TDD lifecycle and commonly used tools in TDD
    - Red (fail), green (pass), and blue (refactor)
    - Assertion and testing libraries (`chai` and `jest`)
- Introduce clean code principles during refactoring
    - Meaningful names
    - DRY
    - Single responsibility principle
    - Open-closed principle (usage of abstractions)
    
## Introduction
When we write code, it is usually part of a larger application meant to solve some problem or execute some tasks. 

> #### We should write code in small, progressive steps, and test our code at every stage. 

That way, when we string our small chunks of code together (i.e. functions, classes, modules, etc.)
we know that our code will run it its entirety.

As we write code, we should **test** it to ensure that everything is working as intended. 
One of the simplest forms of testing is to run the code we've written, i.e. manual testing.

### What is manual testing?
Manual testing is the simplest form of testing we can attempt. To manually test a piece of
 code, we simply run the code we've written and **observe** whether it is performing as we intended. Let's take a look `helloWorld` function, for example:

```$xslt
// This function above simply logs the text `'hello world'` in your console. 
const helloWorld = () => console.log('hello world');
```
To test whether it is working, we might simply run it our browser or within `NodeJs`. 

> #### Manual testing is great when we're running small pieces of code that are not very complex.

But when we have to test a complex code with a lot of scenarios, manual testing is tedious 
and even detrimental to the development of the app. One of the main problems with manual testing is that it is very error-prone. 

Humans simply cannot test code as accurately as a machine can.  We need to execute **automated
testing** if we want to ensure that there are no mistakes in the way that we test code.
 
### What is automated testing? 
> #### Automated testing means writing some specification code (or **test code**) that tests your application code (or **source code**).

![Test Code Meme](https://i.imgflip.com/3x41z9.jpg)

The idea of writing test code just to test source code seems like an unnecessary and tedious process. Why should anyone do it? Is it worth it? There are, in fact, various benefits and drawbacks of writing automated test code:

- Advantages:
    - Accurate documentation of code behavior
    - Refactoring code becomes safer
    - Can be used with deployment tools
    
- Disadvantages: 
    - Time consuming
    - Steep learning curve
    - Mocking data is complicated 
    
### Can you show me how to write a simple automated test?
Here are the things that we need to start writing any automated tests:
1. **Test runner** - A test runner is a library that can execute tests for us. For this lesson we are going to use a library called [Jest](https://jestjs.io/), and a **test assertion library**

1. **Test assertion library** - A test assertion library is one which can check that our tests are passing as intended. For this lesson we are going to use a library called [Chai](https://www.chaijs.com/).

1. **A test file** - The place where we are going to write our test code.

1. **A file with source code** - The place where we are going to write the code for our application.

### That seems like a lot of things I have to prepare! Can you walk me through on how I can set all those things up?
I have prepared this repository to install `Jest` and `Chai`. You will simply need to run the following command to install them:
```$xslt
npm install
```

As for the files, you can find a `src` and `tests` folder within the `w07d3/student_examples` folder. You will notice that the `tests` folder has a file called `script.test.js`. 

It is **compulsory** for your to include the `.test` prefix to `.js` as that is how `Jest` recognizes that the file is to be tested. 

### I don't understand what's happening in the `script.test.js` file. Can you explain it to me?

At the very top of the file we see:
```$xslt
const chai = require('chai');
const expect = chai.expect;
```
This allows you to use the `Chai` library within this test file. `Chai` is a test assertion library, and contains many methods we can use to assert that our tests are running as expected. In this lesson we are going to use `expect` library, which is why I have assigned it to the variable `expect`.

### Ok ok, great, but what's that `describe` and `it`?
`describe` is used to describe the group of tests you have written. 
This is often called a `test suite`. `it` is used to describe a specific test within a `test suite`. In 
this example here the first test is to check that 1 is equal to 1.

> #### This condition is being checked with `expect`, a test assertion function. Test assertions check that one condition matches another. If they do not match, an error is thrown.

### How do I run this test and see the results?
To run this file, you will need to use an `npm script`. I have written one in the `course-materials/package.json`, and called it `test`. To run this script, use the following command in your terminal: 

```$xslt
npm run test
```

This script will tell `Jest`, your test runner, to check all the tests within the `unit-1` folder, including this `script.test.js`. Since you are checking that 1 is equal to 1 (and it does), the test passes.

If you would like to learn how to write your own test script, you will need to know the `jest` api, which you can find at [their website](https://jestjs.io/).




### What is Test Driven Development (TDD)?
> #### TDD is not simply about writing test cases for your code. TDD is the process of writing test code and applying specific principles when doing so.

One of the main principles of TDD is applying the **red-green-refactor** cycle of test writing:

![Red Green Refactor](https://jfiaffe.files.wordpress.com/2014/09/redgreenrefacor.png)
