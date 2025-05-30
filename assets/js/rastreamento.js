document.addEventListener("DOMContentLoaded", function() {
    const statusPedido = [
        "Pedido confirmado ✅",
        "Em separação 📦",
        "A caminho 🚚",
        "Entregue 🎉"
    ];

    let statusAtual = parseInt(localStorage.getItem("statusPedido")) || 0;
    document.getElementById("status-texto").innerText = statusPedido[statusAtual];

    document.getElementById("atualizar-status").addEventListener("click", function() {
        if(statusAtual < statusPedido.length - 1) {
            statusAtual++;
            localStorage.setItem("statusPedido", statusAtual);
            document.getElementById("status-texto").innerText = statusPedido[statusAtual];
        }else {
            alert("🎉 O pedido já foi entregue!");
        }
    });

});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("voltar-home").addEventListener("click", function(){
        localStorage.clear();
        window.location.href = "./index.html";
    });
});