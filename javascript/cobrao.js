let lastRenderTime = 0
const cobra_velocidade = 1 //velocidade do jogo(cobra)

const corpoCobra= [
    { x: 10, y: 10 },
    { x: 11, y: 10 },
    { x: 12, y: 10 },
    { x: 13, y: 10 },
    { x: 14, y: 10 }
]

const gameBoard = document.getElementById('jogo-cobra')

function updateCobra(){
    for (let i = corpoCobra.length - 2; i >= 0; i--) {
        corpoCobra[i + 1] = { ...corpoCobra[i] }
      }
    
      corpoCobra[0].x += 0 //quantidade de quadrados que a cobra vai se mexer por segundo na horizontal
      corpoCobra[0].y += 1 //quantidade de quadrados que a cobra vai se mexer por segundo na vertical

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


function main(currentTime){//função para calcular o tempo e movimento do jogo
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime- lastRenderTime)/1000
    if(secondsSinceLastRender < 1 / cobra_velocidade) return 
   

    lastRenderTime = currentTime
    
    update()
    draw()
}

window.requestAnimationFrame(main)


function update(){
updateCobra()
}

function draw(){
gameBoard.innerHTML =' '    
drawnCobra(gameBoard)
}