var startBtn = document.querySelector('#start-btn');
var answerBtn = document.querySelector('.answer');
var submitBtn = document.querySelector('#submit'); 
var startEl = document.querySelector('#start');
var quizEl = document.querySelector('#quiz');
var endEl = document.querySelector('#end');

var listEl = document.createElement("ul"); 



startBtn.addEventListener('click', function() {
    startEl.style.display = "none";
    quizEl.style.display = null;
    endEl.style.display = "none";
    currentQuestion();
});
answerBtn.addEventListener('click', function() {
    startEl.style.display ="none";
    quizEl.style.display ="none";
    endEl.style.display = null;

});
submitBtn.addEventListener('click', function() {
    startEl.style.display =  null;
    quizEl.style.display="none";
    endEl.style.display="none";
});

var questionsArr = [ 
    {
     question: "Who was tricked into opening the Chamber of Secrets?",
    },
    { question: "How was Hermione able to take multiple classes at once?"
},
    {question: "Where was Harry Potter born?"
}, 
    {question: "What is Seversus's patronus charm?"
},
    {question: "What is the name of Hagrids pet hound?"
}, 
    {question: "What horcrus does Harry find within the Room of Requirement?"}

]

function currentQuestion() {
   for (var i = 0; i < questionsArr.length; i++) {
    var questionEl = document.createElement("h2");
    questionEl.textContent = questionsArr[i].question;
    quizEl.appendChild(questionEl);
   }
}
