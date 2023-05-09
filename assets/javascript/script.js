var startBtn = document.querySelector('#start-btn');
var answerBtn = document.querySelector('.answer');
var submitBtn = document.querySelector('#submit'); 
var startEl = document.querySelector('#start');
var quizEl = document.querySelector('#quiz');
var endEl = document.querySelector('#end');



startBtn.addEventListener('click', function() {
    startEl.style.display = "none";
    quizEl.style.display = null;
    endEl.style.display = "none";
});
answerBtn.addEventListener('click', function() {
    startEl.style.display ="none";
    quizEl.style.display ="none";
    endEl.style.display = null;
    currentQuestion();

});
submitBtn.addEventListener('click', function() {
    startEl.style.display =  null;
    quizEl.style.display="none";
    endEl.style.display="none";
});



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
// var possibleChoices = {
//     q1: ,
//     q2: ,
//     q3: ,
//     q4: ,
//     q5: ,
//     q6:  
// }


 var listEl = document.createElement("ol"); 
 var questionEl = document.createElement("h2");
 var liEl1 = document.createElement("Li");
 var liEl2 = document.createElement("Li");
 var liEl3 = document.createElement("Li");
 var liEl4 = document.createElement("Li");

 
 questionEl.style.display = null;
 listEl.style.display = null;

function  currentQuestion() {
    questionEl.textContent = questionsArr[0].question;
    liEl1.textContent = questionsArr[0].choices[0];
    liEl2.textContent =questionsArr[0].choices[1];
    liEl3.textContent = questionsArr[0].choices[2];
    liEl4.textContent = questionsArr[0].choices[3];


    quizEl.appendChild(questionEl);
    questionEl.appendChild(listEl);
    listEl.appendChild(liEl1);
    listEl.appendChild(liEl2);
    listEl.appendChild(liEl3);
    listEl.appendChild(liEl4);
}
 