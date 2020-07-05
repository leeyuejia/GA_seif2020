console.log("app.js..");

document.querySelector('h1').innerText = "Good Example";

document.querySelector('#example').innerText = "Another Good Example";

let exampleDiv = document.getElementById("example");
exampleDiv.innerText = "Other Example";

let paragraphItems = document.querySelectorAll('.paragraph');

paragraphItems.forEach(function(item) {
  item.style.color = "red";
});

// let paragraphColour = prompt();

// paragraphItems.forEach(function(item) {
//   item.style.color = paragraphColour;
// });

let alienShipsCount = 6;

//get a reference to the element
let startGameBtn = document.getElementById('startGameBtn');

//add event listener
startGameBtn.addEventListener('click', function(event) {
    let battleshipDiv = document.getElementById("battleship");
    for(let i=0; i< alienShipsCount; i++) {
        let newDiv = document.createElement('div');

        let newContent = document.createTextNode("Alien "+(i+1));

        newDiv.appendChild(newContent);

        battleshipDiv.appendChild(newDiv);
        /*
        Todo: would be nice to make this work
        setInterval(()=>{
            battleshipDiv.appendChild(newDiv);
        }, 2000);*/
    }

    startGameBtn.disabled = true;
    addAlienBtn.disabled = false;
});

//get a reference to the element
let addAlienBtn = document.getElementById('addAlienBtn');

//add event listener
addAlienBtn.addEventListener('click', function(event) {

    alienShipsCount = alienShipsCount + 1;

    let battleshipDiv = document.getElementById("battleship");

    // Todo: refactor this into a create alien element function
    let newDiv = document.createElement('div');

    let newContent = document.createTextNode("Alien "+(alienShipsCount));

    newDiv.appendChild(newContent);

    battleshipDiv.appendChild(newDiv);

});

let apiDiv = document.getElementById("api");

let url = "https://api.data.gov.sg/v1/environment/psi?date_time=2019-09-21T17%3A00%3A00";
fetch(url).then(function(response) {
  response.text().then(function(text) {

    let apiObj = JSON.parse(text);
    console.log(apiObj);

    apiDiv.textContent = "PSI status is "+apiObj.api_info.status;

    apiDiv.textContent += ".. National PSI reading: " + apiObj.items[0].readings.psi_twenty_four_hourly.national;

    // let apiText = JSON.stringify(apiObj);
    // console.log(apiText);
  });
});