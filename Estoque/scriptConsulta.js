function deletaItem(key){
    key = String(key);
    key = key.padStart(6,"0");
    key = "e" + key;
    let confirma = prompt("Tem certeza que deseja deletar? \nInforme o código do item para confirmar");
    confirma = "e" + confirma;
    console.log(key + " confirma:" + confirma);
    if (confirma === key){
        localStorage.removeItem(key);
        alert("Item deletado com sucesso");
        location.reload();
    } else alert("Item não removido")

}

function atualizaItem(key){
    key = String(key);
    key = key.padStart(6,"0");
    key = "e" + key;
    itemAtualizado = JSON.parse(localStorage.getItem(key));
    itemAtualizado.valor = parseFloat(prompt("Informe novo valor"));
    itemAtualizado.quantidade = parseInt(prompt("Informe nova quantidade"));
    itemAtualizado.describe = prompt("Informe nova descrição");
    localStorage.setItem(key,JSON.stringify(itemAtualizado));
    location.reload();
}

function insereItens() {
    let { table, buttonUpdate, buttonDelete } = criaElementosHTML();

    if(localStorage.length === 0) alert("Sem itens em estoque!")
    else for (i=0; i<localStorage.length; i++){
        let itemEstoque = JSON.parse(localStorage.getItem(localStorage.key(i)));
        let { cell0, cell1, cell2, cell3, cell4, cell5 } = elementosTabela();
        insereValoresTabela(itemEstoque, cell0, cell1, cell2, cell3, cell4, cell5);
    }

    function insereValoresTabela(itemEstoque, cell0, cell1, cell2, cell3, cell4, cell5) {
        cell0.innerHTML = itemEstoque.codigo;
        cell1.innerHTML = itemEstoque.valor;
        cell2.innerHTML = itemEstoque.quantidade;
        cell3.innerHTML = itemEstoque.describe;
        buttonUpdate.setAttribute("onclick", "atualizaItem(" + itemEstoque.codigo + ")")
        cell4.append(buttonUpdate);
        cell4.innerHTML +="";
        buttonDelete.setAttribute("onclick", "deletaItem(" + itemEstoque.codigo + ")")
        cell5.append(buttonDelete);
        cell5.innerHTML +="";
    }

    function elementosTabela() {
        let row = table.insertRow(-1);
        let cell0 = row.insertCell(0);
        let cell1 = row.insertCell(1);
        let cell2 = row.insertCell(2);
        let cell3 = row.insertCell(3);
        let cell4 = row.insertCell(4);
        let cell5 = row.insertCell(5);
        return { cell0, cell1, cell2, cell3, cell4, cell5 };
    }

    function criaElementosHTML() {
        let table = document.getElementById("tabelaEstoque");
        let onClickDelete = document.createAttribute("onclick");

        let buttonDelete = document.createElement("button");
        buttonDelete.innerHTML = "Deletar";
        buttonDelete.classList.add("btn", "btn-danger", "btn-sm");
        buttonDelete.setAttributeNode(onClickDelete);

        let onClickUpdate = document.createAttribute("onclick");
        let buttonUpdate = document.createElement("button");
        buttonUpdate.innerHTML = "Atualizar";
        buttonUpdate.classList.add("btn", "btn-primary", "btn-sm");
        buttonUpdate.setAttributeNode(onClickUpdate);
        return { table, buttonUpdate, buttonDelete };
    }
}

window.onload = insereItens;
