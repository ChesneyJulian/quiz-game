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

});
submitBtn.addEventListener('click', function() {
    startEl.style.display =  null;
    quizEl.style.display="none";
    endEl.style.display="none";
});