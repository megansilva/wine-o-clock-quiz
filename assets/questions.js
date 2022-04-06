var questions = [
    {
        // question 1
        title: "Which wine pairs well with salmon?",
        choices: ["Pinot Grigio", "Chardonnay", "Pinot Noir", "Cabernet"],
        answer: "Chardonnay"
    },
    {
        // question 2
        title: "Which wine pairs well with red meat and pasta?",
        choices: ["Champagne", "Chardonnay", "Cabernet", "Malbec"],
        answer: "Cabernet"
    },
    {
        // question 3
        title: "Which wine pairs well with mushrooms and other eathy foods?",
        choices: ["White Zinfadel", "Pinot Grigio", "Reisling", "Pinot Noir"],
        answer: "Pinot Noir"
    },
    {
        // question 4
        title: "Which wine is said to pair well with light seafood dishes?",
        choices: ["Pinot Grigio", "Merlot", "Pinot Blanc", "Zinfadel"],
        answer: "Pinot Grigio"
    },
    {
        // question 5
        title: "Which tpoe of wine paris well with tart flavored foods, such as pickles and suaerkraut?",
        choices: ["Riesling", "Pinot Blanc", "Cabernet", "White Zinfadel"],
        answer: "Sauvignon Blanc"
    },
    {
        // question 6
        title: "Which wine pairs well with sushi?",
        choices: ["Pinot Noir", "Malbec", "Riesling", "Merlot"],
        answer: "Riesling"
    },
    {
        // question 7
        title: "Which wine is said to pair well with salty foods?",
        choices: ["Rose", "Pinot Grigio", "Pinot Blanc", "Champagne"],
        answer: "Champagne"
    },
    {
        // question 8
        title: "Which wine pairs well with sweet-spicy barbecue sauces and foods?",
        choices: ["Champagne", "Chardonnay", "Cabernet", "Malbec"],
        answer: "Malbec"
    },
];

var score = 0;
var questionIndex = 0;

// Start working code
var timer = document.querySelector("timer");
var startTimer = document.querySelector("startTimer");
var questions = document.querySelector("questions");

var secondsLeft = 90;
var holdInterval = 0;
var penalty = 10;
var ulCreate = document.createElement("ul");

// timer button 
timer.addEventListener("click", function() {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            timer.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                timer.textContent = "Your time is up";
            }
        }, 1000);
    };

    render(questionIndex); 
});

// Renders questions and choices to the page
function render(_questionIndex) {
    questions.innerHTML = "";
    ulCreate.innerHTML = "";
    for (var i = 0; i < questions.length; i ++) {
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questions.textContent = userQuestion;
    }
}

