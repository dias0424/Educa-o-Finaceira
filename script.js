
const botao = document.querySelector('.boto');

let contador = 0;

function adicionarClique() {
    contador++; // Incrementa o contador
    botao.textContent = `Número de cliques: ${contador}`; // Atualiza o texto do botão
}

botao.addEventListener('click', adicionarClique);

