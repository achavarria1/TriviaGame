$(document).ready(function () {

    $("body").on("click", "#start", function () {
        // debugger;
        event.preventDefault();
        generateHTML();
        countdown();
    });

    $("body").on("click", ".answer", function () {

        chosenAnswer = $(this).text();
        console.log('chosenAnswer->'+chosenAnswer)
        if (chosenAnswer === correctAnswers[questionCounter]) {
            clearInterval(timer);
            generateWin();
        }
        else {
            clearInterval(timer);
            generateLoss();

        }
        //
 
    });

});

function generateHTML(){
    game = " <p class = s'text-center timer-p'>Time Remaining: <span class='timeLeft'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class = 'first-answer answer'>A." + answerArray[questionCounter][0] + "</p><p class = 'answer'>B." + answerArray[questionCounter][1] + "</p><p class = 'answer'>C." + answerArray[questionCounter][2] + "</p><p class = 'answer'>D." + answerArray[questionCounter][3]+"</p>";
   console.log("questionCounter->"+questionCounter)
    // console.log(questionCounter)
    $("#gameArea").html(game);
}

function generateWin(){
    correctCounter++;
    game = " <p class = 'text-center timer-p'>Time Remaining: <span class='timeLeft'>" + counter + "</span></p>" + "<p class='text-center'>WOW you da bomb! The answer is: " + correctAnswers[questionCounter] + "</p>";
    $("#gameArea").html(game);
    setTimeout(hold, 5000);
}

function generateLoss(){
    incorrectCounter++;
    game = " <p class = 'text-center timer-p'>Time Remaining: <span class='timeLeft'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The Correct answer is: " + correctAnswers[questionCounter] + "</p>"; 
    $("#gameArea").html(game);
    setTimeout(hold, 5000);
}

function generateOutofTimeLoss(){
    incorrectCounter++;
    game = " <p class = 'text-center timer-p'>Time Remaining: <span class='timeLeft'>" + counter + "</span></p>" + "<p class='text-center'>Out of time! The Correct answer is: " + correctAnswers[questionCounter]; + "</p>";
    $("#gameArea").html(game);
    setTimeout(hold, 5000);
}

function scoreCard(){
    game = " <p class = 'text-center timer-p'>Time Remaining: <span class='timeLeft'>" + counter + "</span></p>" + "<p class='text-center'>Thanks for playing!" + "</p>" + "<p class = 'endgameSummary'> Correct Answers: " + correctCounter + "</p>" + "<p>Incorrect Answers: " + incorrectCounter + "</p>" + "<p>Unanswered: " + unansweredCounter + "</p>" + "<p class ="
}

function hold(){
    if(questionCounter < 7){
        questionCounter++;
        generateHTML();
        counter = 30;
        countdown();
    }
}

function countdown() {

    timer = setInterval(thirtySeconds, 1000);
    function thirtySeconds() {
        if (counter === 0) {
            clearInterval(timer);
            generateOutofTimeLoss();
        }
        if (counter > 0) {
            counter--;
        }
        $('.timeLeft').html(counter);
    }
}


function resetGame() {

    counter = 30;

    questionCounter = 0;

    correctCounter = 0;

    incorrectCounter = 0;

    unansweredCounter = 0;

    generateHTML();

    countdown();
}



var counter = 30;

var questionCounter = 0;

var correctCounter = 0;

var incorrectCounter = 0;

var unansweredCounter = 0;

var questionArray = ["Who was the first player drafted in the first NFL draft in 1936?",
"In 1993, what NFL team made off-season trades for Joe Montana and Marcus Allen?",
"What team was originally named the New York Titans?",
"What team won 3 Super Bowls in the 1990s?","Who was the first player to rush for 1000 yards in a season??",
"Which NFL team features a helmet logo on only one side of their helmet?"];

var answerArray = [
    ["Bart Starr","Sammy Baugh","Don Hutson","Jay Berwanger"],
    ["San Francisco 49ers","Kansas City Cheifs","Denver Broncos","Oakland Raiders"],
    ["Tennesse Titans","New York Giants","New York Jets","Kansas City Cheifs"],
    ["49ers","Broncos","Cowboys","Patriots"],
    ["Steve Van Buren","Beattie Feathers","Joe Perry","Jim Brown"],
    ["Steelers","Patriots","Cowobys","Dolphins"]
];

var correctAnswers = ["D.Jay Berwanger","B. Kansas City Cheifs","C. New York Jets","C. Cowboys","B. Beattie Feathers","A. Steelers"];

var chosenAnswer;

var timer;

var game;
