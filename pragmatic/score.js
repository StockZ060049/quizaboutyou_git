const array_test=[1,2,3,4,5];
const username = document.getElementById('username');
let imageSrc=document.getElementById('image');
const answers=JSON.parse(localStorage.getItem('answers'));
// const saveScoreBtn=document.getElementById('saveScoreBtn');

// username.addEventListener("keyup",()=>{
//     saveScoreBtn.disabled=!username.value;
// })

const result = document.getElementById("result");
const result_description = document.getElementById("result description");

    if (answers[1]==='1')
    {
        result.innerText="Pragmatist!"; 
        imageSrc.src="pragmatist.png"
        result_description.innerHTML="You are very pragmatic. You understand how the world works and rules around it. You will do whatever it takes to ensure you and your loved ones are living a good life!";
    }
    if (answers[1]==='2')
    {
        result.innerText="Idealist!"
        imageSrc.src="idealist.png"
        result_description.innerHTML="You know how things work but at the same time, you want things to work the right way. You believe in your ideas and use real actions to do righ in this world!";
    }
    
    if (answers[1]==='3')
    {
        result.innerText="Super Real"
        imageSrc.src="real.png"  
        result_description.innerHTML="You do whatever it takes to win. But you also knows the boundaries. The world need people like you to innovate and move forward. You always do the right things and maximize efficiency"
    }
    
    if (answers[1]==='4')
    {
        result.innerText="Real And Hopeful"
        imageSrc.src="hopeful.png"
        result_description.innerHTML="You are the super hero of our world. You will make the wrong things go away. You also understand the power of action and do things right!"
    }
    

saveHighScore = e =>{
    e.preventDefault();
}