/*Primeiro teste que fiz para entender algumas coisas de usar JS para editar o HTML.
const items = document.getElementsByClassName("item");

 
function myFunc(){
    if(this.style.backgroundColor === "red"){
        this.style.backgroundColor = "#FFFFFF";
    } else{
        this.style.backgroundColor = "red";
    }
}

for(let i = 0; i < items.length; i++){
    items[i].style.cursor="pointer";
    items[i].addEventListener("click", myFunc);
}
*/
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

function contarSelecoes(){
    /**
     * Conta todos os itens com a classe "selecao"
     */
    let contadorSelecao = 0;
    for(let i = 0; i<items.length; i++){
        if(items[i].classList.contains("selecao")){
            contadorSelecao++;
        }
    }
    return contadorSelecao;
}

function disponibilizarBotao(contadorSelecao){
    /**
     * Checa se o botão pode ser disponibilizado.
     * @param {Int} contadorSelecao numero de itens selecionados.
     */
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
function deselect(child,attribute){
    /**
     * Garante que só um item de cada categoria terá um atributo.
     * @param {Object} child Item clicado.
     * @param {String} attribute Atributo a ser checado se outros elementos do pai possuem.
     */
    const children = child.parentNode.children; //Pega todas as crianças do pai.
    const index = Array.prototype.indexOf.call(children,child); //Pega indice do item sendo clicado.
    for(let i = 0; i<children.length;i++){
        const classes = children[i].classList;
        if(classes.contains(attribute) && i !== index){ //Checa se criança, que não o selecionado, tem atributo
            classes.toggle(attribute); //Troca o atributo se tiver
        }
    }
}

function select(){  
    /**
     * Seleciona item clicado.
     */
    deselect(this,"selecao");
    this.classList.toggle("selecao");
    disponibilizarBotao(contarSelecoes());
}

for(let i = 0; i < items.length; i++){
    items[i].style.cursor="pointer";
    items[i].addEventListener("click", select);
}

function confirmar(){
    /**
     * Confirma pedido por Whatsapp.
     */
    const nome = prompt("Insira seu nome:");
    const endereco = prompt("Insira seu endereço:");
    mensagem += `\nNome: ${nome}\nEndereço: ${endereco}`;
    const link = "https://wa.me/5521991868083?text="+encodeURIComponent(mensagem);
    window.open(link,"_self");
}
