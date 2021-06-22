
//Handles the click event after user selects a move.
document.getElementById("rock").onclick=playRock;
document.getElementById("paper").onclick=playPaper;
document.getElementById("scissors").onclick= playScissors;
 
//Functions that utilize the users first move to initialize the game (and also display user's choice).
let uc=document.getElementById("user-choice");

function playRock (){
  //uc.innerHTML= "You: Rock";
  playRound("rock");  
}

function playPaper (){
  //uc.innerHTML= "You: Paper";
  playRound ("paper");
}

function playScissors (){
  //uc.innerHTML= "You: Scissors";
  playRound ("scissors");
}

let cc =document.getElementById("computer-choice");
let choices = ["rock", "paper", "scissors"];

//Function that gets computer's random choice (and also displays it).
function computerPlay (choices){
 let randomIndex = Math.floor (Math.random() * 3);
 let randomChoice = choices [randomIndex];
 //cc.innerHTML= "Computer: " + randomChoice;
 return randomChoice;
}

//cache the DOM and reset scores.
let us= document.getElementById("user-score");
let cs=document.getElementById("computer-score");
let results=document.getElementById("sub-title");
let userScore =0;
let compScore=0;

// ** Main game function ** displays results and returns both total scores after every round.
function playRound (userChoice){
let userSelect=userChoice;
let compSelect=computerPlay(choices);

// ** since best out of five wins the GAME, allows plays till one wins.
if (userScore<5 && compScore<5){  

// ** all of the possible scenarios for single ROUND:
 if (userSelect ===compSelect){
 results.innerHTML= "This round is a tie 🙃";
 cs.innerHTML= "Computer's Score: "+ compScore;
 us.innerHTML= "Your Score: "+ userScore;
 }
 else if (userSelect ==="paper" && compSelect==="rock") {
  userScore +=1;
  results.innerHTML= "You won: paper beats rock 😄";
  cs.innerHTML= "Computer's Score: "+ compScore;
  us.innerHTML= "Your Score: "+ userScore;
 }
  else if (userSelect==="rock" && compSelect==="scissors"){
  userScore +=1;
  results.innerHTML= "You won: rock beats scissors.😄";
  cs.innerHTML= "Computer's Score: "+ compScore;
  us.innerHTML= "Your Score: "+ userScore;
 }
  else if (userSelect==="scissors" && compSelect==="paper"){
  userScore +=1;
  results.innerHTML= "You won: scissors beats paper.😄";
  cs.innerHTML= "Computer's Score: "+ compScore;
  us.innerHTML= "Your Score: "+ userScore;
 }else{
  compScore +=1;
  results.innerHTML= "You lost this round.😿";
  us.innerHTML= "Your Score: "+ userScore;
  cs.innerHTML= "Computer's Score: "+ compScore;
 }
  return userScore;
  return compScore; 
}
//if either player has won:
else if (userScore==5){
  results.innerHTML= "Game Over: YOU WON!😄";
  cs.innerHTML= "Computer's Score: "+ compScore;
  us.innerHTML= "Your Score: "+ userScore;
  //end game when user wins
  alert("Game over: press f5 to play again");
}
else if (compScore===5){
 results.innerHTML= "Game Over: You lost.😿";
 us.innerHTML= "Your Score: "+ userScore;
 cs.innerHTML= "Computer's Score: "+ compScore;
 //end game when comp wins
 alert("Game Over: Press F5 or refresh browser to play again");
 }
   
}
















