function insereItens() {
    let table = document.getElementById("tabelaRelatorio");

    if (!(localStorage.getItem("vendas"))) alert("Sem vendas para relatar!")

    else {
        const vendas = localStorage.getItem("vendas");
        for (i = 0; i < vendas.length; i++) {
            // let venda = JSON.parse(vendas[i]);
            console.log(vendas);
            let { cell0, cell1, cell2, cell3 } = elementosTabela();
            insereValoresTabela(vendas, cell0, cell1, cell2, cell3);
        }
    }

    function insereValoresTabela(vendas, cell0, cell1, cell2, cell3) {
        cell0.innerHTML = vendas.funcionario;
        cell1.innerHTML = vendas.cliente;
        cell2.innerHTML = vendas.data;
        cell3.innerHTML = vendas.describe;
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