function validacao_senha(){

    let campo_senha=document.getElementById("senha")
    let senha=document.getElementById("senha").value.trim()
    let saida_senha=document.getElementById("saida_senha")

    let erros_senha=[]

    if ((senha.length<8)||(senha.length>15)){
       erros_senha.push("possuir tamanho entre 8 e 15 caracteres") 
       
    }

    if (senha.match(/[0-9]/g)==null){
        erros_senha.push("possuir pelo menos um número") 
       

    }

    if (senha.match(/[a-z]/g)==null){
         erros_senha.push("possuir pelo menos uma letra minúscula") 
       

    }

    if (senha.match(/[A-Z]/g)==null){
        erros_senha.push("possuir pelo menos uma letra maiúscula") 
       

    }

    if (senha.match(/[\W|_]/g)==null){
        erros_senha.push("possuir pelo menos um símbolo") 
        

    }

    if (erros_senha.length == 0){
        saida_senha.textContent="Senha válida"
        saida_senha.style.color="lightgreen"
       
        
    }else{
        saida_senha.textContent=`Erro...A senha deve ${erros_senha.join(",")}`;
        saida_senha.style.color="pink"
       
    }

    return erros_senha
}

function validacao_email(){

    let campo_email=document.getElementById("email")
    let email=campo_email.value.trim()
    let saida_email=document.getElementById("saida_email")
   
    let erros_email=[]

    if ((!email.endsWith("@gmail.com"))|| (email.length < 11)){
        erros_email.push("Conter @gmail.com e não ser vazio")
    }

    if (erros_email.length == 0){
        saida_email.textContent="Email válido"
        saida_email.style.color="lightgreen"
    }else{
        saida_email.textContent=`Erro...O E-mail deve ${erros_email.join(",")}`;
        saida_email.style.color="pink"}

        return erros_email

}

function validacao_nome(){

    let campo_nome=document.getElementById("nome")
    let nome=campo_nome.value.trim()
    let saida_nome=document.getElementById("saida_nome")

    erros_nome=[]

    if (nome.length==0){
        erros_nome.push("Espaço nome vazio!")
    }

     if (erros_nome.length == 0){
        saida_nome.textContent="Nome válido"
        saida_nome.style.color="lightgreen"
        
    }else{
        saida_nome.textContent=`${erros_nome.join(",")}`;
        saida_nome.style.color="pink"
        
    }

    return erros_nome
}


let button_cadastrar=document.getElementById("cadastrar")

let forms=document.getElementById("formulario")

forms.addEventListener("input",()=>{
    validacao_email();
    validacao_nome();
    validacao_senha();
    /*if (forms.checkValidity()){
        button_cadastrar.disabled=false;
    }else{
        button_cadastrar.disabled=true;
    }
        Tirei isso pois estava atrapalhando a visualizar alguns métodos html como o required*/
})

function Envio(evento){
    evento.preventDefault();

    let erros_email=validacao_email();
    let erros_nome=validacao_nome();
    let erros_senha=validacao_senha();

    if (erros_nome.length > 0) {
        document.getElementById("nome").focus();
        return;
    }
    if (erros_email.length > 0) {
        document.getElementById("email").focus();
        return;
    }
    if (erros_senha.length > 0) {
        document.getElementById("senha").focus();
        return;
    }

    alert("Cadastro realizado com sucesso!");
    formulario.submit();
}

forms.addEventListener("submit",Envio)

let senha=document.getElementById("senha")

let olho=document.getElementById("iconeOlho")

function visibilidade(){
    if (senha.type==="password"){
        senha.type="text";
        olho.textContent="visibility";
    }else{
        senha.type="password"
        olho.textContent="visibility_off";
    }
}

olho.addEventListener("click",visibilidade)

