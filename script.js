console.log("hello")

let finished = false
let computerScore = 0;
let userScore = 0;
//TODO: prompt the user for max score
let maxScore = 5;

function getComputerChoice(){
    ['r', 'p', 's'][Math.floor(Math.random()*3)]

}

while(finished===false){
    // get the computer's choice
    let computerChoice = getComputerChoice();
    // get the user's choice
    let userChoice;
    while(userChoice != 'r' && userChoice != 'p' && userChoice != 's') {
        userChoice = prompt("Enter your choice (r | p | s)");
    }
    // compute the winner

    switch (userChoice) {
        case 'r' : 
            switch(computerChoice){
                case 'r' :
                    console.log("TIE!");      
                case 'p' :
                    console.log("Computer Wins!");    
                    computerScore++;  
                case 's' :
                    console.log("You Win!!"); 
                    userScore++;  

            }

        case 'p' :
            switch(computerChoice){
                case 'r' :
                    console.log("You Win!!"); 
                    userScore++;
                case 'p' :
                    console.log("TIE!");      

                case 's' :
                    console.log("Computer Wins!"); 
                    computerScore++;  
                
            }
        case 's' :
            switch(computerChoice){
                case 'r' :
                    console.log("Computer Wins!"); 
                    computerScore++;  
                case 'p' :
                    console.log("You Win!!"); 
                    userScore++;
                case 's' :
                    console.log("TIE!");      

            }
    }
    // if there's a winner, end.
    if (userScore === 5){
        console.log("You have won. Congratulations.");
        finished = true;
    }

    if (computerScore === 5){
        console.log("Computer has won. Congratulations computer.");
        finished = true;
    }

}

// at each round:



