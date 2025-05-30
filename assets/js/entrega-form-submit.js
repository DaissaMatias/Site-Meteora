//Formatação campo numero
document.getElementById("sem-numero").addEventListener("change", function (e) {
    const campoNumero = document.getElementById("numero");

    if (e.target.checked) {
        campoNumero.value = "Sem número";
        campoNumero.setAttribute("disabled", "true");
    } else {
        campoNumero.value = "";
        campoNumero.removeAttribute("disabled");
    }
});

//Edita automaticamente o campo telefone
document.getElementById("telefone").addEventListener("input", function (event) {
    let telefone = event.target.value.replace(/\D/g, "");//Remove caracteres não numericos

    if (telefone.length >= 11) {
        telefone = `(${telefone.slice(0, 2)}) ${telefone.slice(2, 7)}-${telefone.slice(7, 11)}`;
    } else if (telefone.length >= 10) {
        telefone = `(${telefone.slice(0, 2)}) ${telefone.slice(2, 6)}-${telefone.slice(6, 10)}`
    }

    event.target.value = telefone;
})

//Edita automaticamente o campo cep
document.getElementById("cep").addEventListener("input", function (event) {
    let cep = event.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos

    if (cep.length >= 8) {
        cep = `${cep.slice(0, 5)}-${cep.slice(5, 8)}`;
    }

    event.target.value = cep;
});


//Lista dinâmica de estados
const estados = [
    { sigla: "AC", nome: "Acre" },{ sigla: "AL", nome: "Alagoas" }, { sigla: "AP", nome: "Amapá" },
    { sigla: "AM", nome: "Amazonas" },{ sigla: "BA", nome: "Bahia" },{ sigla: "CE", nome: "Ceará" },
    { sigla: "DF", nome: "Distrito Federal" },{ sigla: "ES", nome: "Espírito Santo" },{ sigla: "GO", nome: "Goiás" },
    { sigla: "MA", nome: "Maranhão" },{ sigla: "MT", nome: "Mato Grosso" },{ sigla: "MS", nome: "Mato Grosso do Sul" },
    { sigla: "MG", nome: "Minas Gerais" },{ sigla: "PA", nome: "Pará" },{ sigla: "PB", nome: "Paraíba" },
    { sigla: "PR", nome: "Paraná" },{ sigla: "PE", nome: "Pernambuco" },{ sigla: "PI", nome: "Piauí" },
    { sigla: "RJ", nome: "Rio de Janeiro" },{ sigla: "RN", nome: "Rio Grando do Norte" },{ sigla: "RS", nome: "Rio Grande do Sul" },{ sigla: "RO", nome: "Rondônia" },{ sigla: "RR", nome: "Roraima" },{ sigla: "SC", nome: "Santa Catarina" },
    { sigla: "SP", nome: "São Paulo" }, { sigla: "SE", nome: "Sergipe" },{ sigla: "TO", nome: "Tocantins" },
];

document.addEventListener("DOMContentLoaded", function () {
    const selectEstado = document.getElementById("estado");

    estados.forEach(estado => {
        const option = document.createElement("option");
        option.value = estado.sigla;
        option.textContent = estado.nome;
        selectEstado.appendChild(option);
    });
});

//Preenchimento automatico de endereço
document.getElementById('cep').addEventListener("blur", function () {
    const cep = this.value.replace(/\D/g, "");

    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    document.getElementById("endereco").value = data.logradouro || "";
                    document.getElementById("bairro").value = data.bairro || "";
                    document.getElementById("cidade").value = data.localidade || "";
                    document.getElementById("estado").value = data.uf || "";

                    if (data.logradouro) {
                        document.getElementById("endereco").setAttribute("readonly", true);
                    } else {
                        document.getElementById("endereco").removeAttribute("readonly");
                    }

                    document.getElementById("bairro").setAttribute("readonly", true);
                    document.getElementById("cidade").setAttribute("readonly", true);
                    document.getElementById("estado").setAttribute("disabled", true);
                } else {
                    alert("CEP não encontrado, verifique e tente novamente")
                }
            })
            .catch(error => {
                console.error("Erro ao buscar CEP: ", error);
                alert("⚠️ Houve um erro na busca do CEP. Tente novamente!")
            });
    }
});

function mostrarErro(id, mensagem){
    const spanErro = document.getElementById(`erro-${id}`);
    spanErro.textContent = mensagem;
    marcarErroInput(id);
}
function limparErro(id) {
    const spanErro = document.getElementById(`erro-${id}`);
    spanErro.textContent = "";
    desmarcarErroInput(id);
}

