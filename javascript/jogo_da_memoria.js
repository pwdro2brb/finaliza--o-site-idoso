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