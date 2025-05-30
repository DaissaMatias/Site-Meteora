// Menu Hamburger
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/imgens/Mobile/Ícones/navbar-mobile/icone-menu-ham.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/imgens/Mobile/Ícones/navbar-mobile/icone-menu-fechar.svg";
    }
}

//Destaque aba ativa cabeçalho desktop
document.addEventListener("DOMContentLoaded", function () {
    const linksMenu = document.querySelectorAll(".menu-item");
    const paginaAtual = window.location.pathname.split("/").pop();

    linksMenu.forEach(link => {
        if(link.getAttribute("href") === `./${paginaAtual}`) {
            link.classList.add("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    //Seleciona os links do menu
    const navItems = document.querySelectorAll(".mobile-menu .nav-item a");
    //Obtem a URL atual da página
    const paginaAtual = window.location.href;

    //Percorre os links do menu e adiciona a classe "active" ao link correspondente
    navItems.forEach(item => {
        const hrefCompleto = new URL(item.href, window.location.origin).href;

        if(paginaAtual === hrefCompleto) {
            item.classList.add("active");
            localStorage.setItem("paginaAtiva", hrefCompleto);
        }
    });

    //Ao abrir o menu novamente, reaplica a classe "active"
    const paginaSalva = localStorage.getItem("paginaAtiva");
    navItems.forEach(item => {
        const hrefCompleto = new URL(item.href, window.location.origin).href;
        if(paginaSalva && paginaSalva === hrefCompleto) {
            item.classList.add("active");
        }
    });
});

//SETA VOLTAR AO TOP
const voltarAoTopo = document.querySelector('#backToTop');

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        voltarAoTopo.style.display = "block";
    } else {
        voltarAoTopo.style.display = "none";
    }
};

voltarAoTopo.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
})