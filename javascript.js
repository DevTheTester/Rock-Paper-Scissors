// Elements that I can add to page after game is played 

let resultContainer = document.querySelector('.results-container');
let newHeader = resultContainer.appendChild('div')


// Function that get's PC to choose between 3 numbers to represent rock, paper, scissors.
function computerPlay() {
    let choice = ['rock' ,'paper', 'scissors']
    return choice[Math.floor(Math.random() * choice.length)]
}
// Function with two parameters player choice and CPU choice will return win or loss

function playRound(playerSelection, computerSelection) {  
    // Take selections and assign them new number variables 1, 2, 3 to represent rock, paper, scissors.
    playerSelectionLower = playerSelection.toLowerCase();
    if (playerSelectionLower.includes('rock')) {
        playerChoice = 0;
    }
    else if (playerSelectionLower.includes('paper')) {
        playerChoice = 1;
    }
    else if (playerSelectionLower.includes('scissors')) {
        playerChoice = 2;
    }

    if (computerSelection.includes('rock')) {
        cpuChoice = 0;
    }
    else if (computerSelection.includes('paper')) {
        cpuChoice = 1;
    }
    else if (computerSelection.includes('scissors')) {
        cpuChoice = 2;
    }
    // Test to see if selection converts to integer.
    // console.log(`Player = ${playerChoice}/${playerSelection}, CPU = ${cpuChoice}/${computerSelection}`)
    
    // If selection number is the same declare draw.
    if (playerChoice === cpuChoice) {
        return `You chose ${playerSelection}, CPU chose ${computerSelection}. . . It's a draw!`;
    }
    // Players rock beats cpu scissors
    else if (playerChoice === 0 && cpuChoice === 2) {
        return `You chose ${playerSelection}, CPU chose ${computerSelection}. . . You win!`;
    }
    // Players scissors loses to cpu rock
    else if (playerChoice === 2 && cpuChoice === 0) {
        return `You chose ${playerSelection}, CPU chose ${computerSelection}. . . You lose!`;
    }
    // If player has 0 and cpu has 1, or if player has 1 and cpu has 2, player loses.
    else if (playerChoice < cpuChoice) {
        return `You chose ${playerSelection}, CPU chose ${computerSelection}. . . You lose!`;
    }
    // Only condition left is if player choice is greater than cpu choice. player wins these
    else {
        return `You chose ${playerSelection}, CPU chose ${computerSelection}. . . You win!`;
    }
}   

// Function will play a round that takes prompt for player vs random cpu choice, as many times as argument given.
function game(number) {
    for (let i = 0; i < number; i++) {
        console.log(playRound(prompt("THINK FAST! ROCK, PAPER, OR SCISSORS??"),computerPlay()))
    }
}

// functions to turn buttons in html and integrate them with game code
let rock = document.querySelector('.btn-1');

rock.addEventListener('click', () => {
    playRound('rock', computerPlay())
}
);



