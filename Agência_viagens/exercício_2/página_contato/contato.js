// pega o formulario e a area de resultado do DOM
const formContato = document.getElementById("formContato");
const divResultado = document.getElementById("resultado-contato");

formContato.addEventListener("submit", (evento) => {
    evento.preventDefault(); // cancela o reload da pagina

    // pega os valores exatos usando getElementById + .value
    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // bonus: verifica se algum campo ficou sem preencher
    if (nome === "" || telefone === "" || email === "" || mensagem === "") {
        divResultado.innerHTML = `<p class="mensagem-erro">Por favor, preencha todos os campos antes de enviar!</p>`;
        return;
    }

    // exibe a mensagem de confirmacao caso esteja tudo certo
    divResultado.innerHTML = `
        <div class="mensagem-sucesso">
            <h2>Mensagem enviada!</h2>
            <p>Recebemos seu contato, ${nome}! Retornaremos no e-mail ${email}.</p>
        </div>
    `;

    // limpa os campos do formulario apos o envio
    formContato.reset();
});