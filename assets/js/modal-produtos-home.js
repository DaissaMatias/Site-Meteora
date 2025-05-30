const modal = document.getElementById('modal-produtos');
const btnFechar = document.querySelector('.btn-fechar');
const btnVerMais = [...document.querySelectorAll('.m-info')];
const modalImagem = document.getElementById('modal-imagem');
const modalTitulo = document.getElementById('modal-titulo');
const modalDescricao = document.getElementById('modal-descricao');
const modalPreco = document.getElementById('modal-preco');
const modalCores = document.getElementById('modal-cores');
const modalTamanhos = document.getElementById('modal-tamanhos');

//Dados dos produtos

export const produtos = [
    {
        id: "camiseta",
        titulo: "Camiseta Conforto",
        descricao: "Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.",
        preco: "R$ 70,00",
        imagem: "./assets/imgens/Desktop/Imagens Cards/Camiseta.png",
        cores: ["Mostarda", "Preto", "Vermelho", "Verde", "Azul"],
        imagensCores: {
            Mostarda: "./assets/imgens/Desktop/Imagens Cards/Camiseta.png",
            Preto: "./assets/imgens/Desktop/Imagens Cards/cores/Camiseta black.png",
            Vermelho: "./assets/imgens/Desktop/Imagens Cards/cores/Camiseta red.png",
            Verde: "./assets/imgens/Desktop/Imagens Cards/cores/Camiseta green.png",
            Azul: "./assets/imgens/Desktop/Imagens Cards/cores/Camiseta blue.png",
        },
        tamanhos: ["PP", "P", "M", "G", "GG"],
        temTamanho: true,
    },
    {
        id: "calca",
        titulo: "Calça Alfaiataria",
        descricao: "Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!",
        preco: "R$ 180,00",
        imagem: "./assets/imgens/Desktop/Imagens Cards/Calça.png",
        cores: ["Bege", "Preto", "Cinza"],
        imagensCores: {
            Bege: "./assets/imgens/Desktop/Imagens Cards/Calça.png",
            Preto: "./assets/imgens/Desktop/Imagens Cards/cores/Calça black.png",
            Cinza: "./assets/imgens/Desktop/Imagens Cards/cores/Calça gray.png",
        },
        tamanhos: ["PP", "P", "M", "G", "GG"],
        temTamanho: true,
    },
    {
        id: "calcado",
        titulo: "Tênis Chunky",
        descricao: "Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.",
        preco: "R$ 250,00",
        imagem: "./assets/imgens/Desktop/Imagens Cards/Tenis.png",
        cores: ["Branco", "Cinza", "Roxo", "Vermelho"],
        imagensCores: {
            Branco: "./assets/imgens/Desktop/Imagens Cards/Tenis.png",
            Cinza: "./assets/imgens/Desktop/Imagens Cards/cores/Tenis gray.png",
            Roxo: "./assets/imgens/Desktop/Imagens Cards/cores/Tenis purple.png",
            Vermelho: "./assets/imgens/Desktop/Imagens Cards/cores/Tenis red.png",
        },
        tamanhos: ["34", "36", "37", "38", "39", "40", "41", "42", "43"],
        temTamanho: true,
    },
    {
        id: "casaco",
        titulo: "Jaqueta Jeans",
        descricao: "Modelo unissex oversized com gola de camurça. Atemporal e autêntica!",
        preco: "R$ 150,00",
        imagem: "./assets/imgens/Desktop/Imagens Cards/Jaqueta.png",
        cores: ["Azul", "Cinza", "Marrom"],
        imagensCores: {
            Azul: "./assets/imgens/Desktop/Imagens Cards/Jaqueta.png",
            Cinza: "./assets/imgens/Desktop/Imagens Cards/cores/Jaqueta cinza.png",
            Marrom: "./assets/imgens/Desktop/Imagens Cards/cores/Jaqueta marron.png",
        },
        tamanhos: ["PP", "P", "M", "G", "GG"],
        temTamanho: true,
    },
    {
        id: "oculos",
        titulo: "Óculos Redondo",
        descricao: "Armação metálica em grafite com lentes arredondadas. Sem erro!",
        preco: "R$ 120,00",
        imagem: "./assets/imgens/Desktop/Imagens Cards/óculos.png",
        cores: ["Preto", "Prata", "Azul", "Vermelho"],
        imagensCores: {
            Preto: "./assets/imgens/Desktop/Imagens Cards/óculos.png",
            Prata: "./assets/imgens/Desktop/Imagens Cards/cores/oculos-prata.png",
            Azul: "./assets/imgens/Desktop/Imagens Cards/cores/oculos-azul.png",
            Vermelho: "./assets/imgens/Desktop/Imagens Cards/cores/oculos-vermelho.png",
        },
        tamanhos: [],
        temTamanho: false,
    },
    {
        id: "bolsa",
        titulo: "Bolsa Coringa",
        descricao: "Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!",
        preco: "R$ 120,00",
        imagem: "./assets/imgens/Desktop/Imagens Cards/Bolsa.png",
        cores: ["Camel", "Cinza", "Rosa", "Vermelho"],
        imagensCores: {
            Camel: "./assets/imgens/Desktop/Imagens Cards/Bolsa.png",
            Cinza: "./assets/imgens/Desktop/Imagens Cards/cores/Bolsa gray.png",
            Rosa: "./assets/imgens/Desktop/Imagens Cards/cores/Bolsa pink.png",
            Vermelho: "./assets/imgens/Desktop/Imagens Cards/cores/Bolsa red.png",
        },
        tamanhos: [],
        temTamanho: false,
    },
];

