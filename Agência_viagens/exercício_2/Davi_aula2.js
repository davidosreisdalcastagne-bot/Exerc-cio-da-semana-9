const inputNome = document.querySelector("#nome");
const ingresso = document.querySelector("#ingresso");
const form = document.querySelector("#formCadastro");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = inputNome.value;
    console.log("dados enviado! nome: " + nome);

    console.log("Ingresso incluído? " + ingresso.checked);

    const pacoteEscolhido = document.querySelector(
        'input[name="pacote"]:checked'
    );

    if (pacoteEscolhido) {
        console.log(pacoteEscolhido.value);
    }

console.log("Destino escolhido: " + destino.value);
});