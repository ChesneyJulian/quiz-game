var startBtn = document.querySelector('#start-btn');
var answerBtn = document.querySelectorAll('.answer');
var submitBtn = document.querySelector('#submit'); 
var startEl = document.querySelector('#start');
var quizEl = document.querySelector('#quiz');
var endEl = document.querySelector('#end');
var timeLeft = "";
var i = 0;
var answerResult = document.querySelector(".answer-result");
var questionsArr = [ 
        {question: "Who was tricked into opening the Chamber of Secrets?",
        choices:["Hermione", "Ginny", "Neville", "Draco"] },

        {question: "How was Hermione able to take multiple classes at once?", 
        choices: ["She ran", "Using a looking glass", "Using a Time-Turner", "Using dark magic"]},

        {question: "Where was Harry Potter born?", 
        choices:["Godric's hollow", "Privet Drive", "The Leaky Cauldron", "Hogwarts"]}, 

        {question: "What is Seversus's patronus charm?", 
        choices:["Beaver", "Doe", "Bear", "Stag"]},

        {question: "What is the name of Hagrids pet hound?", 
        choices:["Bruce", "Grawp", "Arragog", "Fang"]}, 

        {question: "What horcrux does Harry find within the Room of Requirement?", 
        choices:["Helena's Lost Diadem", "Tom Riddle's Diary", "The sword of Gryffindor", "The Mirror of Erised"]},

        {question: "What is Ron's eldest brother's name?",
        choices: ["Percy", "Charlie", "George", "Bill"]},

        {question: "What is Sirius's nickname within his friend group, the Marauders?",
        choices: ["Prongs", "Wormtail", "Padfoot", "Mooney"]}
    ]


startBtn.addEventListener('click', function() { 
    currentQuestion([0]);
    startEl.style.display = "none";
    quizEl.style.display = null;
    endEl.style.display = "none";
});



 
function currentQuestion([i]) {
    
    document.querySelector(".question").textContent = questionsArr[i].question;
    document.querySelector(".btn1").value = questionsArr[i].choices[0];
    document.querySelector(".btn2").value = questionsArr[i].choices[1];
    document.querySelector(".btn3").value = questionsArr[i].choices[2];
    document.querySelector(".btn4").value = questionsArr[i].choices[3];
}
var answersKey = ["Ginny", "Using a Time-Turner","Godric's hollow", "Doe", "Fang", "Helena's Lost Diadem", "Bill", "Padfoot" ]

answerBtn.forEach((button) => {
     button.addEventListener('click', function(event) {
        console.log(event.currentTarget.value);
        var userChoice = event.currentTarget.value; 
        event.stopPropagation();
        event.preventDefault();
        
        if (userChoice == answersKey[i]) {
            console.log("correct");
            answerResult.textContent = "That's Correct!";
            answerResult.style.color = "rgb(237, 189, 68)";
        } else {
            console.log("incorrect");
            answerResult.textContent = "Wrong Answer";
            answerResult.style.color = "rgb(218, 106, 32)";
        }

        setTimeout(() => {
            answerResult.textContent = null;
            handleAnswers([i]);
        }, 300);
        
        });
    })

    function endScreen() {
        quizEl.style.display= "none";
        endEl.style.display = null;
        document.querySelector('.score').textContent = "Your score is " + timeLeft + "!"
        
    }

  function handleAnswers() {  
     i += 1 ;
     if (i < (questionsArr.length)) {
        currentQuestion([i]);
     } else {
    endScreen();
    }
  }

  
function showHighScores() {
    var userInfo = document.getElementById("initials");
   
    console.log(userInfo.value);
}

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    
    
    showHighScores();

});

