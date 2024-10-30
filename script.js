let selectedQuestions = [];

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
    selectedQuestions = getRandomQuestions();
    console.log(selectedQuestions)
    let score = 0;
    let correctAnswers = { Fácil: 0, Média: 0, Difícil: 0 }; // Definindo correctAnswers
    let incorrectQuestions = [];

    selectedQuestions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        const isCorrect = selectedOption && parseInt(selectedOption.value) === question.answer;
        if (isCorrect) {
            score += question.points;
            correctAnswers[question.level]++;
        } else {
            incorrectQuestions.push({
                question: question.text,
                selectedAnswer: selectedOption ? selectedOption.value : null,
                correctAnswer: question.answer,
                options: question.options,
                level: question.level
            });
        }
    });

    // Salva os resultados no localStorage
    localStorage.setItem('quizScore', score);
    localStorage.setItem('correctAnswers', JSON.stringify(correctAnswers));
    localStorage.setItem('incorrectQuestions', JSON.stringify(incorrectQuestions));
    window.location.href = 'result.html';
}


function displayResult() {
    const score = localStorage.getItem('quizScore');
    const correctAnswers = JSON.parse(localStorage.getItem('correctAnswers'));
    const incorrectQuestions = JSON.parse(localStorage.getItem('incorrectQuestions'));

    if (score !== null) {
        const scoreMessage = document.getElementById('score-message');
        scoreMessage.textContent = `Você acertou: ${score} pontos`;

        // Display correct answers breakdown
        const resultMessage = document.getElementById('result-message');
        resultMessage.innerHTML = `
            <p>Acertos por dificuldade:</p>
            <ul>
                <li>Fácil: ${correctAnswers.Fácil} questões</li>
                <li>Média: ${correctAnswers.Média} questões</li>
                <li>Difícil: ${correctAnswers.Difícil} questões</li>
            </ul>
        `;

        // Display incorrect questions
        if (incorrectQuestions.length > 0) {
            const incorrectContainer = document.createElement('div');
            incorrectContainer.innerHTML = '<h3>Questões Incorretas:</h3>';
            incorrectQuestions.forEach((item, index) => {
                incorrectContainer.innerHTML += `
                    <div class="mb-3">
                        <strong>${index + 1}. ${item.level} - ${item.question}</strong>
                        <p>Resposta correta: ${item.options[item.correctAnswer]}</p>
                        <p>Sua resposta: ${item.selectedAnswer !== null ? item.options[item.selectedAnswer] : 'Não respondida'}</p>
                    </div>
                `;
            });
            document.body.appendChild(incorrectContainer);
        }
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
