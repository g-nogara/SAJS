function insereItens() {
    let table = document.getElementById("tabelaRelatorio");

    if (!(localStorage.getItem("vendas"))) alert("Sem vendas para relatar!")

    else {
        const vendas = JSON.parse(localStorage.getItem("vendas"));
        for (i = 0; i < vendas.length; i++) {
            let { cell0, cell1, cell2, cell3 } = elementosTabela();
            insereValoresTabela(vendas[i], cell0, cell1, cell2, cell3);
        }
    }

    function insereValoresTabela(venda, cell0, cell1, cell2, cell3) {
        let funcionario = String(venda.funcionario);
        funcionario = funcionario.padStart(3, "0");
        funcionario = "f" + funcionario;
        funcionario = JSON.parse(sessionStorage.getItem(funcionario));
        cell0.innerHTML = funcionario.nome;
        cell1.innerHTML = venda.quantidade;
        cell2.innerHTML = "xD";
        let data = venda.data;
        data.toString();
        data = data.substring(0,10);
        console.log(data);
        cell3.innerHTML = data;
    }

    function elementosTabela() {
        let row = table.insertRow(-1);
        let cell0 = row.insertCell(0);
        let cell1 = row.insertCell(1);
        let cell2 = row.insertCell(2);
        let cell3 = row.insertCell(3);
        return { cell0, cell1, cell2, cell3 };
    }
}

window.onload = insereItens;
