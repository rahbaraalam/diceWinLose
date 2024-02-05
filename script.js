var randomnumber1 = Math.floor(Math.random()*6)+1
var randomimg1 ="dice"+randomnumber1+".png"

// images/dice1.png
var setatt = document.querySelector(".img1").setAttribute("src",randomimg1)

var randomnumber2 = Math.floor(Math.random()*6)+1
var randomimg2 ="dice"+randomnumber2+".png"
var setatt2 = document.querySelector(".img2").setAttribute("src",randomimg2)

if(randomnumber1 >randomnumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!!"
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!!🚩"
}
else{
    document.querySelector("h1").innerHTML="Draw!!"
}