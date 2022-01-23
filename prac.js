// const playRound = (playerChoice, computerChoice)=> {

// }

const fiveChoices = ['rock', 'spock', 'paper', 'lizard', 'scissors']
const threeChoices = ['rock', 'paper', 'scissors']
let choices = []

let currentRound = 1


const roundNumber = (currentRound) => {
    if (currentRound <= 2){
        return choices = threeChoices.map()
    }
    else {
        return choices = fiveChoices.map()
    }
    console.log(choices)
}


function compare(roundNumber) {
    choice1 = choices.indexOf(choice1);
    choice2 = choices.indexOf(choice2);
    if (choice1 == choice2) {
      return "tie";
    }
    if (choice1 == choices.length - 1 && choice2 == 0) {
      return "lose";
    }
    if (choice2 == choices.length - 1 && choice1 == 0) {
      return "win";
    }
    if (choice1 > choice2) {
      return "win";
    } else {
      return 'lose';
    }
  }

  console.log(compare('rock', 'scissors'))