let lastRenderTime = 0
const cobra_velocidade = 2 //velocidade do jogo(cobra)
let ultimaDireçaoInput = { x: 0, y: 0 }
const corpoCobra= [
    { x: 11, y: 11 }
]

const gameBoard = document.getElementById('jogo-cobra')


function updateCobra(){
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


function main(currentTime){
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime- lastRenderTime)/1000
    if(secondsSinceLastRender < 1 / cobra_velocidade) return 
   
//função para calcular o tempo e movimento do jogo
    lastRenderTime = currentTime
    
    update()
    draw()
}

window.requestAnimationFrame(main)


let direçaoInput = { x: 0, y: 0 }

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
}

function draw(){
gameBoard.innerHTML =' '    
drawnCobra(gameBoard)
}