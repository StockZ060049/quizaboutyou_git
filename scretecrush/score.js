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

    if (answers[6]==='1')
    {
        result.innerText="Of Course"; 
        imageSrc.src="love.png"
        result_description.innerHTML="Your secrete crush obviously likes you. Someone will break ice. Let it happen naturally";
    }
    if (answers[6]==='2')
    {
        result.innerText="Vague Feeling"
        imageSrc.src="guess.png"
        result_description.innerHTML="You screte crush likes you. But they may not realize it themselves. Just let it be for now and see what happens";
    }
    
    if (answers[6]==='3')
    {
        result.innerText="Somewhat Yes"
        imageSrc.src="crush.png"  
        result_description.innerHTML="Your secrete love definitely thinks about you. But they are not sure if this is friendship or love. Guess we will wait and see"
    }
    
    if (answers[6]==='4')
    {
        result.innerText="Friend Zone"
        imageSrc.src="friend.png"
        result_description.innerHTML="Right now this feeels like a friend situation. Probably both you and that person is not sure. But who knows things change in a split second."
    }
    

saveHighScore = e =>{
    e.preventDefault();
}