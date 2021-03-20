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

    if (answers[0]==='1')
    {
        result.innerText="RESILIENCE!"; 
        imageSrc.src="resilience.png"
        result_description.innerHTML="Your inner power is resilience. You can recover from anything. Once you set your mind on something, you can see it through and get results you want!";
    }
    if (answers[0]==='2')
    {
        result.innerText="CALM!"
        imageSrc.src="calm.png"
        result_description.innerHTML="Your inner power is calm. When shits happen, you can become the person everyone relies on. You don't break down when steaks are high. Consistency is your last name";
    }
    
    if (answers[0]==='3')
    {
        result.innerText="CREATIVITY!"
        imageSrc.src="creative.png"  
        result_description.innerHTML="Your inner power is creativity. You alawys find innovative ways to deal with tough problems in life. You understand the importance of doing the right thing vs. just working hard"
    }
    
    if (answers[0]==='4')
    {
        result.innerText="ATTRACTION"
        imageSrc.src="attraction.png"
        result_description.innerHTML="Your inner power is attraction. You can work with anyone and talk people into doing you want them to. Everyone feels excited around you and want to hang out with you"
    }
    

saveHighScore = e =>{
    e.preventDefault();
}