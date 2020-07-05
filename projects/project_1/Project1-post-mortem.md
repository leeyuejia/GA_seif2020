# Approach and Process

## 1. What in my process and approach to this project would I do differently next time?

- Spent too much time on css at first. I would have start with basic game setup and focus on polishing game logic first before "styling" the application. Another option is to use bootstrap or external source to help with styling (example)

- Stick to the plan. My thought process are in linear form. Would like to try and code in a forward looking thinking process. OR plan even deeper so that I do not have to refractor much at the end. 

- I would give more thoughts on organizing my ocde as the code gets longer, I get lost in my own code. 

- Tried to practice one function doing one thing. However should try to apply "DRY" concept even more.

- Did not use "class" and "objects" to store variables and functions. Would like to practise on this to make code more readable. 

- Did not understand how to use external source like drawing data from API, using external Js. Understanding its documentation was not easy. I send 1 and a half day trying to sort it out bofore I had to consult IAs. 

- I was too concern about the coding part that I neglect to plan in usability.


## 2. What in my process and approach to this project went well that I would repeat next time?


- Wireframing is a good process as I have a clear direction and visualization of my end product. 

- Breaking problem into smaller chunk. Instead of thinking the solution as one big problem, I tried to build step by step. Making sure each step is correctly done before moving to the next. A building" mentality. 

- Having an idea what method you are going to use for this particular part is helpful as It helps to start organizing your code from the start.  


# Code and Code Design

## 1. What in my code and program design in the project would I do differently next time?

- Better sense of organization to know when should a function be called? sometimes both is fine however which one is better based on performance and readability. 

- Too much hard coding ( especially CSS) HTML/CSS classes and ID can be better organized to reduce repetition. Perhaps breaking CSS into different file to maintain readability

- There should be a better way to ```toggleDialogue()``` function as It is too repetitive and not dynamic. Each time I want to add a dialouge i have to add into the array and add a "case" in the function. 

- There is still too much going on in a function ( example below). There can be a HOF to change css with different param. 

```
const errorBox = (target) => {
    console.log("error!")
    duoSynth.triggerAttackRelease("C4", "10n")
    $(target).css("box-shadow", "inset 5px 5px rgb(24, 24, 24)")
    $(target).css("background-color", "red") // turn this into a vibration instead
    setTimeout(() => { $(target).css("background-color", "slategray") }, 1000)
    setTimeout(() => { $(target).css("box-shadow", "5px 5px rgb(24, 24, 24)")}, 1000)
    setTimeout(() => { toggleDialogue(10) }, 1000)
}
// Player click correct box.
const correctBox = (target, clickNum) => {
    synth.triggerAttackRelease(gameState.AINotes[clickNum], "8n")
    boxLeft--
    displayNumberOfBoxLeft(boxLeft)
    $(target).css("box-shadow", "inset 5px 5px rgb(24, 24, 24)")
    $(target).css("background-color", "orange")
    setTimeout(() => { $(target).css("background-color", "slategray") }, 1000)
    setTimeout(() => { $(target).css("box-shadow", "5px 5px rgb(24, 24, 24)")}, 1000)
}
// Player pick wrong order box.
const wrongOrder = (target) => {
    duoSynth.triggerAttackRelease("C4", "10n")
    $(target).css("box-shadow", "inset 5px 5px rgb(24, 24, 24)")
    $(target).css("background-color", "red") // turn this into a vibration instead
    setTimeout(() => { $(target).css("background-color", "slategray") }, 1000)
    setTimeout(() => { $(target).css("box-shadow", "5px 5px rgb(24, 24, 24)")}, 1000)
    setTimeout(() => { toggleDialogue(13) }, 1000)
}
``` 
- I would have start with understanding the external source that I want to use. tone.js / APIS first before going into coding.

- Many a times, I find myself having to change alot if I want to add certain features. Mainly, My code process is not dynamic enough. I wanted to add in lifeline graphics ```minusLife()``` I then hardcode img tag in html, style in css and write a function just for that specific. The example below, ```minusLife()``` could also be written in ```errorBox()``` and ```wrongOrder()``` function so that they do not repeat: 

```
const errorBox = (target) => {
    console.log("error!")
    duoSynth.triggerAttackRelease("C4", "10n")
    $(target).css("box-shadow", "inset 5px 5px rgb(24, 24, 24)")
    $(target).css("background-color", "red") // turn this into a vibration instead
    setTimeout(() => { $(target).css("background-color", "slategray") }, 1000)
    setTimeout(() => { $(target).css("box-shadow", "5px 5px rgb(24, 24, 24)")}, 1000)
    setTimeout(() => { toggleDialogue(10) }, 1000)
}

const minusLife = (lifeCount) => {
    let lifeBox = $(`#lifecount img:nth-child(${lifeCount})`)
    lifeBox.attr('src', life[1])
};

const playerPickBox = (target) => {
    let playerSelectedBox = ($(target).attr("Id"))
    gameState.PlayerSequence.push(playerSelectedBox);
    if (gameState.AISequence[clickNum] !== gameState.PlayerSequence[clickNum]) {
        if (!gameState.AISequence.includes(playerSelectedBox)) {
            errorBox(target)
            minusLife(lifeCount)
            gameState.PlayerSequence.pop();
            return lifeCount--;
        } else {
            wrongOrder(target)
            minusLife(lifeCount)
            gameState.PlayerSequence.pop();
            return lifeCount--;
        }
    }
    else if (gameState.AISequence[clickNum] === gameState.PlayerSequence[clickNum]) {
        correctBox(target, clickNum)
        return clickNum++;
    }
    console.log(gameState.PlayerSequence)
    console.log(lifeCount)
}
```

- Mainly code refactoring has to be done much early. Preferably once my logic is there.

- I need to improve the naming of my function to be more specific even if it takes a longer name. 

## 2. What in my code and program design in the project went well? Is there anything I would do the same next time?

- I think one good habit is I broke it down to steps. Instead of tackling the entire 2 to 3 problem at once. Do it step by step like a builder mentality helps progress. 

- I tried to declare variables at the start. I need to do it more often and covers bigger ground in other to organize code better. 

## 3.Question

- ```const continueGame = () => {
    openBoard()
    setTimeout(() => { toggleDialogue(5) }, 2000)
    setTimeout(AImove, 4000)
    clickNum = 0
    boxLeft = numOfBox
    return currentLevel++
    }
    ```
I tried to return currentLevel ++ and return clickNum = 0 and it does not allow that. I do not understand why when I call this function, what is the difference if i return currentLevel++ and just currentLevel++. What does return do?

- I have two Jquery link in my html. reason being. If I use the slim version, the $ajax call does not work. if I use the minified version, My load page loads differently. 

# Unit 1 Post Mortem
1. What habits did I use during this unit that helped me?

    - Setting aside time to code. 
    - Studying other student code / answer. 
    - Discussion with other student helps alot. 

2. What habits did I have during this unit that I can improve on?

    - Going beyond the cirriculum. 
    - Aim to understand and not finishing the homework. 
    - Do not fear. Have confident. Do not know, google first. Still do not know, then ask. 

3. How is the overall level of the course during this unit? (instruction, course materials, etc.)

    - There is alot of self-learning. Many things are beyond what was taught.
    - Topics flashes too fast and there is no time to properly absorb and apply. 
    - Hopefully there would be more time to discuss homework rather than going through the curriculum. 
    - Perhaps for beginners, It would be good to have visualization of how concept works to learn better. 
    - The project 1 was good as it helps to build confidence. 

    
