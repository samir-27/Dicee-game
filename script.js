var randomenum1 = Math.floor(Math.random() * 6) +1;
var randomediceimg = "dice" + randomenum1 +".png";
var randomeimgsrc= "/images/" +randomediceimg ;
var img1= document.querySelectorAll("img")[0];
img1.setAttribute("src",randomeimgsrc);


var randomenum2 = Math.floor(Math.random() * 6) +1;
var randomediceimg2 = "dice" + randomenum2 +".png";
var randomeimgsrc2= "/images/" +randomediceimg2 ;
document.querySelectorAll("img")[1].setAttribute("src",randomeimgsrc2);


if (randomenum1 > randomenum2) {
    document.querySelector("h1").innerHTML="Player 1 Win";
}
else if (randomenum2 > randomenum1) {
    document.querySelector("h1").innerHTML="Player 2 Win";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}