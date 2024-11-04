// Verificação de login ao carregar a página
window.onload = function() {
    // Verifica se o usuário está logado no localStorage
    let logado = localStorage.getItem("logado");

    if (logado !== "true") {
        // Se não estiver logado, redireciona para a página de login
        window.location.href = "form_OPR.html";
    } else {
        // Exibe uma mensagem de boas-vindas, se houver um campo para isso
        let usuario = localStorage.getItem("usuario");
        let mensagemBoasVindas = document.getElementById("mensagemBoasVindas");
        
        if (mensagemBoasVindas) {
            mensagemBoasVindas.innerHTML = "Olá, " + usuario + "!";
        }
    }
};
