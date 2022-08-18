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
console.log(compChoice);
//So far works to get a random number 0,1,2
// By getting compChoice managed to get rock, paper or scissors
let userChoice = prompt("Rock, Paper or Scissors?","");
userChoice = userChoice.toLowerCase();
console.log(userChoice)
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
    else if (userChoice === null || ""){
        result = "Try imput again";
    } //previous condition does not work
    else {
        result = "You loose :(";
    }
console.log(result)

//finally managed to play. Works till here. 

/*Now needs to store result. Keep tally, if "You win!" user +1 to score. 
if "You loose :(" computer + 1 score
else prompt again and tallies remain the same.
if user or comp reach 5 display won or lost match.
use loop to determine number of games played
reset and try again*/
//second attempt at using a declared function.
/*let compChoice = randomChoice ();
    function randomChoice () {
    let randomNumber= Math.floor(Math.random()*3);
    if (randomNumber === 0) {
        return "rock";
    }
    else if (randomNumber === 1) {
        return "paper";
    }
    else if (randomNumber === 2){
        return "scissors";
    }
} console.log (compChoice)*/
let userScore = 0
let compScore = 0
  if (result === "You win!") {
    userScore++
  } 
  else if (result === "You loose :(") {
    compScore++
  }
  console.log(userScore,compScore)
  //displays score need to loop game to play other rounds and keep score.
  let displayScore = function(){
    return "Your score: " + userScore + " Computer score: " + compScore
  }
  console.log(displayScore())
  // to play again has to call and execute function for entire game until user score or compscore is = 5
  let newGame = function(){
    let userChoice = prompt("Next Round! Rock, Paper or Scissors?","");
    userChoice = userChoice.toLowerCase();
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
        console.log(compChoice)
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
    else if (userChoice === null || ""){
        result = "Try imput again";
    } //previous condition does not work
    else {
        result = "You loose :(";
    }
console.log(result)
  }
  if (result === "You win!") {
    userScore++
  } 
  else if (result === "You loose :(") {
    compScore++
  }
  console.log(userScore,compScore)
  console.log(displayScore())
  if (userScore === 5) {
    alert("You won the game")
  }
  else if (compScore === 5) {
    alert("You lost the game")
  }
  else if (userScore < 5 && compScore <5) {
    newGame()
  }
