// Função de login
function fazerLogin() {
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
    let mensagemErro = document.getElementById("mensagemErro");

    // Verificação simples de login
    if (usuario === "neno" && senha === "6969") {
        // Se os dados estiverem corretos, salvar o status de login no  sessionStorage
        sessionStorage.setItem("logado", "true");
        sessionStorage.setItem("usuario", usuario);

        // Redirecionar para a página inicial ou outra página
        window.location.href = "index.html";
        return false; // Impede o envio do formulário e recarregamento da página
    } else {
        mensagemErro.innerHTML = "Usuário ou senha incorretos.";
        return false; // Impede o envio do formulário
    }
}

// Função de logout
function fazerLogout() {
    // Remove o status de login do  sessionStorage
    sessionStorage.removeItem("logado");
    sessionStorage.removeItem("usuario");

    // Redireciona para a página de login
    window.location.href = "form_OPR.html";
}
