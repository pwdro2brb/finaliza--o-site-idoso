//Nome do tutor

let tutor_nome_input = document.getElementById("input-nome-tutor")
let error_tutor = document.getElementById("Error-nome-tutor")
let vazio_tutor = document.getElementById("vazio-nome-tutor")

//Nome do idoso

let idoso_nome_input = document.getElementById("nome-idoso")
let error_idoso = document.getElementById("Error-nome-idoso")
let vazio_idoso = document.getElementById("vazio-nome-idoso")

//Email

let email_input = document.getElementById("Email")
let error_email = document.getElementById("Error-email")
let vazio_email = document.getElementById("Email-vazio")

//Telefone do tutor

let telefone_input = document.getElementById("telefone")
let error_telefone = document.getElementById("Error-telefone")
let vazio_telefone = document.getElementById("telefone-vazio")

//Senha para o cadastro

let senha_input = document.getElementById("senha")
let error_senha = document.getElementById("Error-senha")
let vazio_senha = document.getElementById("senha-vazia")

//Confirmação da senha

let confimar_senha_input = document.getElementById("verificar-senha")
let error_confirmar_senha = document.getElementById("Error-verificar-senha")
let vazio_confirmar_senha = document.getElementById("verificar-senha-vazio")

//Botão enviar cadastro

let cadastrar_botao = document.getElementById("botao-cadastrar")

//validador 

let classesValidas = document.getElementById("valido")
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

//Verificador do telefone

const verificadorTelefone = (number) => {
    const regex = /^[0-9]{8}$/
    return regex.test(number)
}

//Verificador do Email

const verificadorEmail = (input) => {
    const regex = /^[a-z0-9_]+@[a-z]{3,}\.[a-z\.]{3,}$/
    return regex.test(input)
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

//nome tutor

tutor_nome_input.addEventListener("input", () =>{
    if (verificadorTexto(tutor_nome_input.value)){
        //se a verificação retornar verdadeiro
        error_tutor.classList.add("esconda")
        validInput(tutor_nome_input)
    } else {
    //para falso
    errorUpdate(tutor_nome_input, error_tutor)
    //checador de vazio
    vazioUpdate(tutor_nome_input, vazio_tutor, error_tutor)
    }
})