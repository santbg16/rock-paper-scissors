let userScore = 0
let compScore = 0
let displayScore = function() {
    return "Your score: " + userScore + " Computer score: " + compScore
    }
    console.log(displayScore());



let game = function() {
    let userChoice = prompt("Rock, Paper or Scissors","Choose")
    userChoice = userChoice.toLowerCase();
    console.log(userChoice);
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 0) {
        compChoice = "rock";
    }
    else if (randomNumber === 1) {
        compChoice = "paper";
    }
    else if (randomNumber === 2){
        compChoice = "scissors";
    }
    //console.log(randomNumber)
    console.log(compChoice);

        if (userChoice === compChoice) {
            result = "Tie! Try again"
        }
        else if ((userChoice === "rock" && compChoice === "scissors") || (userChoice === "paper" && compChoice === "rock") || 
        (userChoice === "scissors" && compChoice === "paper")) {
            result = "You won! " + userChoice + " beats " + compChoice; 
            userScore++
        } 
        else {
            result = "You lost " + compChoice + " beats " + compChoice;
            compScore++
        }
        console.log(result);
        console.log(displayScore());
//more tidy 
            let playRound = function() {    
            for (let i = 0; i < 5; i++) {
                if (userScore < 5 && compScore < 5) {
                    game()
                }
                else if (userScore === 5) {
                    finalScore = "You won the game!"
                }
                else if (compScore === 5) {
                    finalScore = "You lost the game. Try again"
                }
            }
            console.log(finalScore)
            }
            if (userScore < 5 && compScore < 5){
                playRound()
            }

}
game()