function marcarErroInput(inputId) {
    document.getElementById(inputId).classList.add("erro-input");
}
function desmarcarErroInput(inputId) {
    document.getElementById(inputId).classList.remove("erro-input");
}

//Validações
function validarEndereco() {
    const enderecoInput = document.getElementById("endereco");
    const endereco = enderecoInput.value.trim();

    if(!enderecoInput.hasAttribute("readonly") && endereco === "") {
        mostrarErro("endereco","⚠️ O campo 'Endereço' é obrigatório! Preencha-o antes de continuar.");
        enderecoInput.focus();
        return false;
    } else {
        limparErro("endereco");
    }
    return true;
}

function validarNumero() {
    const semNumero = document.getElementById("sem-numero").checked;
    const numero = document.getElementById("numero").value.trim();

    if(!semNumero && numero === "") {
        mostrarErro("numero","⚠️ Preencha o número ou marque 'Sem número' para continuar!");
        document.getElementById("numero").focus();
        return false; 
    } else {
        limparErro("numero");
    }
    return true;
}

//Captura de Dados
function capturarDadosEntrega(){
    return {
        nome: document.getElementById("nome").value,
        telefone: document.getElementById("telefone").value,
        email: document.getElementById("email").value,
        cep: document.getElementById("cep").value,
        endereco: document.getElementById("endereco").value,
        numero: document.getElementById("sem-numero").checked ? "Sem número" : document.getElementById("numero").value,
        complemento: document.getElementById("complemento").value,
        bairro: document.getElementById("bairro").value,
        cidade: document.getElementById("cidade").value,
        estado: document.getElementById("estado").value,
        referencia: document.getElementById("referencia").value,
    }
}

//Função princial de envio
function salvarDadosEntrega(event) {
    if (event) event.preventDefault();

    if (!validarEndereco() || !validarNumero()) {
        return;
    }

    const dadosEntrega = capturarDadosEntrega();

    localStorage.setItem("dadosEntrega", JSON.stringify(dadosEntrega));
    window.location.href = "./pag-confirma-pg.html";
}

//Recuperação de dados (auto preenchimento)
function preencherDadosEntrega() {
    const dadosEntrega = JSON.parse(localStorage.getItem("dadosEntrega"));

    if (dadosEntrega) {
        document.getElementById("nome").value = dadosEntrega.nome;
        document.getElementById("telefone").value = dadosEntrega.telefone;
        document.getElementById("email").value = dadosEntrega.email;
        document.getElementById("cep").value = dadosEntrega.cep;
        document.getElementById("endereco").value = dadosEntrega.endereco;
        document.getElementById("numero").value = dadosEntrega.numero;
        document.getElementById("complemento").value = dadosEntrega.complemento;
        document.getElementById("bairro").value = dadosEntrega.bairro;
        document.getElementById("cidade").value = dadosEntrega.cidade;
        document.getElementById("estado").value = dadosEntrega.estado;
        document.getElementById("referencia").value = dadosEntrega.referencia;
    }
}

//salvar e recuperar o checkbox "Sem numero"
document.addEventListener("DOMContentLoaded", function () {
    preencherDadosEntrega();

    const checkboxSemNumero = document.getElementById("sem-numero");
    const campoNumero = document.getElementById("numero");

    //Recupera o estado do checkbox salvo no laocalStorage
    const semNumeroSelecionado = localStorage.getItem("semNumeroSelecionado") === "true";

    checkboxSemNumero.checked = semNumeroSelecionado;
    campoNumero.value = localStorage.getItem("numeroEndereco") || "";

    if (semNumeroSelecionado) {
        campoNumero.setAttribute("disabled", "true");
    }

    //Salvar estado ao marcar/desmarcar o checkbox
    checkboxSemNumero.addEventListener("change", function () {
        if (this.checked) {
            campoNumero.value = "Sem número";
            campoNumero.setAttribute("disabled", "true");
            localStorage.setItem("semNumeroSelecionado", "true");
        } else {
            campoNumero.value = "";
            campoNumero.removeAttribute("disabled");
            localStorage.setItem("semNumeroSelecionado", "false");
        }
        localStorage.setItem("numeroEndereco", campoNumero.value);
    });
    //Salvar número ao digitar
    campoNumero.addEventListener("input", function () {
        localStorage.setItem("numeroEndereco", this.value);
    });

    document.getElementById("continuar-entrega").addEventListener("click", salvarDadosEntrega);
});