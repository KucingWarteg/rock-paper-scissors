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

function playRound(playerSelection,computerSelection) {

    // const playerSelection = prompt("Rock,Paper or Scissors").toLowerCase();
    // const computerSelection = getComputerChoice();   

    let win = 0;
    let lose = 0;

    if (playerSelection==="paper" && computerSelection === "Rock") {
        console.log (`You Won! ${playerSelection} beats ${computerSelection}`)
        win++
        console.log(`Score: Win = ${win} Lose = ${lose}`)
    } else if (playerSelection==="rock" && computerSelection === "Paper") {
        console.log (`You Lose! ${computerSelection} beats ${playerSelection}`)
        lose++
        console.log(`Score: Win = ${win} Lose = ${lose}`)
    } else if (playerSelection==="paper" && computerSelection === "Scissors") {
        console.log (`You Lose! ${computerSelection} beats ${playerSelection}`)
        lose++
        console.log(`Score: Win = ${win} Lose = ${lose}`)
    } else if (playerSelection==="scissors" && computerSelection === "Paper") {
        console.log (`You Won! ${playerSelection} beats ${computerSelection}`)
        win++
        console.log(`Score: Win = ${win} Lose = ${lose}`)
    } else if (playerSelection==="rock" && computerSelection === "Scissors") {
        console.log (`You Won! ${playerSelection} beats ${computerSelection}`)
        win++
        console.log(`Score: Win = ${win} Lose = ${lose}`)
    } else if (playerSelection==="scissors" && computerSelection === "Rock") {
        console.log (`You Lose! ${computerSelection} beats ${playerSelection}`)
        lose++
        console.log(`Score: Win = ${win} Lose = ${lose}`)
    } else if (playerSelection==="rock" && computerSelection === "Rock") {
        console.log ("DRAW")
    } else if (playerSelection==="scissors" && computerSelection === "Scissors") {
        console.log ("DRAW")
    } else if (playerSelection==="paper" && computerSelection === "Paper") {
        console.log ("DRAW")
    } else {
        console.log ("Please input Rock,Paper,Scissors")
    }
}

const playerSelection = prompt("Rock,Paper or Scissors").toLowerCase();
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection,computerSelection));

// function game() {
//     // need to figuring out how to loop <Done>
//     // already know how to store win and lose <Done>
//     // need to figuring out how to put a new prompt after one loop
    
//     let win = 0;
//     let lose = 0;
//     let roundCount = 0;

//     // const playerSelection = prompt("Rock,Paper or Scissors").toLowerCase();
//     // const computerSelection = getComputerChoice();
//     for(let roundCount=0; roundCount<5; roundCount++) {
        
//         if (playerSelection==="paper" && computerSelection === "Rock") {
//             console.log (`You Won! ${playerSelection} beats ${computerSelection}`)
//             win++
//             console.log(`Score: Win = ${win} Lose = ${lose}`)
            
//         } else if (playerSelection==="rock" && computerSelection === "Paper") {
//             console.log (`You Lose! ${computerSelection} beats ${playerSelection}`)
//             lose++            
//             console.log(`Score: Win = ${win} Lose = ${lose}`)
            
//         } else if (playerSelection==="paper" && computerSelection === "Scissors") {
//             console.log (`You Lose! ${computerSelection} beats ${playerSelection}`)
//             lose++
//             console.log(`Score: Win = ${win} Lose = ${lose}`)
            
//         } else if (playerSelection==="scissors" && computerSelection === "Paper") {
//             console.log (`You Won! ${playerSelection} beats ${computerSelection}`)
//             lose++            
//             console.log(`Score: Win = ${win} Lose = ${lose}`)
            
//         } else if (playerSelection==="rock" && computerSelection === "Scissors") {
//             console.log (`You Won! ${playerSelection} beats ${computerSelection}`)
//             win++            
//             console.log(`Score: Win = ${win} Lose = ${lose}`)
            
//         } else if (playerSelection==="scissors" && computerSelection === "Rock") {
//             console.log (`You Lose! ${computerSelection} beats ${playerSelection}`)
//             lose++            
//             console.log(`Score: Win = ${win} Lose = ${lose}`)
            
//         } else if (playerSelection==="rock" && computerSelection === "Rock") {
//             console.log ("DRAW")
//         } else if (playerSelection==="scissors" && computerSelection === "Scissors") {
//             console.log ("DRAW")
//         } else if (playerSelection==="paper" && computerSelection === "Paper") {
//             console.log ("DRAW")
//         } else {
//             console.log ("Please input Rock,Paper,Scissors")
//         }
//     } 
    
// }

// game();



