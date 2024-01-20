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
        return win;
    }
    else if(playerSelection==="Rock"&&computerSelection==="Paper"){
        return lose;
    }
    else if(playerSelection==="Scissors"&&computerSelection==="Paper"){
        return win;
    }
    else if(playerSelection==="Scissors"&&computerSelection==="Rock"){
        return lose;
    }
    else if(playerSelection==="Paper"&&computerSelection==="Scissors"){
        return lose;
    }
    else if(playerSelection==="Paper"&&computerSelection==="Rock"){
        return win;
    }
    else if(playerSelection===computerSelection){
        return tie;
    }
}
const playerSelection=getPlayerChoice();
const computerSelection=getComputerChoice();
const win="You win";
const lose="You lose";
const tie="You tie";
