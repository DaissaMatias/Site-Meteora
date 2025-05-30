import { produtos } from "./modal-produtos-home.js";

//Referencias ao modal
const modal = document.getElementById('modal-produtos');
const modalTitulo = document.getElementById('modal-titulo');
const modalDescricao = document.getElementById('modal-descricao');
const modalImagem = document.getElementById('modal-imagem');
const modalPreco = document.getElementById('modal-preco');
const modalCores = document.getElementById('modal-cores');
const modalTamanhos = document.getElementById('modal-tamanhos');

//Elementos DOM
const btnAdicionar = document.getElementById('btn-adicionar');
const iconeCarrinho = document.getElementById('icone-carrinho');
// const listaCarrinho = document.getElementById('lista-carrinho');
const contCarrinho = document.getElementById('carrinho-cont');

//Recupera o carrinho do localStorage ou inicializa
let cart = JSON.parse(localStorage.getItem("cart")) || [];

//Atualiza o ícone do carrinho com q quantidade
function atualizaIconeCarrinho() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    if(totalItems > 0) {
        contCarrinho.textContent = totalItems;
        contCarrinho.classList.remove("hidden");
        iconeCarrinho.style.display = "block";
    }else {
        contCarrinho.classList.add("hidden");
        iconeCarrinho.style.display = "none";
    }
}

//Função p/ add um produto ao carrinho
function adicionarAoCarrinho(produto) {
    const produtoExistente = cart.find(item => 
        item.titulo === produto.titulo && 
        item.cor === produto.cor &&
        item.tamanho === produto.tamanho
    );

    if(produtoExistente) {
        //Se o produto já está no carrinho, aumenta a quantidade
        produtoExistente.quantity += 1; 
    } else {
        const imagemCor = produto.imagensCores[produto.cor];
        //Se o produto não está no carrinho, adiciona com quantity = 1
        cart.push({...produto, quantity: 1, imagemCor});
    }

    //Salva no localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    atualizaIconeCarrinho();
}

//Evento ao clicar no botão "Adicionar ao carrinho"
btnAdicionar.addEventListener("click", ()=> {
    const corSelecionada = document.querySelector('input[name="cor"]:checked');
    const tamanhoSelecionado = document.querySelector('input[name="tamanho"]:checked');

    //Recupera o produto atual exibido no modal
    const produtoAtualTitulo = modalTitulo.textContent;
    const produtoAtual = produtos.find(produto => produto.titulo === produtoAtualTitulo);
    
    //Varifica se o produto exige tamanho
    const exigeTamanho = produtoAtual.temTamanho;

    if(!corSelecionada || (exigeTamanho && !tamanhoSelecionado)) {
        alert("Por favor, selecione a cor " + (exigeTamanho ? "e o tamanho " : "") + "antes de adicionar à sacola.");
        return;
    }

    const produto = {
        titulo: produtoAtual.titulo,
        preco: produtoAtual.preco,
        cor: corSelecionada.value,
        tamanho: exigeTamanho ? tamanhoSelecionado.value: "Tamanho único",
        imagensCores: produtoAtual.imagensCores, 
    };

    adicionarAoCarrinho(produto);

    //Redireciona para a página de sacola
    window.location.href = "pg-sacola.html";
});

//Inicializa o estado do ícone do carrinho ao carregar a página
atualizaIconeCarrinho();

//ADD PRODUTOS NA PAGINA SACOLA(pg-sacola.html)

