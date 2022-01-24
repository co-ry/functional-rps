let playerChoice;
let computerChoice;
let choicesFromArray =[];
let currentRound = 0;
let playerScore = 0;
let computerScore = 0;
let result;

const fiveChoices = ['rock', 'spock', 'paper', 'lizard', 'scissors'];
const threeChoices = ['rock', 'paper', 'scissors'];

const btns = document.querySelectorAll('img');
const currentPlayerScore = document.getElementById('player-score');
const currentComputerScore = document.getElementById('computer-score');

const imgChoice = btns.forEach((image)=>{image.addEventListener('click',()=>{
  playerChoice = image.id
  realPlay(playerChoice)
  })
});


const newGame = document.getElementById('refresh')
newGame.textContent = `Play Some More`;
newGame.classList.add('refresh');
newGame.addEventListener('click',()=> {
    refreshPage();
});

// Function to refresh page
function refreshPage() {
  window.location.reload(true);
}

function scores(result){
  if (result == 'win'){
    playerScore++
    currentPlayerScore.textContent = playerScore;
  }
  if (result == 'lose'){
    computerScore++
    currentComputerScore.textContent = computerScore;

  }
}

// get random computer choice
function getComputerChoice(currentRound){
  if (currentRound > 2){
    let randomChoice = Math.floor(Math.random() * 5)
    return computerChoice = fiveChoices[randomChoice];

  }
  else {
    let randomChoice = Math.floor(Math.random() * 3)
    return computerChoice = threeChoices[randomChoice];
  }
}


// switch game to five choices after 2 rounds
function roundNumber(currentRound) {
  if (currentRound <= 2){
    getComputerChoice(currentRound)
    choicesFromArray = threeChoices.map((choices) => choices)
    return computerChoice
  }
  else {
    getComputerChoice(currentRound)
    choicesFromArray = fiveChoices.map((choices) => choices)
    return computerChoice
  }
}


// decide victor from array choices 
function compare(playerChoice, computerChoice) {
  playerChoice = choicesFromArray.indexOf(playerChoice);
  computerChoice = choicesFromArray.indexOf(computerChoice);
  if (playerChoice == computerChoice) {
    result = 'tie';
  }
  else if (playerChoice == choicesFromArray.length - 1 && computerChoice == 0) {
    result = 'lose';
  }
  else if (computerChoice == choicesFromArray.length - 1 && playerChoice == 0) {
    result = 'win';
  }
  else if (playerChoice > computerChoice) {
    result = 'win';
  } else {
    result = 'lose';
  }
}


const realPlay = (playerChoice) => {
  roundNumber(currentRound);
  compare(playerChoice, computerChoice);
  scores(result);
  currentRound++;
  console.log(currentRound, computerScore, playerScore);
  console.log(playerChoice, computerChoice, result);
  return 
}

