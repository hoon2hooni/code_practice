const scores = [1, 100, 100, 100];

function getAverage(scores){
    const n = scores.length;
    let total_score = 0
    for (score of scores){
        total_score = total_score + score;
    }
    return total_score/n
}

max = Math.max(...scores);
// modifiedScores = scores.map((score)=>{
//     score === max ? score : (score * 100)/max
// })
const modifiedScores = scores.map(function(score){
    return (score * 100) / max
})
console.log(getAverage(modifiedScores));
console.log(modifiedScores);