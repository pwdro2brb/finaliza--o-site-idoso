const moves = document.getElementById("contador-movimento")
const valorTempo = document.getElementById("time")
const botaoComeçar = document.getElementById("start")
const botaoParar = document.getElementById("pare")
const containerJogo =  document.querySelector(".game-container")
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
    {name: "cavalo", image: "cavalo.jpg"},
    {name: "vibora", image: "cobra.jpg"},
    {name: "cruz", image: "cruz.png"},
    {name: "escola", image: "ecoola.jpg"},
    {name: "leao", image: "leon.jpg"},
    {name: "peixe", image: "peixe.jpg"},
    {name: "aviao", image: "plane.jpg"},
    {name: "vaca", image: "vaca.png"}
]

//time inicial
let seconds = 0
  minutes = 0

// movimentos iniciais e contagem de vitórias
let contadorMovimentos = 0
  contagemVitoria = 0

// for time
const geradorTempo = () =>{
    seconds+=1

    //logica dos minutos
    if (seconds >= 60){
        minutes += 1
        seconds = 0
    }

//formato do time de mostrar na tela
let valorSegundos = seconds < 10 ? `0${seconds}` : seconds;
let valorMinutos = minutes < 10 ? `0${minutes}` : minutes;
valorTempo.innerHTML = `<span>Tempo:</span>${valorMinutos}:${valorSegundos}`
}

//for calculando movimentos
const contadorMov = () =>{
    contadorMovimentos += 1
    moves.innerHTML = `<span>Movimentos:</span>${contadorMovimentos}`
}

//pegar um objeto aleatório no array de item 
const gerarRandom = (size = 4) =>{

    //array timerário
    let arrayTemp = [...itens]

    //inicializa o array do valor da carta 
    let valorCartas = []

    //O tamanho deve ser o dobro (4*4 matrix)/2 estes pares de objetos devem existir
    size = (size*size) / 2

    //seletor de um objeto aleátorio
    for (let i = 0; i < size; i++){
        const indexAleatorio = Math.floor(Math.random() * arrayTemp.length)
        valorCartas.push(arrayTemp[indexAleatorio])

        //uma vez selecionado remove o objeto do array timerário
        arrayTemp.splice(indexAleatorio, 1)
    }
    return valorCartas
}

const geradorMatrix = (valorCartas, size = 4) => {
    containerJogo.innerHTML = ""
    valorCartas = [...valorCartas, ...valorCartas]

    //simples embaralhamento
    valorCartas.sort(() => Math.random() - 0,5)
    for(let i=0; i<size*size;i++){
containerJogo.innerHTML += `
<div class="container-carta" data-card-value="${valorCartas[i].name}">
<div class="carta-depois">?</div>
<div class="carta-antes"> <img src="./imagens_jogo_da_memória/${valorCartas[i].image}" class="imagem">
</div>
</div>
`;
    }
    //grid
    containerJogo.style.gridTemplateColumns = `repeat(4,auto)`


    //cartas
    cartas = document.querySelectorAll(".container-carta")
    cartas.forEach((carta) =>{
        carta.addEventListener("click", () =>{
            //Se as cartas selecionadas não forem iguais
            if(!carta.classList.contains("matched")){
                //vira a carta
                carta.classList.add("flipped")
                //se for a 1º carta que é dado inicialmente como falso por causa de (!primeira-carta)
                if(!primeiraCarta){
                    //A carta atual torna-se a primeira carta
                    primeiraCarta = carta
                    //O valor atual da carta se torna o primeiro valor da Carta
                    primeiroValorCarta = carta.getAttribute("data-card-value")
                }  else{
                    //incrementa movimentos para o usuário selecionar a segunda carta
                    contadorMov()
                    //segunda carta e valor
                    segundaCarta = carta
                    let valorSegundaCarta = carta.getAttribute("data-card-value")
                    if (primeiroValorCarta == valorSegundaCarta){
                        //se as duas cartas forem iguais elas serão ignoradas na próxima vez
                        primeiraCarta.classList.add("matched")
                        segundaCarta.classList.add("matched")
                        //adiciona a primeiraCarta para falso, agora a próxima carta será a primeira
                        primeiraCarta = false
                        //dá um incremento na contagem de vitória se o usuário está correto
                        contagemVitoria += 1
                        //checa se a quantidade de vitórias ==metade dos valores de cartas
                        if (contagemVitoria == Math.floor(valorCartas.lenght / 2)){
                            resul.innerHTML = `<h2>Você venceu!!!</h2> <h4>Quantidade de movimentos: ${contadorMovimentos}</h4>`
                            paraJogo()
                        }
                    }else{
                        //Se a carta não é igual
                        //Vira ela de volta ao normal
                        let [timePrimeiro, timeSegundo] = [primeiraCarta, segundaCarta]
                        primeiraCarta = false
                        segundaCarta = false
                        let delay = setTimeout(() => {
                           timePrimeiro.classList.remove("flipped")
                           timeSegundo.classList.remove("flipped")
                        }, 900)
                    }
                }
            }
        })
    })
}

//inicia o jogo
botaoComeçar.addEventListener("click", () =>{
    contadorMovimentos = 0
    seconds = 0
    minutes = 0
    //Controles e bottões (visibilidade)
    controles.classList.add("esconda")
    botaoParar.classList.remove("esconda")
    botaoComeçar.classList.add("esconda")
    //começa time
    interval = setInterval(geradorTempo, 1000)
    //primeiros movimentos
    moves.innerHTML = `<span>Movimentos: </span> ${contadorMovimentos}`
    iniciar()
})

//para o jogo
botaoParar.addEventListener(
    "click",( paraJogo = () => {
        controles.classList.remove("esconda")
        botaoParar.classList.add("esconda")
        botaoComeçar.classList.remove("esconda")
        clearInterval(interval)
    })
)

//inicia valores e calculos de funções
const iniciar = () => {
   resul.innerText = ""
   contadorVitoria = 0
   let valorCartas = gerarRandom()
   console.log(valorCartas)
   geradorMatrix(valorCartas)
}