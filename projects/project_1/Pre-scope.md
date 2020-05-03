# The murderer game scope

## Table of contents
- Introduction
- Application format
- Sources to use
- Main Application template and view states
- User stories and wireframing
- Game logic
- Bonus


## Introduction

This application is a test to see much a person's memory can hold. The test will be in a form of game where an AI played a pattern and play will aim to play the same pattern. This cycle will repeat with added difficulties. This app is useful to provide memory training and evaluation. Especially for dementia patient. Doctors can use this app as part of evaluation tool to gauge patient's degree of dementia.

## Application format

On page load, there will be a 
 - div - "about game" page loaded (Explanation of the game, input name of user and a button to close the about game page)
 - "main" page will load and show a 
        - header (Display user name, a button to start game, title of the page and a button that display "about game", a "reset" button to reset gameboard)
        - div-top (Default stage is This contains a dialogue that describe the game state.)
        - div-left column ( 5 X 4 grid with each gird is an element) #AI-board.
        - div-right column ( 5 X 4 grid with each grid is a clickable element) #Player-board.
        - div-footer (After passing each level, a div containing h2 will appear stating "level + (#number) Cleared!)

## Sources to use - API (Need to discuss with lecturer how to extract sound data.)
        1) Flat.io (https://flat.io/developers/docs/api/authentication.html) 
                - to extract music notes
        2) Web audio API (https://webaudio.github.io/web-audio-api/)
                - to extract music notes
        3) Tone.js (https://tonejs.github.io/docs/)
                - to extract music notes
        4) MoogleApi (https://www.moogleapi.com/api/v1/characters)
                - to extract an image data for avatar.



## Main Application template and view states
The game application uses the following template view to be displayed. 

- **About-game**
        
        - On page load, about game div will display. 

- **Header**

        - header_left will display user name $(<input>).val()
        - a button to start game. $('.startgame').on('click', startgame())
        - header_center will display title of game.
        - A button to display what the game is about. $('button').on('click, show updated about game div)
        - A reset button to reset game board ($('reset-button).on('click', resetgame()))
        - Display will be flexbox, row wrap. 

- **div-top**

        - An empty div container.
        - when user click start game, a dialogue will appear ("Watch closely") with an avatar(img) to increase interactivity
        - AI's board (under div-left column) will play the pattern. 
        - When its player's turn, dialogue ("Remember? Its your turn now!")
        - When player's board matches AI's pattern, dialogue ("Good job! now on to the next level")
        - In intermission, will display dialogue ("Watch closely")
        - When player's board does not match AI's pattern, dialogue ("Oh no! You missed a step.")
        - When game ends, div-top will be empty()

- **div .-left-column #AI-board**
        
        - This div contains a 5 X 4 Grid. each grid represent an element of the pattern. 
        - When user click start game, "div-top" will display dialogue("watch closely")
        - AI will start pattern. 
        - When pattern ends, "div-top" will display ("Remember? Its your turn now!")
        - this div will have a dark-colored background color with opacity 0.5 covered. (Indicating it is player's turn)

- **div .-right-column #Player-board**

        - When "div-top" displays ("Remember? Its your turn now!")
        - this div contains a 5 X 4 grid. with each element in grid is clickable. 
        - players can click each element in grid. 
        - if players managed to follow AI pattern, "div-top" will display dialogue ("Good job! now on to the next level")
        - "div top" will display dialogue ("Watch closely") 
        - "div left column" will display a level higher of pattern
        - if players fail to follow AI pattern, "div-top" will display dialogue ("oh no! you missed a step.")
        - "div epilogue" will appear in front of all div to display results and then a "play again" button)

- **div #epilogue**

        - this div display results which indicates how many level players have passed. 
        - depending on the level that passed, there is a tier level respond.
                - level 1-5 passed, tier 1 level, respond "memory is not good.", "Tips to improve memory on this tier."
                - level 6-10 passed, tier 2 level, respond "memory is decent.", "advance tips to improve memory on this tier."
                - level 11-15 passed, tier 3 level, respond "memory is good.", "tips to continue to train memory."
                - level 16-20 passed, tier 4 level, respond "memory is exceptional.", "scientific research on memory."
        - A <button>try again</button> to invoke playing the game again. 

-**div footer**

        - this div will display how many levels have cleared.

## USER STORY / WIREFRAME

- **about game**

        DISPLAY
<img src ="wireframe/follow me wireframing-01.jpg" width= "100%">
        
        USER
        - players will see a brief description of game
        - Players can input his name
        - Players can click "test your memory" button to launch game. 

        SCREEN
        - <div class = "prologue></div> will be loaded
        - in .prologue, a h2 text of brief description
        - a <input type = "submit" placholder = "enter your name">
        - a <button type = "submit">Go to the scene<button> 
        - .prologue will be cover the entire interaction area screen. 

        AUDIO
        - a theraputic audio will be played. (30% volume)

        INTERACTION
        - when user input name, the value will be captured.
        - When user click submit button, page on load will close, and the main page will load. 

- **MAIN PAGE**

        DISPLAY
<img src ="wireframe/follow me wireframing-02.jpg" width= "100%">
        
        USER
        - can click start game to start

        SCREEN
        - header div will load (empty) until user click start game. 
        - div top will load AI avatar and dialogue. 
        - div left column #AI-board will load with boards loaded
        - div right column #Player-board will load with boards loaded
        - div footer will load. (empty)

        AUDIO
        - a theraputic audio will continue to play (30% volume)

        INTERACTION
        - when user input name, the value will be captured and displayed in the header div. 
        - When user click start game button, div-top will contain the start dialogue. 
        - dialouge will automate to next dialogue after 3secs
        - After 3 secs, AI-board will play sequence.

<img src ="wireframe/follow me wireframing-03.jpg" width= "100%">
<img src ="wireframe/follow me wireframing-04.jpg" width= "100%">

        INTERACTION
        - After AI play sequence, it will prompt user through the dialogue that it is player turn. 
        - player can try as best to replicate the sequence. 
        - after replication is successful div-top will display another dialogue. 
        - div-bottom will display "level 1 clear"
        - the next round will start. the process repeats for each level with added difficulties. 
        

<img src ="wireframe/follow me wireframing-05.jpg" width= "100%">

<img src ="wireframe/follow me wireframing-06.jpg" width= "100%">

<img src ="wireframe/follow me wireframing-07.jpg" width= "100%">

<img src ="wireframe/follow me wireframing-08.jpg" width= "100%">

<img src ="wireframe/follow me wireframing-09.jpg" width= "100%">


        INTERACTION (Scenario : Player failed and game ends)
        - Players failed at one stage and the game ends. 
        - div #epilogue will appear giving player a summary of how many levels clear, and depending on the number of levels cleared, will display the appropriate message to encourage players. 
        - players can click play again button to play again. 

<img src ="wireframe/follow me wireframing-10.jpg" width= "100%">
<img src ="wireframe/follow me wireframing-11.jpg" width= "100%">

        INTERACTION (Scenario : Player clicked about app button)
        - player clicked on about app button, the about game will pop up with updated information

<img src ="wireframe/follow me wireframing-12.jpg" width= "100%">
<img src ="wireframe/follow me wireframing-13.jpg" width= "100%">

## GAME LOGIC 

**PRE-GAME** (data structure)

* _**declaration and objects data structure**_

        - Declare AI as an object with 
                - avatarimg     : "url" - string
                - dialogue      : [array of dialogues]
                - sequences        : [each round's sequences pushed to this array]
                - gameBoard     : $('#AI-board)
        
        - Declare Player as an object with
                - name          : $('input').val() - a string
                - sequences        : [each round's sequences pushed to this array]
                - gameBoard     : $('#Player-board)

        

* _**Gameboard**_
        
        - createBoard () { function will create a 5 x 4 grid with each grid assigned an ID } 
        - Appending createBoard() to AI and player div. 


**UPON GAMESTART**

* _**Methods to use**_

        - startgame () function that invokes
                - AI dialogue()
                - AITurn()
                - PlayerTurn ()
                

        - gamestate() (function or object ???)
                - level = 3 (3 means select 3 grid)
                - currentTurn = AI  or player
                - currentLevel = 0
                - dialouges = dialogues to displayed and updated after each action
                - clearedLevel = []
                - successOrNot - checkForMatch () if (AI.sequence.length === player.sequence.length) return true if AI.sequence.split().join() === player.sequence.split().join()

        
        - AI dialogue () function
                - to append AI.dialogue[index] and AI.avatarimg to div-top
                - AI dialogue will be updated depending on gamestate()

        - AITurn() function
                - randomly select a grid.
                - the selected grid will toggle className for 2 sec
                - during the 2 sec, audio tagged to the selected grid will play()
                - AI.sequence.push(selectedBox)
                - update gamestate()

        - PlayerTurn () function
                - each grid element is listening to player click. 
                - on click( selectedBox
                        playaudio(selectedBox)
                        player.sequence.push(selectedBox)
                )
                - then it will be end of playerturn and invoke AIturn()
                - update gamestate()


* _**Game Logic**_

        METHODS TO USE  

        - Timer (setInterval())
                - play one element per 3 seconds

        - Timer (setTimeout())
                - to give buffer time in between dialogues and elements played

        - levelClear( compare AI.sequence and Player.sequence is the same)
        - levelFail (compare AI.sequence and Player.sequence is different)
        - css.toggle(classname) to display divs from hidden to block
        - createBoard(), loop through rows and column and append each div in a grid. 
        - <audio> <source src = "sound.mp3" type = "mp3"></audio> sound tag to tag into each grid.
        - .play() function to play sound when a grid is clicked or selected by AI
        - AIselection() ai selection will select a random gridbox within its grid. 
        - AITurn.setInterval(AIselection, 3000) when its AI turn, ai will select element per 3 sec, allowing player time to absorb. 
        - A condition that if AI board grid is selected, the slected grid will change color and will invoke play() sound to its respective grid. 


* _**Bonus**_

        USER STORAGE
        - Website stores information
                1) number of attempts
                2) attemptted dates
                3) number of level cleared
        - User can view past result and retrieve information when it searches its username

* _**HIGHER BONUS**_

        Display stored information is a infographics style. The information displayed should be meaningful and helpful to user's evaluation. 

* _**FINISHED PRODUCT**_
        github website: https://leeyuejia.github.io/follow-me_app/follow-me.html



