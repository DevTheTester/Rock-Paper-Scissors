function computerPlay() {
    let choice = ["rock", "paper", "scissors"]
    return choice[Math.floor(Math.random() * choice.length)]
}

function playRound(player_play) {
    if ((toString(player_play)) === "rock");
        if ((computerPlay()) === "scissors") {
            console.log("you win bitch")
        }
    else {
        console.log("something else happened")
    }
}