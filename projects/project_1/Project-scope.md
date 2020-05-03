# Project : Follow-Me App scope

Follow-Me application is a simple game where AI plays a sequence of box arranged in a 5 x 4 grid. Player must remember the sequence and play the same box at the same order  to progress to the next level. 

## Follow-Me App Sample:

- [On codeSandBox] (https://codesandbox.io/s/competent-mcnulty-00yb5?file=/src/index.js)
- [GitHub IO] (https://leeyuejia.github.io/follow-me_app/follow-me.html)
- [Project Github Repo] (https://github.com/leeyuejia/leeyuejia.github.io/tree/master/follow-me_app)

## Table of Contents
- [Introduction](#Introduction)
- [Project Approach](#project-approach)
- [Technology Used](#Technology-used)
- [User Journey Map](#User-Journey-Map)
- [Developer Journey](#Developer-Journey)
- [Future Development](#Future-Development)

# Game Project Scope

## Introduction

Dementia is a disease and conditions characterized by a decline in memory, cognitive learning capabilites, language expression, problem-solving skills that affects a person's ability to perform everyday tasks. Memory loss is one of the major condition that affects many cognitive ability. 

Studies shows that in Singapore, every 1 in 10 person aged 60 and above have Dementia ranging from mild to severe cases. 3 in 4 of affected person feel ashamed and rejected because of the illness. Some affected person might not feel anything due to the severity of the case. 

Demented patients have brain cells that are dying in a rate which causes the condition to worsen once it is contracted. As of current, There is no remedy or cure for dementia. There has also never been a recovery case. However we can slow down the rate of dementia through prescribed theraputic sessions, getting the infected patient to be socially engaged, daily practising of thinking skills and home care and oral treatment that slows down the rate of brain cells dying. 



### In view of this, the application developed aims to achieve 2 purpose
 1) As a therapeutic session to engaged affected patient to explicitly exercise memory ability. It is hoped that patient can use this application as a channel to practise remembering and at the same time engaged in technology learning (i.e,Computer) in a fun and entertaining manner. 

 2) This application can be used by Doctors as an assessment tool to determine the severity of the patient as well as the rate of deterioration. 


## Project Approach

The approach to this project is to achieved a step-by-step guide, provided by an AI to visually engage user. At any given time, User are guided to perform only one task at any given time. Application should be visually clear and purposeful. Buttons function are direct and perform only one task. Application should not be jarring at the start in order to assist user to ease in and feel confident to proceed. As the user successfully cleared a level, an encouraging message such as "Well done, you clear a level" should display to encourage user. 

Application can store user information (username) such that user can revisit this application and retrieve data that show how user has been doing over time. This data can be encouraging to user as well as can be an assessment tool for doctors to see patient's progress. 

## Technology used

1) HTML
2) CSS
3) JAVASCRIPT
4) JQuery
5) AJAX
6) EXTERNAL source 
    - Tone.js - (https://tonejs.github.io/)
    - Fontawesome - (https://fontawesome.com/)

## User Journey Map

1) Welcome Page

<img src ="https://i.imgur.com/ia5jsUH.png" width= "100%">

        USER
        - Sees a brief description of game
        - can input username
        - Click "test your memory" button to launch game. 

        SCREEN
        - <div class = "startpage HiddenStart"></div> will be loaded

        AUDIO
        - a theraputic audio will be played. (30% volume)

        INTERACTION
        - when user input name, the value will be captured.
        - When user click submit button, "startpage" will close, and the main page will load. 

2) Main Page

<img src ="https://i.imgur.com/FZS3DJj.png" width= "100%">

        USER
        - (Description in each div)
        - Sees his name appeared
        - buttons of ( About, Start, Restart)

        SCREEN WILL DSIPLAY
        - <div class = "header-container mainpage">
        - <div class="top-container mainpage">
        - <div class="indicator mainpage">
        - <div class="gameboard-container mainpage">
        - <div class="gameboard-container mainpage">

        AUDIO
        - Theraputic audio will be stopped

        INTERACTION
        - (Description in each div)

* _**Header Div:**_

<img src ="https://i.imgur.com/W6d9vyB.png" width= "100%">

        USER
        - Sees his name appeared
        - buttons of ( About, Start, Restart)
        - Title of the Application

        INTERACTION
        - About button will toggle <div class="about-page hiddenAbout">
        - Start Game will trigger startgame() function - to start game
        - Restart will trigger load.reload() - to reload the entire page

* _**Top Div:**_

<img src ="https://i.imgur.com/1e1mVDm.png" width= "100%">

        SCREEN WILL DSIPLAY
        - Avatar image will appear ( Using API to retrieve img src)
        - dialogue will toggle to display instruction on next step
        - Three hearts will display as a Lifecount

        INTERACTION
        - When Click start button, dialogue will toggle instructions to guide user
        - @ later stage, when user turn to click box, <div id="box-count"> will display the number of box left to click)
        - When user click the wrong box, the life-count will change a heart shape to colorless

* _**Indicator Div:**_

<img src ="https://i.imgur.com/AXDDE6z.png" width= "100%">
        USER
        - Sees which board belows to user.

        SCREEN WILL DSIPLAY
        - Computer column
        - Player column
        - Serves as an indicator to which board belongs to whose.

* _**Gameboard Div:**_

