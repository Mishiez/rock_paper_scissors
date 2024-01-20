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
