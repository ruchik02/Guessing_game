let computerGuess;
let userGuess = [];
let userOutputGuess = document.getElementById("text-output");
let userNumberUpdate = document.getElementById("input-box");

const init = () => {
  computerGuess = Math.floor(Math.random() * 100 + 1);
  //console.log(computerGuess);
  document.getElementById("new-game-button").style.display = "none";
  document.getElementById("game-area").style.display = "none";
};

const startGame = () => {
  document.getElementById("welcome-screen").style.display = "none";
  document.getElementById("game-area").style.display = "block";
};

/**
 * reload the page when user click on newgame button
 */

const newGameBegin = () => {
  window.location.reload();
};

/**
 * button to create a new game & make input field disabled
 */

const startNewGame = () => {
  document.getElementById("new-game-button").style.display = "inline";
  userNumberUpdate.setAttribute("disabled", true);
};

/**
 * main logic of our app
 */
const compareGuess = () => {
  let userNumber = Number(document.getElementById("input-box").value);
  userGuess = [...userGuess, userNumber];
  document.getElementById("guesses").innerHTML = userGuess;
  console.log(userGuess);

  /**
   * check if the guessNumber is low hight or correct
   */
  if (userGuess.length < maxGuess) {
    if (userNumber > computerGuess) {
      userOutputGuess.innerHTML = "Your guess is High";
      userNumberUpdate.value = "";
    } else if (userNumber < computerGuess) {
      userOutputGuess.innerHTML = "Your guess is Low ➡";
      userNumberUpdate.value = "";
    } else {
      userOutputGuess.innerHTML = "It's Correct😀";
      userNumberUpdate.value = "";
      startNewGame();
    }
  } else {
    if (userNumber > computerGuess) {
      userOutputGuess.innerHTML = `You Loose!! Correct number was ${computerGuess}`;
      userNumberUpdate.value = "";
      startNewGame();
    } else if (userNumber < computerGuess) {
      userOutputGuess.innerHTML = `You Loose!! Correct number was ${computerGuess}`;
      userNumberUpdate.value = "";
      startNewGame();
    } else {
      userOutputGuess.innerHTML = "It's Correct😀";
      userNumberUpdate.value = "";
      startNewGame();
    }
  }

  /**
   * show the previous attempts number
   */
  document.getElementById("attempts").innerHTML = userGuess.length;
};

const easyMode = () => {
  maxGuess = 10;
  startGame();
};

const hardMode = () => {
  maxGuess = 5;
  startGame();
};