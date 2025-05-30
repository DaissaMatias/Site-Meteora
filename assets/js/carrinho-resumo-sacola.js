function salvarFreteETotal(frete, total) {
    localStorage.setItem("valorFrete", JSON.stringify(frete));
    localStorage.setItem("valorTotal", JSON.stringify(total));
}

const resumoDiv = document.querySelector(".resumo");
export default function atualizarResumoFrete(frete = 0, subtotal = null) {
    if(!subtotal) {
        subtotal = obterSubTotalProdutos();
    }
    const { totalPix, totalCartao } = subtotal || {totalPix: 0, totalCartao: 0}; //Teste
    const totalFinalPix = totalPix + frete;
    const totalFinalCartao = totalCartao + frete;
    const parcelamento = totalFinalCartao / 5;

    resumoDiv.innerHTML = `
        <p class="resumo-itens resumo-ft">Frete Total: <span>R$${frete.toFixed(2).replace('.',',')}</span></p>
        <p class="resumo-itens resumo-prod">Produtos: <span>R$${totalCartao.toFixed(2).replace('.', ',')}</span></p>
        <p class="resumo-itens resumo-total"><strong>Total:</strong> <span>R$${totalFinalPix.toFixed(2).replace('.',',')} no Pix</span><br> ou <span>R$${totalFinalCartao.toFixed(2).replace('.',',')} no cartão</span></p>
        <p class="resumo-itens resumo-parc">💳 (Em até 5x de R$${parcelamento.toFixed(2).replace('.',',')} sem juros no Cartão)</p>
        <p class="cupons"> Tem cupom ou vale compra? Você poderá utilizá-lo <br> na etapa de pagamento, se aplicável.</p>
    `
    salvarFreteETotal(frete, totalFinalPix);
}

export function obterSubTotalProdutos() {
    let totalPix = 0;
    let totalCartao = 0;

    const precoElements = document.querySelectorAll(".produto-sacolaPreco");

    if(precoElements.length === 0) {
        return {totalPix: 0, totalCartao: 0};
    }

    precoElements.forEach(item => {
        const precoPixTexto = item.querySelector("p:first-child")?.textContent?.trim() || "";
        const precoCartaoTexto = item.querySelector("p:last-child")?.textContent?.trim() || "";

        const precoPixMatch = precoPixTexto?.match(/(\d{1,5}(?:[.,]\d{2})?)/);
        const precoCartaoMatch = precoCartaoTexto?.match(/(\d{1,5}(?:[.,]\d{2})?)/);

        if(precoPixMatch) {
            totalPix += parseFloat(precoPixMatch[1].replace(",", "."));
        }

        if(precoCartaoMatch) {
            totalCartao += parseFloat(precoCartaoMatch[1].replace(",", "."));
        }
    });

    const subtotal = {totalPix, totalCartao};

    localStorage.setItem("subtotal", JSON.stringify(subtotal));
    return subtotal;
}

