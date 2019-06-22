
let questionNumber = 0;
let score = 0;

//sets up question from quiz
function generateQuestionString() {
    console.log('generating question from quiz');
    if (questionNumber < STORE.length) {
        return `
            <div class="question-${questionNumber}">
            <h2>${STORE[questionNumber].question}</h2>
            <form>
            <fieldset>
            <label class='answerChoice'>
                <input type='radio' value='${STORE[questionNumber].answer[0]}' name='answer' required></input>
                <span class='answer'>${STORE[questionNumber].answer[0]}</span>
            </label>
            <br>
            <label class='answerChoice'>
                <input type='radio' value='${STORE[questionNumber].answer[1]}' name='answer' required></input>
                <span class='answer'>${STORE[questionNumber].answer[1]}</span>
            </label>
            <br>
            <label class='answerChoice'>
                <input type='radio' value='${STORE[questionNumber].answer[2]}' name='answer' required></input>
                <span class='answer'>${STORE[questionNumber].answer[2]}</span>
            </label>
            <br>
            <label class='answerChoice'>
                <input type='radio' value='${STORE[questionNumber].answer[3]}' name='answer' required></input>
                <span class='answer'>${STORE[questionNumber].answer[3]}</span>
            </label>
            <br>
            </div>
            <button type='submit'>Continue</button>
            </fieldset>
            </form>
            </div>`;
    } else {
        finishQuiz()
        restartQuiz();
        $('.questionNumber').text(10)
    }
}

//increase score
function changeScore() {
    score++;
}

//change question number
function changeQuestionNumber() {
    questionNumber ++;
    $('.questionNumber').text(questionNumber+1);
}

//when user clicks start button first question is returned
function generateQuiz() {
    $('.quizStart').on('click', '.startButton', function (event) {
        event.preventDefault();
        $('.quizStart').remove();
        $('.questionNumber').text(1);
        askQuestion();
    });
}

//user is shown question from quiz
function askQuestion() {
    $('.questionForm').html(generateQuestionString());
    console.log('`askQuestion` ran');
}

//user chooses one of the four answers and selects the submit button
function userSelectAnswer() {
    console.log('`userSelectAnswer` ran');
    $(document).on('submit', 'form', function (event) {
        event.preventDefault();
        returnFeedback();
    });
}

//user is given a message if the answer chosen was right or wrong
function returnFeedback() {
    console.log('`returnFeedback` ran');
    let selected = $('input:checked');
    let answer = selected.val();
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    if (answer === correctAnswer) {
        ifAnswerIsCorrect();
        updateScore();
    } else {
        ifAnswerIsWrong();
        }    
}

function ifAnswerIsCorrect() {
     $('.questionForm').html(`<div class="correctFeedback"><p>That's Correct!</p><button type= "button" class="nextButton">Continue</button></div>`);

}

function ifAnswerIsWrong() {
    let correctAnswer = `${STORE[question.number].correctAnswer}`;
     $('.questionForm').html(`<div class="correctFeedback"><p>Sorry, the correct answer was "${correctAnswer}"</p><button type= "button" class="nextButton">Continue</button></div>`);

}

//update score
function updateScore() {
    changeScore();
    $('.score').text(score);
}  
 
//after user is given feedback they are shown the next question in the quiz
function returnNextQuestion() {
    console.log('`returnNextQuestion` ran');
    $(document).on('click','form', function (event) {
        changeQuestionNumber();
        askQuestion();
        userSelectAnswer();
    });
}

//user is shown final score on the last page of the quiz and given a message if they scored
//a certain number or above and another message if they score below
function finishQuiz () {
console.log('`finsihQuiz` ran');
    if (score >= 8) {
        $('.questionForm').html(`<div class='results'<h3>You must be a Fort Worth Native!</h3><button class='restartQuiz'>Retake Quiz></button></div>`)
    }
    else if (score < 8 && score>= 5) {
        $('.questionForm').html(`<div class='results'<h3>You might live in Texas, but not Cowtown</h3><button class='restartQuiz'>Retake Quiz></button></div>`)
    }
    else {
        $('.questionForm').html(`<div class='results'<h3>Time to brush up on your Fort Worth facts...</h3><button class='restartQuiz'>Retake Quiz></button></div>`)
    }
}

//reloads page to starting screen
function restartQuiz() {
    $('main').on('click', '.restartButton', function (event) {
        location.reload();
    });
}

//callback to run quiz functions 
function beginQuiz() {
generateQuiz();   
userSelectAnswer();
returnFeedback();
returnNextQuestion();
}

$(beginQuiz);