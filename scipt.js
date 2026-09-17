const botao = document.querySelector('button');
const contador = document.querySelector('span');

let quantidade = 0;

botao.addEventListener('click', function() {
    quantidade = quantidade + 1;
    contador.textContent = quantidade;
});