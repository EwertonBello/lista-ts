const inputItem = <HTMLSelectElement>document.getElementById('iptItem');
const btnAdd = document.getElementById('btnAdd');
const lista = document.getElementById('lista');
//Usados de exemplo fixos
const ch1 = document.getElementById('ch1');
const ch2 = document.getElementById('ch2');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

function adicionar() 
{
	let txtInput: string = inputItem.value;
	if (txtInput) 
	{
		//Criando o Item
		let item = document.createElement('tr');
		//Criando CheckBox
		let thCB = document.createElement("th");
		let chBox = document.createElement("input");
		chBox.type = "checkbox";
		chBox.className = "chBox";
		chBox.addEventListener("click", feito, false);
		thCB.appendChild(chBox);
		item.appendChild(thCB);
		//Criando Texto do Item
		let txtItem = document.createElement("td");
		let txtInserido = document.createTextNode(txtInput);//Texto inserido do campo
		txtItem.appendChild(txtInserido);//Adicionando o texto no elemento TD
		txtItem.className = "item";
		item.appendChild(txtItem);
		//Criando Button Excluir
		let thDel = document.createElement("th");
		let btnDel = document.createElement("a");
		let txtBtn = document.createTextNode("Excluir");
		btnDel.appendChild(txtBtn);//Adicionando texto ao button
		btnDel.className = "button is-danger";//Inserindo classe de button do Bulma Framework
		btnDel.addEventListener("click", excluir, false);
		thDel.appendChild(btnDel);
		// thDel.addEventListener("click", excluir, false);
		item.appendChild(thDel);

		//Adicionando o Item a lista
		lista.appendChild(item);
		inputItem.value = "";//Limpando o campo
	}
}

function feito() 
{
	let chSelecionado = <HTMLSelectElement>event.currentTarget;//Elemento Filho
	let elementoTH = chSelecionado.parentElement;//Elemento Pai
	let elementoTR = elementoTH.parentElement;//Elemento Pai do Pai - o Item da lista
	elementoTR.querySelector(".item").classList.toggle("feito");
}

function excluir() 
{
	let btnSelecionado = <HTMLSelectElement>event.currentTarget;//Elemento Filho
	let elementoTH = btnSelecionado.parentElement;//Elemento Pai
	let elementoTR = elementoTH.parentElement;//Elemento Pai do Pai - O Item da lista
	elementoTR.remove();
}

btnAdd.addEventListener('click', adicionar, false);
//Exemplos fixos
ch1.addEventListener('click', feito, false);
ch2.addEventListener('click', feito, false);
btn1.addEventListener('click', excluir, false);
btn2.addEventListener('click', excluir, false);