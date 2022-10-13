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

function alerta(){
    alert("Algo acontece");
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
        botao.addEventListener("click", alerta)
    } else if(botao.classList.contains("disponivel")){
        botao.classList.remove("disponivel");
        botao.innerHTML = "<p>Selecione os 3 itens para fechar o pedido</p>";
        botao.removeEventListener("click",alerta)
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