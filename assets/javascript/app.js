//trivia questions

var triviaQuestions = [
    {
    question: "What food is Buffalo, NY best known for?",
    choices: ["Pizza", "Wings", "Hot Dogs", "Tacos"],
    correctAnswer: "Wings",
    },

    {
    question: "The Bills are Buffalo’s beloved football team, how many consecutive years in the 90’s did they make the Super Bowl?",
    choices: ["2", "4", "6", "8"],
    correctAnswer: "4",
    },

    {
    question: "What holiday in Buffalo is celebrated the Monday after Easter in which men use squirt guns to drench women with water and women hit men with pussy willows?",
    choices: ["Patriot’s Day", "Boxing Day", "Dyngus Day", "Polar Bear Plunge Day"],
    correctAnswer: "Dyngus Day",
    },

    {
    question: "What is Buffalo’s nickname?",
    choices: ["Ace City", "King City", "Queen City", "Joker City"],
    correctAnswer: "Queen City",
    },

    {
    question: "How many ‘snow days’ are built into the calendar for Buffalo Schools?",
    choices: ["2", "4", "6", "8"],
    correctAnswer: "4",
    },
]

var correctAnswerGifs = [
    "assets/images/yes-wings.gif",
    "assets/images/yes-bills.gif",
    "assets/images/yes-dyngus.gif",
    "assets/images/yes-queens.gif",
    "assets/images/yes-snow.gif",  
]

var wrongAnswerGifs = [
    "assets/images/no-sign.gif",
    "assets/images/no-josh-allen.gif",
    "assets/images/no-joquin.gif",
    "assets/images/no-loser.gif",
    "assets/images/no-buffalo.gif",  
]

//load gif images for right and wrong answers

function preloadImage(status){
    const correctAnswer = triviaQuestions[currentQuestion].correctAnswer;

    if (status === 'win'){
        $('#game').html(`
            <p class="preload-image"> Congrats! You know your Buffalo trivia! </p>
            <p class="preload-image"> The correct answer is <b>${correctAnswer}</b> </p>
        `);
    } 

    else {
        $('#game').html(`
            <p class="preload-image"> The correct answer is <b>${correctAnswer}</b></p>
            <p class="preload-image"> You must not be from Buffalo</p>
        `);
    }
}

//global variables

var counter = 5;
var currentQuestion = 0;
var score = 0;
var lost = 0;
var time;

//timer
function countDown(){
    counter--;
    $('#timer').html('time left: ' + counter);

    if (counter === 0){
        timesUp();
    }
}

function timesUp(){
    clearInterval(time);

    lost++;
    preloadImage('lose');
    setTimeout(nextQuestion, 6 * 1000);
    
}

//load questions and choices

function loadQuestion() {
    counter = 5;
    time = setInterval(countDown, 1000);

    const question = triviaQuestions [currentQuestion].question;
    const choices = triviaQuestions [currentQuestion].choices;

    $('#timer').html('time left: ' + counter);
    $('#game').html
        (`<h4>${question}</h4>
        ${loadChoices(choices)}`);
}


function loadChoices(choices){
    var result = '';

    for (var i = 0; i < choices.length; i++){
        result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
    }

    return result;
}

//move on to next question automatically or end game

function nextQuestion(){
    const questionOver = (triviaQuestions.length -1) === currentQuestion;
    if (questionOver){
        console.log('end of question');
        displayResult();
    } 
    
    else {
        currentQuestion++;
        loadQuestion();
    }
}

$(document).on('click', '.choice', function() {
    clearInterval(time);
    const selectedAnswer = $(this).attr('data-answer');
    console.log (selectedAnswer);
    const correctAnswer = triviaQuestions[currentQuestion].correctAnswer;

    if (correctAnswer === selectedAnswer) {
        score++;
        console.log ('correct answer');
        preloadImage('win');
        setTimeout(nextQuestion, 6 * 1000);
    } 
    
    else {
        lost++;
        console.log ('wrong answer');
        preloadImage('lose');
        setTimeout(nextQuestion, 6 * 1000);
    }


});

//scores

function displayResult(){
    const result = `
     <p>You Answered: ${score} question(s) right</p>
     <p>You Answered: ${lost} question(s) wrong</p>
     <p>Total Questions: ${triviaQuestions.length}</p>
     <button class="btn btn-primary" id="reset">Play Again</button>
    `;
    $('#game').html(result);
}


//game reset

$(document).on('click', '#reset', function(){
    counter = 5;
    currentQuestion = 0;
    score = 0;
    lost = 0;
    time = null;   
    loadQuestion();
});


loadQuestion();