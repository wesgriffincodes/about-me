const submitButton = document.getElementById('submit-button');
const breedInput = document.getElementById('breed-ask');
const hobbyInput = document.getElementById('hobby-ask');
const foodInput = document.getElementById('food-ask');
const singerInput = document.getElementById('singer-ask');
const coolestInput = document.getElementById('coolest-ask');
const quizResult = document.getElementById('quiz-result');

submitButton.addEventListener('click', () => {
    const breedAnswer = breedInput.nodeValue;
    const hobbyAnswer = hobbyInput.nodeValue;
    const foodAnswer = foodInput.nodeValue;
    const singerAnswer = singerInput.nodeValue;
    const coolestAnswer = coolestInput.nodeValue;
    console.log(breedAnswer, hobbyAnswer, foodAnswer, singerAnswer, coolestAnswer);
});