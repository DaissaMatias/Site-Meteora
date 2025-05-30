//Formatação campos do Cartão
  //N° do cartão
document.getElementById("numero-cartao").addEventListener("input", function(e){
    let value = e.target.value.replace(/\D/g, "").substring(0,16);
    value = value.match(/.{1,4}/g)?.join(" ") || "";
    e.target.value = value;
});

  //Validade do Cartao
document.getElementById("validade-cartao").addEventListener("input", function(e) {
    let value = e.target.value.replace(/\D/g, "").substring(0,4);
    if(value.length >=2) {
        value = value.substring(0,2) + "/" + value.substring(2);
    }
    e.target.value = value;
});

  //CVV
document.getElementById("cvv-cartao").addEventListener("input", function(e) {
    e.target.value = e.target.value.replace(/\D/g, "").substring(0,3);
})

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".pagamento-detalhes").forEach((detalhe) => {
        detalhe.style.display = "none";
    });

    document.querySelectorAll('input[name="pagamento"]').forEach((input) => {
        input.addEventListener("change", function () {
            //oculta todas as seções antes de mostrar a selecionada
            document.querySelectorAll(".pagamento-detalhes").forEach((detalhe) => {
                detalhe.style.display = "none";
            });

            //tratamento especial para o cartão de crédito
            let idCorreto = this.value.toLowerCase() === "cartão" ? "detalhes-cartao" : `detalhes-${this.value.toLowerCase()}`

            //mostra apenas a opção selecionada
            const detalheSelecionado = document.getElementById(idCorreto);
            if (detalheSelecionado) {
                detalheSelecionado.style.display = "block";
            }
        });
    });
})

//Código aleatório PIX
document.getElementById("pix").addEventListener("change", function () {
    const codigoPix = Math.random().toString(36).substring(2, 15).toUpperCase();
    document.getElementById("codigo-pix").value = codigoPix;
});

//Cópiar codigo ao clicar no botao
function copiarCodigoPix() {
    const codigoPix = document.getElementById("codigo-pix").value;

    navigator.clipboard.writeText(codigoPix).then(() => {
        document.getElementById("codigo-modal").innerText = codigoPix;
        document.getElementById("modal-pix").classList.remove("oculto");
    }).catch((error) => {
        console.error("Erro ao copiar o código PIX: ", error);
        alert("Não foi possível copiar o código PIX. Tente  manualmente.")
    })
}
function fecharModal(){
    document.getElementById("modal-pix").classList.add("oculto");
}

//Recuperar dados página de confirmação do pedido
function carregarDadosEntrega() {
    const dadosEntrega = JSON.parse(localStorage.getItem("dadosEntrega"));

    if(dadosEntrega) {
        document.getElementById("nome").innerText = dadosEntrega.nome;
        document.getElementById("telefone").innerText = dadosEntrega.telefone;
        document.getElementById("email").innerText = dadosEntrega.email;
        document.getElementById("cep").innerText = dadosEntrega.cep;
        document.getElementById("endereco").innerText = dadosEntrega.endereco;
        document.getElementById("numero").innerText = dadosEntrega.numero;
        document.getElementById("complemento").innerText = dadosEntrega.complemento;
        document.getElementById("bairro").innerText = dadosEntrega.bairro;
        document.getElementById("cidade").innerText = dadosEntrega.cidade;
        document.getElementById("estado").innerText = dadosEntrega.estado;
        document.getElementById("referencia").innerText = dadosEntrega.referencia;
    }
}
document.addEventListener("DOMContentLoaded", carregarDadosEntrega);

function carregarFreteETotal() {
    const frete = JSON.parse(localStorage.getItem("valorFrete")) || 0;
    const total = JSON.parse(localStorage.getItem("valorTotal")) || 0;

    document.getElementById("valor-frete").innerText = frete.toFixed(2).replace('.', ',');
    document.getElementById("valor-total").innerText = total.toFixed(2).replace('.', ',');
}
document.addEventListener("DOMContentLoaded", carregarFreteETotal);

