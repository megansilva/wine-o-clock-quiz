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
var questionsDiv = document.querySelector("questions");

var secondsLeft = 90;
var holdInterval = 0;
var penalty = 5;
var ulCreate = document.createElement("ul");

// timer button 
startTimer.addEventListener("click", function() {
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
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
}

function compare(event) {
    var element = event.target;

    if (element.matches("li")) {
        var createDiv = documet.createElement("div");
        createDiv.setAttribute("id", "creatDiv");

        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct! The answer is: " + questions[questionIndex].answer;
        } else {
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Incorrect! The correct answer is: " + questions[questionIndex].answer;
        }
    }
}

    questionIndex++;

    if (questionIndex >= questions.length) {
        allDone();
        createDiv.textContent = "End of quiz!" + " " + "You got " + score + "/" + questions.length + " correct!";
    } else {
        render(questionIndex);
    }

    questionsDiv.appendChild(createDiv);


function allDone() {
    questionsDiv.innerHTML = "";
    timer.innerHTML = "";

    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All done!"

    questionsDiv.appendChild(createH1);

    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionsDiv.appendChild(createP);
}

if (secondsLeft >= 0) {
    var timeRemaining = secondsLeft;
    var createP2 = document.createElement("p");
    clearInterval(holdInterval);
    createP2.textContent = "Your final score is: " + timeRemaining;

    questionsDiv.appendChild(createP2);
}

var createLabel = document.createElement("label");
createLabel.setAttribute("id", "createLabel");
createLabel.textContent = "Enter your initial: ";

questionsDiv.appendChild(createLabel);

var createInput = document.createElement("input");
createInput.setAttribute("type", "text");
createInput.setAttribute("id", "initials");
createInput.textContent = "";

questionsDiv.appendChild(createInput);

var createSubmit = document.createElement("button");
createSubmit.setAttribute("type", "submit");
createSubmit.setAttribute("id", "Submit");
createSubmit.textContent = "Submit!";

questionsDiv.appendChild(createSubmit);

createSubmit.addEventListener("click", function() {
    var initials = createInput.value;

    if (initials === null) {
        console.log("No value entered!");

    } else {
        var finalScore = {
            initials: initials,
            socre: timeRemaining
        }
        console.log(finalScore);
        var allScores = localStorage.getItem("allScores");
        if (allScores === null) {
            allScores = [];
        } else {
            allScores = JSON.parse(allScores);
        }
        allScores.push(finalScore);
        var newScore = JSON.stringify(allScores);
        localStorage.setItem("allScores", newScore);
        window.location.replace("./highscores.html");
    }
});







