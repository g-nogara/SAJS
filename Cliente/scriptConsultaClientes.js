function deletaItem(key){
    key = String(key);
    key = key.padStart(6,"0");
    key = "c" + key;
    let confirma = prompt("Tem certeza que deseja deletar? \nInforme o código do cliente para confirmar");
    confirma = "c" + confirma;
    console.log(key + " confirma:" + confirma);
    if (confirma === key){
        localStorage.removeItem(key);
        alert("Cliente deletado com sucesso");
        location.reload();
    } else alert("Cliente não removido")

}

function atualizaItem(key){
    key = String(key);
    key = key.padStart(6,"0");
    key = "c" + key;
    itemAtualizado = JSON.parse(localStorage.getItem(key));
    itemAtualizado.endereço = prompt("Informe o novo endereço");
    itemAtualizado.numTel = prompt("Informe o novo telefone");
    itemAtualizado.email = prompt("Informe o novo email");
    localStorage.setItem(key,JSON.stringify(itemAtualizado));
    location.reload();
}

function insereItens() {
    let { table, buttonUpdate, buttonDelete } = criaElementosHTML();
    if(localStorage.length === 0) alert("Sem clientes cadastrados!")
    else for (var i=0; i<localStorage.length; i++){
        if(localStorage.key(i).charAt(0)=="c"){
            let itemEstoque = JSON.parse(localStorage.getItem(localStorage.key(i)));
            let { cell0, cell1, cell2, cell3, cell4, cell5, cell6} = elementosTabela();
            insereValoresTabela(itemEstoque, cell0, cell1, cell2, cell3, cell4, cell5, cell6);
        }
    }

    function insereValoresTabela(itemEstoque, cell0, cell1, cell2, cell3, cell4, cell5, cell6) {
        cell0.innerHTML = itemEstoque.codigoCliente;
        cell1.innerHTML = itemEstoque.nomeCliente;
        cell2.innerHTML = itemEstoque.endereço;
        cell3.innerHTML = itemEstoque.numTel;
        cell4.innerHTML = itemEstoque.email
        buttonUpdate.setAttribute("onclick", "atualizaItem(" + itemEstoque.codigoCliente + ")")
        cell5.append(buttonUpdate);
        cell5.innerHTML +="";
        buttonDelete.setAttribute("onclick", "deletaItem(" + itemEstoque.codigoCliente + ")")
        cell6.append(buttonDelete);
        cell6.innerHTML +="";
    }

    function elementosTabela() {
        let row = table.insertRow(-1);
        let cell0 = row.insertCell(0);
        let cell1 = row.insertCell(1);
        let cell2 = row.insertCell(2);
        let cell3 = row.insertCell(3);
        let cell4 = row.insertCell(4);
        let cell5 = row.insertCell(5);
        let cell6 = row.insertCell(6);
        return { cell0, cell1, cell2, cell3, cell4, cell5, cell6 };
    }

    function criaElementosHTML() {
        let table = document.getElementById("tabelaClientes");
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
