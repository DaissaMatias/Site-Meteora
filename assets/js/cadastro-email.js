document.getElementById("botao-email").addEventListener("click", function(evento) {
    evento.preventDefault();

    const emailInput = document.getElementById("input-email");
    const emailValue = emailInput.value;
    const modal = document.getElementById("modal-sucesso");

    //Expressão regular para validar o email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //Verifica se o email é válido
    if(emailRegex.test(emailValue)) {
        //mostra o modal
        modal.style.display = "flex";

        //Limpa o campo de email
        emailInput.value = "";

        //Fecha automaticamente após 5 segundos
        setTimeout(() => {
            modal.style.display = 'none'; 
        }, 6000);
    }else {
        alert("Por favor, insira um e-mail válido.")
    }
});

//Função para fechar o prompt manualmente
document.querySelector(".btn-fechar-n").addEventListener("click", function() {
    const modal = document.getElementById("modal-sucesso");
    modal.style.display = "none";
});

