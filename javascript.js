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
    console.log(`Player = ${playerChoice}/${playerSelection}, CPU = ${cpuChoice}/${computerSelection}`)
    
    // If selection number is the same declare draw.
    if (playerChoice === cpuChoice) {
        return `You chose ${playerSelection}, CPU chose ${computerSelection}, It's a Draw!`;
    }
}