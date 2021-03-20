const resultPage = document.getElementById("result");
const array_test=[1,2,3,4,5];
const username = document.getElementById('username');
let imageSrc=document.getElementById('image');
const answers=JSON.parse(localStorage.getItem('answers'));


const result = document.getElementById("result");
const result_description = document.getElementById("result description");

function getResult()
{
    var sum=0
    for (i=0; i<=answers.length-1; i++)
    {
        sum+=parseInt(answers[i]);
    }
    average=sum/answers.length;
    console.log(answers[4])
    console.log("sum is " + sum + " and average is " + average);
    if (average<=1.75)
    {
        result.innerText="Influencer"; 
        imageSrc.src="influencer.png"
        result_description.innerHTML="Actor, actress, public speaker, diplomat, movie producer. You are energetic and fun. You can easily influence people around you!";
    }
    if (average<=2.5 && average>1.75)
    {
        result.innerText="Creator"
        imageSrc.src="creator.png"
        result_description.innerHTML="Engineer, architect, deal maker, laywer, software developer. You can simply make things happen, whether it's technical work or deals or law suits. You can put things together quickly and make it work"
    }
    
    if (average<=3.25 && average>2.5)
    {
        result.innerText="Innovator"
        imageSrc.src="innovator.png"  
        result_description.innerHTML="Song writer, marketer, movie writer, professional gamer, inventor. Creativity is your last name. You can make anything better. You look at the world in a different way than others"
    }
    
    if (average<=4 && average>3.25)
    {
        result.innerText="Thinker"
        imageSrc.src="thinker.png"
        result_description.innerHTML="Detective, commander, professional investor, venture capitalist. You are independent and strong. You don't get easily affected by noises and you always have an opinion!"
    }



};

(async function update_UI(){
    await getResult();
    resultPage.classList.remove("hidden");
    loader.classList.add("hidden");
})();

function postToFeed() {
    // calling the API ...
    var obj = {
      method: 'share',
      href:'https://www.quizaboutyou.com/bestcareer/game.html',
      quote: "I am the "+result.innerText+". Check out this quiz"
    };
     FB.ui(obj);
     console.log(obj.app_id)
}