let itens = {
  inserir: function (codig, quantidade, valor, describe) {
    this.codig = codig;
    this.quantidade = quantidade;
    this.valor = valor;
    this.describe = describe;
  }
};
function gravar() {
  const arrayItens = [];
  const { codigo, quantidade, valor, describe } = getItemValues();
  itens.inserir(codigo, quantidade, valor, describe);
  const itemJSON = JSON.stringify(itens);
  sessionStorage.setItem(itens.codig, itemJSON);
  arrayItens.push(itens.codig);
  sessionStorage.setItem("item",arrayItens);
}

    function getItemValues() {
    const codigo = document.getElementById("codigo").value, 
    quantidade = document.getElementById("quantidade").value, 
    valor = document.getElementById("valor").value, 
    describe = document.getElementById("describe").value;
    return { codigo, quantidade, valor, describe };
    }

function recuperar() {
  let obj = sessionStorage.getItem(parseInt(prompt("Informe o código do produto")));
  obj = JSON.parse(obj);
  //insereTabela(obj);
}

function insereTabela(objeto){
  
}