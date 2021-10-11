const cpuResult = ["ROCK", "PAPER", "SCISSORS"];
let userPlay;

let computerPlay = () => {
    i = cpuResult.length;
    i = Math.floor(Math.random() * i);
    return (cpuResult[i]);

}

let cpuHand = computerPlay();

let gameOver = false;

while(gameOver == false){
    do {

        userPlay = prompt("Rock, Paper Scissors: ").toUpperCase();
        if (cpuResult.includes(userPlay) == false ){
    
            console.log("Please Choose Rock, Paper or Scissors!!")
            
        }
    }
    while (cpuResult.includes(userPlay) == false );

    console.log(`You chose ${userPlay}!`);
    console.log(`The CPU chose ${cpuHand}!`);

    if (userPlay === cpuHand){

        console.log("Draw! Try Again!");

    } else if ((userPlay === "ROCK" && cpuHand === "SCISSORS") || 
        (userPlay === "PAPER" && cpuHand === "ROCK") ||
        (userPlay === "SCISSORS" && cpuHand === "PAPER")){

        console.log("You Win!!!");
        gameOver = true;

    } else {

        console.log("You Lose! Try Again!");
    }
}
