document.addEventListener("DOMContentLoaded", function() {
    const dadosEntrega = JSON.parse(localStorage.getItem("dadosEntrega"));
    const pagamentoSelecionado = localStorage.getItem("formaPagamento") || " Não informado";
    let totalPix = JSON.parse(localStorage.getItem("valorTotal")) || 0;
    let totalCartaoBoleto = (JSON.parse(localStorage.getItem("subtotal"))?.totalCartao || 0) + (JSON.parse(localStorage.getItem("valorFrete")) || 0);

    //Escolhe o valor correto baseado na forma de pagamento
    let valorFinal = pagamentoSelecionado === "PIX" ? totalPix : totalCartaoBoleto;

    if(dadosEntrega) {
        document.getElementById("resumo-endereco").innerText = ` ${dadosEntrega.endereco}, ${dadosEntrega.numero}, ${dadosEntrega.cidade} - ${dadosEntrega.estado}, CEP: ${dadosEntrega.cep}`;
    }
    document.getElementById("resumo-pagamento").innerText = ` ${pagamentoSelecionado}`;
    document.getElementById("resumo-total").innerText = `R$ ${valorFinal.toFixed(2).replace('.',',')}`;

})

//Limpar o localStore
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("voltar-home").addEventListener("click", function() {
        localStorage.clear();
        window.location.href = "./index.html";
    })
})
document.getElementById("acompanhar-pedido").addEventListener("click", function () {
    window.location.href = "./rastreamento.html";
});