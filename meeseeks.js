let currMeeseeksPortal;
let currSrpopoPortal;
let score = 0;
let gameOver = false;
window.onload = function () {
  setGame();
};

function setGame() {
  for (let i = 0; i < 9; i++) {
    let portal = document.createElement("div");
    portal.id = i.toString();
    portal.addEventListener("click", selectPortal);
    document.getElementById("board").appendChild(portal);
  }

  setInterval(setMeeseeks, 1000);
  setInterval(setSrpopo, 2000);
}

function getRandomPortal() {
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

function setMeeseeks() {
  if (gameOver) {
    return;
  }
  if (currMeeseeksPortal) {
    currMeeseeksPortal.innerHTML = "";
  }
  let meeseeks = document.createElement("img");
  meeseeks.src = "./imgs/Mr-Meeseeks.png";
  let num = getRandomPortal();
  if (currSrpopoPortal && currSrpopoPortal.id == num) {
    return;
  }
  currMeeseeksPortal = document.getElementById(num);
  currMeeseeksPortal.appendChild(meeseeks);
}

function setSrpopo() {
  if (gameOver) {
    return;
  }
  if (currSrpopoPortal) {
    currSrpopoPortal.innerHTML = "";
  }

  let Srpopo = document.createElement("img");
  Srpopo.src = "./imgs/sr-pantalones-de-popo.png";
  let num = getRandomPortal();
  if (currMeeseeksPortal && currMeeseeksPortal.id == num) {
    return;
  }
  currSrpopoPortal = document.getElementById(num);
  currSrpopoPortal.appendChild(Srpopo);
}

function selectPortal() {
  if (gameOver) {
    return;
  }
  if (this == currMeeseeksPortal) {
    score += 10;
    document.getElementById("score").innerText = score.toString();
  } else if (this == currSrpopoPortal) {
    document.getElementById("score").innerText =
      "GAME OVER: " + score.toString();
    gameOver = true;
  }
}
