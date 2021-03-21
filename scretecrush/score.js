const resultPage = document.getElementById("result");
const username = document.getElementById('username');
let imageSrc=document.getElementById('image');
const answers=JSON.parse(localStorage.getItem('answers'));
const result = document.getElementById("result");
const result_description = document.getElementById("result description");
var quote_to_share = "This is a fun quiz. Try this yourself";

function getResult()
{
  var most_frequent=mode(answers);
    if (most_frequent===1)
    {
        result.innerText="Of Course"; 
        imageSrc.src="love.png"
        result_description.innerHTML="Your secrete crush obviously likes you. Someone will break ice. Let it happen naturally. Share this to a friend if you like this quiz!";
    }
    if (most_frequent===2)
    {
        result.innerText="Vague Feeling"
        imageSrc.src="guess.png"
        result_description.innerHTML="You screte crush likes you. But they may not realize it themselves. Just let it be for now and see what happens. Share this to a friend if you like this quiz!";
    }
    
    if (most_frequent===3)
    {
        result.innerText="Somewhat Yes"
        imageSrc.src="crush.png"  
        result_description.innerHTML="Your secrete love definitely thinks about you. But they are not sure if this is friendship or love. Guess we will wait and see. Share this to a friend if you like this quiz!"
    }
    
    if (most_frequent===4)
    {
        result.innerText="Friend Zone"
        imageSrc.src="friend.png"
        result_description.innerHTML="Right now this feeels like a friend situation. Probably both you and that person is not sure. But who knows things change in a split second. Share this to a friend if you like this quiz!"
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
      href:'https://www.quizaboutyou.com/secrete-crush/game.html',
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