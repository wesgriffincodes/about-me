import scoreAnswers from './score-answers.js';

const submitButton = document.getElementById('submit-button');
const breedInput = document.getElementById('breed-ask');
const hobbyInput = document.getElementById('hobby-ask');
const foodInput = document.getElementById('food-ask');
const singerInput = document.getElementById('singer-ask');
const coolestInput = document.getElementById('coolest-ask');
const quizResult = document.getElementById('quiz-result');

submitButton.addEventListener('click', () => {
    
    const breedAnswer = breedInput.value;
    const hobbyAnswer = hobbyInput.value;
    const foodAnswer = foodInput.value;
    const singerAnswer = singerInput.value;
    const coolestAnswer = coolestInput.value;

    const score = scoreAnswers(breedAnswer, hobbyAnswer, foodAnswer, singerAnswer, coolestAnswer);

    const message = 'You got ' + score + '/5 correct';

    quizResult.textContent = message;

});

