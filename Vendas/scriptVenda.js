function Venda(funcionario, cliente, codigo, itens, quantidade, data, total, nfe){
    this.funcionario = funcionario;
    this.cliente = null || cliente;
    this.codigo = codigo;
    this.itens = itens;
    this.quantidade = quantidade;
    this.data = data;
    this.total = total;
    this.nfe = nfe;
}

function vender() {
  let { funcionario, cliente, codigo, quantidade } = getHTMLInputs();

  if (localStorage.length = 0) alert("Sem itens em estoque!");
  else {
    var itemArray = new Array(), itemQuantidades = new Array();
    codigo = Array.from(codigo);
    quantidade = Array.from(quantidade);
    setCodigoQuantidade();
    let  valorTotal = 0;
    codigo.forEach((codigo,index) => {
      item = JSON.parse(localStorage.getItem(codigo));
      valorTotal += item.valor * quantidade[index].value;

      item.quantidade = parseInt(item.quantidade);
      item.quantidade += -(quantidade[index].value);
      localStorage.setItem(codigo, JSON.stringify(item));

      notaFiscal = gerarCodigo();
    })
    let novaVenda = new Venda(funcionario, cliente, codigo, itemArray, itemQuantidades, new Date(), valorTotal, notaFiscal);
    if (localStorage.getItem("vendas")) {
      let arrayVenda = JSON.parse(localStorage.getItem("vendas"));
      arrayVenda.push(novaVenda);
      localStorage.setItem("vendas", JSON.stringify(arrayVenda));
    }
    else {
      let arrayVenda = [];
      arrayVenda.push(novaVenda);
      localStorage.setItem("vendas", JSON.stringify(arrayVenda))
    }
    alert("Venda realizada com sucesso!\n\nValor Total: R$ "+valorTotal+"\nNota Fiscal: "+notaFiscal);
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

var sorteados = [];
var valorMaximo = 100000000;
var codigo= 0;

function gerarCodigo() {
    if (sorteados.length == valorMaximo) {
        if (confirm('Já não há mais! Quer recomeçar?')) sorteados = [];
        else return;
    }
    codigo = Math.ceil(Math.random() * valorMaximo);
    while (sorteados.indexOf(codigo) >= 0) {
        codigo = Math.ceil(Math.random() * valorMaximo);
    }
    sorteados.push(codigo);
    return codigo;
}
