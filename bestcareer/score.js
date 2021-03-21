const resultPage = document.getElementById("result");
const array_test=[1,2,3,4,5];
const username = document.getElementById('username');
let imageSrc=document.getElementById('image');
const answers=JSON.parse(localStorage.getItem('answers'));


const result = document.getElementById("result");
const result_description = document.getElementById("result description");
var quote_to_share;

function getResult()
{
  var most_frequent=mode(answers);
  console.log(most_frequent);
    if (most_frequent===1)
    {
        result.innerText="Influencer"; 
        imageSrc.src="influencer.png"
        result_description.innerHTML="Actor, actress, public speaker, diplomat, movie producer. You are energetic and fun. You can easily influence people around you! Share this if it's accurate!";
        quote_to_share="This is so true. Best careers for me are actor, actress, public speaker, diplomat, movie producer. What's the best career for you?"
    }
    if (most_frequent===2)
    {
        result.innerText="Creator"
        imageSrc.src="creator.png"
        result_description.innerHTML="Engineer, architect, deal maker, laywer, software developer. You can simply make things happen, whether it's technical work or deals or law suits. You can put things together quickly and make it work. Share this if it's accurate!"
        quote_to_share="This is so true. Best careers for me are engineer, architect, deal maker, laywer, software developer. What's the best career for you?"
    }
    
    if (most_frequent===3)
    {
        result.innerText="Innovator"
        imageSrc.src="innovator.png"  
        result_description.innerHTML="Song writer, marketer, movie writer, professional gamer, inventor. Creativity is your last name. You can make anything better. You look at the world in a different way than others. Share this if it's accurate!"
        quote_to_share="This is so true. Best careers for me are song writer, marketer, movie writer, professional gamer, inventor. What's the best career for you?"
    }
    
    if (most_frequent===4)
    {
        result.innerText="Thinker"
        imageSrc.src="thinker.png"
        result_description.innerHTML="Detective, commander, professional investor, venture capitalist. You are independent and strong. You don't get easily affected by noises and you always have an opinion! Share this if it's accurate!"
        quote_to_share="This is so true. Best careers for me are etective, commander, professional investor, venture capitalist. What's the best career for you?"
    }
};

(async function update_UI(){
    await getResult();
    resultPage.classList.remove("hidden");
    loader.classList.add("hidden");
})();

function postToFeed() {
    var obj = {
      method: 'share',
      href:'https://www.quizaboutyou.com/bestcareer/game.html',
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