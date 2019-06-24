function Venda(funcionario, cliente, codigo, itens, quantidade, data){
    this.funcionario = funcionario;
    this.cliente = null || cliente;
    this.codigo = codigo;
    this.itens = itens;
    this.quantidade = quantidade;
    this.data = data;
}

function vender() {
  let { funcionario, cliente, codigo, quantidade } = getHTMLInputs();

  if (localStorage.length = 0) alert("Sem itens em estoque!");
  else {
    var itemString = "", itemQuantidades = "";
    codigo = Array.from(codigo);
    for (i = 0; i < codigo.length; i++) {
      codigo[i] = String(codigo[i].value);
      codigo[i] = codigo[i].padStart(3, "0");
      codigo[i] = "e" + codigo[i];
      //Padrão armazenamento do estoque no localStorage, "e" seguido pelo código com 3 digitos.

      var itemObj = JSON.parse(localStorage.getItem(codigo[i]));
      itemString += itemObj.describe + ", ";
    }
    let novaVenda = new Venda(funcionario, cliente, codigo, itemString, Array.from(quantidade), new Date());
    novaVenda = JSON.stringify(novaVenda);
    if (localStorage.getItem("vendas") == null) localStorage.setItem("vendas", [novaVenda])
    else {
      tempArrayVendas = localStorage.getItem("vendas");
      tempArrayVendas.push(novaVenda);
    }
  }
}

function getHTMLInputs() {
  let funcionario = document.getElementById("codFuncionario").value, cliente = document.getElementById("nomeCliente").value, codigo = document.getElementsByClassName("codigo"), quantidade = document.getElementsByClassName("quantidade");
  return { funcionario, cliente, codigo, quantidade };
}

function adicionaCampos() {
  let formCampos = document.getElementById("camposVenda"),
  cloneCampos = formCampos.cloneNode(true);
  containerCampos = document.getElementById("containerCampos");
  containerCampos.appendChild(cloneCampos);
}