let nouns = ['Peter', 'Sam', 'Adam', 'Mark', 'Luke' ,'The cat', 'The dogs', 'He', 'She', 'God, the Almighty']
let verbs = ['eat', 'sleep', 'run', 'hide', 'clean', 'fart','cook', 'walk','fight', 'talk']
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
    let s = 's'
    if(does){
        s = '';
    }
    return str = `${noun} ${does} ${verb}${s} ${adjective}`;
}
const changeSentence = () => {
    let str = getRanSentence();
    document.getElementById('p').innerHTML=str;
}

