const win="You win";
const lose="You lose";
const tie="You tie";
let playerScore=0;

function getComputerChoice(){
    let choice=["Rock","Paper","Scissors"];
    let computerChoice=choice[(Math.floor(Math.random()*choice.length))];
    return computerChoice;
}
function getPlayerChoice(){
    let input=prompt('Choose one among "Rock", "Paper" or "Scissors"');
    let choice=input.toLowerCase();
    let playerChoice=choice[0].toUpperCase()+choice.slice(1);
    return playerChoice;
}
function playRound(playerSelection,computerSelection){
    if(playerSelection==="Rock"&&computerSelection==="Scissors"){
        playerScore++;
        return win + playerScore;
    }
    else if(playerSelection==="Rock"&&computerSelection==="Paper"){
        playerScore--;
        return lose + playerScore;
    }
    else if(playerSelection==="Scissors"&&computerSelection==="Paper"){
        playerScore++;
        return win + playerScore;
    }
    else if(playerSelection==="Scissors"&&computerSelection==="Rock"){
        playerScore--;
        return lose + playerScore;
    }
    else if(playerSelection==="Paper"&&computerSelection==="Scissors"){
        playerScore--;
        return lose + playerScore;
    }
    else if(playerSelection==="Paper"&&computerSelection==="Rock"){
        playerScore++;
        return win + playerScore++;
    }
    else if(playerSelection===computerSelection){
        return tie + playerScore;
    }
}

function game(){
    let result;
    let final;
    for(let i=0;i<5;i++){
        result=console.log(playRound(getPlayerChoice(),getComputerChoice()));
    }
    console.log(playerScore);
   if(playerScore>0){
    console.log("Hurray");
   }
   else if(playerScore<0){
    console.log("Oops");
   }
   else{
    console.log("That was weird");
   }
    return result;
}
game();

