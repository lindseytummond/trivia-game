//trivia questions

const triviaQuestions = 
[
    {
    question: "What food is Buffalo, NY best known for?",
    choices: ["Pizza", "Wings", "Hot Dogs", "Tacos"],
    answer: "Wings",
    },

    {
    question: "The Bills are Buffalo’s beloved football team, how many consecutive years in the 90’s did they make the Super Bowl?",
    choices: ["2", "4", "6", "8"],
    answer: "4",
    },

    {
    question: "What holiday in Buffalo is celebrated the Monday after Easter in which men use squirt guns to drench women with water and women hit men with pussy willows?",
    choices: ["Patriot’s Day", "Boxing Day", "Dyngus Day", "Polar Bear Plunge Day"],
    answer: "Dyngus Day",
    },

    {
    question: "What is Buffalo’s nickname?",
    choices: ["Ace City", "King City", "Queen City", "Joker City"],
    answer: "Queen City",
    },

    {
    question: "How many ‘snow days’ are built into the calendar for Buffalo Schools?",
    choices: ["2", "4", "6", "8"],
    answer: "4",
    },
]

//global variables

var counter = 30;
var currentQuestion = 0;
var score = 0;
var lost = 0;
var time;

//load questions and choices

function loadQuestion() {
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


loadQuestion();