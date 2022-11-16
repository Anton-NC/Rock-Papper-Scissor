function choice(playernumber) {

    let choices = ["", "sten.jpg", "sax.jpg", "påse.jpg"];
    let enemyRan = 1 + Math.floor(Math.random() * 3);
    document.getElementById("computer").src = choices[enemyRan]
    document.getElementById("player").src = choices[playernumber]
    if(enemyRan == 1 && playernumber == 2 || enemyRan == 2 && playernumber ==3 || enemyRan == 3 && playernumber == 1){
        document.getElementById("game").style.borderColor="red";
        document.getElementById("score").innerHTML = "You lose";
    }
    
    else if(enemyRan == playernumber) {
        document.getElementById("game").style.borderColor="yellow";
        document.getElementById("score").innerHTML = "You tied";
    }
    else {
        document.getElementById("game").style.borderColor="green";
        document.getElementById("score").innerHTML = "You win";

    }


    

}