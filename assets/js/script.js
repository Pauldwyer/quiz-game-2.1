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