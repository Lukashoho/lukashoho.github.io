//  caching the DOM (storing sth for future use)

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function cToWords(letter){
    switch(letter){
        case "r" : 
            return "Rock"; break;
        case "s" :
            return "Scissors"; break;
        case "p" :
            return "Paper" ; break;
    }
}


function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUser = "user".fontsize(5).sup();
    const smallComp = "comp".fontsize(5).sup();
    // console.log("You have "+userC, "he has "+computerC+". You Win!")
    result_p.innerHTML = `${cToWords(userChoice)}${smallUser}  beats  ${cToWords(computerChoice)}${smallComp}. You Win!`;
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(()=>document.getElementById(userChoice).classList.remove("green-glow"), 500);    
}

function lose(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUser = "user".fontsize(5).sup();
    const smallComp = "comp".fontsize(5).sup();
    result_p.innerHTML = `${cToWords(userChoice)}${smallUser}  loses to ${cToWords(computerChoice)}${smallComp}. You Lost...`
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(() => document.getElementById(userChoice).classList.remove("red-glow"), 500); 
}

function draw(userChoice,computerChoice){    
    const smallUser = "user".fontsize(5).sup();
    const smallComp = "comp".fontsize(5).sup();
    result_p.innerHTML = `${cToWords(userChoice)}${smallUser}  equals ${cToWords(computerChoice)}${smallComp}. It's a draw.`
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("gray-glow")}, 500); 

}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice+computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice,computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click',()=>game("r"));
    paper_div.addEventListener('click',() =>game("p"));
    scissors_div.addEventListener('click',()=>game("s"));
}

main();