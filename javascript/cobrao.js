let lastRenderTime = 0
const cobra_velocidade = 5 //velocidade do jogo(cobra)
const GRID_SIZE = 21

const corpoCobra= [{ x: 11, y: 11 }]
let direçaoInput = { x: 0, y: 0 }

let comida = getPosiçaoAleatoriaComida()

const expansao_rate = 1
let newSegment = 0
let ultimaDireçaoInput = { x: 0, y: 0 }

let gameOver = false

const gameBoard = document.getElementById('jogo-cobra')



function updateCobra(){
    addSegments()
    const direçaoInput = getDireçaoInput()
    for (let i = corpoCobra.length - 2; i >= 0; i--) {
        corpoCobra[i + 1] = { ...corpoCobra[i] }
      }
    
      corpoCobra[0].x += direçaoInput.x //quantidade de quadrados que a cobra vai se mexer por segundo na horizontal
      corpoCobra[0].y += direçaoInput.y //quantidade de quadrados que a cobra vai se mexer por segundo na vertical

//função para a atualização da cobra(para ela se mexer)
} 




function drawnComida(gameBoard){
        const elementComida = document.createElement('div')
        elementComida.style.gridRowStart = comida.x
        elementComida.style.gridColumnStart = comida.y
        elementComida.classList.add('comida')
        gameBoard.appendChild(elementComida)

//função para o desenho da comida da cobra
} 

function updateComida() {
    if (onCobra(comida)){
        expandirCobra(expansao_rate)
        comida = getPosiçaoAleatoriaComida()       
    }
}

function expandirCobra(amount){
    newSegment += amount
}

function outsideGrid(position) {
    return(
        position.x < 1 || position.x > GRID_SIZE ||
        position.y < 1 || position.y > GRID_SIZE
    )
}

function getCabçaDaCobra() {
 return corpoCobra[0]
}

function interseiçaoDaCobra() {
    return onCobra(corpoCobra[0], {ignoreHead:true})
}

function drawnCobra(gameBoard){
    corpoCobra.forEach(segment => {
        const elementoDaCobra = document.createElement('div')
        elementoDaCobra.style.gridRowStart = segment.x
        elementoDaCobra.style.gridColumnStart = segment.y
        elementoDaCobra.classList.add('cobra')
        gameBoard.appendChild(elementoDaCobra)
    });

//função para o desenho da cobra

} 

function onCobra(position, {ignoreHead = false} = {}) {
    return corpoCobra.some((segment, index) =>{
        if (ignoreHead && index === 0) return false
      return posiçoesEguais(segment, position)
    })
}

function posiçoesEguais(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}


function addSegments() {
    for (let i=0; i< newSegment; i++){
        corpoCobra.push({...corpoCobra[corpoCobra.length - 1]})
    }
    newSegment = 0
}

 function randomGridPosition() {
return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1
}
}

function getPosiçaoAleatoriaComida() {
let newposiçaoComida
while (newposiçaoComida == null || onCobra(newposiçaoComida)){
    newposiçaoComida = randomGridPosition()
}
return newposiçaoComida
}

function getDireçaoInput() {
 ultimaDireçaoInput = direçaoInput //serve para consertar o bug de a cobra poder dar ré(no jogo da cobra isso não existe)
    return direçaoInput
}

function main(currentTime){
    if (gameOver) {
        if (confirm('Você perdeu, aperte OK para recomeçar.')) {
            window.location = './jogo_da_cobra.html	'
        }
        return 
    } 
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime- lastRenderTime)/1000
    if(secondsSinceLastRender < 1 / cobra_velocidade) return 
   
//função para calcular o tempo e movimento do jogo
    lastRenderTime = currentTime
    
    update()
    draw()
}

window.requestAnimationFrame(main)


window.addEventListener('keydown', e =>{
    switch (e.key) {
//seção de comando que faz apertar as setas do teclado para fazer a cobra movimentar
        case 'ArrowUp':
            if (ultimaDireçaoInput.x !==0)break
            direçaoInput = { x: -1, y: 0}
              break

        case 'ArrowDown':
            if (ultimaDireçaoInput.x !==0)break
            direçaoInput = { x: 1, y: 0}
              break

        case 'ArrowLeft':
            if (ultimaDireçaoInput.y !==0)break
            direçaoInput = { x: 0, y: -1}
              break

        case 'ArrowRight':
            if (ultimaDireçaoInput.y !==0)break
            direçaoInput = { x: 0, y: 1}
              break
}
})




function update(){
updateCobra()
updateComida()
cheacarDerrota()
}

function draw(){
gameBoard.innerHTML =' '    
drawnCobra(gameBoard)
drawnComida(gameBoard)
}

function cheacarDerrota() {
    gameOver = outsideGrid(getCabçaDaCobra()) || interseiçaoDaCobra()
  }