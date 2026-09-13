
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