function scoreAnswers(heartAnswer, hometownAnswer, cityAnswer, dislikeAnswer, trickAnswer){
    let score = 0;

    if(heartAnswer === 'burgers') {
        score += 1;
    }
    if(hometownAnswer === 'phoenix') {
        score += 1;
    }
    if(cityAnswer === 'los angeles') {
        score += 1;
    }
    if(dislikeAnswer === 'crocs') {
        score += 1;
    }
    if(trickAnswer === 'yes') {
        score += 1;
    }

    return score;
}

export default scoreAnswers; 