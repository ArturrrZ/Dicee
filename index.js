var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6+1);
var image1=document.querySelector('.img1').setAttribute("src",`images/dice${randomNumber1}.png`);
var image2=document.querySelector('.img2').setAttribute("src",`images/dice${randomNumber2}.png`);
// text
var resultString=document.querySelector("h1");
// comparison
if (randomNumber1 > randomNumber2) {resultString.innerHTML="<strong>Player 1 Wins!</strong>"}
else if (randomNumber1 < randomNumber2) {resultString.innerHTML="Player 2 Wins!"}
else {resultString.textContent="DRAW :| "};


