let lastRenderTime = 0
const cobra_velocidade = 5 //velocidade do jogo(cobra)
const GRID_SIZE = 21

const corpoCobra= [{ x: 11, y: 11 }]
let direçaoInput = { x: 0, y: 0 }

let comida = getPosiçaoAleatoriaComida()

const expansao_rate = 1
let newSegment = 0
let ultimaDireçaoInput = { x: 0, y: 0 }

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

function onCobra(position){
    return corpoCobra.some(segment =>{
      return posiçoesEguais(segment, position)
    })
}

function posiçoesEguais(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function main(currentTime){
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime- lastRenderTime)/1000
    if(secondsSinceLastRender < 1 / cobra_velocidade) return 
   
//função para calcular o tempo e movimento do jogo
    lastRenderTime = currentTime
    
    update()
    draw()
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

function getDireçaoInput() {
 ultimaDireçaoInput = direçaoInput //serve para consertar o bug de a cobra poder dar ré(no jogo da cobra isso não existe)
    return direçaoInput
}

function update(){
updateCobra()
updateComida()
}

function draw(){
gameBoard.innerHTML =' '    
drawnCobra(gameBoard)
drawnComida(gameBoard)
}