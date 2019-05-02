function scoreAnswers(breedAnswer, hobbyAnswer, foodAnswer, singerAnswer, coolestAnswer) {
    breedAnswer = breedAnswer.toLowerCase();
    hobbyAnswer = hobbyAnswer.toLowerCase();
    foodAnswer = foodAnswer.toLowerCase();
    singerAnswer = singerAnswer.toLowerCase();
    coolestAnswer = coolestAnswer.toLowerCase();
    
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
}

export default scoreAnswers;