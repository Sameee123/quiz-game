const thresholdScore = 2;

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Earth", "Jupiter"],
        correctAnswer: "Mars"
    },
    // Add more questions here
];

// JavaScript variables
let currentQuestion = 0;
let score = 0;
const quizContainer = document.querySelector(".quiz-container");
const resultContainer = document.querySelector(".result-container");

// Function to display a question
function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.querySelector(".options-container");
    const currentQuiz = questions[currentQuestion];

    questionElement.textContent = currentQuiz.question;
    
    // Clear previous options
    optionsContainer.innerHTML = "";

    // Create and add answer options
    currentQuiz.options.forEach(option => {
        const optionElement = document.createElement("button");
        optionElement.textContent = option;
        optionElement.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(optionElement);
    });
}

// Function to check the answer
function checkAnswer(selectedOption) {
    const currentQuiz = questions[currentQuestion];

    if (selectedOption === currentQuiz.correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";

    const scoreElement = document.getElementById("score");
    scoreElement.textContent = `Score: ${score}`;

    // Add winning and losing gifs here based on the score
    const resultGif = document.createElement("img");
    resultGif.src = score >= thresholdScore ? "win.gif" : "lose.gif";
    resultContainer.appendChild(resultGif);
}


displayQuestion();
