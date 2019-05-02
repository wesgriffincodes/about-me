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

export default scoreAnswers;