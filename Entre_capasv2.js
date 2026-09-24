
function button_acess(){
    let bloco=document.getElementById("acess_block");
    bloco.classList.toggle("mostrar");
}

document.getElementById("acess_button").addEventListener("click",button_acess);