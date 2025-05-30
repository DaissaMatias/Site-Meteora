import atualizarResumoFrete from './carrinho-resumo-sacola.js';
import obterSubTotalProdutos from './carrinho-resumo-sacola.js';

document.addEventListener("DOMContentLoaded", () => {
    const listaCarrinho = document.querySelector('.carrinho-sacolaItem');
    const sacolaAcoes = document.querySelector('.carrinho-sacolaAcoes');

    //Recupera o carrinho do localStorage
    let cart;
    try {
        cart = JSON.parse(localStorage.getItem("cart")) || [];
    } catch (e) {
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));

        const subtotal = obterSubTotalProdutos();
        localStorage.setItem("subtotal", JSON.stringify(subtotal));
    }

    // Renderiza os produtos com base no cart recuperado
    renderizarProdutos();

    //Aguarda a renderização para calcular o subtotal
    setTimeout(() => {
        const subtotal = obterSubTotalProdutos();
        atualizarResumoFrete(JSON.parse(localStorage.getItem("frete")) || 0, subtotal);
    }, 100);

    //Função para renderizar produtos
    function renderizarProdutos() {
        if (cart.length === 0) {
            console.warn("Carrinho vazio. Mostrando mensagem padrão...");
            listaCarrinho.innerHTML = `
                 <div class="carrinho-vazio">
                    <img src="./assets/imgens/sacola-vazia.svg" alt="Sacala vazia">
                    <p>Sua sacola está vazia. Que tal adicionar alguns produtos?</p>
                    <a href="./index.html" class= "btn btn-primario"> Voltar à Home</a>
                </div>
            `;
            sacolaAcoes.style.display = "none"; //oculta as ações da sacola
            //Oculta a seção carrinho-resumo
            document.querySelector(".carrinho-resumo").style.display = "none";
        } else {
            listaCarrinho.innerHTML = cart.map(criarProdutoHTML).join('');
            sacolaAcoes.style.display = "flex"; //Mostra as ações da sacola
            //Exibe a seção carrinho-resumo
            document.querySelector(".carrinho-resumo").style.display = "grid";
        }
        //Aguarda a renderização dos produtos antes de calcular o subtotal
        setTimeout(() => {
            const subtotal = obterSubTotalProdutos();
            localStorage.setItem("subtotal", JSON.stringify(subtotal));
            atualizarResumoFrete(JSON.parse(localStorage.getItem("frete")) || 0, subtotal);
        }, 300);

        const subtotal = obterSubTotalProdutos();
        atualizarResumoFrete(JSON.parse(localStorage.getItem("frete")) || 0, subtotal);

        const precoElements = document.querySelectorAll(".produto-sacolaPreco");
    }

    //Função para criar o HTML do produto
    function criarProdutoHTML(produto) {
        const precoUnitario = parseInt(produto.preco.replace('R$', '').replace(',', '.'));
        const quantidade = produto.quantity || 1;

        const precoTotalPix = (precoUnitario * quantidade).toFixed(2).replace('.', ',');
        const precoTotalCartao = (precoUnitario * quantidade + 15).toFixed(2).replace('.', ',');

        return `
        <section class="carrinho-sacolaItem">
        <div class="carrinho-item">
            <img src="${produto.imagemCor}" alt="${produto.titulo}" class="produto-sacolaImagem">
            <div class="produto-sacolaDetalhes">
                <h2>${produto.titulo}</h2>
                <p>Tamanho: ${produto.tamanho}</p>
                <p>Vendido e entregue por Meteora</p>
            </div>
            <div class="produto-sacolaAcoes">
                <label for="quantidade">Quantidade:</label>
                <select id="quantidade" class="quantidades" data-titulo="${produto.titulo}" data-cor="${produto.cor}" data-tamanho="${produto.tamanho}">
                    ${Array.from({ length: 20 }, (_, i) => i + 1).map((qtd) => `
                    <option value="${qtd}" ${qtd === quantidade ? 'selected' : ''}>${qtd}</option>
                    `).join('')}
                </select>
                <button class="excluir" data-titulo="${produto.titulo}" data-cor="${produto.cor}" data-tamanho="${produto.tamanho}">Excluir</button>
            </div>
            <div class="produto-sacolaPreco">
                <p>${precoTotalPix} no Pix</p>
                <p> ou ${precoTotalCartao} no cartão</p>
            </div>
        </div>
        </section>`;
    }

    //Renderiza os produtos ao carregar a página
    renderizarProdutos();

    //Função para atualizar a quantidade
    function atualizarQuantidade(event) {
        const select = event.target;
        const titulo = select.dataset.titulo;
        const cor = select.dataset.cor;
        const tamanho = select.dataset.tamanho;
        const quantidade = parseInt(select.value, 10);

        const produto = cart.find(prod =>
            prod.titulo === titulo &&
            prod.cor === cor &&
            prod.tamanho === tamanho
        );

        if (produto) {
            produto.quantity = quantidade;
            localStorage.setItem('cart', JSON.stringify(cart));

            console.log('Produto atualizado:', produto);

            //Atualiza o preço na tela
            const item = select.closest('.carrinho-item');
            const precoPixElement = item.querySelector('.produto-sacolaPreco p:first-child');
            const precoCartaoElement = item.querySelector('.produto-sacolaPreco p:last-child');

            //Calcula os novos valores
            const precoUnitario = parseFloat(produto.preco.replace("R$", "").replace(',', '.'));
            const novoPrecoPix = (precoUnitario * quantidade).toFixed(2).replace('.', ',');
            const novoPrecoCartao = (precoUnitario * quantidade + 15).toFixed(2).replace('.', ',');

            //Atualiza o HTML com os novos valores
            precoPixElement.textContent = `R$${novoPrecoPix} no Pix`;
            precoCartaoElement.textContent = `ou R$${novoPrecoCartao} no cartão`;

            //recalcla o subtotal e o frete sempre que a quantidade mudar
            const subtotal = obterSubTotalProdutos();
            localStorage.setItem("subtotal", JSON.stringify(subtotal));

            atualizarResumoFrete(JSON.parse(localStorage.getItem("frete")) || 0, subtotal);
        }
    }

    //Função para excluir produto
    function excluirProduto(event) {
        const button = event.target;
        const titulo = button.dataset.titulo;
        const cor = button.dataset.cor;
        const tamanho = button.dataset.tamanho;

        cart = cart.filter(prod =>
            !(prod.titulo === titulo &&
                prod.cor === cor &&
                prod.tamanho === tamanho)
        );
        if (cart.length === 0) {
            console.warn("⚠️ Carrinho foi esvaziado!")
        }

        localStorage.setItem('cart', JSON.stringify(cart));

        const subtotal = obterSubTotalProdutos();
        localStorage.setItem("subtotal", JSON.stringify(subtotal));

        renderizarProdutos();
        atualizarResumoFrete(JSON.parse(localStorage.getItem("frete")) || 0, subtotal);
    }

    //Add event listeners
    listaCarrinho.addEventListener('change', atualizarQuantidade);
    listaCarrinho.addEventListener('click', (event) => {
        if (event.target.classList.contains('excluir')) {
            excluirProduto(event);
        }
    });

    //Add o event Listener para atualizar o resumo sepre que o carrinho for modificado
    window.addEventListener("storage", () => {
      
        let frete = JSON.parse(localStorage.getItem("frete")) || 0;
        let subtotal = JSON.parse(localStorage.getItem("subtotal")) || { totalPix: 0, totalCartao: 0 };

        renderizarProdutos(); // Atualiza os produtos na tela
        atualizarResumoFrete(frete, subtotal); // Atualiza o resumo com os valores salvos
    })
});

document.addEventListener("DOMContentLoaded", () => {
    const botaoContinuar = document.querySelector('.btn-primario[href="./entrega.html"]');
    const cepInput = document.getElementById("cep") || document.querySelector('.frete input#cep');  
    const erroSpan = document.getElementById("erro-frete");

    botaoContinuar.addEventListener("click", function (e) {
        const frete = JSON.parse(localStorage.getItem("frete")) || 0;

        if (!frete || frete === 0) {
            e.preventDefault();
            mostrarErroFrete("⚠️ Por favor, informe e calcule o frete antes de continuar.");
            marcarErroInput(cepInput);
        } else {
            limparErroFrete();
            desmarcarErroInput(cepInput);
        }
    });

    function mostrarErroFrete(mensagem) {
        erroSpan.textContent = mensagem;
    }

    function limparErroFrete() {
        erroSpan.textContent = "";
    }

    function marcarErroInput(input) {
        input.classList.add("erro-input");
    }

    function desmarcarErroInput(input) {
        input.classList.remove("erro-input");
    }
});
