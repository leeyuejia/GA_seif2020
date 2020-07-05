// import "./styles.css";
// import Tone from "tone";
// import $ from "jQuery";
//////////////////////////////----------ALL DECLARTIONS--------///////////////////////////////////
let gameState = {
    AISequence: [],
    AINotes:[],
    PlayerSequence: [],
    PlayerNotes:[],
}
            
let numOfBox = 2
let boxLeft = 2
let startCount = 1
let currentLevel = 1;
let life = ["https://i.imgur.com/akwaNdR.png", "https://i.imgur.com/KKrdCgz.png"]
let clickNum = 0;
let lifeCount = 3;
////////////////////////////--------- SOUND RELATED-----------////////////////////////////////////
const synth = new Tone.Synth().toMaster()
const duoSynth = new Tone.DuoSynth().toMaster();
const notes = ["C5", "D5", "E5", "F5", "G5", "A5", "B5"]
let context = new AudioContext();



// TOGGLE DIALOGUE//
const dialogueText = ["\"Are you ready?\"",// 1
    "\"Watch Closely.\"",// 2
    "\"Look at what I pressed!\"",// 3
    "\"Remember the sequence!\"",// 4
    "\"Here I go!\"",// 5
    "\"Did you remember the sequence?\"", // 6
    "\"Now repeat the same sequence!.\"",// 7
    `\"Good job!You cleared Level\"`, // 8
    "\"Oh no, Its not a match!\"", // 9
    "\"You pressed the wrong button. Try Again.\"", // 10
    "\"Click Start to start game!\"", // 11
    "\"Click Start to start next level!\"", //12
    "\"Its the right button but wrong order. Try Again!.", // 13
    "\"Oh no. You have no more life!\"" // 14
]
const toggleDialogue = (dialogueCount) => {
    let dialogueBox = $('#dialogue')
    let dialogue = $("#dialogue > h1").addClass("dialogue")
    switch (dialogueCount) {
        case 1:
            return dialogueBox.append((dialogue).text(dialogueText[dialogueCount - 1]))
        case 2:
            return dialogueBox.append((dialogue).text(dialogueText[dialogueCount - 1]))
        case 3:
            return dialogueBox.append((dialogue).text(dialogueText[dialogueCount - 1]))
        case 4:
            return dialogueBox.append((dialogue).text(dialogueText[dialogueCount - 1]))
        case 5:
            return dialogueBox.append((dialogue).text(dialogueText[dialogueCount - 1]))
        case 6:
            return dialogueBox.append((dialogue).text(dialogueText[dialogueCount - 1]))
        case 7:
            return dialogueBox.append((dialogue).text(dialogueText[dialogueCount - 1]))
        case 8:
            return dialogueBox.append((dialogue).text(dialogueText[dialogueCount - 1] + currentLevel))
        case 9:
            return dialogueBox.append((dialogue).text(dialogueText[dialogueCount - 1]))
        case 10:
            return dialogueBox.append((dialogue).text(dialogueText[dialogueCount - 1]))
        case 11:
            return dialogueBox.append((dialogue).text(dialogueText[dialogueCount - 1]))
        case 12:
            return dialogueBox.append((dialogue).text(dialogueText[dialogueCount - 1]))
        case 13:
            return dialogueBox.append((dialogue).text(dialogueText[dialogueCount - 1]))
        case 14:
            return dialogueBox.append((dialogue).text(dialogueText[dialogueCount - 1]))
        default:
            return false;
    }
}



//////////////////////////////----------ALL FUNCTION GOES HERE--------///////////////////////////////////

