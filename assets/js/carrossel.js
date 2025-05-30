
//Passagem automatica - Carrossel

let contagem = 1;
document.getElementById("radio1").checked = true;

setInterval(function() {
    nextImage();
},5000)

function nextImage() {
    contagem++;
    if(contagem > 3) {
        contagem = 1;
    }
    document.getElementById("radio"+contagem).checked = true;

}

//Configurações botão de voltar e avançar
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const radios = document.querySelectorAll('input[name="radio-btn"]');

function irParaAnterior() {
    let currentIndex = Array.from(radios).findIndex(radio => radio.checked);
    currentIndex = (currentIndex === 0) ? radios.length -1 : currentIndex -1;
    radios[currentIndex].checked = true;
}

function irParaProximo() {
    let currentIndex = Array.from(radios).findIndex(radio => radio.checked);
    currentIndex = (currentIndex === radios.length -1) ? 0 : currentIndex +1;
    radios[currentIndex].checked = true;
}

prevButton.addEventListener('click', irParaAnterior);
nextButton.addEventListener('click', irParaProximo);