let nouns = ['Peter', 'Sam', 'Adam', 'Mark', 'Luke' ,'The cat', 'A cats', 'The dogs', 'A dog', 'He', 'She']
let verbs = ['eats', 'sleeps', 'runs', 'hides', 'cleans', 'farts','cooks', 'walks','fights', 'talks']
let adjectives = ['quickly', 'peacefully', 'aggressively', 'well', 'loudly', 'stupidly','quietly', 'gingerly']
let negative = ["", "doesn't"];

const getRanWord = array => {
    let ranIndex = Math.floor(Math.random() * array.length)
    return array[ranIndex];
}

const getRanSentence = () => {
    const noun = getRanWord(nouns);
    const does = getRanWord(negative);
    const verb = getRanWord(verbs);
    const adjective = getRanWord(adjectives);
    return str = `${noun} ${does} ${verb} ${adjective}`;
}
const changeSentence = () => {
    let str = getRanSentence();
    document.getElementById('p').innerHTML=str;
}

