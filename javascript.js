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

function getHumanChoice() {
    let choice = prompt();
    
    if (choice === 'rock') {
        return choice;
    } else if (choice === 'paper') {
        return choice;
    } else if (choice === 'scissors') {
        return choice;
    } else {
        return alert("Escolha inválida");
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

function playGame() {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);


    if (humanScore > computerScore){
        console.log("You win!")
    } else if (computerScore > humanScore){
        console.log("You lose!")
    } else {
        console.log("Draw.")
    }
}

playGame();