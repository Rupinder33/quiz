
let quizData = [
    {
        question: "What is the result of 3 + 4?",
        options: ["14", "11", "10", "7"],
        answer: 3
    },
    {
        question: "What is the result of 10 - 5?",
        options: ["10", "0", "7", "5"],
        answer: 3
    },
    {
        question: "What is the result of 10*5?",
        options: ["15", "50", "0", "10"],
        answer: 1 
    },
    {
        question: "what is the result of 20/5?",
        options: ["5", "4", "3", "2"],
        answer: 1
    },
    {
        question: "what is the result of 17%4?",
        options: ["1", "2", "3", "4"],
        answer: 1
    },
    {
        question: "What is the result of 5++?",
        options: ["4", "5", "6","7"],
        answer: 2
    },
    {
        question: "What is the result of 10--?",
        options: ["9", "10", "5", "11"],
        answer: 0
    },
    {
        question: "What is the result of 5 += 3?",
        options: ["8", "5", "3", "15"],
        answer: 0
    },
    {
        question: "What is the result of 10 -= 4?",
        options: ["6", "14", "10", "4"],
        answer: 0
    },
    {
        question: "What is the type of undefined?",
        options: ["'string'", "'object'", "'undefined'", "'boolean'"],
        answer: 2 
    },
    {
        question: "What will be the result of 5 == '5';",
        options: ["true", "false", "NaN", "undefined"],
        answer: 0 
    },
    {
        question: "What is the value of a after: let a = 4; a *= 6;",
        options: ["5", "6", "24", "3"],
        answer: 2
    },
    {
        question: "What is the type of an object {}?",
        options: ["'array'", "'object'", "'null'", "'undefined'"],
        answer: 1 
    },
    {
        question: "What is the result of `10 + '30'`;",
        options:[ "'30'", "'1030'", "'1020'", "'10'"],
        answer:1    
    },
    { 
        question: "What is the result of true && false?",
        options: [ "true",  "false", "undefined" ,"null"],
        answer: 1
    }
];

quizData.push({
    question: "What is the result of 4 + '4'?",
    options: ["'44'", "4", "NaN", "error"],
    answer: 0 
});

quizData.pop();

quizData.splice(3, 0, {
    question: "What will be the value of b after: let b = 7; b += 2;",
    options: ["9", "7", "2", "undefined"],
    answer: 0 
});

let questionTexts = quizData.map(q => q.question);

let typeQuestions = quizData.filter(q => q.question.includes('type'));

let totalPoints = quizData.reduce((sum, q) => sum + 1, 0);

let currentQuestionIndex = 0; 
let score = 0; 

function loadQuestion() {
    let currentQuestion = quizData[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    document.getElementById("btn0").textContent = currentQuestion.options[0];
    document.getElementById("btn1").textContent = currentQuestion.options[1];
    document.getElementById("btn2").textContent = currentQuestion.options[2];
    document.getElementById("btn3").textContent = currentQuestion.options[3];
    document.getElementById("feedback").textContent = "";
    document.getElementById("next-btn").style.display = "none";
}

function checkAnswer(selectedOptionIndex) {
    let currentQuestion = quizData[currentQuestionIndex];
    if (selectedOptionIndex === currentQuestion.answer) {
        score++; 
        document.getElementById("feedback").textContent = "Correct!";
    } else {
        document.getElementById("feedback").textContent = "Wrong! The correct answer is " + currentQuestion.options[currentQuestion.answer];
    }
    document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++; 
    if (currentQuestionIndex < quizData.length) {
        loadQuestion(); 
    } else {
        showFinalScore(); 
    }
}

function showFinalScore() {
    document.getElementById("quiz-container").innerHTML = "<h2>Your final score is " + score + " out of " + totalPoints + "</h2>";
}

loadQuestion();