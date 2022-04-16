const computerChoiceDisplay = document.querySelector("#computer-choice");
const userChoiceDisplay = document.querySelector("#user-choice");
const resultDisplay = document.querySelector("#result");

const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
    userChoice = event.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    // console.log(randomNumber)

    if (randomNumber === 1) {
        computerChoice = "Rock";
    }
    if (randomNumber === 2) {
        computerChoice = "Paper";
    }
    if (randomNumber === 3) {
        computerChoice = "Scissors";
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw!!! 😒 ";
    }
    if (computerChoice === "Rock" && userChoice === "Paper") {
        result = "You Win!!! 🤩";
    }
    if (computerChoice === "Rock" && userChoice === "Scissors") {
        result = "You Lost!!! 😩";
    }
    if (computerChoice === "Paper" && userChoice === "Rock") {
        result = "You Lost!!! 😩";
    }
    if (computerChoice === "Paper" && userChoice === "Scissors") {
        result = "You Win!!! 🤩";
    }
    if (computerChoice === "Scissors" && userChoice === "Paper") {
        result = "You Lost!!! 😩";
    }
    if (computerChoice === "Scissors" && userChoice === "Rock") {
        result = "You Win!!! 🤩";
    }
    resultDisplay.innerText = result;
}