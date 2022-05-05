// Function that get's PC to choose between 3 numbers to represent rock, paper, scissors.
function computerPlay() {
    let choice = ['rock' ,'paper', 'scissors']
    return choice[Math.floor(Math.random() * choice.length)]
}

function playRound(playerSelection, computerSelection) {  

    // Object to convert choice of rock paper and scissors and convert to number.
    playerSelection = playerSelection.toLowerCase();
    choiceToNum = {
        'rock':0,
        'paper':1,
        'scissors':2,
    };
    playerChoice = choiceToNum[playerSelection];
    cpuChoice = choiceToNum[computerSelection];
    
    // If selection number is the same declare draw.
    if (playerChoice === cpuChoice) {
        subheader.textContent = `You chose ${playerSelection}, Hisoka also chose ${computerSelection}. . . It's a draw!`;
        resultImage.src='img/hisoka.jpg';
    }
    // Players rock beats cpu scissors
    else if (playerChoice === 0 && cpuChoice === 2) {
        subheader.textContent = `You chose ${playerSelection}, Hisoka blundered with ${computerSelection}. . . You win!`;
        resultImage.src='img/gonrock.jpg';
    }
    // Players scissors loses to cpu rock
    else if (playerChoice === 2 && cpuChoice === 0) {
        subheader.textContent = `You chose ${playerSelection}, Hisoka throws a ${computerSelection} at your DOME!. . . You lose!`;
        resultImage.src='img/goncrying.png';
        return `You chose ${playerSelection}, CPU chose ${computerSelection}. . . You lose!`;
    }
    // If player has 0 and cpu has 1, or if player has 1 and cpu has 2, player loses.
    else if (playerChoice < cpuChoice) {
        subheader.textContent = `You chose ${playerSelection}, Hisoka destroys you with ${computerSelection}. . . You are worthless!`;
        resultImage.src='img/goncrying.png';
    }
    // Only condition left is if player choice is greater than cpu choice. player wins these
    else {
        subheader.textContent = `You chose ${playerSelection}, Hisoka didn't see that coming! You beat his ${computerSelection}. . . Well done!`;
        resultImage.src='img/gonwin.jpg';
    }
}   
   
// variables that select rock paper scissors buttons
let rock = document.querySelector('.btn-1');
let paper = document.querySelector('.btn-2');
let scissors = document.querySelector('.btn-3');
// variable that will select header to change text
let subheader = document.querySelector('.subheader');
let resultImage = document.querySelector('.result-image')

// functions that play a round on click
rock.addEventListener('click', () => {
    console.log(playRound('rock', computerPlay())
    )
}
);

paper.addEventListener('click', () => {
    console.log(playRound('paper', computerPlay())
    )
}
);

scissors.addEventListener('click', () => {
    console.log(playRound('scissors', computerPlay())
    )
}
);

