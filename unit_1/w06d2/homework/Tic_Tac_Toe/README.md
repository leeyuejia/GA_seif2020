[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

# Tic Tac Toe

![](https://i.imgur.com/LL8gc53.png)

Make a game of Tic Tac Toe. If unfamiliar with the game, google "tic tac toe" to see a working version.

#### Learning Objectives

- Dynamic elements with loops
- Using the same click handler to target the clicked element 
- Game logic 

#### Prerequisites

- jQuery
- JavaScript
- HTML DOM

---

## Getting Started

1. In today's `homework` folder, make a directory called `tic_tac_toe`
1. Inside `tic_tac_toe`, Make your three usual front-end files: `app.js`, `index.html` and a `style.css`, add the jQuery CDN, link them up, and confirm that they're all connected.

## Minimum Viable Product (MVP) 

You must submit a tic-tac-toe with the following:

- A 3x3 grid with clickable squares.
- When a square is clicked, it will display either "X" or "O".
- "X" and "O" should alternate with each click.
- If a square already contains an "X" or an "O", it should not change with subsequent clicks
- The game must have win conditions (three in a row horizontally or vertically should make the user win, don't worry about diagonals -- that's bonus!)
	* Make it so that when a user wins, a modal pops up that displays who won (e.g. "X player won!" or "O player won!" or "No one won!")
- Your app must be responsive, remember: design for mobile first!
	* Wireframe your designs (mobile and desktop) and upload a photo of it inside your `tic_tac_toe` directory

## Commit! 

🔴 You're free to tackle this homework in whatever order you like, but **please commit every time you complete one bullet of MVP**. For example: "three by three grid made with clickable squares", or "can now alternate between x and o with each click"

## Suggested Steps 

Again, you can tackle the homework however you like but if you want more guidance, please see below!

### Make the game board 

1. You will want a container div for the board, and some divs (squares) for your players to (eventually) click on. Generate the squares in a for loop.

1. Make it so the divs align in a 3x3 grid. Hint: use flexbox!

1. Make sure your 3x3 grid is generated, visible, and ready to go before moving on!

### Make it so the squares are clickable 

1. We want to make it so that when any of these squares is clicked, we can have something happen to the individual square that was clicked. Try setting a single event listener within the loop that creates the squares. Start with just a console log within the handler.

### Make each individual square show an X when clicked 

1. Suggestion: use a named function as the event handler. Define your handler function above the for loop so that it will be defined before the loop runs.

1. To target the square-that-was-clicked, think about using `currentTarget`

1. Remember to give your game some style! For example: 
	* Change the size of the 'X' font in your square class to something bigger
	* Center the 'X' font within the div using `text-align: center`
	* Vertically align your 'X' within the square (hint: flexbox!)

1. If you add text to the square, it _might_ vertically rearrange your squares. To keep them in line, investigate setting `overflow: hidden` on your square class.

### Make the squares show an X or an O 

1. First bit of game logic: by toggling a global variable to either true or false, make it so that when a user clicks on a square, it will alternate between displaying 'X' and 'O'

### Check if a square was already clicked 

1. Make it so that a square will not change its 'X' or 'O' if it has already been clicked.

### Win conditions 

1. Game logic! Make it so that: 
	* If there are three Xs in a row (horizontally or vertically), a modal appears saying that X has won the game.

	* If there are three Os in a row (horizontally or vertically), a modal appears saying that O has won the game.

	* In the case of a tie, a modal also appears saying no one won/it was a tie game.
	
1. Make it so that after someone wins or the game ties, no more clicks can occur on the board

---

## Hungry for More?

1. Make it so that three in a row diagonally also lets the user win

1. Make it so the user can click a button to reset the board after each game. 
	* Keep track of the score for each player (how many times they've won) after each reset.

1. Make it so the user can select the height or width of the board (eg. 3 will mean a 3x3 board, 4 will mean a 4x4 board).
	* With a board of any (squared) size, make it so the win conditions will still work. Examples: For a 16x16 board, 16 Xs in a row wins. For a 20x20 board, 20 Os in a row wins, etc.

1. Make it so that the computer will play against the user 
	* The AI should not be able to play on an already-played square
	* Your AI can just play on random squares, or you could give it some strategy (what is a good strategy in Tic Tac Toe?)

---

## Deliverables 

1. A `tic_tac_toe` directory with...
	* `app.js`, `index.html` and `style.css`
	* An uploaded photo of your wireframe design for the app (mobile and desktop design!)
	 
## Technical Requirements
1. Look back at the provided **MVP** to see what's **required** for this homework 
1. Your app MUST run without syntax errors. If there are errors you can't solve, comment them out and leave a comment above explaining what is wrong

## Submission Guidelines

- Submit your homework via github issues before the next class starts at 10AM and please don't forget to fill out the form!

---

*Copyright 2018, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
