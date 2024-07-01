// Variables globales
let currMeeseeksPortal;  // Portal actual donde aparece Mr. Meeseeks
let currSrpopoPortal;    // Portal actual donde aparece Sr. Pantalones de Popó
let score = 0;           // Puntuación actual del jugador
let gameOver = false;    // Indicador de si el juego ha terminado

// Función que se ejecuta cuando se carga la ventana
window.onload = function () {
    // Asocia la función startGame al botón de inicio
    document.getElementById("startBtn").addEventListener("click", startGame);
    // Muestra el overlay
    document.getElementById("overlay").style.display = "flex";
};

// Inicia el juego ocultando el overlay y configurando el tablero
function startGame() {
    document.getElementById("overlay").style.display = "none";
    setGame();
}

// Configura el tablero de juego
function setGame() {
    // Crea y añade portales al tablero
    for (let i = 0; i < 9; i++) {
        let portal = document.createElement("div");
        portal.id = i.toString();
        portal.addEventListener("click", selectPortal);
        document.getElementById("board").appendChild(portal);
    }

    // Configura los intervalos para mostrar a Mr. Meeseeks y Sr. Pantalones de Popó
    setInterval(setMeeseeks, 650);
    setInterval(setSrpopo, 800);
}

// Genera un número aleatorio para seleccionar un portal
function getRandomPortal() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

// Muestra a Mr. Meeseeks en un portal aleatorio
function setMeeseeks() {
    if (gameOver) {
        return;
    }
    // Limpia el portal anterior de Mr. Meeseeks
    if (currMeeseeksPortal) {
        currMeeseeksPortal.innerHTML = "";
    }
    // Crea la imagen de Mr. Meeseeks
    let meeseeks = document.createElement("img");
    meeseeks.src = "./imgs/Mr-Meeseeks.png";
    // Selecciona un portal aleatorio
    let num = getRandomPortal();
    // Si Sr. Pantalones de Popó ya está en el portal, no hace nada
    if (currSrpopoPortal && currSrpopoPortal.id === num) {
        return;
    }
    // Asigna el portal a Mr. Meeseeks
    currMeeseeksPortal = document.getElementById(num);
    currMeeseeksPortal.appendChild(meeseeks);
}

// Muestra a Sr. Pantalones de Popó en un portal aleatorio
function setSrpopo() {
    if (gameOver) {
        return;
    }
    // Limpia el portal anterior de Sr. Pantalones de Popó
    if (currSrpopoPortal) {
        currSrpopoPortal.innerHTML = "";
    }

    // Crea la imagen de Sr. Pantalones de Popó
    let Srpopo = document.createElement("img");
    Srpopo.src = "./imgs/sr-pantalones-de-popo.png";
    // Selecciona un portal aleatorio
    let num = getRandomPortal();
    // Si Mr. Meeseeks ya está en el portal, no hace nada
    if (currMeeseeksPortal && currMeeseeksPortal.id === num) {
        return;
    }
    // Asigna el portal a Sr. Pantalones de Popó
    currSrpopoPortal = document.getElementById(num);
    currSrpopoPortal.appendChild(Srpopo);
}

// Maneja la selección de un portal por parte del jugador
function selectPortal() {
    if (gameOver) {
        return;
    }
    // Si el jugador selecciona el portal con Mr. Meeseeks, aumenta la puntuación
    if (this === currMeeseeksPortal) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
    } 
    // Si el jugador selecciona el portal con Sr. Pantalones de Popó, termina el juego
    else if (this === currSrpopoPortal) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}
