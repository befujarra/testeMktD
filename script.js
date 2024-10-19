function startQuiz() {
    window.location.href = 'quiz.html';
}

function getRandomQuestions() {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 50);
}

function displayQuestions() {
    const quizContainer = document.getElementById('quiz-container');
    const selectedQuestions = getRandomQuestions();
    selectedQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('mb-4');
        questionDiv.innerHTML = `
            <h5>${question.level} - ${question.text}</h5>
            ${question.options.map((option, i) => `
                <div>
                    <input type="radio" name="question${index}" value="${i}"> ${option}
                </div>
            `).join('')}
        `;
        quizContainer.appendChild(questionDiv);
    });
}

function startTimer() {
    let timeLeft = 90 * 60;
    const timerElement = document.getElementById('timer');
    const interval = setInterval(() => {
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(interval);
            finishQuiz();
        }
    }, 1000);
}

function areAllQuestionsAnswered() {
    const selectedQuestions = getRandomQuestions();
    for (let i = 0; i < selectedQuestions.length; i++) {
        const selectedOption = document.querySelector(`input[name="question${i}"]:checked`);
        if (!selectedOption) {
            return false;
        }
    }
    return true;
}

function finishQuiz() {
    if (!areAllQuestionsAnswered()) {
        alert("Por favor, responda todas as questões antes de finalizar.");
        return;
    }

    const selectedQuestions = getRandomQuestions();
    let score = 0;
    selectedQuestions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === question.answer) {
            score += question.points;
        }
    });

    // Salva a pontuação no localStorage e redireciona para a página de resultado
    localStorage.setItem('quizScore', score);
    window.location.href = 'result.html';
}

function displayResult() {
    const score = localStorage.getItem('quizScore');
    if (score !== null) {
        const scoreMessage = document.getElementById('score-message');
        scoreMessage.textContent = `Parabéns, você acertou: ${score} pontos`;
    }
}

function restartQuiz() {
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('quiz.html')) {
        displayQuestions();
        startTimer();
    } else if (window.location.pathname.includes('result.html')) {
        displayResult();
    }
});