//Função para abrir o modal com os dados do produto
function abrirModal(produtoId) {
    const produto = produtos.find((item) => item.id === produtoId);

    //Preenche o modal com os dados do produto
    modalImagem.src = produto.imagem;
    modalImagem.alt = produto.titulo;
    modalTitulo.textContent = produto.titulo;
    modalDescricao.textContent = produto.descricao;
    modalPreco.textContent = produto.preco;

    const coresMap = {
        "Mostarda": "#CC8400",
        "Preto": "black",
        "Vermelho": "#A82C1C",
        "Verde": "#6E7D00",
        "Azul": "#2D51AF",
        "Bege": "#F4CCB8",
        "Cinza": "#7B7B7B",
        "Branco": "#e9e9e9",
        "Roxo": "#593E90",
        "Marrom": "#865E3A",
        "Prata": "#c0c0c0",
        "Camel": "#C19A6B",
        "Rosa": "#B7639A",
    };

    //Preenche as opções de cores
    modalCores.innerHTML = produto.cores.map((cor) =>
        `<label>
            <input type="radio" name="cor" value="${cor}" style="background-color: ${coresMap[cor] || 'gray'}">
            <span>${cor}</span>
         </label>`
    )
        .join('');

    //Preenche as opções de tamanhos
    modalTamanhos.innerHTML = produto.tamanhos.length ? produto.tamanhos.map((tamanho) =>
        `<label>
            <input type="radio" name="tamanho" value="${tamanho}">
            <span>${tamanho}</span>
         </label>`
    )
        .join("")
        : "Tamanho único";

    //Troca de imagem nas cores
    const inputsCor = modalCores.querySelectorAll("input[name='cor']");
    inputsCor.forEach((input) => {
        input.addEventListener("change", (e) => {
            const corSelecionada = e.target.value;
            modalImagem.src = produto.imagensCores[corSelecionada];
        });
    });
    //Exibe o modal
    modal.style.display = "flex";
}

//Add os eventos de click para cada botao "Ver mais"
btnVerMais.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const produtoId = e.target.closest(".produtos-caixas").querySelector("img").id;
        abrirModal(produtoId);
    });
});

// Fechar modal ao clicar no botao de fechar 
btnFechar.addEventListener('click', () => {
    modal.style.display = 'none';
});

//Fechar modal ao clicar fora dele 
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});