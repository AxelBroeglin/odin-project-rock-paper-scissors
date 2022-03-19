const possibleChoices = [
    "Rock",
    "Paper",
    "Scissors"
  ];
  console.log(possibleChoices)

  
  let computerChoice = possibleChoices[Math.floor(Math.random()*possibleChoices.length)];
  console.log(computerChoice)