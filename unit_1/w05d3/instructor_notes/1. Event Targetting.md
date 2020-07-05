# EVENT TARGETING

## Lesson Objectives



1. Access the event parameter
1. Use `event.currentTarget` to target the specific element being targetted
1. Bonus: pratice breaking a larger problem down into smaller steps



## Getting started

- Go into the `event_targeting` folder and open the files in your text editor and open the index.html in the browser

- write a console.log to test that `app.js` is correctly connected

- write your jQuery document on load function

- select every div with a class of `card`

- add an `on` `click` event handler that console logs something on click

## Targeting our Target

- Let's get the card to 'flip over' by clicking on it. To do that we'll just toggle the 'card-back' class

```js
$(()=> {
  const $card = $('.card').on('click', ()=>{
    $('.card').toggleClass('card-back')
  })
})
```

Now when we click, we get all the cards to turn over.

What we need to do is target the very card we are clicking on. We can do this by accessing the event parameter

```js

$(()=> {
  const $card = $('.card').on('click', (event)=>{
    console.log(event)
    $('.card').toggleClass('card-back')
  })
})
```

Looks something like this:

![](https://i.imgur.com/n3O4BtK.png)


We can go deeper and access the `event.currentTarget`

And, in this case, we see we clicked on the first card

![](https://i.imgur.com/q9zlOCj.png)

We can covert it into a jQuery object by 'wrapping it in money'

```js
    console.log($(event.currentTarget))
```

![](https://i.imgur.com/rONpSYg.png)


Great! Let's see if we can just toggle the class of this current target

```js
$(()=> {
  const $card = $('.card').on('click', (event)=>{
    console.log($(event.currentTarget))
    $(event.currentTarget).toggleClass('card-back')
  })
})
```


That's it! Now we can target each card and 'flip' it


### Extra

Let's check if the cards match. We may be tempted to do even more! What about removing matching cards? Flipping non-matching cards back over? Adding sound effects? Animations...

WHOA! Let's walk it back. We want to be sure that we are solving one small problem at a time. Trying to solve too many things at once is going to be one of your biggest challenges when you first start out.

Now that we have our cards flipping over - we just want to check if they match

- we just have to solve this one problem
- it's ok if it's not efficient or optimal
- it's ok if you'll need to refactor your code for later steps
- it's ok if it's buggy - you'll be able to click the same card twice and get a match - that's ok! At first you just want to solve one thing - imagine the perfect user who would never ever click the same card twice. Once you solve the simplest part, you can then work on fixing/preventing bugs

We need to store two cards. Let's make an array and a function to add the value of the card to the array if the array length is NOT 2

Let's set up a function:

```js

const handOfCards = []

$(()=> {
  const $card = $('.card').on('click', (event)=>{
    $(event.currentTarget).toggleClass('card-back')
    playHand()
  })
})

const playHand = () => {
  if (handOfCards.length === 2) {
    console.log('checking', handOfCards)
  } else  {
    console.log('adding to', handOfCards)
    // need to push something to handOfCards
  }
}
```

Let's grab the value, let's console log one piece at a time

```js
const playHand = () => {
  if (handOfCards.length === 2) {
    console.log('checking', handOfCards)
  } else  {
    console.log('adding to', handOfCards)
    // console.log($(event.currentTarget))
    // console.log($(event.currentTarget).children())
    // console.log($(event.currentTarget).children().eq(1))
    // console.log($(event.currentTarget).children().eq(1).text())
    handOfCards.push($(event.currentTarget).children().eq(1).text())
  }
}
```

We need to be able to call playHand when there are two cards in play


```js
const playHand = () => {
  if (handOfCards.length === 2) {
    console.log('checking', handOfCards)
  } else  {
    handOfCards.push($(event.currentTarget).children().eq(1).text())
    // if after pushing the length is NOW 2
    if (handOfCards.length === 2) {
      playHand()
    }
  }
}
```

Let's write some logic to do something if the cards match and else, if they don't match and in either case, let's empty the array


```js
const checkHand = () => {
  console.log('Ok I will check your cards', handOfCards)
  if (handOfCards[0] === handOfCards[1]) {
    $('body').append(`<h2>It's a match!</h2>`)
  } else {
    $('body').append(`<h2>It's NOT a match!</h2>`)
  }
  handOfCards = []
}
```
Uh oh `handOfCards` is set to a `const` variable, let's change it to `let` so we can clear the array after we are done checking two cards

```js
const playHand = () => {
  if (handOfCards.length === 2) {
    checkHand()
  } else  {
    handOfCards.push($(event.currentTarget).children().eq(1).text())
    // if after pushing the length is NOW 2
    if (handOfCards.length === 2) {
      playHand()
    }
  }
}
```

### Potential Next Steps

- only add a value to the array if it is a card that is face down
- if the cards don't match, have them flip back over
- rather than append more and more h2s, replace the text
- Upgrade the functionality to remove matching cards from the DOM
- create a win state (no cards left - give a win message, reset the board)
- create a lose state (too many turns used, give a lose message, reset the board)
- Create the cards programmatically so they can be shuffled and placed in random order
- Add more cards
- Add a display of turns/plays/wrong guesses
- Add an animation for card flipping
