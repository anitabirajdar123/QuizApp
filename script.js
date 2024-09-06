const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question : "who is bigger position in India?",
        options : ["president", "primeMinister","HomeMinister","ChiefMinister"],
        answer: "president"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    const questionData = questions[currentQuestionIndex];
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');

    questionElement.innerHTML = `
        <p>${questionData.question}</p>
        ${questionData.options.map((option, index) => `
            <label class="option">
                <input type="radio" name="option" value="${option}" id="option${index}">
                ${option}
            </label>
        `).join('')}
    `;

    quizContainer.appendChild(questionElement);
}

function handleSubmit() {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption) {
        const answer = selectedOption.value;
        if (answer === questions[currentQuestionIndex].answer) {
            score++;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    } else {
        alert('Please select an option');
    }
}

function showResult() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('submit-btn').classList.add('hidden');
    const resultElement = document.getElementById('result');
    resultElement.classList.remove('hidden');
    document.getElementById('score').textContent = `Your score is ${score} out of ${questions.length}`;
}

function retryQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('submit-btn').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
    loadQuestion();
}

document.getElementById('submit-btn').addEventListener('click', handleSubmit);
document.getElementById('retry-btn').addEventListener('click', retryQuiz);

// Initial load
loadQuestion();