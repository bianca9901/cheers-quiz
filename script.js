const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('next-button')
const quizBoxElement = document.getElementById ('quiz-box')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let rearrangeQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click',() => {
    currentQuestionIndex++
    setNextQuestion()
})
function startQuiz() {
    startButton.classList.add('hide')
    rearrangeQuestions = questions.sort(() => Math.random - .5)
    currentQuestionIndex = 0
    quizBoxElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(rearrangeQuestions [currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('button')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (rearrangeQuestions.lenght > currentQuestionIndex +1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
clearStatusClass(element)
if (correct) {
    element.classList.add('correct')
} else {
    element.classList.add('wrong')
}
}

function clearStatusClass(element) {
        element.classList.remove('correct')
        element.classList.remove('wrong')
    }


const questions = [
    {
        question: 'que es',
        answer : [
            { text: 'uno', correct: true },
            { text: 'dos', correct: false },
            { text: 'tres', correct: false },
            { text: 'cuatro', correct: false }

        ]
    },

{
    question: 'que es',
        answer: [
            { text: 'hola', correct: true },
            { text: 'helo', correct: false },
            { text: 'hi', correct: false },
            { text: 'hej', correct: false }
        ]
}
]