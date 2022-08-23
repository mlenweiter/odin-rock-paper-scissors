setTimeout(function(){
    //do what you need here
}, 20000);

console.log("hello!!")




let finished = false
let computerScore = 0;
let userScore = 0;
//TODO: prompt the user for max score
let maxScore = 5;



function getComputerChoice(){
    return ['r', 'p', 's'][Math.floor(Math.random()*3)]

}

;


while(!finished){
    // get the computer's choice
    let userChoice;
    let computerChoice = getComputerChoice();
    // get the user's choice

    while(userChoice != 'r' && userChoice != 'p' && userChoice != 's') {
        userChoice = prompt("Enter your choice (r | p | s)");
    }

    console.log("Computer: " + computerChoice)
    console.log("You: " + userChoice)

    

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
    // if there's a winner, end.
    if (userScore >= 5){
        console.log("You have won. Congratulations.");
        finished = true;
        
    }

    if (computerScore >= 5){
        console.log("Computer has won. Congratulations computer.");
        finished = true;
        
    }

}

// at each round:



