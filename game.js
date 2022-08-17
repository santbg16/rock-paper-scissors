/*get computer choice randome between rock paper scissors
get user choice rock paper or scissors
assign values to rock paper and scissors
rock is greater than scissors and less than paper
paper is greater than rock and less than scissors
scissors are greater than paper and less than rock
compare imput and computer choice
user choice is greater you won 
computer is greater you lost 
start again */
/*let userChoice = prompt("Rock, Paper or Scissors", "Choose");
userChoice = userChoice.toLowerCase();
let compChoice = getComputerChoice();
function getComputerChoice() {
    let randomnumber = Math.floor(Math.random(3)*3);
    if (randomnumber === 0) {
        return "Rock";
    }
    else if (randomnumber === 1) {
        return "Paper";
    }
    else if (randomnumber === 2) {
        return "Scissors";
    }
}
second attempt try to get a working result from random number*/
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
//console.log(compChoice);
//So far works to get a random number 0,1,2
// By getting compChoice managed to get rock, paper or scissors
let userChoice = prompt("Rock, Paper or Scissors?","");
userChoice = userChoice.toLowerCase();
//console.log(userChoice);
//Prompt user to imput choice and changed to lower case
let winner = (compChoice , userChoice)
    if (compChoice === userChoice) {
        result = "Tie! Try again";
    }
    else if (compChoice === "rock" && userChoice === "paper") {
        result = "You win!";
    }
    else if (compChoice === "paper" && userChoice === "scissors") {
        result = "You win!";
    }
    else if (compChoice === "scissors" && userChoice === "rock") {
        result = "You win!";
    }
    else {
        result = "You loose :(";
    }
console.log(result)
//finally managed to play. Works till here. 