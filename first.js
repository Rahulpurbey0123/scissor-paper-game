let user = 0;
let computer = 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin){
        user++;
        userscore.innerText = user;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        computer++;
        compscore.innerText = computer;
        msg.innerText = `You lose!  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const draw = () => {
    msg.innerText = "Game was Draw.Play again.";
    msg.style.backgroundColor = "black";
};
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice){
        draw();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissor , paper
            userWin = compChoice === "paper" ? false:true;
        }else if(userChoice === "paper"){
            // rock ,scissor
            userWin = compChoice === "scissors" ? false : true; 
        }else{
            userWin = compChoice ==="rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choice.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});