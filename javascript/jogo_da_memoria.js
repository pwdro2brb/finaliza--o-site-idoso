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

const itens = [
    {name: "abelha", image: "belha.jpg"},
    {name: "barco", image: "barco.jpg"},
    {name: "bela-imagem", image: "belissima.jpg"},
    {name: "carro", image: "cars.jpg"},
    {name: "cavalo", image: "CAVALO.jpg"},
    {name: "vibora", image: "cobra.jpg"},
    {name: "CRUZ", image: "Cruz.jpg"},
    {name: "escola", image: "ecoola.jpg"},
    {name: "leao", image: "leon.jpg"},
    {name: "peixe", image: "peixe.jpg"},
    {name: "aviao", image: "plane.jpg"},
    {name: "vaca", image: "VACA.jpg"},
]

//tempo inicial

let seconds = 0
  minutes = 0
// movimentos iniciais e contagem de vitórias
let contMovimentaçao = 0
  contagemVitoria = 0
// for tempo
const geradorTempo = () =>{
    seconds+=1
    //logica dos minutos
    if (seconds >= 60){
        minutes += 1
        seconds = 0
    }
//formato do tempo de mostrar na tela
let valorSegundos = seconds < 10 ? `0${seconds}` :
seconds
let valorMinutos = minutes < 10 ? `0${minutes}` :
minutes
valorTempo.innerHTML = `<span>Tempo:</span>${valorMinutos}:${valorSegundos}`
}

//for calculando movimentos
const contadorMovimentos = () =>{
    quantidadeMovimento += 1
    moves.innerHTML = `<span>Movimentos:</span>${quantidadeMovimento}`
}