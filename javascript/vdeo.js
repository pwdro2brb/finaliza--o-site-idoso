        let containerVideo1 = document.querySelector(".container-video1")
let container1 = document.querySelector(".container1")
let meuVideo1 = document.getElementById("meu-video1")
let containerRodar1 = document.querySelector(".container-rodar1")
let controlesVideos1 = document.querySelector(".controles1")
let botaoPlay1 = document.getElementById("play-btn1")
let botaoPausar1 = document.getElementById("botaoPausar1")
let volume1 = document.getElementById("volume1")
let alcanceVolume1 = document.getElementById("alcance-volume1")
let numeroVolume1 = document.getElementById("numero-volume1")
let alto1 = document.getElementById("alto1")
let baixo1 = document.getElementById("baixo1")
let mute1 = document.getElementById("mute1")
let tamanhoTela1 = document.getElementById("tamanho-tela1")
let screenCompress1 = document.getElementById("screen-compress1")
let expandirTela1 = document.getElementById("expandir-tela1")
const progressoAtual1 = document.getElementById("progresso-atual1")
const referenciaTempoAtual1 = document.getElementById("tempo-atual1")
const duracaoMaxima1 = document.getElementById("duracao-maxima1")
const barraProgresso1 = document.getElementById("barra-progresso1")
const playbackSpeedButton1 = document.getElementById("velocidade-playback-btn1")
const containerPlayback1 = document.querySelector(".playback1")
const playbackSpeedoption1 = document.querySelector(".opcao-playback1")



        let containerVideo2 = document.querySelector(".container-video2")
        let container2 = document.querySelector(".container2")
        let meuVideo2 = document.getElementById("meu-video2")
        let containerRodar2 = document.querySelector(".container-rodar2")
        let controlesVideos2 = document.querySelector(".controles2")
        let botaoPlay2 = document.getElementById("play-btn2")
        let botaoPausar2 = document.getElementById("botaoPausar2")
        let volume2 = document.getElementById("volume2")
        let alcanceVolume2 = document.getElementById("alcance-volume2")
        let numeroVolume2 = document.getElementById("numero-volume2")
        let alto2 = document.getElementById("alto2")
        let baixo2 = document.getElementById("baixo2")
        let mute2 = document.getElementById("mute2")
        let tamanhoTela2 = document.getElementById("tamanho-tela2")
        let screenCompress2 = document.getElementById("screen-compress2")
        let expandirTela2 = document.getElementById("expandir-tela2")
        const progressoAtual2 = document.getElementById("progresso-atual2")
        const referenciaTempoAtual2 = document.getElementById("tempo-atual2")
        const duracaoMaxima2 = document.getElementById("duracao-maxima2")
        const barraProgresso2 = document.getElementById("barra-progresso2")
        const playbackSpeedButton2 = document.getElementById("velocidade-playback-btn2")
        const containerPlayback2 = document.querySelector(".playback2")
        const playbackSpeedoption2 = document.querySelector(".opcao-playback2")
        

        

            let containerVideo3 = document.querySelector(".container-video3")
            let container3 = document.querySelector(".container3")
            let meuVideo3 = document.getElementById("meu-video3")
            let containerRodar3 = document.querySelector(".container-rodar3")
            let controlesVideos3 = document.querySelector(".controles3")
            let botaoPlay3 = document.getElementById("play-btn3")
            let botaoPausar3 = document.getElementById("botaoPausar3")
            let volume3 = document.getElementById("volume3")
            let alcanceVolume3 = document.getElementById("alcance-volume3")
            let numeroVolume3 = document.getElementById("numero-volume3")
            let alto3 = document.getElementById("alto3")
            let baixo3 = document.getElementById("baixo3")
            let mute3 = document.getElementById("mute3")
            let tamanhoTela3 = document.getElementById("tamanho-tela3")
            let screenCompress3 = document.getElementById("screen-compress3")
            let expandirTela3 = document.getElementById("expandir-tela3")
            const progressoAtual3 = document.getElementById("progresso-atual3")
            const referenciaTempoAtual3 = document.getElementById("tempo-atual3")
            const duracaoMaxima3 = document.getElementById("duracao-maxima3")
            const barraProgresso3 = document.getElementById("barra-progresso3")
            const playbackSpeedButton3 = document.getElementById("velocidade-playback-btn3")
            const containerPlayback3 = document.querySelector(".playback3")
            const playbackSpeedoption3 = document.querySelector(".opcao-playback3")


     

