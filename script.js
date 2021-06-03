
//Handles the click event after user selects a move
document.getElementById("rock").onclick=playRock;
document.getElementById("paper").onclick=playPaper;
document.getElementById("scissors").onclick= playScissors;
 
//Functions that utilize the users first move to initialize the game (and also display user's choice)
let uc=document.getElementById("user-choice");

function playRock (){
  uc.innerHTML= "You chose: Rock";
  playRound("rock");  
}

function playPaper (){
  uc.innerHTML= "You chose: Paper";
  playRound ("paper");
}

function playScissors (){
  uc.innerHTML= "You chose: Scissors";
  playRound ("scissors");
}

//Function that gets computer's random choice (and also displays it)
let cc =document.getElementById("computer-choice");
let choices = ["rock", "paper", "scissors"];

function computerPlay (choices){
 let randomIndex = Math.floor (Math.random() * 3);
 let randomChoice = choices [randomIndex];
 cc.innerHTML= "Computer chose: " + randomChoice;
 return randomChoice;
}

//Main game function -- displays results and returns both total scores after every round 
//cache the DOM and reset scores 
let us= document.getElementById("user-score");
let cs=document.getElementById("computer-score");
let results=document.getElementById("sub-title");
let userScore =0;
let compScore=0;

function playRound (userChoice){
let userSelect=userChoice;
let compSelect=computerPlay(choices);

//since best out of five wins...
if (userScore<5 && compScore<5){  

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
  restults.innerHTML= "You won: rock beats scissors.😄";
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
else if (userScore==5){
  results.innerHTML= "Game Over: YOU WON!😄";
  cs.innerHTML= "Computer's Score: "+ compScore;
  us.innerHTML= "Your Score: "+ userScore;
}
else if (compScore===5){
 results.innerHTML= "Game Over: You lost.😿";
 us.innerHTML= "Your Score: "+ userScore;
 cs.innerHTML= "Computer's Score: "+ compScore;
}else{
  results.innerHTML = " *** PROGRAM ERROR*** ";
}
}




//playRound (userChoice);












