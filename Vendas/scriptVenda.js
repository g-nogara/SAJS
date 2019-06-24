function Venda(funcionario, cliente, codigo, quantidade){
    this.funcionario = funcionario;
    this.cliente = null || cliente;
    this.codigo = codigo;
    this.quantidade = quantidade;
}

function vender(){
    let { funcionario, cliente, codigo, quantidade } = getHTMLInputs();

    let novaVenda = new Venda(funcionario, cliente, codigo, quantidade);
    novaVenda = JSON.stringify(novaVenda);
    if (localStorage.length = 0) alert("Sem itens em estoque!");
    else{
          var itemString = "";
          codigo = Array.from(codigo);
          for (i=0; i<codigo.length; i++){
            codigo[i] = String(codigo[i].value);
            codigo[i] = codigo[i].padStart(3,"0");
            codigo[i] = "e" + codigo[i];

            var itemObj = JSON.parse(localStorage.getItem(codigo[i]));
            itemString += itemObj.describe + " ";
          }
          console.log(itemString);
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