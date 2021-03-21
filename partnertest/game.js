const question= document.getElementById("question");
const choices= Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById("progressBarFull");
const loader = document.getElementById('loader');
const game = document.getElementById('game');

let currentQuestion={};
let acceptingAnswers=true;
let score=0;
let questionCounter=0;
let availableQuestions=[];
let questions = [];
let answers =[];
let questionIndex=0;

//fetch questions from a json
fetch('questions.json')
    .then((res) => {
        return res.json();
    })
    .then((loadedQuestions) => {
        questions = loadedQuestions;
        startGame();
    })
    .catch((err) => {
        console.error(err);
    });

startGame = () =>{
    questionCounter=0;
    score=0;
    availableQuestions=[...questions] //get a full copy
    getNewQuestion(); 
    game.classList.remove("hidden");
    loader.classList.add("hidden");
}

getNewQuestion = () =>{
    if(availableQuestions.length===0)
    {
        //go to the end page
        if (score==null)
        localStorage.setItem("answers",0);
        else
        {
            localStorage.setItem("answers",JSON.stringify(answers));
            return window.location.assign('end.html');    
        }
    }
    //update the progress bar
    progressBarFull.style.width = `${(questionCounter/questions.length)*100}%`; 
    //set text for question counter
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${questions.length}`;
    currentQuestion=availableQuestions[questionIndex];
    question.innerText=currentQuestion.question;
    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText=currentQuestion['choice' + number]; 
    });
    availableQuestions.splice(questionIndex,1);
    acceptingAnswers = true;
}
    
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;
        acceptingAnswers=false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = 'incorrect';
        //hightlight cells user selected
        selectedChoice.parentElement.classList.add(classToApply); 
        // console.log(selectedAnswer);
        answers.push(selectedAnswer);
        //remeber their choices
        setTimeout(()=>{
            selectedChoice.parentElement.classList.remove(classToApply); 
            getNewQuestion();
        },500)
    });
})
