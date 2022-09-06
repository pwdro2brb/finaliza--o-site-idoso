let lastRenderTime = 0
const cobra_velocidade = 2 //velocidade do jogo(cobra)

function main(currentTime){//função para calcular o tempo e movimento do jogo
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime- lastRenderTime)/1000
    if(secondsSinceLastRender < 1/ cobra_velocidade)return 
   
    console.log("render, ou seja deu certo")
    lastRenderTime = currentTime
    
    update()
    draw()
}

window.requestAnimationFrame(main)

function update(){

}

function drawn(){
    
}