function slider1(){
    valPercent = (alcanceVolume1.value / alcanceVolume1.max) * 100;
    alcanceVolume1.style.background = `linear-gradient(to right, #2887e3 ${valPercent}%, #000000 ${valPercent}%)`
}
function slider2(){
    valPercent = (alcanceVolume2.value / alcanceVolume2.max) * 100;
    alcanceVolume2.style.background = `linear-gradient(to right, #2887e3 ${valPercent}%, #000000 ${valPercent}%)`
}
function slider3(){
    valPercent = (alcanceVolume3.value / alcanceVolume3.max) * 100;
    alcanceVolume3.style.background = `linear-gradient(to right, #2887e3 ${valPercent}%, #000000 ${valPercent}%)`
}


let event1 = {
    mouse: {
        click: "click",
    },
    touch: {
        click: "touchstart",
    },
}
let tipoServico1 = "";
const isServicoToque1 = () =>{
    try{
        //Tenta criar um evento de toque(isso vai falhar nos desktops e voltar erro)
        document.createEvent("TouchEvent")
        deviceType = "touch"
        return true
    } catch (e) {
        deviceType = "mouse"
        return false
    }
}


let event2 = {
    mouse: {
        click: "click",
    },
    touch: {
        click: "touchstart",
    },
}
let tipoServico2 = "";
const isServicoToque2 = () =>{
    try{
        //Tenta criar um evento de toque(isso vai falhar nos desktops e voltar erro)
        document.createEvent("TouchEvent")
        deviceType = "touch"
        return true
    } catch (e) {
        deviceType = "mouse"
        return false
    }
}


let event3 = {
    mouse: {
        click: "click",
    },
    touch: {
        click: "touchstart",
    },
}
let tipoServico3 = "";
const isServicoToque3 = () =>{
    try{
        //Tenta criar um evento de toque(isso vai falhar nos desktops e voltar erro)
        document.createEvent("TouchEvent")
        deviceType = "touch"
        return true
    } catch (e) {
        deviceType = "mouse"
        return false
    }
}


//Botão de play(iniciar) e pausa

botaoPlay1.addEventListener("click", () => {
    meuVideo1.play()
    botaoPausar1.classList.remove("esconda")
    botaoPlay1.classList.add("esconda")
})

botaoPausar1.addEventListener(
    "click",
    (pausarVideo1 = () =>{
        meuVideo1.pause()
        botaoPausar1.classList.add("esconda")
        botaoPlay1.classList.remove("esconda")
    })
)


//Botão de play(iniciar) e pausa vídeo 2

botaoPlay2.addEventListener("click", () => {
    meuVideo2.play()
    botaoPausar2.classList.remove("esconda")
    botaoPlay2.classList.add("esconda")
})

botaoPausar2.addEventListener(
    "click",
    (pausarVideo2 = () =>{
        meuVideo2.pause()
        botaoPausar2.classList.add("esconda")
        botaoPlay2.classList.remove("esconda")
    })
)


//Botão de play(iniciar) e pausa vídeo 3

botaoPlay3.addEventListener("click", () => {
    meuVideo3.play()
    botaoPausar3.classList.remove("esconda")
    botaoPlay3.classList.add("esconda")
})

botaoPausar3.addEventListener(
    "click",
    (pausarVideo3 = () =>{
        meuVideo3.pause()
        botaoPausar3.classList.add("esconda")
        botaoPlay3.classList.remove("esconda")
    })
)


