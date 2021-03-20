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

//fetch question from public API
// fetch("https://opentdb.com/api.php?amount=3&category=18&difficulty=easy&type=multiple")
//     .then(res => {
//         console.log('fetching data');
//         return res.json();
//     })
//     .then(loadedQuestions => {
//         questions = loadedQuestions.results.map(loadedQuestion =>{
//             const formattedQuestion = {
//                 question: loadedQuestion.question
//             };

//             const answerChoices = [...loadedQuestion.incorrect_answers];
//             formattedQuestion.answer = Math.floor(Math.random()*3)+1;
//             answerChoices.splice(formattedQuestion.answer -1,0,loadedQuestion.correct_answer);

//             answerChoices.forEach((choice, index)=>{
//                 formattedQuestion["choice" + (index+1)]=choice;
//             })
//             return formattedQuestion;
//         });
//         startGame();
//     })
//     .catch((err) => {
//         console.error(err);
//     });


//constants
const correct_bonus = 10;


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

    //get a random number between 0 and 3
    // const questionIndex=Math.floor(Math.random()*availableQuestions.length);
    currentQuestion=availableQuestions[questionIndex];
    question.innerText=currentQuestion.question;
    

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText=currentQuestion['choice' + number]; 
    });

    availableQuestions.splice(questionIndex,1);
    acceptingAnswers = true;
    // questionIndex++;
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

        // if (selectedAnswer==currentQuestion.answer)
        // {   
        //     classToApply='correct';
        //     score++;
        //     localStorage.setItem("score",score);
        //     selectedChoice.parentElement.classList.add(classToApply); 
        //     //go to the next question
        //     setTimeout(()=>{
        //         selectedChoice.parentElement.classList.remove(classToApply); 
        //         getNewQuestion();
        //     },700)
        // }
        // else{
        //     selectedChoice.parentElement.classList.add(classToApply); 
        //     //show correct answer after 300ms
        //     setTimeout(()=>{
        //         choices[currentQuestion['answer']-1].parentElement.classList.add('rightAnswer');
        //     },300)
        //     //go to the next question after 700ms
        //     setTimeout(()=>{
        //         selectedChoice.parentElement.classList.remove(classToApply); 
        //         choices[currentQuestion['answer']-1].parentElement.classList.remove('rightAnswer');
        //         getNewQuestion();
        //     },700)
        // }
        //update score
        // scoreText.innerText = `${score}`;
    });
})

