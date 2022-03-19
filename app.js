//Creation of the array with all the possible choices
 const possibleChoices = [
     "Rock",
     "Paper",
     "Scissors"
   ];


//Creation of the 3 buttons for the player to chose between
let btn = ''
possibleChoices.forEach(function(buttonCreation) {
    btn += '<button type="button">'+ buttonCreation + '</button>';
}); 

document.getElementById("btnContainer").innerHTML = btn;


 //Creation of the function that will randomize the computer's choices
let computerChoice = possibleChoices[Math.floor(Math.random()*possibleChoices.length)];
console.log(computerChoice)