//Primeiro playback
playbackSpeedButton1.addEventListener("click", () => {
    playbackSpeedoption1.classList.remove("esconda")
})

//Se o usuário clicar fora ou dentro da opção

window.addEventListener("click", (e) =>{
    if (!containerPlayback1.contains(e.target)) {
        playbackSpeedoption1.classList.add("esconda")
    } else if (playbackSpeedoption1.contains(e.target)) {
        playbackSpeedoption1.classList.add("esconda")
    }
})


//Segundo playback
playbackSpeedButton2.addEventListener("click", () => {
    playbackSpeedoption2.classList.remove("esconda")
})

//Se o usuário clicar fora ou dentro da opção

window.addEventListener("click", (e) =>{
    if (!containerPlayback2.contains(e.target)) {
        playbackSpeedoption2.classList.add("esconda")
    } else if (playbackSpeedoption2.contains(e.target)) {
        playbackSpeedoption2.classList.add("esconda")
    }
})


//Terceiro playback
playbackSpeedButton3.addEventListener("click", () => {
    playbackSpeedoption3.classList.remove("esconda")
})

//Se o usuário clicar fora ou dentro da opção

window.addEventListener("click", (e) =>{
    if (!containerPlayback3.contains(e.target)) {
        playbackSpeedoption3.classList.add("esconda")
    } else if (playbackSpeedoption3.contains(e.target)) {
        playbackSpeedoption3.classList.add("esconda")
    }
})


// Velocidade primeiro playback

const setPlayback1 = (value) => {
    playbackSpeedButton1.innerText = value + "x"
    meuVideo1.playbackRate = value
    
}


// Velocidade segundo playback

const setPlayback2 = (value) => {
    playbackSpeedButton2.innerText = value + "x"
    meuVideo2.playbackRate = value
    
}


// Velocidade terceiro playback

const setPlayback3 = (value) => {
    playbackSpeedButton3.innerText = value + "x"
    meuVideo3.playbackRate = value
    
}


//mutar vídeo

const muter1 = () =>{
    mute1.classList.remove("esconda")
    alto1.classList.add("esconda")
    baixo1.classList.add("esconda")
    meuVideo1.volume = 0
    numeroVolume1.innerHTML = 0
    alcanceVolume1.value = 0
}

//Quando o usuário apertar para mutar quando estivir no volume alto ou baixo

alto1.addEventListener("click", muter1)
baixo1.addEventListener("click", muter1)


//mutar vídeo 2

const muter2 = () =>{
    mute2.classList.remove("esconda")
    alto2.classList.add("esconda")
    baixo2.classList.add("esconda")
    meuVideo2.volume = 0
    numeroVolume2.innerHTML = 0
    alcanceVolume2.value = 0
}

alto2.addEventListener("click", muter2)
baixo2.addEventListener("click", muter2)


// mutar vídeo 3

const muter3 = () =>{
    mute3.classList.remove("esconda")
    alto3.classList.add("esconda")
    baixo3.classList.add("esconda")
    meuVideo3.volume = 0
    numeroVolume3.innerHTML = 0
    alcanceVolume3.value = 0
}

alto3.addEventListener("click", muter3)
baixo3.addEventListener("click", muter3)


//para o volume

alcanceVolume1.addEventListener("input", () => {
    //paraconverter % em valores decimais no vídeo, o volume deve ser no tipo decimal apenas
    let valorVolume1 = alcanceVolume1.value / 100
    meuVideo1.volume = valorVolume1
    numeroVolume1.innerHTML = alcanceVolume1.value
    //Mostrar os icones de volume
    if(alcanceVolume1.value < 50 ) {
        baixo1.classList.remove("esconda")
        alto1.classList.add("esconda")
        mute1.classList.add("esconda")
    } else if (alcanceVolume1.value >= 50) {
        baixo1.classList.add("esconda")
        alto1.classList.remove("esconda")
        mute1.classList.add("esconda")  
    } 
})

