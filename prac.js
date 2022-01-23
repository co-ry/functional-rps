const fiveChoices = ['rock', 'spock', 'paper', 'lizard', 'scissors'];
const threeChoices = ['rock', 'paper', 'scissors'];
let playerChoice;
let computerChoice;
let choicesFromArray =[];
let currentRound = 3;
let result;

// switch game to five choices after 2 rounds
function roundNumber(currentRound) {
  if (currentRound <= 2){
    choicesFromArray = threeChoices.map((choices) => choices)
  }
  else {
    choicesFromArray = fiveChoices.map((choices) => choices)
  }
}

// decide victor from array choices 
function compare(playerChoice, computerChoice) {
  playerChoice = choicesFromArray.indexOf(playerChoice);
  computerChoice = choicesFromArray.indexOf(computerChoice);
  if (playerChoice == computerChoice) {
    result = "tie";
  }
  else if (playerChoice == choicesFromArray.length - 1 && computerChoice == 0) {
    result = "lose";
  }
  else if (computerChoice == choicesFromArray.length - 1 && playerChoice == 0) {
    result = "win";
  }
  else if (playerChoice > computerChoice) {
    result = "win";
  } else {
    result = 'lose';
  }
}

// determine which array of choices based on round and determine victor
const playRound = (playerChoice, computerChoice)=> {
  roundNumber(currentRound);
  compare(playerChoice, computerChoice)
  return result
  
}

console.log(playRound('paper', 'scissors'))


