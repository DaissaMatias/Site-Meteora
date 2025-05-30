document.addEventListener("DOMContentLoaded", () => {
    const iconeCarrinho = document.getElementById('icone-carrinho');
    const contCarrinho = document.getElementById('carrinho-cont');

    if (!iconeCarrinho || !contCarrinho) return;

    //Recupera o carrinho do localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    //Atualiza o ícone do carrinho com a quantidade de itens
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (totalItems > 0) {
        contCarrinho. textContent = totalItems;
        contCarrinho.classList.remove('hidden');
        iconeCarrinho.style.display = 'block';
    } else {
        contCarrinho.classList.add('hidden');
        iconeCarrinho.style.display = 'none';
    }
});