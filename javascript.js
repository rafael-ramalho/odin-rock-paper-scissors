let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random() * 100);
    let choice = '';

    if (num < 33.33) {
        choice = 'rock';
        return choice;
    }else if (num >= 33.33 && num < 66.66){
        choice = 'paper';
        return choice;
    }else{
        choice = 'scissors';
        return choice;
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === 'rock' && computerChoice.toLowerCase() === 'scissors' 
    || humanChoice.toLowerCase() === 'paper' && computerChoice.toLowerCase() === 'rock'
    || humanChoice.toLowerCase() === 'scissors' && computerChoice.toLowerCase() === 'paper') {
        console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
        humanScore++;
    } else if (computerChoice.toLowerCase() === 'rock' && humanChoice.toLowerCase() === 'scissors' 
    || computerChoice.toLowerCase() === 'paper' && humanChoice.toLowerCase() === 'rock'
    || computerChoice.toLowerCase() === 'scissors' && humanChoice.toLowerCase() === 'paper') {
        console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
        computerScore++;
    } else {
        console.log("Draw.")
    }
}

const choices = document.querySelectorAll("button");
const result = document.querySelector("#result");
choices.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.textContent, getComputerChoice());
        if (humanScore === 5) {
            result.textContent = 'You win!';
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            result.textContent = 'You lose!';
            humanScore = 0;
            computerScore = 0;
        }
    })
})