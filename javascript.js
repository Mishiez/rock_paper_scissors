function getComputerChoice(){
    let choice=["Rock","Paper","Scissors"];
    let computerChoice=choice[(Math.floor(Math.random()*choice.length))];
    return computerChoice;
}