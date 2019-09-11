const quizQuestions = [
    {
        question: "What bike?",
        choices : ["Honda Dio", "Kawasaki Ninja", "BMW S1000RR"],
        correctAnswer: "Kawasaki Ninja"
    },
    {
        question: "What car?",
        choices : ["Maruti Omni", "Audi 100 quattro", "Toyota Camry"],
        correctAnswer: "Toyota Camry"
    },
    {
        question: "What job?",
        choices : ["Mechanical Engineer", "MotoGP Rider", "Web Developer"],
        correctAnswer: "Web Developer"
    },
    

];


?$(document).ready(function(){

    $("#start-button").on("click", gameState.startTimer);
      
    });

    // Initial values
    var counter =30;
    var currentQuestion 
    var score = 0;
    var lost =0;
    var timer;
    
    var quizQuestions = [
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
    