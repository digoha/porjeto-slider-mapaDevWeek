/*
Objetivo 1 - quando clicarmos na seta de avançar temos que mostrar o proximo cartão
    passo 1 - dar um jeito de pegar o codigo HTML da seta avançar
    passo 2 - dar um jeito de identificar o clique do usuario na seta avancar
    passo 3 - fazer aparecer o proximo cartao
    passo 4 - buscar o cartao que esta selecionado e esconder

Objetivo 2 - igual o 1, porem com a seta de voltar
*/

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");

const cartoes = document.querySelectorAll(".cartao");

let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add("selecionado");
}

btnAvancar.addEventListener("click", function(){

    if(cartaoAtual === cartoes.length - 1){
        return;
    }

    
    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);

});

btnVoltar.addEventListener("click", function(){

    if(cartaoAtual === 0){
        return;
    }

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);
});


