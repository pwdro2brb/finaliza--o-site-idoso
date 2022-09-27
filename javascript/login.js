//variável para ocultar e mostra senha

var state = false

//Nome do idoso no login

let login_idoso_input = document.getElementById("login-idoso")
let erro_idoso_login = document.getElementById("Error-nome-idoso-login")
let vazio_idoso_login = document.getElementById("vazio-nome-idoso-login")

//Senha no login

let login_Senha_input = document.getElementById("senha2")
let error_senha = document.getElementById("Error-senha")
let vazio_senha = document.getElementById("senha-vazia")

//Botão logar 

let logar_botao = document.getElementById("botao-logar")

//validador 

let classesValidas1 = false
let classesInvalidas1 = true

let classesValidas2 = false
let classesInvalidas2 = true

//verificador de senha

const verificadorSenha= (senha2) =>{
    //Valores que devem existir na senha, não precisa ser todos  
       const regex = 
          /^(?=.+[a-z])(?=.+[A-Z])(?=.+[0-9])(?=.+[\$\%\^\&\!@\#\*\(\)\+\=`~\?\>\<])/ 
          return regex.test(senha2) && senha2.length >= 4;
   }
   
   //verificador de texto (para os inputs que deveriam conter apenas texto)
   
   const verificadorTexto = (text) =>{
       const regex = /^[a-zA-Z]{3,}$/
       return regex.test(text)
   } 

//Para os inputs vazios - accepts(input vazio, erro para aquele input e outros erros)

const vazioUpdate = (
    inputReference,
    emptyErrorReference,
    otherErrorReference
    ) => {
        if (!inputReference.value){
            //input está vazio/null
            emptyErrorReference.classList.remove("esconda")
            otherErrorReference.classList.add("esconda")
            inputReference.classList.add("Error")
        } else {
            //input tem algum conteúdo
            emptyErrorReference.classList.add("esconda")
        }
    }

// para o estilo e a aparição da menssagem de erro

const errorUpdate = (inputReference, errorReference) => {
    errorReference.classList.remove("esconda")
    inputReference.classList.remove("valid")
    inputReference.classList.add("Error")
}

// para nenhum erros

const validInput = (inputReference) => {
    inputReference.classList.remove("Error")
    inputReference.classList.add("valid")
}

//Nome do idoso para login

login_idoso_input.addEventListener("input", () =>{
    if (verificadorTexto(login_idoso_input.value)){
        //se a verificação retornar verdadeiro
        erro_idoso_login.classList.add("esconda")
        validInput(login_idoso_input)
         classesValidas1 = true
         classesInvalidas1 = false
    } else {
    //para falso
    errorUpdate(login_idoso_input, erro_idoso_login)
    //checador de vazio
    vazioUpdate(login_idoso_input, vazio_idoso_login, erro_idoso_login)
    }
})

//senha para login

login_Senha_input.addEventListener("input", () =>{
    if (verificadorSenha(login_Senha_input.value)){
        //se a verificação retornar verdadeiro
        error_senha.classList.add("esconda")
        validInput( login_Senha_input)
        classesValidas2 = true
        classesInvalidas2 = false
    } else {
    //para falso
    errorUpdate(login_Senha_input, error_senha)
    //checador de vazio
    vazioUpdate(login_Senha_input, vazio_senha, error_senha)
    }
})

//botão de login

logar_botao.addEventListener("click", () => {
    if (classesValidas1 == true && classesInvalidas1 == false && classesValidas2 == true && classesInvalidas2 == false){
        window.location.href ='../tela_inicial.html'
    }else{
        alert("Login incompleto, preencha o formulário corretamente")
    }
 })

//Função para mostrar a senha ao apertar no olho e parar de mostrar se apertar de novo

 function mudar3(){
    if(state){
        document.getElementById("senha2").setAttribute("type","password")
        state = false
    } else {
        document.getElementById("senha2").setAttribute("type", "text")
        state = true
    }
 }