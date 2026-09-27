const forms = document.getElementById("formulario");
const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("senha");
const saidaEmail = document.getElementById("saida_email");
const saidaSenha = document.getElementById("saida_senha");
const saidaLogin = document.getElementById("saida_login");

function mostrarErro(saida, texto) {
    saida.textContent = texto;
    saida.style.color = "pink";
}

function limpar(saida) {
    saida.textContent = "";
}

function validacao_email() {
    const email = campoEmail.value.trim();
    if (email === "") {
        mostrarErro(saidaEmail, "Informe o e-mail");
        return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        mostrarErro(saidaEmail, "Formato de e-mail inválido");
        return false;
    }
    limpar(saidaEmail);
    return true;
}

function validacao_senha() {
    if (campoSenha.value === "") {
        mostrarErro(saidaSenha, "Informe a senha");
        return false;
    }
    limpar(saidaSenha);
    return true;
}

forms.addEventListener("input", (evento) => {
    limpar(saidaLogin);
    if (evento.target.id === "email") validacao_email();
    if (evento.target.id === "senha") validacao_senha();
});

forms.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const emailOk = validacao_email();
    const senhaOk = validacao_senha();
    if (!emailOk || !senhaOk) return;

    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    const email = campoEmail.value.trim().toLowerCase();
    const usuario = usuarios.find((u) => u.email === email && u.senha === campoSenha.value);

    if (!usuario) {
        mostrarErro(saidaLogin, "Erro... e-mail ou senha incorretos");
        return;
    }

    localStorage.setItem("usuarioLogado", usuario.email);
    window.location.href = "Entre_capas.html";
});

olho.addEventListener("click", visibilidade);
function visibilidade() {
    const mostrar = campoSenha.type === "password";
    campoSenha.type = mostrar ? "text" : "password";
    olho.textContent = mostrar ? "visibility" : "visibility_off";
}
const olho = document.getElementById("iconeOlho");