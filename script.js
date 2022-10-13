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
const items = document.getElementsByClassName("item");

function alerta(){
    alert("Algo acontece");
}

function contarSelecoes(){
    let contadorSelecao = 0;
    for(let i = 0; i<items.length; i++){
        if(items[i].classList.contains("selecao")){
            contadorSelecao++;
        }
    }
    return contadorSelecao;
}

function disponibilizarBotao(contadorSelecao){
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

function select(){  
    this.classList.toggle("selecao")
    disponibilizarBotao(contarSelecoes());
}

for(let i = 0; i < items.length; i++){
    items[i].style.cursor="pointer";
    items[i].addEventListener("click", select);
}



