// using a query selector allows you to target both classes and ids. 
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

// defines variables as 0 for begining the game
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0
let questionCounter = 0
let availableQuestions = []

// Array with list of question
let questions = [
    {
        question: 'What is 2+2?',
        choice1: '2',
        choice2: '4',
        choice3: '5',
        choice4: '66',
        answer: 2,
    },
    {
        question: 'Who is the best?',
        choice1: 'Paul',
        choice2: 'Viv',
        choice3: 'Din',
        choice4: 'Sam',
        answer: 1,
    },
    {
        question: 'Lorem Lipsum',
        choice1: '2',
        choice2: '4',
        choice3: '5',
        choice4: '66',
        answer: 3,
    },
    {
        question: 'Lorem Lipsum?',
        choice1: 'Si',
        choice2: 'No',
        choice3: 'Yes',
        choice4: 'ok',
        answer: 1,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

//gets new question if it reaches max questions returns end screen
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }
    //counting questions, 1 of 4, 2 of 4 etc incrementing by 1 each time
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    //calculate question user is and turn it into a %
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer ==currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        } 

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

// increments score
incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()