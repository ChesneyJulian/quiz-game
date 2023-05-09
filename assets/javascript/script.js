var startBtn = document.querySelector('#start-btn');
var answerBtn = document.querySelectorAll('.answer');
var submitBtn = document.querySelector('#submit'); 
var startEl = document.querySelector('#start');
var quizEl = document.querySelector('#quiz');
var endEl = document.querySelector('#end');
var questionsArr = [ 
        {question: "Who was tricked into opening the Chamber of Secrets?",
        choices:["hermione", "Ginny", "Neville", "Draco"] },

        {question: "How was Hermione able to take multiple classes at once?", 
        choices: ["She ran", "Using a looking glass", "Using a Time-Turner", "Using dark magic"]},

        {question: "Where was Harry Potter born?", 
        choices:["Godric's hollow", "Privet Drive", "The Leaky Cauldron", "Hogwarts"]}, 

        {question: "What is Seversus's patronus charm?", 
        choices:["Beaver", "Stag", "Bear", "Cat"]},

        {question: "What is the name of Hagrids pet hound?", 
        choices:["Bruce", "Grawp", "Arragog", "Fang"]}, 

        {question: "What horcrux does Harry find within the Room of Requirement?", 
        choices:["Helena's Lost Diadem", "Tom Riddle's Diary", "The sword of Gryffindor", "The Mirror of Erised"]}
    ]


startBtn.addEventListener('click', function() { 
    currentQuestion([0]);
    startEl.style.display = "none";
    quizEl.style.display = null;
    endEl.style.display = "none";
});

submitBtn.addEventListener('click', function() {
    startEl.style.display =  null;
    quizEl.style.display="none";
    endEl.style.display="none";
});

 
function currentQuestion([i]) {
   
    var questionEl = document.querySelector(".question");
    var answerBtn1 = document.querySelector(".btn1");
    var answerBtn2 = document.querySelector(".btn2");
    var answerBtn3 = document.querySelector(".btn3");
    var answerBtn4 = document.querySelector(".btn4");
    
    questionEl.textContent = questionsArr[i].question;
    answerBtn1.textContent = questionsArr[i].choices[0];
    answerBtn2.textContent = questionsArr[i].choices[1];
    answerBtn3.textContent = questionsArr[i].choices[2];
    answerBtn4.textContent = questionsArr[i].choices[3];

    handleAnswers();
    
    function handleAnswers() { answerBtn.forEach((button) => {
    button.addEventListener('click', function() {
        var increase = (i+=1);
        
        currentQuestion([increase]);
        });
})
  }
}
   
  
 
