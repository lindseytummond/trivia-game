//trivia questions

const triviaQuestions = 
[
    {
    question: "What food is Buffalo, NY known for?",
    choices: ["Pizza", "Wings", "Hot Dogs", "Tacos"],
    answer: "Wings",
    },

    {
    question: "The Bills are Buffalo’s beloved football team, how many consecutive years in the 90’s did they make the Super Bowl?",
    choices: ["4", "6", "2", "7"],
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

//let variables

let counter = 30;
let currentQuestion = 0;
let score = 0;
let lost = 0;
let time;

//question and answers on client side

function loadQuestion() {
    const question = triviaQuestions [currentQuestion].question;
    const choices = triviaQuestions [currentQuestion].choices;
    $('#game').html('<h4>' + question + '</h4>');
}

loadQuestion();