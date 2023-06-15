// Get elements from html
const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const quizBoxElement = document.getElementById('quiz-box');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

// Store score for user
let answerButtons
let rearrangeQuestions;
let numberOfQuestion;
let currentQuestionIndex = 0;
let score = 0;

// Listen for mouse clicks from user
startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

// Start the quiz, hide the start button
// Show the question box
// Show the next button
function startQuiz() {
    startButton.classList.add('hide');
    nextButton.classList.remove('hide');
    rearrangeQuestions = questions.sort(() => Math.random - .5);
    currentQuestionIndex = 0;
    score = 0;
    quizBoxElement.classList.remove('hide');
    setNextQuestion();
}

// Resets previous questions and presents new ones
function setNextQuestion() {
    resetState();
    nextButton.classList.remove('hide');
    numberOfQuestion = currentQuestionIndex + 1;
    if (rearrangeQuestions.length >= numberOfQuestion) {
        showQuestion(rearrangeQuestions[currentQuestionIndex]);
    } else {
//  Stop the quiz
    nextButton.classList.add('hide');
    questionElement.innerText =  `You can say cheers in ${score}
    out of ${questions.length} languages!`;
    
    }
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

//Stores selected buttons 
function selectAnswer(e){
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if(isCorrect){
        selectedButton.classList.add('correct');
    }else{
        selectedButton.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    });
}

//Show restart button
//Change color of div depending on correct and incorrect
//tar man bort denna array så fungerar inte scores. men färgerna försvinner.
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    //Array.from(answerButtonsElement.children).forEach(button => {
        //setStatusClass(button.correct)
    //})
    if (rearrangeQuestions.lenght > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}

//Add score when user guess the correct answer
//Add class name to style in css
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
        score++;
    } else {
        element.classList.add('wrong');
    }
}

//SUPPOSED to change colors depending on correct and incorrect
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answer.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('button');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

// Quiz questions and answers
const questions = [{
question: 'Cheers in Spanish',
    answer: [ 
        { text: 'Skål', correct: false },
        { text: 'Cheers', correct: false },
        { text: 'Salud', correct: true },
        { text: 'Prost', correct: false },
    ]
},

{
question: 'Cheers in French',
    answer: [
        { text: 'Sláinte', correct: false },
        { text: 'Şerefe', correct: false },
        { text: 'Kanpai', correct: false },
        { text: 'Santé', correct: true },
    ]
},

{
question: 'Cheers in Afrikaans',
    answer: [
        { text: 'Gesondheid', correct: true },
        { text: 'Yamas', correct: false },
        { text: 'Gānbēi',correct: false },
        { text: 'Prost',correct: false }
    ]
}
];

/*Add after fix quiz bug
question: 'Cheers in German',
    answer: [
        { text: 'Skål', correct: false},
        { text: 'Geonbae', correct: false },
        { text: 'Salud', correct: false },
        { text: 'Prost, correct: true }

question: Cheers in Swedish,
        answer: [
        { text: 'Skål', correct: true },
        { text: 'Santé', correct: false },
        { text: 'Ziveli', correct: false },
        { text: 'Prost', correct: false }

question: Cheers in Italian,
        answer: [
        { text: 'Skål', correct: false },
        { text: 'Cheers', correct: false },
        { text: 'Geonbae', correct: false },
        { text: 'Cin Cin', correct: true }

question: Cheers in Japanese,
        answer: [
        { text: 'Kanpai', correct: true },
        { text: 'Gānbēi', correct: false },
        { text: 'Gom bui', correct: false },
        { text: 'Prost', correct: false }

question: Cheers in Chinese (Cantonese),
        answer: [
        { text: 'Kanpai', correct: false },
        { text: 'Gānbēi', correct: false },
        { text: 'Gom bui', correct: true },
        { text: 'Prost', correct: false }

question: Cheers in Serbian,
        answer: [
        { text: 'Ziveli', correct: true },
        { text: 'Gānbēi', correct: false },
        { text: 'Gom bui', correct: false },
        { text: 'Prost', correct: false }

question: Cheers in Albanian,
        answer: [
        { text: 'Kanpai', correct: false },
        { text: 'Gëzuar', correct: true },
        { text: 'Gom bui', correct: false },
        { text: 'Prost', correct: false }
*/
