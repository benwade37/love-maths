
document.addEventListener('DOMContentLoaded', function () {
let buttons = document.getElementByTagName("button");

    for (let button of buttons) {
        buttons.addEventListener('click', function () {
            if (this.getAttribute('data-type') === 'submit') {
                checkAnswer();
            } else {
                let gametype = this.getAttribute("data-type");
                alert(`You clicked ${gametype}`);
            }
        });
    }
runGame("addition");
});

function runGame () {
    // Generate two random numbers
    num1 = Math.floor(Math.random() * 25) + 1;
    num2 = Math.floor(Math.random() * 25) + 1;
    // Display the numbers in the HTML
    if gametype === "addition" {
        displayAdditionQuestion();
    } else {
        alert("unknown gametype: ${gametype}");
        throw `unknown gametype: ${gametype}. Aborting!`;
    }

    document.getElementById('num1').innerHTML = num1;
    document.getElementById('num2').innerHTML = num2;
    // Calculate the correct answer
    correctAnswer = num1 + num2;
}

function checkAnswer () {
    // Get the user's answer
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculateCorrectAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];
    // Check if the answer is correct
    if (isCorrect) {
        alert("Hey! You got it right! :D");
        // If the answer is correct, display a message
    } else {
        alert (`Awwww....you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}`);
        // If the answer is incorrect, display a message
    }

    runGame(calculatedAnswer[1]);
}

function calculateCorrectAnswer () {
    // Calculate the correct answer
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if(operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}

function IncrementScore () {
    // Get the current score
    score = parseInt(document.getElementById('score').innerHTML);
    // Increment the score
    score = score + 1;
    // Display the new score
    document.getElementById('score').innerHTML = score;
}

function IncrementWrongAnswer () {  
    // Get the current score
    score = parseInt(document.getElementById('score').innerHTML);
    // Increment the score
    score = score - 1;
    // Display the new score
    document.getElementById('score').innerHTML = score;
}

function displayAdditionQuestion (operand1, operand2) {
    // Generate two random numbers
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
    // Display the numbers in the HTML
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
    // Calculate the correct answer
    correctAnswer = num1 + num2;
}

function displaySubtractQuestion () {
    // Generate two random numbers
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
    // Display the numbers in the HTML
    document.getElementById('num1').innerHTML = num1;
    document.getElementById('num2').innerHTML = num2;
    // Calculate the correct answer
    correctAnswer = num1 - num2;
}