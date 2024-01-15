var rn1=(Math.random()*6)+1;

if (Math.floor(rn1)==1){
    document.querySelector(".img1").src="images/dice1.png";
    }
    else if(Math.floor(rn1)==2){
        document.querySelector("img").src="images/dice2.png";
    }
    else if(Math.floor(rn1)==3){
        document.querySelector("img").src="images/dice3.png";
    }
    else if(Math.floor(rn1)==4){
        document.querySelector("img").src="images/dice4.png";
    }
    else if(Math.floor(rn1)==5){
        document.querySelector("img").src="images/dice5.png";
    }
    else if(Math.floor(rn1)==6){
        document.querySelector("img").src="images/dice6.png";
    }

var rn2=(Math.random()*6)+1;

    if (Math.floor(rn2)==1){
        document.querySelector(".img2").src="images/dice1.png";
        }
        else if(Math.floor(rn2)==2){
            document.querySelector(".img2").src="images/dice2.png";
        }
        else if(Math.floor(rn2)==3){
            document.querySelector(".img2").src="images/dice3.png";
        }
        else if(Math.floor(rn2)==4){
            document.querySelector(".img2").src="images/dice4.png";
        }
        else if(Math.floor(rn2)==5){
            document.querySelector(".img2").src="images/dice5.png";
        }
        else if(Math.floor(rn2)==6){
            document.querySelector(".img2").src="images/dice6.png";
        }

if (rn1>rn2){
document.querySelector("h1").innerHTML="&#128681 player 1 wins";
}
else if(rn1<rn2){
    document.querySelector("h1").innerHTML=" player 2 wins &#128681";
}
else{
    document.querySelector("h1").innerHTML=" Draws";
}