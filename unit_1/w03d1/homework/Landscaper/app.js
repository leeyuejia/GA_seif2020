let teeth;
let money;

const start = ()=> {
    teeth = 16;
    money = 0;
    askForAction();
};

const showStatus = () => {
    alert("You have " + teeth + " teeth left and " + "$" + money + " left");
}
const showStatus2 = () => {
    alert("You have a siccsors and "+ "$" + money + " left");
     if (money < 0) {
        gameOver();
////// UNABLE TO GET THE CONDITION TO RECOGNIZE IF CURRENT MONEY VALUE BECOMES MORE THAN 2, IT WILL TRIGGER
////// WIN() FUNCTION
    //  } else if (money > 2) {
    //     win();
     } else {
     askForAction2(); 
}
};

const showStatus3 = () => {
    alert("You have a Lawnmower and "+ "$" + money + " left");
}
const showStatus4 = () => {
    alert("You have a Advance Lawnmower and "+ "$" + money + " left");
}

const askForAction = () => {
    showStatus();
    const choice = prompt('What do you want to do?', "use teeth / buy sicssors($5) / restart");
    if (choice === 'use teeth'){
        alert('You have used a teeth to cut grass')
        cutLawn()
    } else if (choice === 'buy sicssors($5)') {
        alert('You have spent $5 to buy a sicssors')
        buySiccsors()
    } else if (choice === 'restart') {
        alert('thank you for cutting grass')
        start();
    } else {
        alert('Invalid input. Please refresh to start all over again')
    }
    };

const askForAction2 = () => {
        showStatus2();
        const choice = prompt('What do you want to do?', "use sicssors / buy lawnmower($25) / restart");
        if (choice === 'use sicssors'){
            alert('You used sicssors to cut grass')
            cutMoreLawn()
        } else if (choice === 'buy lawnmower($25)') {
            alert('You have spent $25 to buy a lawnmower')
            buyLawnmower()
        } else if (choice === 'restart') {
            alert('thank you for cutting grass')
            start();
        }else {
            alert('Invalid input. Please refresh to start all over again')
        }
        };
        
const askForAction3 = () => {
    showStatus3();
    const choice = prompt('What do you want to do?', "use lawnmower / buy advance lawnmower($250) / restart");
    if (choice === 'use lawnmower'){
        alert('You used a lawnmower to cut grass')
        useLawn()
    } else if (choice === 'buy advance lawnmower($250)') {
        alert('You have spent $250 to buy a lawnmower')
        buyAdvanceLawnmower()
    } else if (choice === 'restart') {
        alert('thank you for cutting grass')
        start();
    } else {
        alert('Invalid input. Please refresh to start all over again')
    }
    };
    
const askForAction4 = () => {
        showStatus4();
        const choice = prompt('What do you want to do?', "use advance lawnmower / hire a team of student($500) / restart");
        if (choice === 'use advance lawnmower'){
            alert('You used a advance lawnmower to cut grass')
            useAdvLawn()
        } else if (choice === 'hire a team of student($500)') {
            alert('You have spent $500 to hire a team of student')
            hireStudent()
        } else if (choice === 'restart') {
            alert('thank you for cutting grass')
            start();
        } else {
            alert('Invalid input. Please refresh to start all over again')
        }
        };
            
const askForAction5 = () => {
    showStatus4();
    const choice = prompt('What do you want to do?', "use student / restart");
    if (choice === 'use student'){
        alert('You used a team of student to cut grass')
        usedStudent()
    } else if (choice === 'restart') {
        alert('thank you for cutting grass')
        start();
    } else {
        alert('Invalid input. Please refresh to start all over again')
    }
    };
//ACTIONS FOR FUNCTION

const cutLawn = () => {
    teeth -=1
    money ++
    askForAction();
};
const buySiccsors = () => {
    money -=5
    askForAction2();
}
const cutMoreLawn = () => {
    money +=5
    askForAction2();
}
const buyLawnmower = () => {
    money -=25
    askForAction3();
}
const useLawn = () => {
    money +=50
    askForAction3();
}
const buyAdvanceLawnmower = () => {
    money -=250
    askForAction4();
}
const useAdvLawn = () => {
    money +=100
    askForAction4();
}
const hireStudent = () => {
    money -= 500
    askForAction5();
}
const usedStudent = () => {
    money += 250
    askForAction5();
}
const gameOver = () => {
    alert('You have bankrupted yourself to death');
    endgame();
}
const win = () => {
    alert('You have earn $1000 over, Congratualation, you can retire now');
    endgame();
}
const endgame = () => {
    break;
}
start();