function preencherParcelamentoCartao(totalCartao){
    const selectParcelamento = document.getElementById("parcelamento");
    selectParcelamento.innerHTML = "";

    //Opções de parcelamento
    const parcelasSemJuros = [1,2,3,4,5];
    const parcelasComJuros = {6: 1.01, 10: 1.02} //6x com 1% e 10X com 2%

    //Add as opçoes sem juros
    parcelasSemJuros.forEach((parcelas) => {
        const valorParcela = (totalCartao/parcelas).toFixed(2).replace('.',',');
        const opcao = `<option value="${parcelas}"> ${parcelas}x de R$ ${valorParcela} (sem juros) </option>`;
        selectParcelamento.innerHTML += opcao;
    });

    //Add as opções com juros
    Object.entries(parcelasComJuros).forEach(([parcelas, juros]) =>{
        const valorComJuros = (totalCartao * juros).toFixed(2);
        const valorParcela = (valorComJuros / parcelas).toFixed(2).replace('.',',');
        const opcao = `<option value="${parcelas}"> ${parcelas}x de R$ ${valorParcela} (com juros) </option>`;
        selectParcelamento.innerHTML += opcao;
    });
}

function carregarValoresPagamento() {
    const totalPix = JSON.parse(localStorage.getItem("valorTotal")) || 0;
    const totalCartaoBoleto = (JSON.parse(localStorage.getItem("subtotal"))?.totalCartao || 0) + (JSON.parse(localStorage.getItem("valorFrete")) || 0);

    document.getElementById("valor-total-pix").innerText = `${totalPix.toFixed(2).replace('.',',')}`;
    document.getElementById("valor-total-boleto").innerText = `${totalCartaoBoleto.toFixed(2).replace('.',',')}`;

    preencherParcelamentoCartao(totalCartaoBoleto);
}
document.addEventListener("DOMContentLoaded", carregarValoresPagamento);

//Bloquear usuário que não escolheu forma de pagamento
document.getElementById("finalizar-compra").addEventListener("click", function(e) {
    const pagamentoSelecionado = localStorage.getItem("formaPagamento");

    if(!pagamentoSelecionado) {
        e.preventDefault();
        alert("⚠️ Você precisa selecionar um método de pagamento antes de continuar!")
    }
});

//Preservar selecao de pagamento
document.addEventListener("DOMContentLoaded", function() {
    const pagamentoSelecionado = localStorage.getItem("formaPagamento");
    if (pagamentoSelecionado) {
        const opcaoSelecionada = document.querySelector(`input[name='pagamento'][value='${pagamentoSelecionado}']`);
        if (opcaoSelecionada) {
            opcaoSelecionada.checked = true;
            const detalheSelecionado = document.getElementById(
                pagamentoSelecionado.toLowerCase() === "cartão" ? "detalhes-cartao" : `detalhes-${pagamentoSelecionado.toLowerCase()}`
            );
            if (detalheSelecionado) {
                detalheSelecionado.style.display = "block"; // Exibe automaticamente ao carregar
            }
        }
    }
});

document.querySelectorAll("label").forEach(label => {
    label.addEventListener("click", function () {
        const input = document.getElementById(label.getAttribute("for"));
        const detalheSelecionado = document.getElementById(
            input.value.toLowerCase() === "cartão" ? "detalhes-cartao" : `detalhes-${input.value.toLowerCase()}`
        );

        if (detalheSelecionado) {
            detalheSelecionado.style.display = detalheSelecionado.style.display === "none" ? "block" : "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const opcoesPagamento = document.querySelectorAll("input[name='pagamento']");

    opcoesPagamento.forEach(opcao => {
        opcao.addEventListener("change", function() {
            localStorage.setItem("formaPagamento", this.value);
        });
    });

});

//Preservar dados do cartao de credito
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("numero-cartao").value = localStorage.getItem("numeroCartao") || "";
    document.getElementById("nome-cartao").value = localStorage.getItem("nomeCartao") || "";
    document.getElementById("validade-cartao").value = localStorage.getItem("validadeCartao") || "";
    document.getElementById("cvv-cartao").value = localStorage.getItem("cvvCartao") || "";
    document.getElementById("parcelamento").value = localStorage.getItem("parcelamentoCartao") || "1x"; 
});

    //Salvar os dados conforme o usuário digita
document.getElementById("numero-cartao").addEventListener("input", function() {
    localStorage.setItem("numeroCartao", this.value);
});

document.getElementById("nome-cartao").addEventListener("input", function() {
    localStorage.setItem("nomeCartao", this.value);
});

document.getElementById("validade-cartao").addEventListener("input", function() {
    localStorage.setItem("validadeCartao", this.value);
});

document.getElementById("cvv-cartao").addEventListener("input", function() {
    localStorage.setItem("cvvCartao", this.value);
});

document.getElementById("parcelamento").addEventListener("change", function() {
    localStorage.setItem("parcelamentoCartao", this.value);
});