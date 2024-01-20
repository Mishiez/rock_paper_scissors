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
        return "You win";
    }
    else if(playerSelection==="Rock"&&computerSelection==="Paper"){
        return "You lose";
    }
    else if(playerSelection==="Scissors"&&computerSelection==="Paper"){
        return "You win";
    }
    else if(playerSelection==="Scissors"&&computerSelection==="Rock"){
        return "You lose";
    }
    else if(playerSelection==="Paper"&&computerSelection==="Scissors"){
        return "You lose";
    }
    else if(playerSelection==="Paper"&&computerSelection==="Rock"){
        return "You win";
    }
    else if(playerSelection===computerSelection){
        return "It's a tie";
    }
}
const playerSelection=getPlayerChoice();
const computerSelection=getComputerChoice();
