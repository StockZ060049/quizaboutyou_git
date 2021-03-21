const resultPage = document.getElementById("result");
const array_test=[1,2,3,4,5];
const username = document.getElementById('username');
let imageSrc=document.getElementById('image');
const answers=JSON.parse(localStorage.getItem('answers'));
const result = document.getElementById("result");
const result_description = document.getElementById("result description");
var quote_to_share="This is an interesting quiz. I think you should take a look!";

function getResult()
{
    var most_frequent=mode(answers);
    if (most_frequent===1)
    {
        result.innerText="Nothing To Worry"; 
        imageSrc.src="nochance.png"
        result_description.innerHTML="There is nothing you need to worry in your relationship. You partner is loyal and you both are having a great time!";
    }
    if (most_frequent===2)
    {
        result.innerText="Solid And Strong"
        imageSrc.src="solid.png"
        result_description.innerHTML="You have a great partner. Your relationship is solid. You are right to worry as we all are. But there is nothing there";
    }
    
    if (most_frequent===3)
    {
        result.innerText="Spend More Time"
        imageSrc.src="spendmoretime.png"  
        result_description.innerHTML="It's hard to say at this stage. But it's good to be careful. You wanna spend more time with your partner. relationship needs nurtured"
    }
    
    if (most_frequent===4)
    {
        result.innerText="Something's Up"
        imageSrc.src="cheat.png"
        result_description.innerHTML="There is a 30% chance your partner is talking to somebody else. Probably worth to take this quiz again to be sure. Or get more evidences"
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
      href:'https://www.quizaboutyou.com/partnertest/game.html',
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