<img src ="https://i.imgur.com/CNW6AmU.png" width= "100%">

        USER
        - See AI-board
        - See Player-board

        SCREEN WILL DSIPLAY
        - Each board will have a (5 x 4) grid, styled like a button

        INTERACTION
        - When Click start button, AI will "pressed" button
        - Pressed button will trigger
            - Sound
            - Color change
            - Shadow change ( to resemble button depressed)
        - Player Board's button have have different effect based on 3 condition
            - player click right button at the right order
            - player click right button but different order
            - player click wrong button
        - Based on the player button clicked, dialouge will display accordingly instruction

* _**Footer Div:**_

<img src ="https://i.imgur.com/5t6izwI.png" width= "100%">

        USER
        - See how many levels have cleared. 

        SCREEN WILL DSIPLAY
        - "light up" the number of level clear. 

        INTERACTION
        - When player cleared a level, the respective level will change opacity to 1.0

3) About Page

<img src ="https://i.imgur.com/Pq4Njzl.png" width= "100%">

        USER
        - See information about developer
        - Link to developer's social media

        SCREEN WILL DSIPLAY
        - <div class="about-page hiddenAbout"> will appear
        - Social media link
        - Continue button to close the about-page.
        - Main page will "hide"

        INTERACTION
        - When User click about button,<div class="about-page hiddenAbout"> will appear
        - User can click respective icon to link to developer's social media
        - User can click continue button to close <div class="about-page hiddenAbout"> 
        to continue playing

4) Epilogue Page

<img src ="https://i.imgur.com/8j6OAjO.png" width= "100%">

        USER
        - See the number of levels cleared
        - a quote to read as an advice / encouragement
        - a play again button

        SCREEN WILL DSIPLAY
        - <div class="epilogue-page hiddenEpi">will appear
        - The number of level user cleared
        - a quote
        - button to "Play Again"
        - Main page will "hide"

        INTERACTION
        - When User failed the stage and game ended  will appear <div class="epilogue-page hiddenEpi">
        - User can click button to Play Again
        - Play again button will location.reload() - To refresh the page. 

* _**Gameplay:**_

AI playing sequence
<img src ="https://i.imgur.com/2UJzalB.png" width= "100%">
Level cleared!
<img src ="https://i.imgur.com/gw6ttpm.png" width= "100%">
Right button but wrong order
<img src ="https://i.imgur.com/05mS32u.png" width= "100%">
Wrong button
<img src ="https://i.imgur.com/4btiZJn.png" width= "100%">

## Developer Journey

1) PROCESS

I started with drafting out wireframing to have an impression of how the application would visually look like. The wireframing would also serve as user jouney and give an impression on the flow of game. As for the game logic, I determined the rules and conditions and started to draft data structures, methods and sources that would be needed. 

I first started to draft out the html structure based on my wireframing and added basic CSS styling. As I wanted to tackled game logic first, I created gameboard and starting to write methods and test game flow side by side to achieve basic game flow. After game flow is achieved, I added game button's function to make the application work and see if there is any loophole or undesired flow. 

Finally, I added styling to improve user interaction and appeal visually to user.  

2) CHALLENGES & SOLUTION

- Challenge 1 - Using external source (Tone.js)

Tone.js was one of my main challenge as I have difficulties understanding documentation. I tried to study the source code from examples that uses Tone.js, I visited youtube tutorial, creating a mock up button to test various codes to test if I can get use the source. However to no avail. 

Credits to @Min shan (course IA) who provided 1 on 1 session to explain how tone.js works. 

- Challenge 2 - (What is user click the right box but wrong order?)

One of the game logic is to fulfil layers of condition. As the game logic uses comparison of AI array and player array to see if player click the right box at the right order, I was at a lost to writing the condition. 

I managed to arrived at a workable solution using layered condition. When player clicked a box, It will push the selected box id to the player array then it will first check if the selected box index is the same as Aisequence index. If it returns false, then it will check if the selected box is included() in AIsequence array. If it returns false, then it is a wrong box else it will be right box wrong order.

- Challenge 3 - Playing the same tone as AI's

Initially AI plays a random note and player will also plays a random note. upon consultation with AI, it is difficult to follow. So the challenge is how to code the player's note similar to AI's chosen tone. 

Credit to @Wilfried (course IA) who pointed a simple solution. That is to push AI notes into an array and when player clicks a box, it will play the corresponding notes according to the number of box that has been correctly clicked. 

- Challenge 4 - Restart button

Initial function is to restart the game. It should just restart a certain division instead of loading the entire page from start. 

----Future solution to be implemented----

## Future development

* _**Bonus**_

        USER STORAGE
        - Website stores information
                1) number of attempts
                2) attemptted dates
                3) number of level cleared

        - User can view past result and retrieve information when it searches its username

        MORE INTERACTION
        - When player click wrong box, the box will invoke vibration animation. 
        - "level cleared" box will be more highlighted to invoke sense of achievement
        - Player can choose avatar of their choice.
        - Have different tiers of advice depending on the number of level completed

        CODE REFRACTORING
        - Code can be refactored further and readable through seperating js file
        - Code can be refactored further through arranging data into objects.

        GAME MODE
        - There can be an option for player vs player.

* _**HIGHER BONUS**_

        - Display stored information is a infographics style. The information displayed should be meaningful and helpful to user's evaluation. 

        - Stored information can allow game to resume and track user's history of performance. 