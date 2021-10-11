const cpuResult = ["ROCK", "PAPER", "SCISSORS"];
let playerSelection;

let computerPlay = () => {
    i = cpuResult.length;
    i = Math.floor(Math.random() * i);
    return (cpuResult[i]);

}

let gameOver = false;

while(gameOver == false){
    do {

        playerSelection = prompt("Rock, Paper Scissors: ").toUpperCase();
        if (cpuResult.includes(playerSelection) == false || playerSelection == null){
    
            console.log("Please Choose Rock, Paper or Scissors!!")
            
        }
    }
    while (cpuResult.includes(playerSelection) == false );

    let computerSelection = computerPlay();


    console.log(`You chose ${playerSelection}!`);
    console.log(`The CPU chose ${computerSelection}!`);

    if (playerSelection === computerSelection){

        console.log("Draw! Try Again!");

    } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") || 
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")){

        console.log(`${playerSelection} beats ${computerSelection}! You Win!!!`);
        gameOver = true;

    } else {

        console.log(`${playerSelection} loses to ${computerSelection}! Try Again!`);
    }
}
