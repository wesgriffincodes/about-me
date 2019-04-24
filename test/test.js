import scoreAnswers from '../src/score-answers.js';
const test = QUnit.test;

function scoreAnswers (breedAnswer, hobbyAnswer, foodAnswer, singerAnswer, coolestAnswer) {

    let score = 0;

    if(breedAnswer === 'retriever') {
        score += 1;
    }
    if(hobbyAnswer === 'swimming') {
        score += 1;
    }
    if(foodAnswer === 'nachos') {
        score += 1;
    }
    if(singerAnswer === 'mercury') {
        score += 1;
    }
    if(coolestAnswer === 'nacho') {
        score += 1;
    }
    return score;
};

test('all right answers is 5', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const breedAnswer = 'retriever';
    const hobbyAnswer = 'swimming';
    const foodAnswer = 'nachos';
    const singerAnswer = 'mercury';
    const coolestAnswer = 'nacho';
    const expected = 5;

    //Act 
    // Call the function you're testing and set the result to a const
    const score = scoreAnswers(breedAnswer, hobbyAnswer, foodAnswer, singerAnswer, coolestAnswer)

    //Assert
    assert.equal(score, expected);
});

// test('all wrong answers is 0', function(assert) {
//     //Arrange
//     // Set up your parameters and expectations
//     const roosterAnswer = 'jeff';
//     const leatherAnswer = '100';
//     const phoenixAnswer = 'Carlosia';
//     const rockyAnswer = 'butter';
//     const trickAnswer = 'boo' || 'boo' || 'boo';
//     const expected = 0;

//     //Act 
//     // Call the function you're testing and set the result to a const
//     const score = scoreAnswers(roosterAnswer, leatherAnswer, phoenixAnswer, rockyAnswer, trickAnswer)

//     //Assert
//     assert.equal(score, expected);
// });