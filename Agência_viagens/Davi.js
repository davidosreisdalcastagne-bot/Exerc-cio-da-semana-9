// pega o formulario e a div de resumo do DOM
const form = document.querySelector("#formCadastro");
const divResumo = document.querySelector("#resumo");

form.addEventListener("submit", (evento) => {
    evento.preventDefault(); // impede a pagina de recarregar

    // pega os valores digitados nos inputs
    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const telefone = document.querySelector("#telefone").value;
    const destino = document.querySelector("#destino").value;
    const dataIda = document.querySelector("#data-ida").value;
    const dataVolta = document.querySelector("#data-volta").value;
    const observacoes = document.querySelector("#mensagem").value;

    // pega o radio que esta marcado
    const planoEscolhido = document.querySelector('input[name="plano"]:checked');
    const plano = planoEscolhido ? planoEscolhido.value : "Não informado";

    // pega os checkboxes marcados
    const checkboxesExtras = document.querySelectorAll('input[name="preferencias"]:checked');
    const extras = [];

    // coloca cada extra selecionado dentro da lista com push
    checkboxesExtras.forEach((checkbox) => {
        extras.push(checkbox.value);
    });

    // verifica se tem algum extra na lista
    let textoExtras = "";
    if (extras.length === 0) {
        textoExtras = "Nenhum extra selecionado";
    } else {
        textoExtras = extras.join(", ");
    }

    // criando o HTML do resumo e colocando na div usando innerHTML
    divResumo.innerHTML = `
        <h2>Resumo do Orçamento</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Destino:</strong> ${destino}</p>
        <p><strong>Plano:</strong> ${plano}</p>
        <p><strong>Extras:</strong> ${textoExtras}</p>
        <p><strong>Data de Ida:</strong> ${dataIda}</p>
        <p><strong>Data de Volta:</strong> ${dataVolta}</p>
        <p><strong>Observações:</strong> ${observacoes || "Nenhuma"}</p>
    `;
});