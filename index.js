// initialize the elements
let computerGuess;
let userGuess=[];
let userOutputGuess = document.getElementById("text-output");
let userNumberUpdate = document.getElementById("input-box");
let audio=new Audio('./audio/1.mp3');
// init function
const init=()=>{
    computerGuess=Math.floor(Math.random() * 100 + 1);
    // console.log(computerGuess);
    document.getElementById("new-game-button").style.display="none";
    document.getElementById("game-area").style.display="none";
};
// start game function
const startGame=()=>{
    document.getElementById("welcome-screen").style.display="none"
    document.getElementById("game-area").style.display="block";
}
// new game
const startNewGame=()=>{
    document.getElementById("new-game-button").style.display="inline";
    userNumberUpdate.setAttribute("disabled",true);
}
// reload the page
const newGameBegin=()=>{
    audio.play();
    window.location.reload();
}

// main logic of our app
const compareGuess=()=>{
    audio.play();
    const userNumber=Number(document.getElementById("input-box").value);
    userGuess=[...userGuess,userNumber];
    document.getElementById("guesses").innerHTML=userGuess;
    console.log(userGuess);
    // check if the guessNumber is low hight or correct
    if(userGuess.length<maxGuess){
    if(userNumber>computerGuess){
        userOutputGuess.innerHTML="Your Guess is High 😲";
        userNumberUpdate.value="";
    }else if(userNumber<computerGuess){
        userOutputGuess.innerHTML="Your Guess is Low 😔";
        userNumberUpdate.value="";

    }else {
        userOutputGuess.innerHTML="It's Correct 😄";
        userNumberUpdate.value="";
        startNewGame();
    }
}else{
    if(userNumber>computerGuess){
        userOutputGuess.innerHTML=`You Loose!! Correct Number was ${computerGuess}`;
        userNumberUpdate.value="";
        startNewGame();
    }else if(userNumber<computerGuess){
        userOutputGuess.innerHTML=`You Loose!! Correct Number was ${computerGuess}`;
        userNumberUpdate.value="";
        startNewGame();
    }else {
        userOutputGuess.innerHTML="It's Correct 😄";
        userNumberUpdate.value="";
        startNewGame();
    }

}
    // show the number of attempts
    document.getElementById('attempts').innerHTML=userGuess.length;
}
const easyMode=()=>{
    audio.play();
    maxGuess=10;
    startGame();
}
const hardMode=()=>{
    audio.play();
    maxGuess=5;
    startGame();
}
// init();