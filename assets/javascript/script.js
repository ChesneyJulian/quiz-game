// initialize main variables
// variables set to nothing are assigned data later in the code
var startBtn = document.querySelector('#start-btn');
var answerBtn = document.querySelectorAll('.answer');
var submitBtn = document.querySelector('#submit'); 
var startEl = document.querySelector('#start');
var quizEl = document.querySelector('#quiz');
var endEl = document.querySelector('#end');
var scoreSheetEl = document.getElementById("scoresheet");
var userInfo = document.getElementById("initials");
var timeLeft = 60;
var score = 0;
var timeClock = document.querySelector(".timer-element");
var highScoreArr = [];
var i = 0;
var answerResult = document.querySelector(".answer-result");
var answersKey = ["Ginny", "Using a Time-Turner","Godric's hollow", "Doe", "Fang", "Helena's Lost Diadem", "Bill", "Padfoot" ]
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

// event listener to hide start page, display quiz section, start timer, and start currentQuestion function

startBtn.addEventListener('click', function () { 
    currentQuestion([0]); 
    startTime();
    startEl.style.display = "none";
    quizEl.style.display = null;

});


// start time function allows timer to appear when quiz screen initially loads
function startTime() {
    timeLeft = 60;
    timeClock.textContent = "Time Left: " + timeLeft +"s";
    setTime();
    
}

var timerInterval;
// timer decreases and message changes accordingly every second
function setTime() {

      timerInterval = setInterval(function(){
        timeLeft--;
        timeClock.textContent= "Time Left: " + timeLeft +"s";

        // add conditional to stop timer and quiz and display endscreen when time runs out (less than or equal to because of jumps caused by penalty)
     if (timeLeft <= 0) {
        score = 0;
        stopClock();
        endScreen();
        // set score equal to timeLeft
     }  else {score = timeLeft;} 
     }, 1000);
}

// function to stop timer 
function stopClock () {
    clearInterval(timerInterval);
}
 
// create function to add content to quiz section of html based on index position of questionsArr
function currentQuestion(i) {
    
    document.querySelector(".question").textContent = questionsArr[i].question;
    document.querySelector(".btn1").value = questionsArr[i].choices[0];
    document.querySelector(".btn2").value = questionsArr[i].choices[1];
    document.querySelector(".btn3").value = questionsArr[i].choices[2];
    document.querySelector(".btn4").value = questionsArr[i].choices[3];

    
}

// add event listener to each answer choice button that assins the buttons value to the variable userChoice
answerBtn.forEach((button) => {
    button.addEventListener('click', function(event) {
        var userChoice = event.currentTarget.value; 
        event.stopPropagation();
        event.preventDefault();
        console.log(timeLeft);
        // conditional statement to display result message if userChoice can be found within answersKey at index position i (same i value used in currentQuestion)
        if (userChoice == answersKey[i]) {
            answerResult.textContent = "That's Correct!";
            answerResult.style.color = "rgb(237, 189, 68)";
            
        } else {
            // if answer is wrong, deduct 15 s from timeLeft; stopClock so there isnt overlapping timers then restart timer with setTime
            stopClock();
            timeLeft -= 15;
            setTime(timeLeft);
            answerResult.textContent = "Wrong Answer. -15s";
            answerResult.style.color = "rgb(218, 106, 32)";
            
        }
        // setTimeout to allow the answerResult message to show for one second then disappear; call function handleAnswers 
    setTimeout(() => {
                answerResult.textContent = null;
                handleAnswers(i);
            }, 1000);
        
        
        });
    })

// create function to increase i by one every time it is called
function handleAnswers() {  
    i += 1 ;    
    // create conditional to call currentQuestion with the reassigned value of i as long as i is within the length parameter of questionsArr 
    if (i < (questionsArr.length)) {    
        currentQuestion(i);    
    } else {    
        // if last question in questionsArr, stop timer and call endscreen
        stopClock();
        endScreen();
        }
        
    }
    
// function to display endscreen with text content added to .score that displays the users score for the game
function endScreen() {
    startEl.style.display = "none";
    quizEl.style.display= "none";
    endEl.style.display = null;    
    document.querySelector('.score').textContent = "Your score is " + score + "!"       
        
    }    

  
// event listener on submit button that allows user initials and score to be saved to local storage by calling addToLocal
submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    addToLocal();
    
});


// create function to add user input to local storage
function addToLocal() {
    // create object with properties of score and user; set score property to score variable and user property to userInfo.value 
    var highScores = {
        score: score,
        user: userInfo.value
    };

    console.log(highScores.user);
    // push highScores object to highScoreArr(declared at top of page)
    // pushing to array allows multiple objects containing user data to be stored in one place
    highScoreArr.push(highScores);
    // set local storage "userScore" to stringified highScoreArr
    localStorage.setItem("userScore", JSON.stringify(highScoreArr));

    console.log(highScoreArr);
    // call showHighScores
    showHighScores();
}




// create function to display scoresheet containing user initial and score data from local storage
function showHighScores() {
   startEl.style.display = "none"; 
   endEl.style.display = "none";
   scoreSheetEl.style.display = null;
// set var storage to parsed data from local storage userScore
   var storage = JSON.parse(localStorage.getItem("userScore"));
// create for loop to add text to table element from data at each index of local storage userScore
   for (var s =0; s < storage.length; s++) { 
    // create td for each iteration of loop
        var tableInfoUser = document.createElement("td");
        var tableInfoScore = document.createElement("td");
        var rowEl = document.createElement("tr");

        scoreSheetEl.children[1].appendChild(rowEl);
        rowEl.appendChild(tableInfoUser);
        rowEl.appendChild(tableInfoScore);
    // assign innerHTML to user and score properties at each index position
        tableInfoUser.innerHTML = storage[s].user;
        tableInfoScore.innerHTML = storage[s].score;
        console.log(storage[s].score)
    }
    
}
    

var playAgainBtn = document.getElementById("play-again");

// add event listener for playAgainBtn so that all sections but quizel are hidden; reassign timeLeft to 60;call startTime and currentQuestion functions to restart quiz
playAgainBtn.addEventListener('click', function(event){
    event.preventDefault();
    startEl.style.display= "none";
    quizEl.style.display =null;
    endEl.style.display= "none";
    scoreSheetEl.style.display="none";
    document.getElementById("table-data").innerHTML = null;
    timeLeft = 60;
    startTime(timeLeft);
    currentQuestion(i=0);  
}) 





