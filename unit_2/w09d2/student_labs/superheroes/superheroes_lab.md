[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

# Superheroes need REST Too (Index/Show)

#### Learning Objectives

- Setting up a basic express server

#### Prerequisites

- JavaScript
- Express

---

## Getting Started with a Basic Express App

1. Create a new directory inside your labs dir called "superheroes"
1. cd into superheroes
1. create a `server.js` file
1. perform an npm init, specify `server.js` as your entry
1. install express
1. inside `server.js`, require express and save it to a variable named `express`
1. create a variable named app, and set it equal to `express()`
1. have app listen on port 3000
    - once it's listening, log "Here to save the day..."
1. test it by going to http://localhost:3000

## Creating Routes

1. Create a variable called superheroes and set it to [ 'Superman', 'Wonder Woman', 'Black Panther' ]
1. Create a route to `/superheroes`, which will be the `index`
    - The route should send the entire superheroes array
1. Create a route to `/superheroes/:index`, which will be the `show` route
    - The route should send the superhero that is at the index in the superheroes array as specified by req.params.index

## Enhancing Data

1. Change the entries in the superheroes array so that each element in the array is an object
    - E.g. Instead of 'superman' have: `{ name: "Superman", powers: ['flight', 'invulnerability', 'x-ray vision']}`
1. Upgrade your `res.send` on the `show` route to send the superhero name as an `h1` and then the powers as `li` items in an `ul` ( hint: use string interpolation or string concatenation )
1. Writing HTML this way is really tedious and hard to read...I wonder if we'll learn a better way to do this soon?

### Add Villians!
1. Bring in this data
```js
[
    {
     name: "Lex Luthor", 
     powers: ["super brain"]
    },
    {
     name: "Ares", 
     powers: ["shape shifting", "teleporting"]
     },
     {
      name: "Killmonger", 
      powers: ["ability to fit in Black Panther's suit", "internet agreement that he looks badass"]
     }
]
```

1. Render them in the index below our heros
1. Render show routes for these guys, that have the powers listed (just like superheroes) 

1. On the show page of the superhero, show the villian's name (hint: the villians array index position matches the hero)

Hints: 
- It's all just JavaScript! Do JS things to manipulate the 'data'

---

## Friends 

Let's do another rep with setting up an express server!

1. cd back into the labs directory
1. create a directory called friends
1. cd into friends
1. Create a basic express app
1. Create a variable inside `server.js` that is an array of your friends
1. Create `index` and `show` routes
1. Enhance the data so that each friend is an object with age, location, eyeColor, hairColor attributes
1. The `index` should be a name that links to the show page
1. the `show` route should show all the details of your friend

---

## Hungry for More?

Go back to the X-Files lab from the previous day and/or check out the new Super Bonus!

---

*Copyright 2018, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
