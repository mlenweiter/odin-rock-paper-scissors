console.log("hello!!")

//TODO: check others' code; end game at 5; display result



let computerScore = 0;
let playerScore = 0;
displayScores(computerScore, playerScore);
addEventListeners();

function checkEnd(buttons){
    if(computerScore === 5){
        alert('Computer Win!')
        buttons.forEach(b => b.disabled = true)

    }

    else if(playerScore === 5){
        alert("You Win!")
        buttons.forEach(b => b.disabled = true)
    }
}

function displayResult(result){
    const resultDisplay = document.querySelector('.resultDisplay');
    if(result === 't')
        resultDisplay.textContent = 'TIE! ';
    else if(result === 'c')
        resultDisplay.textContent = 'Computer Wins! ';
    if(result === 'p')
        resultDisplay.textContent = 'You win! ';


}

function displayScores(){
    const computerScoreDisplay = document.querySelector('.scores .computer .score')
    computerScoreDisplay.textContent = computerScore
    const playerScoreDisplay = document.querySelector('.scores .player .score')
    playerScoreDisplay.textContent = playerScore
}

function updateScores(result){
    if(result === 'c') computerScore ++;
    else if (result === 'p') playerScore ++;
}


function addEventListeners(){
    const buttons = document.querySelectorAll('button')
    const buttonRock = document.querySelector('.rock');
    buttonRock.addEventListener('click', function(e){
        updatePlayerChoice('r')
        const computerChoice = getComputerChoice()
        updateComputerChoice(computerChoice)
        const result = playRound('r', computerChoice)
        displayResult(result);
        updateScores(result);
        displayScores();
        checkEnd(buttons);
    });

    const buttonPaper = document.querySelector('.paper');
    buttonPaper.addEventListener('click', function(e){
        updatePlayerChoice('p')
        const computerChoice = getComputerChoice()
        updateComputerChoice(computerChoice)
        const result = playRound('p', computerChoice)
        displayResult(result);
        updateScores(result);
        displayScores();
        checkEnd(buttons);
    });

    const buttonScissors = document.querySelector('.scissors');
    buttonScissors.addEventListener('click', function(e){
        updatePlayerChoice('s')
        const computerChoice = getComputerChoice()
        updateComputerChoice(computerChoice)
        const result = playRound('s', computerChoice)
        displayResult(result);
        updateScores(result);
        displayScores();
        checkEnd(buttons);
    });

}

function updateComputerChoice(choice){
    const computerChoiceDisplay = document.querySelector('.choices .computer .choice');
    if(choice === 'r'){
        computerChoiceDisplay.textContent = 'Rock';
    }
    else if(choice === 'p'){
        computerChoiceDisplay.textContent = 'Paper';
    }
    else if(choice === 's'){
        computerChoiceDisplay.textContent = 'Scissors';
    }
}

function updatePlayerChoice(choice){
    const playerChoiceDisplay = document.querySelector('.choices .player .choice');
    if(choice === 'r'){
        playerChoiceDisplay.textContent = 'Rock';
    }
    else if(choice === 'p'){
        playerChoiceDisplay.textContent = 'Paper';

    }
    else if(choice === 's'){
        playerChoiceDisplay.textContent = 'Scissors';
    }
}


function getComputerChoice(){
    let computerChoice = ['r', 'p', 's'][Math.floor(Math.random()*3)]
    console.log('computer choice: ' + computerChoice)
    return computerChoice;
}

function playRound(userChoice, computerChoice){
    switch (userChoice) {
        case 'r' : 
            switch(computerChoice){
                case 'r' :
                    return 't';
                case 'p' :
                    return 'c';
                case 's' :
                    return 'p';
            }
            break

        case 'p' :
            switch(computerChoice){
                case 'r' :
                    return 'p';
                case 'p' :
                    return 't';

                case 's' :
                    return 's';   
            }
            break
        case 's' :
            switch(computerChoice){
                case 'r' :
                    return 'c';
                case 'p' :
                    return 'p';
                case 's' :
                    return 't'
            }
            break
    }
}

// at each round:



