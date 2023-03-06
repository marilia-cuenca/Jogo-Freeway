const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetButton = document.querySelector("#resetButton");
const ator = document.querySelector("#ator");
const carro1 = document.querySelector("#carro1");
const carro2 = document.querySelector("#carro2");
const carro3 = document.querySelector("#carro3");
const carro4 = document.querySelector("#carro4");
const carro5 = document.querySelector("#carro5");
const carro6 = document.querySelector("#carro6");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const teclado = {
    cima: false,
    baixo: false,
    esquerda: false,
    direita: false
}

//carregar sons
let colidiu = new Audio();
let pontos = new Audio();
let trilha = new Audio();

colidiu.src = "sons/colidiu.mp3"
pontos.src = "sons/pontos.wav"
trilha.src = "sons/trilha.mp3"

let atorX = gameWidth / 2;
let atorY = gameHeight / 2;

resetButton.addEventListener("click", resetGame);

comecarJogo();

function comecarJogo() {
    pontuacao = 0;

    ator = {
        position: relative,
        width: 60,
        bottom: 0,
        right: 650,

    }

};

//criar o placar
let placar = 0;

//controlando o ator
let a;

document.addEventListener("keydown", direction);

function moverAtor(event) {
    let key = event.keyCode;
    if (key == 37 && a != "RIGHT") {
        a = "LEFT";
    } else if (key == 38 && a != "DOWN") {
        a = "UP";
    } else if (key == 39 && a != "LEFT") {
        a = "RIGHT";
    } else if (key == 40 && a != "UP") {
        a = "DOWN";
    }
}

function resetGame() {
    pontuacao = 0;

    ator = {
        position: relative,
        width: 60,
        bottom: 0,
        right: 650,

    }

    atualizarPontuacao();
    clearInterval(intervalID);
    comecarJogo();

};