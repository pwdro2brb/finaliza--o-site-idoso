const moves = document.getElementById("contador-movimento")
const valorTempo = document.getElementById("tempo")
const botaoComeçar = document.getElementById("start")
const containerJogo =  document.querySelector("game-container")
const resul = document.getElementById("resultado")
const controles = document.querySelector(".container-de-controle")
let cartas
let interval
let primeiraCarta = false
let segundaCarta = false

//arrays de itens