
let questionNumber = 0;
let score = 0;

function generateQuestionString() {
    console.log('generating question from quiz');
    return `
        <div class="question-${questionNumber}">
        <h2>${STORE[questionNumber].question}</h2>
        <form>
        <fieldset>
        <label class='answerChoice'>
        <input type='radio' value='${STORE[questionNumber].answer[0]}' name='answer' required>
        <span class='answer'>${STORE[questionNumber].answer[0]}</span></label>
        <br>
        <label class='answerChoice'>
        <input type='radio' value='${STORE[questionNumber].answer[1]}' name='answer' required>
        <span class='answer'>${STORE[questionNumber].answer[1]}</span></label>
        <br>
        <label class='answerChoice'>
        <input type='radio' value='${STORE[questionNumber].answer[2]}' name='answer' required>
        <span class='answer'>${STORE[questionNumber].answer[2]}</span></label>
        <br>
        <label class='answerChoice'>
        <input type='radio' value='${STORE[questionNumber].answer[3]}' name='answer' required>
        <span class='answer'>${STORE[questionNumber].answer[3]}</span></label>
        <br>
        <button type='submit'>Continue</button>
        </fieldset>
        </form>`;
}

//update question number
function changeQuestionNumber() {
    questionNumber ++;    
$('.questionNumber').text(questionNumber+1);
}

//update score
function changeScore() {
    score ++;
}  

//when user clicks start button first question is returned
function generateQuiz() {
    $('.quizStart').on('click', '.startButton', function (event) {
        $('.quizStart').remove();
        askQuestion();
    });
}

function askQuestion() {
    $('.questionForm').html(generateQuestionString());
    console.log('`askQuestion` ran');
}

//user chooses one of the four answers and selects the submit button
function userSelectAnswer() {
    $('form').on('submit', function (event) {
        event.preventDefault();
        returnFeedback();
        console.log('`userSelectAnswer` ran');
    });
}

//user is given a message if the answer chosen was right or wrong
function returnFeedback() {
    console.log('`returnFeedback` ran');
    let selected = $('input:checked');
    let answer = selected.val();
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    if (answer === correctAnswer) {
        selected.parent().addClass('correct');
        ifAnswerIsCorrect();
        changeScore();
    } else {
        selected.parent().addClass('wrong');
        ifAnswerIsWrong();
        }   
}

function ifAnswerIsCorrect() {
    $('.questionForm').html(`<div class="correctFeedback"><p>That's Correct!</p><button type="button" class="nextButton">Continue</button></div>`);

}

function ifAnswerIsWrong() {
    let correctAnswer = `${STORE[question.number].correctAnswer}`;
    $('.questionForm').html(`<div class="correctFeedback"><p>Sorry, the correct answer was "${correctAnswer}"</p><button type="button" class="nextButton">Continue</button></div>`);

}

//after user is given feedback they are shown the next question in the quiz
function returnNextQuestion() {
    console.log('`returnNextQuestion` ran');
}

function finishQuiz () {
//user is shown final score on the last page of the quiz and given a message if they scored
//a certain number or above and another message if they score below
console.log('`finsihQuiz` ran');

}


//callback to run quiz functions 
function beginQuiz() {
console.log('test');   
generateQuiz();
userSelectAnswer();
returnNextQuestion();
finishQuiz();
}

$(beginQuiz);