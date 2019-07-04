var inputItem = document.getElementById('iptItem');
var btnAdd = document.getElementById('btnAdd');
var lista = document.getElementById('lista');
//Usados de exemplo fixos
var ch1 = document.getElementById('ch1');
var ch2 = document.getElementById('ch2');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
function adicionar() {
    var txtInput = inputItem.value;
    if (txtInput) {
        //Criando o Item
        var item = document.createElement('tr');
        //Criando CheckBox
        var thCB = document.createElement("th");
        var chBox = document.createElement("input");
        chBox.type = "checkbox";
        chBox.className = "chBox";
        chBox.addEventListener("click", feito, false);
        thCB.appendChild(chBox);
        item.appendChild(thCB);
        //Criando Texto do Item
        var txtItem = document.createElement("td");
        var txtInserido = document.createTextNode(txtInput); //Texto inserido do campo
        txtItem.appendChild(txtInserido); //Adicionando o texto no elemento TD
        txtItem.className = "item";
        item.appendChild(txtItem);
        //Criando Button Excluir
        var thDel = document.createElement("th");
        var btnDel = document.createElement("a");
        var txtBtn = document.createTextNode("Excluir");
        btnDel.appendChild(txtBtn); //Adicionando texto ao button
        btnDel.className = "button is-danger"; //Inserindo classe de button do Bulma Framework
        btnDel.addEventListener("click", excluir, false);
        thDel.appendChild(btnDel);
        // thDel.addEventListener("click", excluir, false);
        item.appendChild(thDel);
        //Adicionando o Item a lista
        lista.appendChild(item);
        inputItem.value = ""; //Limpando o campo
    }
}
function feito() {
    var chSelecionado = event.currentTarget; //Elemento Filho
    var elementoTH = chSelecionado.parentElement; //Elemento Pai
    var elementoTR = elementoTH.parentElement; //Elemento Pai do Pai - o Item da lista
    elementoTR.querySelector(".item").classList.toggle("feito");
}
function excluir() {
    var btnSelecionado = event.currentTarget; //Elemento Filho
    var elementoTH = btnSelecionado.parentElement; //Elemento Pai
    var elementoTR = elementoTH.parentElement; //Elemento Pai do Pai - O Item da lista
    elementoTR.remove();
}
btnAdd.addEventListener('click', adicionar, false);
//Exemplos fixos
ch1.addEventListener('click', feito, false);
ch2.addEventListener('click', feito, false);
btn1.addEventListener('click', excluir, false);
btn2.addEventListener('click', excluir, false);