// Avatar picutre api
const avatarPic = () => {
    const promisefinal = $.ajax({
        url: "https://www.moogleapi.com/api/v1/characters",
        type: "GET",
        data: {
            origin: "Final Fantasy 07"
        }
    })
    promisefinal.then(data => {
        let imageBox = $("#image-avatar > img")
        let ff7 = data.filter(el => el.origin === "Final Fantasy 07")
        imageBox.attr('src', ff7[0].picture)
    }
    )
}
//toggle startpage and epilogue page and about page
const toggleStartPage = () => {
    $(".startpage").toggle("hiddenStart")
}
const toggleEpiPage = (currentLevel) => {
    $(".epilogue-page").toggle("hiddenEpi")
    $("#level-status").text(currentLevel.toString())
}
// display about dev page
const toggleDisplayAbout = () => {
    $(".about-page").toggle("hiddenAbout")

}
// append user name into header box
const usernameInput = () => {
    // console.log($("#input-name").val())
    $("#username").append($('<h2>').text("Hi " + $("#input-name").val()))
}
const removeListener = (target) => {
    target.unbind();
}
const displayNumberOfBoxLeft = (boxLeft) => {
    $('#box-count').children().text(`Box left: ${boxLeft.toString()}`)
}

// refreshgame by emptying two sets of array
const refreshGame = () => {
    gameState.AINotes= [];
    gameState.PlayerSequence = [];
    gameState.AISequence = [];
    let startGameBtn = $('#start-game')
    removeListener(startGameBtn)
    startGameBtn.on("click", continueGame)
}
// close AIboard function by making the board 50% opacity
const closeBoard = () => {
    $('#AI-board').children().css("background-color", "rgba(112,128,144,0.3)")
}
// Open AIboard function 
const openBoard = () => {
    $('#AI-board').css("background-color", "rgba( 0,0,0,0)")
    $('#AI-board').children().css("background-color", "slategray")
}


// Check two array function, if it is the same, execute level pass if not execute level fail. 
const levelPass = (currentLevel) => {
    setTimeout(() => { toggleDialogue(8) }, 1000);
    setTimeout(() => { toggleDialogue(12) }, 5000)
    $(`h4:nth-child(${currentLevel})`).css("color", "rgba(0, 0, 0,1)")
    refreshGame();
}
const levelFail = () => {
    setTimeout(() => { toggleDialogue(14) }, 1000);
    setTimeout(() => { toggleEpiPage(currentLevel) }, 3000)
}

const checkForMatch = (arr1, arr2) => {
    if (arr1.join() === arr2.join()) {
        return levelPass(currentLevel)
    } else return false;
};


//////////////////////////////----------ALL PLAYER ACTION--------///////////////////////////////////
// Player click wrong box. 
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
const minusLife = (lifeCount) => {
    let lifeBox = $(`#lifecount img:nth-child(${lifeCount})`)
    lifeBox.attr('src', life[1])
};

// Player pick color and push to array

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

// Player turn to play a sequence and push its value to player sequence array

const playerMove = () => {
    setTimeout(() => { toggleDialogue(6) }, 1000)
    setTimeout(() => { displayNumberOfBoxLeft(boxLeft) }, 3000)
    setTimeout(() => { toggleDialogue(7) }, 3000)
    setTimeout(closeBoard, 5000)
    let playerButton = $(".right-column > div");
    removeListener(playerButton);
    playerButton.on("click", event => {
        if (lifeCount <= 0) {
            levelFail();
        }
        if (lifeCount > 0) {
            playerPickBox(event.currentTarget)
            if (gameState.PlayerSequence.length === gameState.AISequence.length) {
                checkForMatch(gameState.AISequence, gameState.PlayerSequence)
            }
            else if (gameState.PlayerSequence.length < gameState.AISequence.length) {
                console.log(" Pick one more")
            }
            else if (gameState.PlayerSequence.length > gameState.AISequence.length) {
                return false;
            }
        }
    })
}

//////////////////////////////----------ALL AI ACTION--------///////////////////////////////////

// AI pick random number and change color