document.addEventListener("DOMContentLoaded", function () {
    const cepInput = document.getElementById("cep");
    const cepButton = document.querySelector(".frete button");
    const freteDiv = document.querySelector(".frete");
    
    let valorFrete = 0; //Inicializa o frete

    //Recupera o frete e o local de entrega ao carregar a página
    let freteRaw = localStorage.getItem("frete");
    let freteSalvo = freteRaw && freteRaw !== "undefined" ? JSON.parse(freteRaw) : 0;

    let localSalvoRaw = localStorage.getItem("localEntrega");
    let localSalvo = localSalvoRaw && localSalvoRaw !== "undefined" ? JSON.parse(localSalvoRaw) : null;

    let subtotalRaw = localStorage.getItem("subtotal");
    let subtotalSalvo = subtotalRaw && subtotalRaw !== "undefined" ? JSON.parse(subtotalRaw) : { totalPix: 0, totalCartao: 0 };
    
    atualizarResumoFrete(freteSalvo, subtotalSalvo); //Atualiza os valores na tela

    //Se houver um subtotal salvo, atualiza o resumo corretamente
    // if (subtotalSalvo.totalPix > 0 || subtotalSalvo.totalCartao > 0) {
    //     atualizarResumoFrete(freteSalvo);
    // }

    if(localSalvo) {
        const novaDiv = document.createElement("div");
        novaDiv.classList.add("cep-info");
        novaDiv.innerHTML = `
            <p>Entrega para: <img src="./assets/imgens/icone-localizacao.png" alt="Localização" class="icone"><strong>${localSalvo.cidade} - ${localSalvo.estado}</strong></p>
            <button type="button" id="alterarCep">Alterar CEP</button>
        `;

        freteDiv.innerHTML = "";
        freteDiv.appendChild(novaDiv);

        setTimeout(() => {
            let botaoAlterarCep = document.getElementById("alterarCep");
            if (botaoAlterarCep) {
                botaoAlterarCep.addEventListener("click", restaurarCamposCep);
                console.log("✅ Evento de clique atribuído ao botão Alterar CEP!");
            } else {
                console.warn("⚠️ Botão Alterar CEP não encontrado! Verifique a estrutura da div.");
            }
        }, 300);

    }

    cepButton.addEventListener("click", function () {
        let cep = cepInput.value.replace(/\D/g, "");

        if (/^\d{8}$/.test(cep)) {
            buscarEndereco(cep);
        } else {
            alert("⚠️ CEP inválido! Digite um CEP no formato 00000-000.")
        }
    });

    function buscarEndereco(cep) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    let estado = data.uf;
                    let regiao = definirRegiao(estado);
                    valorFrete = calcularFrete(regiao);

                    //Salva o frete no localStorage
                    localStorage.setItem("frete", JSON.stringify(valorFrete));
                    //Salva também a cidade e o estado para manter na tela
                    localStorage.setItem("localEntrega", JSON.stringify({cidade: data.localidade, estado:data.uf}));

                    //Criar nova div para transição suave
                    const novaDiv = document.createElement("div");
                    novaDiv.classList.add("cep-info");
                    novaDiv.innerHTML = `
                        <p>Entrega para: <img src="./assets/imgens/icone-localizacao.png" alt="Localização" class="icone"><strong>${data.localidade} - ${data.uf}</strong></p>
                        <button type = "button" id="alterarCep">Alterar CEP</button>
                    `;
                    //Esconder freteDiv e substituir com animação
                    freteDiv.style.opacity = "0";
                    setTimeout(() => {
                        freteDiv.innerHTML = "";
                        freteDiv.appendChild(novaDiv);
                        freteDiv.style.opacity = "1";

                        //Adiciona evento imediatamente após a substituição
                        document. getElementById("alterarCep").addEventListener("click", restaurarCamposCep)
                    }, 300);
                    
                    //Atualizar o valor do frete no resumo
                    atualizarResumoFrete(valorFrete);
                } else {
                    alert("⚠️ CEP não encontrado! Verifique e tente novamente.")
                }
            })
            .catch(error => console.error("Erro ao buscar o CEP:", error));
    }

    //Aqui estava a função 'obterSubTotalProdutos'
    //Aqui estava a função 'atualizarResumoFrete'
    function definirRegiao(estado) {
        const regioes = {
            "Sudeste": ["SP", "RJ", "MG", "ES"],
            "Centro-Oeste": ["GO", "MT", "MS", "DF"],
            "Sul": ["PR", "SC", "RS"],
            "Nordeste": ["BA", "SE", "AL", "PE", "PB", "RN", "CE", "PI", "MA"],
            "Norte": ["AM", "RR", "AP", "PA", "TO", "RO", "AC"],
        };
    
        for (let regiao in regioes) {
            if (regioes[regiao].includes(estado)) {
                return regiao;
            }
        }
        return "Desconhecido"; // Caso algum estado não esteja mapeado
    }

    function calcularFrete(regiao) {
        const valoresFrete = {
            "Sudeste": 10.00,
            "Centro-Oeste": 12.00,
            "Sul": 15.00,
            "Nordeste": 17.00,
            "Norte": 22.00
        };

        return valoresFrete[regiao] || 0.00;
    }

    function restaurarCamposCep() {
        //Criar nova div para transição suave
        const novaDiv = document.createElement("div");
        novaDiv.innerHTML = `
        <div class="frete">
            <p class="frete-opc">Outras opções de entrega na próxima etapa.</p>
            <label for="cep"><strong>Frete para o CEP</strong></label>
            <div class="frete-input-button">
                <input type="text" id="cep" placeholder="00000-000">
                <button type="button">OK</button>
            </div>
            <a href="https://buscacepinter.correios.com.br/app/localidade_logradouro/index.php" target="_blank">Não sei o CEP</a>
        </div>
        `;

        //Esconder freteDiv e substituir com animação
        freteDiv.style.opacity = "0";
        setTimeout(() => {
            freteDiv.innerHTML = "";
            freteDiv.appendChild(novaDiv);
            freteDiv.style.opacity = "1";

            //Reatribuir o evento do botão após restaurar o campo
            document.querySelector(".frete button").addEventListener("click", function () {
                let novoCep = document.getElementById("cep").value.replace(/\D/g, "");
                if (/^\d{8}$/.test(novoCep)) {
                    buscarEndereco(novoCep)
                } else {
                    alert("⚠️ CEP inválido! Digite um CEP no formato 00000-000.")
                }
            });
        }, 300);
    }

    document.addEventListener("DOMContentLoaded", () => {
        let subtotalSalvo = JSON.parse(localStorage.getItem("subtotal"));
        
        if(!subtotalSalvo || subtotalSalvo.totalPix === 0 && subtotalSalvo.totalCartao === 0) {
            console.warn("Subtotal no localStorage está zerado. Recalculando...");
            subtotalSalvo = obterSubTotalProdutos();
            localStorage.setItem("subtotal", JSON.stringify(subtotalSalvo));
        }

        atualizarResumoFrete(JSON.parse(localStorage.getItem("frete")) || 0, subtotalSalvo);
    });
});





