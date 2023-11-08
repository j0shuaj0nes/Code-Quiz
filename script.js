var startButton = document.querySelector(".start")
var header = document.querySelector("header")
var timerId;
var time = 60;
var div = document.querySelector(".timer")
var questions = [
    {
        prompt: "Commonly used data types DO NOT include:\n(1.) strings\n\(2.) booleans\n\(3.) alerts\n\(4.) numbers",
        answer: "3"
    },
    {
        prompt: "A very useful tool used during development and debugging for printing content to the debugger is:\n(1.) Javascript\n\(2.) terminal/bash\n\(3.) for loops\n\(4.) console log",
        answer: "4"
    },
    {
        prompt: "The condition in an if/else statement is enclosed within____:\n(1.) quotes\n\(2.) curly brackets\n\(3.) parentheses\n\(4.) square brackets",
        answer: "3"
    },
    {
        prompt: "Arrays in JavaScript can be used to store____:\n(1.) numbers and strings\n\(2.) other arrays\n\(3.) booleans\n\(4.) all of the above",
        answer: "4"
    },
]
var score = 0;

startButton.addEventListener("click", function(){
    console.log("start quiz")
    header.classList.add("hide")
    startTimer()
})
function startTimer(){
    timerId=setInterval(function(){
        time--; 
        div.textContent=time
        if (time <=0){
            endGame()
        }
    },1000)
}

for(var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i.prompt]);
    if(response == questions[i].answer){
        score++;
        alert("Correct!")
    } else {
        alert("Wrong!");
    }
}
alert("You got " + score + "/" + questions.length);

function endGame(){

}
//Create an array of questions
//Each item in the array can be an object that has all the info you need for each question. Ex: title, and 4 option choices, and the correct answer
//Display the first question on the screen. Hint: use a variable for the question index, starting at 0
//Have functions for handling the correct answer and the wrong answer for when the user clicks on a button choice
//Make sure to increment question index after each time the user selects a choice
//Once all questions are answered or if the time is finished, then call the endGame function. Where you do the highscores logic