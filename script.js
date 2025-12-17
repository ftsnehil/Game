let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#computer-score");

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game Was Draw. play again"
    msg.style.backgroundColor="yellow";
}


const showWinner=(userWin,userChoice,compChoice)=()=>{
    if(userWin){ // if userwin value is true
        console.log("you win !");
        userScore++;
        userScorepara.innerText=userScore;
        
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        console.log("you lose");
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText=`You Lose ! ${compChoiceChoice}  beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const genCompChoice=()=>{
const option=["rock","paper","scissors"];
const randIdx=Math.floor(Math.random()*3)
return option[randIdx];

    // rock paper scissor
}

const playGame=(userChoice)=>{
    console.log("user Choice=" ,userChoice);
    // generate computer choice

    const compChoice=genCompChoice();

    console.log("comp Choice=" ,genCompChoice);

    if(userChoice===compChoice)
    {
        drawGame();
    }
    else {
        let userWin=true;
        if(userChoice==="rock"){
            //scissors,paper
            userWin=compChoice==="paper" ? false:true;
        }
        else if(userChoice==="paper"){
            // rock,scissor
            userWin=compChoice==="scissors" ? false:true;
        }
        else{
            // rock,paper
            userWin=compChoice==="rock" ? false:true;

        }
        showWinner(userWin,userChoice,compChoice)
    }

}

choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    // console.log("choice was clicked",userChoice);

    playGame(userChoice);
});
});