alcanceVolume2.addEventListener("input", () => {
    //paraconverter % em valores decimais no vídeo, o volume deve ser no tipo decimal apenas
    let valorVolume2 = alcanceVolume2.value / 100
    meuVideo2.volume = valorVolume2
    numeroVolume2.innerHTML = alcanceVolume2.value
    //Mostrar os icones de volume
    if(alcanceVolume2.value < 50 ) {
        baixo2.classList.remove("esconda")
        alto2.classList.add("esconda")
        mute2.classList.add("esconda")
    } else if (alcanceVolume2.value >= 50) {
        baixo2.classList.add("esconda")
        alto2.classList.remove("esconda")
        mute2.classList.add("esconda")  
    } 
})

alcanceVolume3.addEventListener("input", () => {
    //paraconverter % em valores decimais no vídeo, o volume deve ser no tipo decimal apenas
    let valorVolume3 = alcanceVolume3.value / 100
    meuVideo3.volume = valorVolume3
    numeroVolume3.innerHTML = alcanceVolume3.value
    //Mostrar os icones de volume
    if(alcanceVolume3.value < 50 ) {
        baixo3.classList.remove("esconda")
        alto3.classList.add("esconda")
        mute3.classList.add("esconda")
    } else if (alcanceVolume3.value >= 50) {
        baixo3.classList.add("esconda")
        alto3.classList.remove("esconda")
        mute3.classList.add("esconda")  
    } 
})


//tamanho do vídeo

expandirTela1.addEventListener("click", () => {
    screenCompress1.classList.remove("esconda")
    expandirTela1.classList.add("esconda")
    containerVideo1
      .requestFullscreen()
      .catch((err) => alert("Seu dispositivo não suporta API's de tela cheia"))
    if (isServicoToque1) {
        let screenOrientation =
         screen.orientation || screen.mozOrientation || screen.msOrientation
        if (screenOrientation.type == "portrait-primary") {
            //atualizando estilo para tela cheia
            pausarVideo1()
            containerRodar1.classList.remove("esconda")
            const meuTempoAcabou = setTimeout(() => {
                containerRodar1.classList.add("esconda")
            }, 3000)
        }
    }
})

expandirTela2.addEventListener("click", () => {
    screenCompress2.classList.remove("esconda")
    expandirTela2.classList.add("esconda")
    containerVideo2
      .requestFullscreen()
      .catch((err) => alert("Seu dispositivo não suporta API's de tela cheia"))
    if (isServicoToque2) {
        let screenOrientation =
         screen.orientation || screen.mozOrientation || screen.msOrientation
        if (screenOrientation.type == "portrait-primary") {
            //atualizando estilo para tela cheia
            pausarVideo2()
            containerRodar2.classList.remove("esconda")
            const meuTempoAcabou = setTimeout(() => {
                containerRodar2.classList.add("esconda")
            }, 3000)
        }
    }
})

expandirTela3.addEventListener("click", () => {
    screenCompress3.classList.remove("esconda")
    expandirTela3.classList.add("esconda")
    containerVideo3
      .requestFullscreen()
      .catch((err) => alert("Seu dispositivo não suporta API's de tela cheia"))
    if (isServicoToque3) {
        let screenOrientation =
         screen.orientation || screen.mozOrientation || screen.msOrientation
        if (screenOrientation.type == "portrait-primary") {
            //atualizando estilo para tela cheia
            pausarVideo3()
            containerRodar3.classList.remove("esconda")
            const meuTempoAcabou = setTimeout(() => {
                containerRodar3.classList.add("esconda")
            }, 3000)
        }
    }
})


//se o usuário sair do browser após do evento da tela cheia

document.addEventListener("fullscreenchange", exitHandler);
document.addEventListener("webkitfullscreenchange", exitHandler);
document.addEventListener("mozfullscreenchange", exitHandler);
document.addEventListener("MSFullscreenchange", exitHandler);

