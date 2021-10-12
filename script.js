const cpuResult = ["ROCK", "PAPER", "SCISSORS"];
let playerSelection;
let playerOne = 0;
let playerTwo = 0;

game();


function computerPlay() {
    i = cpuResult.length;
    i = Math.floor(Math.random() * i);
    return (cpuResult[i]);

}

function playRound() {

    do {

        playerSelection = prompt("Rock, Paper Scissors: ").toUpperCase();
        if (cpuResult.includes(playerSelection) == false || playerSelection == null){
    
            console.log("Please Choose Rock, Paper or Scissors!!");
            
        }
    }
    while (cpuResult.includes(playerSelection) == false );

    let computerSelection = computerPlay();


    console.log(`Player 1 chose ${playerSelection}!`);
    console.log(`Player 2 chose ${computerSelection}!`);

    if (playerSelection === computerSelection){

        console.log("This Round is a Draw!");

    } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") || 
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")){

        console.log(`${playerSelection} beats ${computerSelection}! Player 1 Wins This Round!`);
        playerOne++;

    } else {

        console.log(`${playerSelection} loses to ${computerSelection}! Player 2 Wins This Round!`);
        playerTwo++;
    }

}

function game() {
    const rounds = 5;
    for (round = 0; round < rounds; round++) {
        
        console.log(`Round ${round + 1}`);
        playRound();
        console.log("");
        
    }

    console.log (`Player 1 has ${playerOne}, Player 2 has ${playerTwo}`)

    if (playerOne > playerTwo) {
        console.log("Player 1 Wins!");
    } else if (playerOne < playerTwo){
        console.log("Player 2 Wins!");
    } else {
        console.log("It's a Draw!!!");
    }
    
}
