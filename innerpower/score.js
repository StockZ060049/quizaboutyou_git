const resultPage = document.getElementById("result");
const username = document.getElementById('username');
let imageSrc=document.getElementById('image');
const answers=JSON.parse(localStorage.getItem('answers'));
const result = document.getElementById("result");
const result_description = document.getElementById("result description");
var quote_to_share;

function getResult()
{
  var most_frequent=mode(answers);
  
    if (most_frequent===1)
    {
        result.innerText="RESILIENCE!"; 
        imageSrc.src="resilience.png"
        result_description.innerHTML="Your inner power is resilience. You can recover from anything. Once you set your mind on something, you can see it through and get results you want! Share this if it's accurate!";
        quote_to_share = "My inner power is resilience! What is yours?"
    }
    if (most_frequent===2)
    {
        result.innerText="CALM!"
        imageSrc.src="calm.png"
        result_description.innerHTML="Your inner power is calm. When shits happen, you can become the person everyone relies on. You don't break down when steaks are high. Consistency is your last name. Share this if it's accurate!";
        quote_to_share = "My inner power is calm! What is yours?"
    }
    
    if (most_frequent===3)
    {
        result.innerText="CREATIVITY!"
        imageSrc.src="creative.png"  
        result_description.innerHTML="Your inner power is creativity. You always find innovative ways to deal with tough problems in life. You understand the importance of doing the right thing vs. just working hard. Share this if it's accurate!"
        quote_to_share = "My inner power is creativity! What is yours?"
    }
    
    if (most_frequent===4)
    {
        result.innerText="ATTRACTION"
        imageSrc.src="attraction.png"
        result_description.innerHTML="Your inner power is attraction. You can work with anyone. Everyone feels excited around you and want to hang out with you. Share this if it's accurate!"
        quote_to_share = "My inner power is attraction! What is yours?"
    }
}

(async function update_UI(){
    await getResult();
    resultPage.classList.remove("hidden");
    loader.classList.add("hidden");
})();

function postToFeed() {
    var obj = {
      method: 'share',
      href:'https://www.quizaboutyou.com/innerpower/game.html',
      quote: quote_to_share
    };
     FB.ui(obj);
}

function mode(arr) {
    var numMapping = {};
    var greatestFreq = 0;
    var mode;
    arr.forEach(function findMode(number) {
        numMapping[number] = (numMapping[number] || 0) + 1;

        if (greatestFreq < numMapping[number]) {
            greatestFreq = numMapping[number];
            mode = number;
        }
    });
    return +mode;
}