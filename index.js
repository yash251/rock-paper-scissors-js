const computerChoiceDisplay = document.querySelector("#computer-choice");
const userChoiceDisplay = document.querySelector("#user-choice");
const resultDisplay = document.querySelector("#result");

const possibleChoices = document.querySelectorAll("button");

let userChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
    userChoice = event.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber)
}