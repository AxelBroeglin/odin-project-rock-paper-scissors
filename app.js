const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

//Creation of the array with all the possible choices
const test = [
    "Rock",
    "Paper",
    "Scissors"
];
console.log(test)

//Creation of the function that will randomize the computer's choices
function generateComputerChoice() {
    let generateComputerChoice = test[Math.floor(Math.random()*test.length)];
    computerChoice = generateComputerChoice
    computerChoiceDisplay.innerHTML = computerChoice
  }
  console.log(computerChoice)

//Creation of the function that will calculate the results
function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!'
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    result = 'you win!'
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    result = 'you lost!'
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'you win!'
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'you lose!'
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'you win!'
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'you lose!'
  }
  resultDisplay.innerHTML = result
}

//Everything that happens when we click
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))







//Creation of the 3 buttons for the player to chose between
/* let btn = ''
possibleChoices.forEach(function(buttonCreation) {
    btn += '<button type="button">'+ buttonCreation + '</button>';
}); 
document.getElementById("btnContainer").innerHTML = btn;


//Creation of incremented IDs for the buttons to compare results
let buttonId = document.querySelectorAll('button');
let incrementedId = 1;
for(var i=0; i< buttonId.length; i++){
    buttonId[i].id = incrementedId;
    incrementedId++;
} */



