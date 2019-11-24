//tolov
var isGameNew = true;
// Toglogchiin eeeljiig hadgalah huvisagch
var activePlayer = 0;
//toglogvhiin tsugluulsan onoo
var playerScores = [0, 0];
//toglogchiin eeljindee tsugluulsan onooo
var roundScore = 0;
//shoonii buuj baiga talig hadgalna
var dice = 0;
//css luu DOM-r handah
var diceD = document.querySelector(".dice");
diceD.style.display = "none";
start();

function start() {
  isGameNew = true;

  activePlayer = 0;
  playerScores = [0, 0];
  roundScore = 0;

  document.getElementById("score-0").innerHTML = 0;
  document.getElementById("score-1").innerHTML = 0;
  document.getElementById("current-0").innerHTML = 0;
  document.getElementById("current-1").innerHTML = 0;

  document.getElementById("name-0").innerHTML = "Тоглогч 1";
  document.getElementById("name-1").innerHTML = "Тоглогч 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector(".player-1-panel").classList.remove("active");
}

//roll button ajiluulav by event
document.querySelector(".btn-roll").addEventListener("click", function() {
  if (isGameNew) {
    //toog randomoor buulgah
    dice = Math.floor(Math.random() * 6) + 1;
    //shoog delgetsend gargaj ireh
    diceD.style.display = "block";
    //buusan nudtei zurgiig gargaj ireh
    diceD.src = "dice-" + dice + ".png";
    if (dice !== 1) {
      roundScore += dice;
      document.getElementById("current-" + activePlayer).innerHTML = roundScore;
    } else {
      switchPlayer();
    }
  }
});
function switchPlayer() {
  //zurgiig tur alga bolgoh
  diceD.style.display = "none";
  //current-g 0 bolgoh
  document.getElementById("current-" + activePlayer).innerHTML = 0;
  roundScore = 0;
  //ideh=vhtei toglogchiig shiljuuuleh
  activePlayer == 1 ? (activePlayer = 0) : (activePlayer = 1);
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}

//hold tovchiig ajilluulah using anonymous function type
document.querySelector(".btn-hold").addEventListener("click", function() {
  if (isGameNew) {
    //roundScore-g player score luu nemej delgetsend haruulah
    playerScores[activePlayer] += roundScore;
    document.getElementById("score-" + activePlayer).innerHTML =
      playerScores[activePlayer];
    if (playerScores[activePlayer] >= 100) {
      isGameNew = false;
      document.getElementById("name-" + activePlayer).innerHTML = "Ялагч!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .getElementById("name-" + activePlayer)
        .classList.remove("active");
    } else switchPlayer();
  }
});

document.querySelector(".btn-new").addEventListener("click", start);
