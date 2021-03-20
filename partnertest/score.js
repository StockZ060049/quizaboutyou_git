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

    if (answers[9]==='2')
    {
        result.innerText="Nothing To Worry"; 
        imageSrc.src="nochance.png"
        result_description.innerHTML="There is nothing you need to worry in your relationship. You partner is loyal and you both are having a great time!";
    }
    if (answers[9]==='3')
    {
        result.innerText="Solid And Strong"
        imageSrc.src="solid.png"
        result_description.innerHTML="You have a great partner. Your relationship is solid. You are right to worry as we all are. But there is nothing there";
    }
    
    if (answers[9]==='4')
    {
        result.innerText="Spend More Time"
        imageSrc.src="spendmoretime.png"  
        result_description.innerHTML="It's hard to say at this stage. But it's good to be careful. You wanna spend more time with your partner. relationship needs nurtured"
    }
    
    if (answers[9]==='1')
    {
        result.innerText="Something's Up"
        imageSrc.src="cheat.png"
        result_description.innerHTML="There is a 30% chance your partner is talking to somebody else. Probably worth to take this quiz again to be sure. Or get more evidences"
    }
    

saveHighScore = e =>{
    e.preventDefault();
}