function exitHandler() {
  //se a tela cheia estiver fechada
  if (
    !document.fullscreenElement &&
    !document.webkitIsFullScreen &&
    !document.mozFullScreen &&
    !document.msFullscreenElement
  ) {
    normalScreen();
  }
}

//volta a tela normal

screenCompress1.addEventListener(
    "click", 
    (normalScreen = () => {
        screenCompress1.classList.add("esconda")
        expandirTela1.classList.remove("esconda")
        if (document.fullscreenElement) {
            if(document.exitFullscreen) {
                document.exitFullscreen();
            } else if(document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if(document.webkitExitFullScreen) {
                document.webkitExitFullScreen();
            }
        }
    })
)

screenCompress2.addEventListener(
    "click", 
    (normalScreen = () => {
        screenCompress2.classList.add("esconda")
        expandirTela2.classList.remove("esconda")
        if (document.fullscreenElement) {
            if(document.exitFullscreen) {
                document.exitFullscreen();
            } else if(document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if(document.webkitExitFullScreen) {
                document.webkitExitFullScreen();
            }
        }
    })
)

screenCompress3.addEventListener(
    "click", 
    (normalScreen = () => {
        screenCompress3.classList.add("esconda")
        expandirTela3.classList.remove("esconda")
        if (document.fullscreenElement) {
            if(document.exitFullscreen) {
                document.exitFullscreen();
            } else if(document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if(document.webkitExitFullScreen) {
                document.webkitExitFullScreen();
            }
        }
    })
)

//formatar tempo
const formatadorDoTempo1 = (timeInput) => {
    let minute = Math.floor(timeInput / 60);
    minute = minute < 10 ? "0" + minute : minute
    let second = Math.floor(timeInput % 60);
    second = second < 10 ? "0" + second : second
    return `${minute}:${second}`
}

const formatadorDoTempo2 = (timeInput) => {
    let minute = Math.floor(timeInput / 60);
    minute = minute < 10 ? "0" + minute : minute
    let second = Math.floor(timeInput % 60);
    second = second < 10 ? "0" + second : second
    return `${minute}:${second}`
}

const formatadorDoTempo3 = (timeInput) => {
    let minute = Math.floor(timeInput / 60);
    minute = minute < 10 ? "0" + minute : minute
    let second = Math.floor(timeInput % 60);
    second = second < 10 ? "0" + second : second
    return `${minute}:${second}`
}

//Atualizar barra de progresso todo momento

setInterval(() => {
    referenciaTempoAtual1.innerHTML = formatadorDoTempo1(meuVideo1.currentTime)
    progressoAtual1.style.width = (meuVideo1.currentTime / meuVideo1.duration.toFixed(3)) * 100 + "%"
}, 1000)

setInterval(() => {
    referenciaTempoAtual2.innerHTML = formatadorDoTempo2(meuVideo2.currentTime)
    progressoAtual2.style.width = (meuVideo2.currentTime / meuVideo2.duration.toFixed(3)) * 100 + "%"
}, 1000)

setInterval(() => {
    referenciaTempoAtual3.innerHTML = formatadorDoTempo1(meuVideo3.currentTime)
    progressoAtual3.style.width = (meuVideo3.currentTime / meuVideo3.duration.toFixed(3)) * 100 + "%"
}, 1000)



//Atualiza o temporizador

meuVideo1.addEventListener("timeupdate", () => {
    referenciaTempoAtual1.innerHTML = formatadorDoTempo1(meuVideo1.currentTime)
})

meuVideo2.addEventListener("timeupdate", () => {
    referenciaTempoAtual2.innerHTML = formatadorDoTempo2(meuVideo2.currentTime)
})

meuVideo3.addEventListener("timeupdate", () => {
    referenciaTempoAtual3.innerHTML = formatadorDoTempo1(meuVideo3.currentTime)
})