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

function select(){
    if(this.getAttribute('class') === "item"){
        this.setAttribute('class','item selecao');
    }else{
        this.setAttribute('class','item');
    }
    
}

for(let i = 0; i < items.length; i++){
    items[i].style.cursor="pointer";
    items[i].addEventListener("click", select);
}
