// jshint esversion:8
// Declare constants for DOM elements
const quizBoxEl = document.getElementById("quiz-box");
const scoreEl = document.getElementById("score");
const questionEl = document.getElementById("question");
const answerButtonsEl = document.getElementById("answer-buttons");
const startButtonEl = document.getElementById("start-button");
const nextButtonEl = document.getElementById("next-button");

// Quiz variables
let currentQuestionIndex = 0;
let score = 0;

/**
 *  Questions and answers for quiz in an array.
 *  The index is the correct answer
 */
const questions = [
  {
    question: "Cheers in Spanish",
    answers: ["Skål", "Cheers", "Salud", "Prost"],
    correctAnswerIndex: 2
  },
  {
    question: "Cheers in French",
    answers: ["Sláinte", "Şerefe", "Kanpai", "Santé"],
    correctAnswerIndex: 3
  },
  {
    question: "Cheers in Afrikaans",
    answers: ["Gesondheid", "Yamas", "Gānbēi", "Prost"],
    correctAnswerIndex: 0
  },
  {
    question: "Cheers in German",
    answers: ["Prost", "Skål", "Gānbēi", "Geonbae"],
    correctAnswerIndex: 0
  },
  {
    question: "Cheers in Swedish",
    answers: ["Santé", "Yamas", "Skål", "Serefe"],
    correctAnswerIndex: 2
  },
  {
    question: "Cheers in Italian",
    answers: ["Geonbae", "Skål", "Gānbēi", "Cin Cin"],
    correctAnswerIndex: 3
  },
  {
    question: "Cheers in Japanese",
    answers: ["Kanpai", "Gānbēi", "Gom bui", "Geonbae"],
    correctAnswerIndex: 0
  },
  {
    question: "Cheers in Chinese (Cantonese)",
    answers: ["Gom bui", "Kanpai", "Gānbēi", "Geonbae"],
    correctAnswerIndex: 0
  },
  {
    question: "Cheers in Serbian",
    answers: ["Gom bui", "Kanpai", "Gānbēi", "Ziveli"],
    correctAnswerIndex: 3
  },
  {
    question: "Cheers in Albanian",
    answers: ["Skål", "Gëzuar", "Gānbēi", "Prost"],
    correctAnswerIndex: 1
  },
];

/**
 * Function starts the quiz.
 * Makes the user start with a score pot of 0 everytime 
 * the quiz starts. Start button gets hidden and instead,
 * it now displays the quiz box that from the beggining 
 * was hidden from html & css settings.
 */
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreEl.textContent = `Score: ${score}`;
  showQuestion();
  quizBoxEl.classList.remove("hide");
  startButtonEl.classList.add("hide");
  answerListeners();
  nextButtonEl.addEventListener("click", nextQuestion);
}
/**
 * Function displays the current question.
 * It also updated questions and answers
 */
function showQuestion() {
  const question = questions[currentQuestionIndex];
  questionEl.textContent = question.question;
  for (let i = 0; i < answerButtonsEl.children.length; i++) {
    const answerButton = answerButtonsEl.children[i];
    answerButton.textContent = question.answers[i];
    answerButton.classList.remove("correct", "incorrect");
    answerButton.disabled = false;
  }
}

// Function listens for clicks on answer buttons
function answerListeners() {
  for (let i = 0; i < answerButtonsEl.children.length; i++) {
    const answerButton = answerButtonsEl.children[i];
    answerButton.addEventListener("click", () => {
      checkAnswer(i);
    });
  }
}

/** 
 * Function checks the selected answer and gives
 * one score if button selected is correct. It also
 *  calls the function "disable answer buttons, whose
 *  job is to Disable all buttons except from next, 
 *  so that the user can't change their answer.
 */
function checkAnswer(answerIndex) {
  const question = questions[currentQuestionIndex];
  const isCorrect = question.correctAnswerIndex === answerIndex;

  if (isCorrect) {
    score++;
    scoreEl.textContent = `Score: ${score}`;
    answerButtonsEl.children[answerIndex].classList.add("correct");
  } else {
    answerButtonsEl.children[answerIndex].classList.add("incorrect");
  }

  disableAnswerButtons();
  showNextButton();
}

// Function to disable answer buttons after selection
function disableAnswerButtons() {
  const answerButtons = answerButtonsEl.children;
  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].disabled = true;
  }
}

/** 
 * Function to show the next question by adding
 * the next-button
 */
function showNextButton() {
  nextButtonEl.classList.remove("hide");
}

/**
 * Function to go to the next question if there are
 * any questions left, or else it will end the quiz
 */ 
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
    nextButtonEl.classList.add("hide");
  } else {
    endQuiz();
  }
}

/**
 * Function ends the quiz by hiding the quizbox,
 * and changing the start-buttons innertext to restart
 * which takes the user to the first question again.
 * It also displays a message that gives the final score.
 * I also have given the restart/start button (same button)
 * a classname that I styled in css.
 */
function endQuiz() {
  quizBoxEl.classList.add("hide");
  startButtonEl.classList.remove("hide");
  startButtonEl.textContent = "Restart";
  scoreEl.textContent = `You can say cheers in: ${score} out
  of ${questions.length} languages`;
  startButtonEl.classList.add("button-container");
}

// Event listener for the start button
startButtonEl.addEventListener("click", startQuiz);
