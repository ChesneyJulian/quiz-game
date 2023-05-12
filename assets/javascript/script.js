var startBtn = document.querySelector('#start-btn');
var answerBtn = document.querySelectorAll('.answer');
var submitBtn = document.querySelector('#submit'); 
var startEl = document.querySelector('#start');
var quizEl = document.querySelector('#quiz');
var endEl = document.querySelector('#end');
var scoreSheetEl = document.getElementById("scoresheet");
var userInfo = document.getElementById("initials");
var timeLeft = "";
var highScoreArr = [];

var i = 0;
var answerResult = document.querySelector(".answer-result");
var questionsArr = [ 
        {question: "Who was tricked into opening the Chamber of Secrets?",
        choices:["Hermione", "Ginny", "Neville", "Draco"] },

        // {question: "How was Hermione able to take multiple classes at once?", 
        // choices: ["She ran", "Using a looking glass", "Using a Time-Turner", "Using dark magic"]},

        // {question: "Where was Harry Potter born?", 
        // choices:["Godric's hollow", "Privet Drive", "The Leaky Cauldron", "Hogwarts"]}, 

        // {question: "What is Seversus's patronus charm?", 
        // choices:["Beaver", "Doe", "Bear", "Stag"]},

        // {question: "What is the name of Hagrids pet hound?", 
        // choices:["Bruce", "Grawp", "Arragog", "Fang"]}, 

        // {question: "What horcrux does Harry find within the Room of Requirement?", 
        // choices:["Helena's Lost Diadem", "Tom Riddle's Diary", "The sword of Gryffindor", "The Mirror of Erised"]},

        // {question: "What is Ron's eldest brother's name?",
        // choices: ["Percy", "Charlie", "George", "Bill"]},

        // {question: "What is Sirius's nickname within his friend group, the Marauders?",
        // choices: ["Prongs", "Wormtail", "Padfoot", "Mooney"]}
    ]


startBtn.addEventListener('click', function() { 
    currentQuestion([0]);
    startEl.style.display = "none";
    quizEl.style.display = null;
    endEl.style.display = "none";
    scoreSheetEl.style.display="none";
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
        var userChoice = event.currentTarget.value; 
        event.stopPropagation();
        event.preventDefault();
        
        if (userChoice == answersKey[i]) {
            answerResult.textContent = "That's Correct!";
            answerResult.style.color = "rgb(237, 189, 68)";
        } else {
            answerResult.textContent = "Wrong Answer";
            answerResult.style.color = "rgb(218, 106, 32)";
        }

        setTimeout(() => {
            answerResult.textContent = null;
            handleAnswers([i]);
        }, 300);
        
        });
    })

function handleAnswers() {  
    i += 1 ;    
    if (i < (questionsArr.length)) {    
        currentQuestion([i]);    
    } else {    
        endScreen();
        }
    }
    
function endScreen() {
    startEl.style.display = "none";
    quizEl.style.display= "none";
    endEl.style.display = null;    
     document.querySelector('.score').textContent = "Your score is " + timeLeft + "!"       
        
    }    

  

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    addToLocal();
    
});



function addToLocal() {
   
    
    var highScores = {
        user: userInfo.value,
        score: timeLeft.value
    };

    console.log(highScores.user);
    highScoreArr.push(highScores);
    localStorage.setItem("userScore", JSON.stringify(highScoreArr));
    console.log(highScoreArr);
    showHighScores();
}
    


function showHighScores() {
    
   endEl.style.display = "none";
   scoreSheetEl.style.display = null;
//  TO DO: FIGURE OUT HOW TO GET LOCAL STORAGE TO OUTPUT AS STRING

//    document.querySelector("#scoresheet").appendChild(p);
    var storage = JSON.parse(localStorage.getItem("userScore"));


    document.getElementById("test").innerHTML = storage[0].user;


    

}
var playAgainBtn = document.getElementById("play-again");

playAgainBtn.addEventListener('click', function(event){
    event.preventDefault();
    startEl.style.display= null;
    quizEl.style.display = "none";
    endEl.style.display= "none";
    scoreSheetEl.style.display="none";
    
}) 





