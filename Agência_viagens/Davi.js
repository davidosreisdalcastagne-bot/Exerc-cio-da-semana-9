// pegando os elementos do DOM
const inputNome = document.querySelector("#nome");
const inputEmail = document.querySelector("#email");
const inputTelefone = document.querySelector("#telefone");
const selectDestino = document.querySelector("#destino");
const inputDataIda = document.querySelector("#data-ida");
const inputDataVolta = document.querySelector("#data-volta");
const textareaMensagem = document.querySelector("#mensagem");

const form = document.querySelector("#formCadastro");
const divResumo = document.querySelector("#resumo");
const divStatus = document.querySelector("#mensagem-status");

const erroPacote = document.querySelector("#erro-pacote");
const erroTelefone = document.querySelector("#erro-telefone");
const contadorCaracteres = document.querySelector("#contador-caracteres");

// bonus 1: contando os caracteres da observacao em tempo real
textareaMensagem.addEventListener("input", () => {
    const totalCaracteres = textareaMensagem.value.length;
    contadorCaracteres.textContent = `${totalCaracteres} / 200 caracteres`;
});

// escutando o envio do formulario
form.addEventListener("submit", (evento) => {
    evento.preventDefault(); // nao deixa a pagina recarregar

    // limpando avisos de erro antigos antes de validar
    erroPacote.textContent = "";
    erroTelefone.textContent = "";
    divStatus.textContent = "";
    divStatus.classList.remove("mensagem-sucesso", "mensagem-erro");
    divResumo.innerHTML = "";

    // pegando se algum pacote foi marcado
    const pacoteEscolhido = document.querySelector('input[name="plano"]:checked');
    const telefone = inputTelefone.value.trim();

    let formularioValido = true;

    // regra de validacao 1: precisa escolher um pacote
    if (!pacoteEscolhido) {
        erroPacote.textContent = "Por favor, selecione um tipo de pacote.";
        formularioValido = false;
    }

    // regra de validacao 2: telefone precisa ter no minimo 10 digitos
    if (telefone.length < 10) {
        erroTelefone.textContent = "O telefone precisa ter pelo menos 10 dígitos.";
        formularioValido = false;
    }

    // se alguma regra do JS falhar, mostra mensagem geral de erro
    if (!formularioValido) {
        divStatus.textContent = "Corrija os erros apontados no formulário antes de enviar.";
        divStatus.classList.add("mensagem-erro");
        divStatus.classList.remove("mensagem-sucesso");
        return;
    }

    // se chegou ate aqui, deu tudo certo!
    divStatus.textContent = "Orçamento enviado com sucesso!";
    divStatus.classList.add("mensagem-sucesso");
    divStatus.classList.remove("mensagem-erro");

    // pegando os dados dos outros campos
    const nome = inputNome.value.trim();
    const email = inputEmail.value.trim();
    const destino = selectDestino.value;
    const dataIda = inputDataIda.value;
    const dataVolta = inputDataVolta.value;
    const observacoes = textareaMensagem.value.trim();
    const pacote = pacoteEscolhido.value;

    // pegando as preferencias extras marcadas
    const checkboxesExtras = document.querySelectorAll('input[name="preferencias"]:checked');
    const extras = [];

    checkboxesExtras.forEach((checkbox) => {
        extras.push(checkbox.value);
    });

    let textoExtras = "";
    if (extras.length === 0) {
        textoExtras = "Nenhum extra selecionado";
    } else {
        textoExtras = extras.join(", ");
    }

    // criando a lista do resumo com innerHTML
    divResumo.innerHTML = `
        <h2>Resumo do orçamento</h2>
        <ul>
            <li><strong>Nome:</strong> ${nome}</li>
            <li><strong>E-mail:</strong> ${email}</li>
            <li><strong>Telefone:</strong> ${telefone}</li>
            <li><strong>Destino:</strong> ${destino}</li>
            <li><strong>Tipo de pacote:</strong> ${pacote}</li>
            <li><strong>Extras:</strong> ${textoExtras}</li>
            <li><strong>Data de ida:</strong> ${dataIda}</li>
            <li><strong>Data de volta:</strong> ${dataVolta}</li>
            <li><strong>Observações:</strong> ${observacoes || "Nenhuma observação"}</li>
        </ul>
    `;
});