var random = Math.floor(Math.random()*6)+1;
var texting="images/dice-"+random+".jpeg";
var images1=document.querySelectorAll("img")[0];
images1.setAttribute("src",texting);

var random2 = Math.floor(Math.random()*6)+1;
var texting2="images/dice-"+random2+".jpeg";
var images2=document.querySelectorAll("img")[1];
images2.setAttribute("src",texting2);
document.querySelector("h1").innerHTML="draw";
if(random>random2){
	document.querySelector("h1").innerHTML="&#10004;Player1 won";
}
else if (random2>random) {

		document.querySelector("h1").innerHTML="&#10004;Player2 won";
}

else{
	document.querySelector("h1")=" &#x1F91D;DRAW";
		}