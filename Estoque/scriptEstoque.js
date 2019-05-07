let itens = {
    inserir: function (codig, quantidade, valor, describe) {
        this.codig = codig;
        this.quantidade = quantidade;
        this.valor = valor;
        this.describe = describe;
    }
};
let array2 = [];
function gravar(){
  const codigo = document.getElementById("codigo").value, quantidade = document.getElementById("quantidade").value,
  valor = document.getElementById("valor").value, describe = document.getElementById("describe").value
  itens.inserir(codigo, quantidade, valor, describe);
  const itemJSON = JSON.stringify(itens);
  console.log(itemJSON);
  console.log(itens);
  sessionStorage.setItem(itens.codig, itemJSON);
  array2.push(itens.codig);
  console.log(array2);

}

function recuperar(){
  let ojb = sessionStorage.getItem(parseInt(prompt("Informe o código do produto")));
  ojb = JSON.parse(ojb);
  document.getElementById("codigo1").innerHTML = ojb.codig;
  document.getElementById("quantidade1").innerHTML = ojb.quantidade;
  document.getElementById("valor1").innerHTML = ojb.valor;
  document.getElementById("desc1").innerHTML  = ojb.describe;
  let linhas = document.getElementById("TESTE1!").getElementsByTagName("tr").length;
  let table = document.getElementById("TESTE1!");
  let tempRow = table.insertRow(1);
  tempRow.insertCell(0) = ojb.codig;

}
