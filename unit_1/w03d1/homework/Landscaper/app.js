let teeth;
let money;

const start = ()=> {
    teeth = 16;
    money = 0;
    askForAction();
}

const showStatus = () => {
    alert("You have " + teeth + " teeth left and " + "$" + money + " left");
}
const showStatus2 = () => {
    alert("You have " + teeth + " teeth left and " + " You have a siccsors and "+ "$" + money + " left");
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
    }
    };

const askForAction2 = () => {
        showStatus();
        const choice = prompt('What do you want to do?', "use teeth / buy lawnmower($25) / use sicssors / restart");
        if (choice === 'use teeth'){
            alert('You have used a teeth to cut grass')
            cutLawn()
        } else if (choice === 'buy lawnmower($25)') {
            alert('You have spent $25 to buy a lawnmower')
            buyLawnmower()
        } else if (choice === 'use sicssors') {
            alert('You used a sicssors to cut grass')
            cutMoreLawn()
        } else if (choice === 'restart') {
            alert('thank you for cutting grass')
            start();
        }
        };
        
const askForAction3 = () => {
    showStatus();
    const choice = prompt('What do you want to do?', "use teeth / buy advance lawnmower($25) / use sicssors / restart");
    if (choice === 'use teeth'){
        alert('You have used a teeth to cut grass')
        cutLawn()
    } else if (choice === 'buy lawnmower($25)') {
        alert('You have spent $25 to buy a lawnmower')
        buyLawnmower()
    } else if (choice === 'use sicssors') {
        alert('You used a sicssors to cut grass')
        cutMoreLawn()
    } else if (choice === 'restart') {
        alert('thank you for cutting grass')
        start();
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

start();
