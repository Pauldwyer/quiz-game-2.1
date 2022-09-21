const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList = 
highScores.map(scores => {
    return `<li class="high-score">${score.name} - ${score.score} </li>`
}).join('')