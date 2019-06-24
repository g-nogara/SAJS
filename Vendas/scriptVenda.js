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
    var itemArray = new Array(), itemQuantidades = new Array();
    codigo = Array.from(codigo);
    quantidade = Array.from(quantidade);
    setCodigoQuantidade();
    let novaVenda = new Venda(funcionario, cliente, codigo, itemArray, itemQuantidades, new Date());
    if (localStorage.getItem("vendas")) {
      let arrayVenda = new Array();
      arrayVenda[0] = localStorage.getItem("vendas");
      console.log("true");
      arrayVenda.push(JSON.stringify(novaVenda));
      localStorage.setItem("vendas", arrayVenda);      
    }
    else {
      let arrayVenda = new Array();
      arrayVenda.push(JSON.stringify(novaVenda));
      localStorage.setItem("vendas", arrayVenda)
    } 
  }

  function setCodigoQuantidade() {
    for (i = 0; i < codigo.length; i++) {
      codigo[i] = String(codigo[i].value);
      codigo[i] = codigo[i].padStart(3, "0");
      codigo[i] = "e" + codigo[i];
      var itemObj = JSON.parse(localStorage.getItem(codigo[i]));
      itemArray.push(itemObj.describe);
      itemQuantidades.push(quantidade[i].value);
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