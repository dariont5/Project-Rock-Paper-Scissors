/*
Rock-Paper-Scissors

Requirements:
* 5 rounds
* Computer Choice
* Player Choice
* Victory Conditions - tie handling - loss handling
* Replay

Psuedocode:
Initialize rounds played as 0
Initialize player and computer score as 0
While rounds played < 5:
    Compute computer choice
    Prompt Player for choice
    If player beats computer:
        Increment player score
        Log victory
    Else If player loses:
        Increment computer score
        Log loss
    Else If Tie:
        Log tie
    Increment rounds played
If player score beats computer:
    Print player wins
Else If player loses:
    Print computer wins
Else If Tie:
    Print Tie
*/

function getComputerChoice() {
    let num = Math.ceil((Math.random()*3) + 0.00001);
    let choice;
    if (num === 1) {
        choice = 'rock';
    } else if (num === 2) {
        choice = 'paper';
    } else {
        choice = 'scissors';
    }
    return choice;
}

function getHumanChoice() {
    let choice = prompt('Please choose rock, paper, or scissors: ').toLowerCase();
    if (choice === 'rock') {
        return 'rock';
    } else if (choice === 'paper') {
        return 'paper';
    } else if (choice === 'scissors') {
        return 'scissors';
    } else {
        console.log('Please try again with a valid response.')
    }
}

function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    console.log(`player: ${humanChoice}, computer: ${computerChoice}`)
    if ((humanChoice === 'rock' && computerChoice === 'scissors')||(humanChoice === 'paper' && computerChoice === 'rock')||(humanChoice === 'scissors' && computerChoice === 'paper')) {
        console.log(`Nice, ${humanChoice} beats ${computerChoice}.`)
        return 'human'
    }
    else if ((humanChoice === 'rock' && computerChoice === 'paper')||(humanChoice === 'paper' && computerChoice === 'scissors')||(humanChoice === 'scissors' && computerChoice === 'rock')) {
        console.log(`Loser, ${computerChoice} beats ${humanChoice}.`)
        return 'computer'
    } else {
        console.log('Tie!')
    }
}

// begin algorithm
function playGame() {
    let humanScore = 0, computerScore = 0, rounds = 0;
    let keepGoing = true;

    while(keepGoing) {
        let dummy = playRound();
        rounds++;
        if (dummy === 'human') {
            humanScore++
        } else if (dummy === 'computer') {
            computerScore++
        } 

        if (rounds == 5) {
            keepGoing = false;
        }
    }

    console.log(`Final Score: Player: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log('You win!');
    } else if (humanScore < computerScore) {
        console.log('L bozo');
    } else {
        console.log('Tie!')
    }
}