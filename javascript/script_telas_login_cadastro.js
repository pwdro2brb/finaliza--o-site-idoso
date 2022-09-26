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

let telefone_input = document.getComputedStyle("telefone")
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
    const regex = /^[0-9]{10}$/
    return regex.test(text)
} 

//Verificador do telefone

const verificadorTelefone = (number) => {
    const regex = /^[0-9]{10}$/
    return regex.test(number)
}

//Verificador do Email

const verificadorEmail = (input) => {
    const regex = /^[a-z0-9_]+@[a-z]{3,}\.[a-z\.]{3,}$/
    return regex.test(input)
}
