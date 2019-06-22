
let questionNumber = 0;
let score = 0;

function generateQuestionString(item) {
    console.log('generating question from quiz');
    return `
        <form>
        <label>${item.question}</label>
        <label class='answerSelect'>
        <input type='radio" value='${item.answer[0]}' name='answer' required>
        <p class='answer'>${item.answer[0]}</p>
        <label class='answerSelect'>
        <input type='radio" value='${item.answer[1]}' name='answer' required>
        <p class='answer'>${item.answer[1]}</p>
        <label class='answerSelect'>
        <input type='radio" value='${item.answer[2]}' name='answer' required>
        <p class='answer'>${item.answer[2]}</p>
        <label class='answerSelect'>
        <input type='radio" value='${item.answer[3]}' name='answer' required>
        <p class='answer'>${item.answer[3]}</p>
        <p class='correctAnswer'>${item.correctAnswer}</p>
        <button type='button'>Continue</button>
        </form>`;
}

function renderQuiz() {
//render quiz to the DOM
console.log('`renderQuiz` ran');

const quizQuestions = generateQuestionString
(STORE);

//insert that HTML to the DOM
$('.js-quiz-questions').html(quizQuestions);
}


function askQuestion() {
//load first question and answers in form
console.log('`askQuestion` ran');
}

function userSelectAnswer() {
//user chooses one of the four answers and selects the submit button
console.log('`userSelectAnswer` ran');

}

function returnFeedback() {
//user is given a message if the answer chosen was right or wrong
console.log('`returnFeedback` ran');
}

function returnNextQuestion() {
//after user is given feedback they are shown the next question in the quiz
console.log('`returnNextQuestion` ran');
}

function finishQuiz () {
//user is shown final score on the last page of the quiz and given a message if they scored
//a certain number or above and another message if they score below
console.log('`finsihQuiz` ran');

}



//callback to run quiz functions 
function beginQuiz {
renderQuiz();
askQuestion();
userSelectAnswer();
returnFeedback();
returnNextQuestion();
finsihQuiz()
}

$(beginQuiz);
