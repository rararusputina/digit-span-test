//keep track of people's score (maybe enter name, date, time, background music)
//create different levels, different number of digits

const numberSequence = document.getElementById("number-sequence");
const userInput = document.getElementById("user-input");
const startButton = document.getElementById("start-button");
const submitButton = document.getElementById("submit-button");
const result = document.getElementById("result");

let sequence = [];
let currentIndex = 0;

startButton.addEventListener("click", startTest);
submitButton.addEventListener("click", checkAnswer);

function startTest() {
    sequence = generateRandomSequence(5); // Change 5 to the desired sequence length
    currentIndex = 0;

    numberSequence.textContent = sequence.join(" ");
    userInput.value = "";
    userInput.focus();

    startButton.disabled = true;
    submitButton.disabled = false;

    clearTimer = setTimeout(clearNumbers, 5000);
}

function generateRandomSequence(length) {
    const sequence = [];
    for (let i = 0; i < length; i++) {
        sequence.push(Math.floor(Math.random() * 10));
    }
    return sequence;
}
function clearNumbers() {
    numberSequence.textContent = "";
    clearTimeout(clearTimer); // Clear the timer to prevent subsequent clearing
}

function checkAnswer() {
    const userAnswer = userInput.value.replace(/\s/g );
    const expectedAnswer = sequence.join("");

    const correctCount = countCorrectDigits(userAnswer, expectedAnswer);

    if (correctCount === expectedAnswer.length) {
        result.textContent = `Correct! You got all ${correctCount} digits right.`;
    } else {
        result.textContent = `Incorrect. You got ${correctCount} out of ${expectedAnswer.length} digits correct. Try again.`;
    }

    startButton.disabled = false;
    submitButton.disabled = true;
}
function countCorrectDigits(userAnswer, expectedAnswer) {
    let count = 0;
    for (let i = 0; i < expectedAnswer.length; i++) {
        if (userAnswer[i] === expectedAnswer[i]) {
            count++;
        }
    }
    return count;
}