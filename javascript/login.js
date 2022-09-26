//Nome do idoso no login

let login_idoso_input = document.getElementById("login-idoso")
let erro_idoso_login = document.getElementById("Error-nome-idoso-login")
let vazio_idoso_login = document.getElementById("vazio-nome-idoso-login")

//Senha no login

let login_senha_input = document.getElementById("login-senha")
let erro_login_senha = document.getElementById("Error-senha-login")
let vazio_senha_login = document.getElementById("senha-vazia-login")

//Botão logar 

let logar_botao = document.getElementById("botao-logar")

//validador 

let classesValidas = document.getElementById("valid")
let classesInvalidas = document.getElementById("Error")

//verificador de senha

const verificadorSenha= (senha) =>{
    //Valores que devem existir na senha, não precisa ser todos  
       const regex = 
          /^(?=.+[a-z])(?=.+[A-Z])(?=.+[0-9])(?=.+[\$\%\^\&\!@\#\*\(\)\+\=`~\?\>\<])/ 
       return regex.test(senha) && senha.lenght >= 8
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


login_idoso_input.addEventListener("input", () =>{
    if (verificadorTexto(login_idoso_input.value)){
        //se a verificação retornar verdadeiro
        erro_idoso_login.classList.add("esconda")
        validInput(login_idoso_input)
    } else {
    //para falso
    errorUpdate(login_idoso_input, erro_idoso_login)
    //checador de vazio
    vazioUpdate(login_idoso_input, vazio_idoso_login, erro_idoso_login)
    }
})