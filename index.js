
let questionNumber = 0;
let score = 0;

//sets up question from quiz
function generateQuestion() {
    if (questionNumber < STORE.length) {
        return `
            <div class="questionForm-${questionNumber}">
            <h2>${STORE[questionNumber].question}</h2>
            <form>
            <fieldset>
            <div>
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
            </div>
            </br>
            <button type='submit'class= "submitButton">Continue</button>
            </fieldset>
            </form>
            </div>`;
    } else {
        quizResults();
    };

}

//change question number
function changeQuestionNumber() {
    questionNumber++;
    $('.questionNumber').text(questionNumber + 1);
}

//increase score
function changeScore() {
    score++;
}

//when user clicks start button first question is returned
function generateQuiz() {
    $('.quizStart').on('click', '.startButton', function (event) {
        $('.quizStart').css('display', 'none');
        $('questionForm').css('display', 'block');
        $('.questionNumber').text(1);
        askQuestion();
    });
}

//user is shown question from quiz
function askQuestion() {
    $('.questionForm').html(generateQuestion());
}

//user chooses one of the four answers and selects the submit button
function userSelectAnswer() {
    $(document).on('submit', 'form', function (event) {
        event.preventDefault();
        let selected = $('input:checked');
        let answer = selected.val();
        let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
        if (answer === correctAnswer) {
            selected.parent().addClass('right');
            ifAnswerIsCorrect();
        } else {
            selected.parent().addClass('wrong');
            ifAnswerIsWrong();
        }
    });
}

function ifAnswerIsCorrect() {
    correctAnswerFeedback();
    updateScore();
}

function ifAnswerIsWrong() {
    incorrectAnswerFeedback();
}

function correctAnswerFeedback() {
     $('.questionForm').html(`<div id="right"><p>That's Correct!</p><button type= "button" class="nextButton">Continue</button></div>`);

}

function incorrectAnswerFeedback() {
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`
     $('.questionForm').html(`<div id="wrong"><p>Sorry, the correct answer was ${correctAnswer}</p><button type= "button" class="nextButton">Continue</button></div>`);

}

//update score
function updateScore() {
    changeScore();
    $('.score').text(score);
}  
 
//after user is given feedback they are shown the next question in the quiz
function returnNextQuestion() {
    $('main').on('click','.nextButton', function (event) {
        changeQuestionNumber();
        askQuestion();
        userSelectAnswer();
    });
}

//user is shown final score on the last page of the quiz and given a message if they scored
//a certain number or above and another message if they score below
function quizResults () {
console.log('`finsihQuiz` ran');
    if (score >= 8) {
        $('.questionForm').html(`<div class='results'<h3>You must be a Fort Worth Native!</h3><button class='restartQuiz'>Retake Quiz</button</div>`);
        restartQuiz();
        $('.questionNumber').text(10);
    }
    else if (score < 8 && score>= 5) {
        $('.questionForm').html(`<div class='results'<h3>You might live in Texas, but not Cowtown</h3><button class='restartQuiz'>Retake Quiz</button></div>`);
        restartQuiz();
        $('.questionNumber').text(10);
    }
    else {
        $('.questionForm').html(`<div class='results'<h3>Time to brush up on your Fort Worth facts...</h3><button class='restartQuiz'>Retake Quiz</button></div>`);
        restartQuiz();
        $('.questionNumber').text(10);
    }
}

//reloads page to starting screen
function restartQuiz() {
    $('main').on('click', '.restartQuiz', function (event) {
        questionNumber = 0;
        $('.questionNumber').text(1);
        score=0;
        $('.score').text(0);
        $('.questionForm').css('display', 'block');
        refreshQuiz();
    });
}

//refreshQuiz
function refreshQuiz () {
    generateQuiz();
    askQuestion();
    userSelectAnswer();
}

//callback to run quiz functions 
function beginQuiz() {
generateQuiz(); 
userSelectAnswer();
returnNextQuestion();
restartQuiz();
}

$(beginQuiz());