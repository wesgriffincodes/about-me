import scoreAnswers from '../src/score-answers.js';
const test = QUnit.test;



test('all right answers is 5', function(assert) {

    const breedAnswer = 'retriever';
    const hobbyAnswer = 'swimming';
    const foodAnswer = 'nachos';
    const singerAnswer = 'mercury';
    const coolestAnswer = 'nacho';
    const expected = 5;


    const score = scoreAnswers(breedAnswer, hobbyAnswer, foodAnswer, singerAnswer, coolestAnswer)

  
    assert.equal(score, expected);
});

test('all wrong answers is 0', function(assert) {
    
    const roosterAnswer = 'jeff';
    const leatherAnswer = '100';
    const phoenixAnswer = 'Carlosia';
    const rockyAnswer = 'butter';
    const trickAnswer = 'boo' || 'boo' || 'boo';
    const expected = 0;


    const score = scoreAnswers(roosterAnswer, leatherAnswer, phoenixAnswer, rockyAnswer, trickAnswer)

   
    assert.equal(score, expected);
});