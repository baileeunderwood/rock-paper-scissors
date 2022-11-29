//PLAYS GAME
function game(x){
    sessionStorage.playerchoice = x;
// DECLARES RANDOM NUMBER
var y = Math.ceil(Math.random() * 3);
if(y == 1){
    sessionStorage.opponentchoice = "rock";
}
else if(y == 2){
    sessionStorage.opponentchoice = "paper";
}
else if(y == 3){
    sessionStorage.opponentchoice = "scissors";
}
if((sessionStorage.playerchoice == "rock") && (sessionStorage.opponentchoice == "paper")){
    sessionStorage.result = "lose";
    }
else if((sessionStorage.playerchoice == "rock") && (sessionStorage.opponentchoice == "scissors")){
    sessionStorage.result = "win";
    }
else if((sessionStorage.playerchoice == "paper") && (sessionStorage.opponentchoice == "rock")){
    sessionStorage.result = "win";
    }
else if((sessionStorage.playerchoice == "paper") && (sessionStorage.opponentchoice == "scissors")){
  sessionStorage.result = "lose";
  }
else if((sessionStorage.playerchoice == "scissors") && (sessionStorage.opponentchoice == "paper")){
    sessionStorage.result = "win";
    }
else if((sessionStorage.playerchoice == "scissors") && (sessionStorage.opponentchoice == "rock")){
    sessionStorage.result = "lose";
    }
else if (sessionStorage.playerchoice == sessionStorage.opponentchoice){
    sessionStorage.result = "tie";
}
}
