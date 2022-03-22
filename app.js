const computerPlayDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoice = document.querySelectorAll('button')
let userChoice
let result

//Creation of the array with all the possible choices
const possibleChoices = [
    "Rock",
    "Paper",
    "Scissors"
];
console.log(possibleChoices)


//Creation of the function that will randomize the computer's choices
let computerPlay = possibleChoices[Math.floor(Math.random()*possibleChoices.length)];
console.log(computerPlay)
computerPlayDisplay.innerHTML = computerPlay


//Creation of the 3 buttons for the player to chose between
let btn = ''
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
}

//Everything that happens when we click
possibleChoice.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    computerPlay()
    getResult()

  }))


  possibleChoice.onclick= function() {myFunction()}
  
  function myFunction(){
      userChoiceDisplay.innerHTML = userChoice
  }
  myFunction()