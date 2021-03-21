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
    if (answers[1]==='1')
    {
        result.innerText="Competitive pragmatist!"; 
        imageSrc.src="pragmatist.png"
        result_description.innerHTML="You are very pragmatic. You understand how the world works and rules around it. You will do whatever it takes to ensure you and your loved ones are living a good life!";
        quote_to_share="I am a pragatist! What about you?"
    }
    if (answers[1]==='2')
    {
        result.innerText="Idealist!"
        imageSrc.src="idealist.png"
        result_description.innerHTML="You know how things work in real life but at the same time, you want things to work the right way. You believe in ideals but also take actions to what you think is right!";
        quote_to_share="I am a idealist! I want things to be right in this world. What about you?"
    }
    
    if (answers[1]==='3')
    {
        result.innerText="Pragmatist"
        imageSrc.src="real.png"  
        result_description.innerHTML="You do whatever it takes to win. But you also know the boundaries. The world needs people like you to innovate and move forward. You always do the right things and maximize efficiency"
        quote_to_share="I am a pragamtic person with strong values! I do what's best for my loved ones but also fight for what I think is right. What about you?"
    }
    
    if (answers[1]==='4')
    {
        result.innerText="Real And Hopeful"
        imageSrc.src="hopeful.png"
        result_description.innerHTML="You are very down to earth but not losing hope to your dreams either. You understand the power of action and will do the right things"
        quote_to_share="I am the perfect combination between pragmatist and idealist! I keep my hopes high but also able to deal with the real world with easy. What about you?"
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
      href:'https://www.quizaboutyou.com/pragmatic/game.html',
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