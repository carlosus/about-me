import scoreAnswers from './score-answers.js';

const submitButton = document.getElementById('submit-button');
const heartInput = document.getElementById('heart-answer');
const hometownInput = document.getElementById('hometown-answer');
const cityInput = document.getElementById('city-answer');
const dislikeInput = document.getElementById('dislike-answer');
const trickInput = document.getElementById('trick-answer');
const quizResult = document.getElementById('quiz-result');

submitButton.addEventListener('click', () => {
    const heartAnswer = heartInput.value;
    const hometownAnswer = hometownInput.value;
    const cityAnswer = cityInput.value;
    const dislikeAnswer = dislikeInput.value;
    const trickAnswer = trickInput.value;

    if(heartAnswer.trim() === '' || hometownAnswer.trim() === '' || cityAnswer.trim() === '' || dislikeAnswer.trim() === ' ' || trickAnswer.trim() === ' ') {
        alert('all answers are required');
        return;
    }

    const score = scoreAnswers(heartAnswer, hometownAnswer, cityAnswer, dislikeAnswer, trickAnswer);

    const message = 'You got ' + score + '/5 correct!';

    quizResult.textContent = message;

    if(score < 4) {
        quizResult.classList.add('bad');
        quizResult.classList.remove('good');
    }
    else {
        quizResult.classList.add('good');
        quizResult.classList.remove('bad');
    }

});

