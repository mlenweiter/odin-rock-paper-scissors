setTimeout(function(){
    //do what you need here
}, 20000);

console.log("hello!!")




let finished = false
let computerScore = 0;
let userScore = 0;
let maxScore = 5;

addEventListeners()




function addEventListeners(){
    const buttonRock = document.querySelector('.rock');
buttonRock.addEventListener('click', function(e){
    console.log('your choice: rock')
    playRound('r', getComputerChoice())
});

const buttonPaper = document.querySelector('.paper');
buttonPaper.addEventListener('click', function(e){
    console.log('your choice: paper')
    playRound('p', getComputerChoice())
});

const buttonScissors = document.querySelector('.scissors');
buttonScissors.addEventListener('click', function(e){
    console.log('your choice: scissors')
    playRound('s', getComputerChoice())
});

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
                    console.log("TIE!"); 
                    break     
                case 'p' :
                    computerScore++;  
                    console.log("Computer Wins! Computer score is: " + computerScore); 
                    break
                case 's' :
                    userScore++
                    console.log("You Win! Your score is: " + userScore); 
                    break
                 

            }
            break

        case 'p' :
            switch(computerChoice){
                case 'r' :
                    userScore++
                    console.log("You Win! Your score is: " + userScore); 
                    break
                case 'p' :
                    console.log("TIE!");      
                    break

                case 's' :
                    computerScore++;  
                    console.log("Computer Wins! Computer score is: " + computerScore); 
                    break

                
            }
            break
        case 's' :
            switch(computerChoice){
                case 'r' :
                    computerScore++;  
                    console.log("Computer Wins! Computer score is: " + computerScore); 
                    break 
                case 'p' :
                    userScore++;
                    console.log("You Win! Your score is: " + userScore); 
                    break
                case 's' :
                    console.log("TIE!");      
                    break

            }
            break
    }

}

// at each round:



