const items = document.querySelectorAll(".item");
const telaConfirmacao = document.querySelector(".container-confirmacao");
const body = document.querySelector("body");
let mensagem;

function cancelar(){
    /**
     * Retorna a tela anterior.
     */
    telaConfirmacao.classList.add("not-display")
    body.classList.remove("not-slide");
}

function somaFormatada(precos){
    /**
     * Soma lista de preços a formatando o delimitador decimal com virgula.
     * @param {array} precos lista de preços.
     * @return {float} soma formatada.
     */
    soma = 0;
    for(let i=0;i < precos.length; i++){
        soma += Number(precos[i].replace(",","."));
    }
    return soma.toFixed(2).replace(".",",");
}

function confirma(){
    /**
     * Mostra tela de confirmação com itens e preços e formata a mensagem a ser enviada por whatsapp.
     */
    const selecoes = document.querySelectorAll(".selecao");
    let titulos = [],precos = [];
    for(let i = 0; i < selecoes.length; i++){
        const titulo = selecoes[i].querySelector(".titulo").innerText;
        const precoNF = selecoes[i].querySelector(".preco").innerText;
        titulos.push(titulo);
        precos.push(precoNF.slice(3));
    }
    const confirmacaoItens = document.querySelectorAll(".confirmacao-item");
    for(let i = 0; i < confirmacaoItens.length; i++){
        confirmacaoItens[i].querySelector(".titulo-confirmado").innerText = titulos[i];
        confirmacaoItens[i].querySelector(".preco-confirmado").innerText = precos[i];
    }
    const precoTotal = somaFormatada(precos);
    document.querySelector(".preco-total").innerText = precoTotal;
    telaConfirmacao.classList.remove("not-display");
    body.classList.add("not-slide");
    mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${titulos[0]}\n- Bebida: ${titulos[1]}\n- Sobremesa: ${titulos[2]}\nTotal: R$ ${precoTotal.replace(",",".")}\n`;
}



function disponibilizarBotao(){
    /**
     * Checa se o botão pode ser disponibilizado.
     */
    const selecoes = document.querySelectorAll(".selecao");
    const contadorSelecao = selecoes.length;
    const botao = document.querySelector(".botao");
    if(contadorSelecao >= 3){
        botao.classList.add("disponivel");
        botao.innerHTML = "<p class='bold'>Fechar pedido</p>";
        botao.addEventListener("click", confirma)
    } else if(botao.classList.contains("disponivel")){
        botao.classList.remove("disponivel");
        botao.innerHTML = "<p>Selecione os 3 itens para fechar o pedido</p>";
        botao.removeEventListener("click",confirma)
    }
}
function deselect(child){
    /**
     * Garante que só um item de cada categoria terá um atributo.
     * @param {Object} child Item clicado.
     */
    const pai = child.parentElement; //Pega o elemento pai do item clicado.
    if(pai.querySelector(".selecao") != null && pai.querySelector(".selecao") != child){ //Se o elemento pai tiver um item selecionado e esse item não for o item clicado.
        pai.querySelector(".selecao").classList.remove("selecao"); //Remove a classe "selecao" do item selecionado.
    } 
}

function select(e){  
    /**
     * Seleciona item clicado.
     */
    const target = e.target;
    let child;
    

    if(target.matches(".item") || target.parentNode.matches(".item")){ //Se o elemento clicado for um item.
        (target.matches(".item"))? child = target : child = target.parentNode; //Se o elemento clicado for um item, ele é o filho, caso contrário, o filho é o elemento pai do elemento clicado.
        deselect(child,"selecao");
        child.classList.toggle("selecao");
        disponibilizarBotao();
    }
}

document.querySelector(".container").addEventListener("click",select);

function confirmar(){
    /**
     * Confirma pedido por Whatsapp.
     */
    const nome = prompt("Insira seu nome:");
    const endereco = prompt("Insira seu endereço:");
    mensagem += `\nNome: ${nome}\nEndereço: ${endereco}`;
    const link = "https://wa.me/5512123456789?text="+encodeURIComponent(mensagem);
    window.open(link,"_self");
}
