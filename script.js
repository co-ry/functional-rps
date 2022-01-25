let playerChoice;
let computerChoice;
let choicesFromArray =[];
let currentRound = 0;
let playerScore = 0;
let computerScore = 0;
let result;

const fiveChoices = ['paper', 'rock', 'lizard', 'spock', 'scissors'];
const threeChoices = ['paper', 'rock', 'scissors'];

const btns = document.querySelectorAll('img');
const currentPlayerScore = document.getElementById('player-score');
const currentComputerScore = document.getElementById('computer-score');


// initialize game on click of img
const imgChoice = btns.forEach((image)=>{image.addEventListener('click',()=>{
  playerChoice = image.id;
  realPlay(playerChoice);
  })
});

function toggle() {
  let hiddenLizard = document.getElementById('lizard-div').style.display;
  let hiddenSpock = document.getElementById('spock-div').style.display;
  if ( hiddenLizard = hiddenSpock == 'block') {
    hiddenLizard = hiddenSpock  = 'none';
  } 
  else {
    hiddenLizard = hiddenSpock  = 'block';
  }
} 


// refresh button
const newGame = document.getElementById('refresh')
newGame.textContent = `Play Some More`;
newGame.classList.add('refresh');
newGame.addEventListener('click',()=> {
    refreshPage();
});


function refreshPage() {
  window.location.reload(true);
}


function scores(result){
  if (result === '1' && playerScore < 3 && computerScore < 3){
    playerScore++
    currentPlayerScore.textContent = playerScore;
  }
  else if (difference === '2' && playerScore < 3 && computerScore < 3){
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
    toggle();
    getComputerChoice(currentRound);
    choicesFromArray = fiveChoices.map((choices) => choices);
    return computerChoice;
  }
}


// determines winner based off index value of array and returns 0, 1, or 2
function compare (playerChoice, computerChoice) {
  if (playerChoice === undefined){
      return
  }
   indexPlayer = choicesFromArray.indexOf(playerChoice), //rock = 1
   indexComputer = choicesFromArray.indexOf(computerChoice), //paper = 0
  difference = indexComputer - indexPlayer; // 0 - 1 = -1

  if(difference < 0) { // -1 < 0 = true
      difference += choicesFromArray.length; // -1 + 5 = 4
  }
  while(difference > 2) { //4 > 2 = true
      difference -= 2; // 4 - 2 = 2. you lose.
  }
  return result = difference
};


const realPlay = (playerChoice) => {
  roundNumber(currentRound);
  compare(playerChoice, computerChoice);
  scores(result);
  currentRound++;
  console.log(currentRound, computerScore, playerScore);
  console.log(playerChoice, computerChoice, result);
  return 
}

