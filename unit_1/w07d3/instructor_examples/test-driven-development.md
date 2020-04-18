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

> ##### We should write code in small, progressive steps, and test our code at every stage. 

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

> ##### Manual testing is great when we're running small pieces of code that are not very complex.

But when we have to test a complex code with a lot of scenarios, manual testing is tedious 
and even detrimental to the development of the app. We need to execute **automated
testing** if we want to ensure that there are no mistakes in the way that we test code.
 
### What is automated testing? 