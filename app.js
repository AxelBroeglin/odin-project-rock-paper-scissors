//Creation of the array with all the possible choices
const possibleChoices = [
    "Rock",
    "Paper",
    "Scissors"
];

//Creation of the function that will randomize the computer's choices
let computerChoice = possibleChoices[Math.floor(Math.random()*possibleChoices.length)];
console.log(computerChoice)


//Creation of the 3 buttons for the player to chose between
let btn = ''
possibleChoices.forEach(function(buttonCreation) {
    btn += '<button type="button">'+ buttonCreation + '</button>';
}); 
btn.id = 'someId';

document.getElementById("btnContainer").innerHTML = btn;


//Creation of incremented IDs for the buttons to compare results
let buttonId = document.querySelectorAll('button');
var incrementedId = 1;
for(var i=0; i< buttonId.length; i++){
    buttonId[i].id = incrementedId;
    incrementedId++;
}


//To edit
//Everything that happens when we click
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
  }))