const random = (param) => {
    return Math.ceil(Math.random() * param);
}
const randomNote = () => {
    return notes[random(notes.length - 1)]
}
const AIChangeCSS = (selection, color) => {
    selection.css("box-shadow", "inset 5px 5px rgb(24, 24, 24)")
    selection.css("background-color", color);
}
const AIChangeCSSBack = (selection, color) => {
    selection.css("box-shadow", "5px 5px rgb(24, 24, 24)")
    selection.css("background-color", color);
}
//AI PLAY SOUND
const AIPlaySound = (note) => {
    context.resume().then(() => {
        gameState.AINotes.push(note)
        console.log("AI note contains:" + gameState.AINotes)
        synth.triggerAttackRelease(note, "8n")
    })
}
// AI's turn to play a sequence
const displayRandomBox = () => {
    let randomRow = random(4)
    let randomCol = random(5)
    let selectedBox = $(`#${randomRow}-${randomCol}`)
    gameState.AISequence.push(`${randomRow}-${randomCol}`)
    console.log(gameState.AISequence)// this provides answer
    AIChangeCSS(selectedBox, "orange")
    AIPlaySound(randomNote());
    setTimeout(() => { AIChangeCSSBack(selectedBox, "slategray") }, 1000)
}

const AImove = () => {
    console.log("continuing game with level " + currentLevel + " and number of box is " + numOfBox)
    if (startCount <= numOfBox) {
        setTimeout(displayRandomBox, 1000);
        startCount++;
        return setTimeout(AImove, 2000); // original is 4sec
    }
    else {
        numOfBox++;
        startCount = 1;
    }
    return playerMove(boxLeft);
}

//////////////////////////////----------ALL START POINT--------///////////////////////////////////

const startGame = () => {
    setTimeout(() => { toggleDialogue(1) }, 2000)
    setTimeout(() => { toggleDialogue(2) }, 4000)
    setTimeout(() => { toggleDialogue(3) }, 6000)
    setTimeout(() => { toggleDialogue(4) }, 8000)
    setTimeout(() => { toggleDialogue(5) }, 10000)
    setTimeout(AImove, 12000);
}
// Continue to play
const continueGame = () => {
    openBoard()
    setTimeout(() => { toggleDialogue(5) }, 2000)
    setTimeout(AImove, 4000)
    clickNum = 0
    boxLeft = numOfBox
    return currentLevel++
}

//create board//
const createBoard = (row, column, boardID) => {
    for (let i = 1; i <= column; i++) {
        for (let j = 1; j <= row; j++) {
            let box = $('<div>').addClass("box colored sound").attr("Id", `${i}-${j}`)
            $(boardID).append(box)
        }
    }
}


//////////////////////////////----------JQUERY POINT--------///////////////////////////////////

$(() => {
    let startGameBtn = $('#start-game')
    let aboutBtn = $('#about')
    let restartBtn = $('#restart')
    let closeAboutBtn = $('#closeAbout')
    let playAgainBtn = $('#play-again')

    console.log("READY TO GO")

    $(window).on('load', event => {
        event.preventDefault()
        avatarPic();
        toggleDialogue(11)
        createBoard(5, 4, "#AI-board")
        createBoard(5, 4, "#player-board")
        toggleStartPage();
        return false;
    }
    )
    // $(document).ready(event => {
    //     toggleStartPage();
    //     return false;
    //   });
    $('form').on('submit', event => {
        event.preventDefault()
        toggleStartPage();
        usernameInput();
        return false;

    })
    startGameBtn.on('click', startGame)

    restartBtn.on("click", event => {
        event.preventDefault()
        let respond = confirm("Are you sure you want to restart?")
        if (respond == true) {
            location.reload()
        } else return false;
    })

    aboutBtn.on("click", toggleDisplayAbout)
    closeAboutBtn.on("click", toggleDisplayAbout)
    playAgainBtn.on("click", event => {
        location.reload();
    })
})

/// Add vibration of the box
/// Add scaling to level 1 clear
/// Add dialouge shadow toggle
