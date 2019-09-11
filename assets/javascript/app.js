
/*$(document).ready(function(){

    $("#start-button").on("click", gameState.countDown);
      
    });

    // Initial values
    var counter =30;
    var currentQuestion 
    var score = 0;
    var lost =0;
    var timer;
    
   
        
    
    ];
    
    // Start a timer
    function timeUp(){
        clearInterval(timer); 
        lost++;
    
    
    
    
    }
    
    
    function countDown() {
        counter--;
        $("#time").html(`Time Left: ` + counter + ` secs`);
    
        if (counter===0) {
            timeUp();
        }
    }
    
    
    // Display questions and choices
    
    function loadQuestion() {
    
        counter = 30; 
        timer = setInterval(countDown, 1000); 
        const question = quizQuestions[0,1,2,3,4].question;
        const choices = quizQuestions[0,1,2,3,4].choices;
    
        $("#time").html("Timer: " + counter);
        $('#game').html(`
        <h4> ${question} </h4>
        ${loadChoices(choices)}
        `);
    }
    
    
    function loadChoices(choices) {
    var result = '';
    
    for (var i =0; i<choices.length; i++){
    result += `<p class= "choice" data-answer="${choices[i]}"> ${choices[i]}</p>`;
    
    }
    return result;
    }
    
    
    
    loadQuestion();
    
    
    }) */
    
    
    
    
    
    
    
    
    
    
    
     $(document).ready(function(){
    
        
        $("#start-button").on("click", gameState.countDown);
      
      });
      
      // information about the state of game play
      var gameState = {
      
        // set the time at 60 seconds, and count down by 1 second
        timeRemaining : 30,
      
        // start the timer, hide the start page, show the questions
        countDown: function() {
          $("#timer").text("Time remaining: " + gameState.timeRemaining);
          setInterval(gameState.countdown, 1000);
          $("#start-page").hide();
          trivia.displayQuestions();
        },
      
        // decrement the timer and update the UI; stop the timer at 0
        countdown: function() {
          gameState.timeRemaining--;
          $("#timer").text("Time remaining: " + gameState.timeRemaining);
          if (gameState.timeRemaining === 0) {
            gameState.stopTimer();
            $("#timer").empty();
          }
        },
      
        // stop the timer and check the choices
        stopTimer: function() {
          clearInterval();
          trivia.checkchoices();
        },
      
        // hide the quetions and display the end page with results
        showEndPage: function(numcorrectAnswer, numIncorrectAnswer, numUnanswered) {
          $("#end-page").show();
          $("#questions-box").empty();
          $("#timer").empty();
          $("#timer").hide();
          $("#correctAnswer-choices").text("correctAnswer choices (Woo-hoo!): " + numcorrectAnswer);
          $("#incorrectAnswer-choices").text("Incorrect Answers : " + numIncorrectAnswer);
          $("#unanswered").text("Unanswered questions: " + numUnanswered);
        }
      }
      
      // functions to handle the building questions page and scoring
      var trivia = {
      
        // pull questions from the array of questions, loop through them, and append to UI
        displayQuestions: function() {
          var divContainer = $("#questions-box");
          var answerGroup = $(".form-check");
          divContainer.append('<h2>Answer the following questions:</h2>');
                  
          for (var i = 0; i < quizQuestions.length; i++) {
      
            divContainer.append('<div id="question">' + quizQuestions[i].question + '</div>');
      
            var answer1 = quizQuestions[i].choices[0];
            var answer2 = quizQuestions[i].choices[1];
            var answer3 = quizQuestions[i].choices[2];
            var answer4 = quizQuestions[i].choices[3];
      
            divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer1 + '</label></div>');
            divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer2 + '</label></div>');
            divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer3 + '</label></div>');
            divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer4 + '</label></div>');
          }
      
          // add a Done button to the end of the page and register its click handler
          var doneButton = '<button class="btn btn-primary" id="done-button" type="submit">Done</button>';
          divContainer.append(doneButton);
          $("#done-button").on("click", gameState.stopTimer);
        },
      
        // test if the user choices are correctAnswer, incorrectAnswer, or if there are unanswered questions
        checkchoices: function() {
          var correctAnswerAnswer;
          var userAnswer;
          var numcorrectAnswer = 0;
          var numIncorrectAnswer = 0;
          var numUnanswered = 0;
      
          // loop through to compare the text of the label with the user choices
          // increment score counts appropriately
          for (var i = 0; i < quizQuestions.length; i++) {
            correctAnswerAnswer = quizQuestions[i].correctAnswer;
            userAnswer = $('input[id=radio'+i+']:checked + label').text();
      
            if (userAnswer === correctAnswerAnswer) {
              numcorrectAnswer++;
            } else if (userAnswer === "") {
              numUnanswered++;
            } else if (userAnswer !== correctAnswerAnswer) {
              {
                numIncorrectAnswer++;
              }
            }
          }
      
          // show the end page with the score tally
          gameState.showEndPage(numcorrectAnswer, numIncorrectAnswer, numUnanswered);
        },
      }
      
      // array of objects with the questions, possible choices, and the correctAnswer answer
      var quizQuestions =
      [
        {
            question: "What country has the most natural lakes?",
            choices : ["Australia", "India", "USA", "Canada"],
            correctAnswer: "Canada"
        },
        {
            question: "Montevideo is the capital of what South American country?",
            choices : ["Suriname", "Uruguay", "Peru", "Paraguay"],
            correctAnswer: "Uruguay"
        },
        {
            question: "What ocean is home to 75% of the Earth's volcanoes?",
            choices : ["Atlantic", "Indian", "Pacific", "Artic"],
            correctAnswer: "Pacific"
        },
        
        {
            question: "What is the least populated U.S. state?",
            choices : ["Montana", "Rhode Island", "Delaware", "Wyoming"],
            correctAnswer: "Wyoming"
        },
        
        {
            question: "What is the coldest sea on Earth?",
            choices : ["White Sea", "Persian Gulf", "Baltic Sea", "Caspian Sea"],
            correctAnswer: "White Sea"
        },
        
    
    ];
    
    
    
        
    
    