var userScore=0;
var computerScore=0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");

const result_div_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const smallUserWord= "user".fontsize(2).sub();
const smallCompWord= "comp".fontsize(2).sub();

function getComputerChoice(){
    const choices= ['r', 'p', 's'];
    const randomNumber= Math.floor(Math.random()*choices.length);
    return choices[randomNumber];

}
function convertToWord(letter){
        if (letter === "r") return "Rock";
        if (letter === "p") return "Paper";
        return "Scissors";
}
function win( user, computer){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_div_p.innerHTML= `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord} . You win!`;
    document.getElementById(user).classList.add('green-glow');
    setTimeout(() => document.getElementById(user).classList.remove("green-glow"), 500);
}
function lose( user2, computer2){
    computerScore++;
    computerScore_span.innerHTML=computerScore;
    
    userScore_span.innerHTML=userScore;
    result_div_p.innerHTML=`${convertToWord(computer2)}${smallCompWord} beats ${convertToWord(user2)}${smallUserWord} . You Lose...`;

    document.getElementById(user2).classList.add("red-glow");
    setTimeout( () => document.getElementById(user2).classList.remove("red-glow"), 400);
}
function draw(user3, computer3){
   result_div_p.innerHTML= `${convertToWord(user3)}${smallUserWord} equals ${convertToWord(computer3)}${smallCompWord} .  It's Draw.`;
   document.getElementById(user3).classList.add("gray-glow");
   
   setTimeout(() => document.getElementById(user3).classList.remove("gray-glow"),500)
}
function game(userChoice){
    const computerChoice= getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":

            draw(userChoice, computerChoice);
            break;
        default:
            break;
    }
}

function main(){
    rock_div.addEventListener("click",  () => game("r"));
    paper_div.addEventListener("click", () => game("p"));
    scissors_div.addEventListener("click", () =>game("s"));
}
main();