function getComputerChoice() {
    let choice = Math.random() * 3;

    if (choice <=1 ) {
        return "Rock"
    } else if (choice >1 && choice <=2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

let win = 0;
let lose = 0;
let draw = 0;

function playRound(playerSelection,computerSelection) {
    if (playerSelection==="paper" && computerSelection === "Rock") {
        win++
        return (`You Won! ${playerSelection} beats ${computerSelection}`)        
    } else if (playerSelection==="rock" && computerSelection === "Paper") {
        lose++
        return (`You Lose! ${computerSelection} beats ${playerSelection}`)        
    } else if (playerSelection==="paper" && computerSelection === "Scissors") {
        lose++
        return (`You Lose! ${computerSelection} beats ${playerSelection}`)                
    } else if (playerSelection==="scissors" && computerSelection === "Paper") {
        win++
        return (`You Won! ${playerSelection} beats ${computerSelection}`)                
    } else if (playerSelection==="rock" && computerSelection === "Scissors") {
        win++
        return (`You Won! ${playerSelection} beats ${computerSelection}`)                
    } else if (playerSelection==="scissors" && computerSelection === "Rock") {
        lose++
        return (`You Lose! ${computerSelection} beats ${playerSelection}`)            
    } else if (playerSelection==="rock" && computerSelection === "Rock") {
        draw++
        return ("DRAW")                
    } else if (playerSelection==="scissors" && computerSelection === "Scissors") {
        draw++
        return ("DRAW")                
    } else if (playerSelection==="paper" && computerSelection === "Paper") {
        draw++
        return ("DRAW")        
    } else {
        console.log ("Please input Rock,Paper,Scissors")
    }
}

function game() {
    let roundCount = 0;
    
    for(let roundCount=0; roundCount<5; roundCount++) {
    playRound(prompt("Rock,Paper or Scissors").toLowerCase(),getComputerChoice())
    }     

    if (win>lose && win>draw) {
        console.log (`THE CHAMP IS HERE!! Score: Win = ${win} Lose = ${lose} Draw = ${draw}`)
    } else if (lose>win && lose>draw) {
        console.log (`I WANT REMATCH!! Score: Win = ${win} Lose = ${lose} Draw = ${draw}`)
    } else {
        console.log (`DRAW!! Score: Win = ${win} Lose = ${lose} Draw = ${draw}`)
    }
}

//still need to figure out if I can call playRound inside game() with playerSelection and computerSelection

game();
