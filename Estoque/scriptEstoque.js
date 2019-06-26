function Item(codig, quantidade, valor, describe){
    this.codigo = codig;
    this.quantidade = quantidade;
    this.valor = valor;
    this.describe = describe;
}
function getElements() {
  var quantidade = document.getElementById("quantidade"),
  valor = document.getElementById("valor"),
  describe = document.getElementById("describe");
}
function gravar(){
  getElements();
  let codigo = Math.random().toFixed(6).toString().substring(2);
  const novoItem = new Item(codigo, quantidade.value, valor.value, describe.value);
  const itemJSON = JSON.stringify(novoItem);
  localStorage.setItem("e" + novoItem.codigo, itemJSON);
  quantidade.value = null;
  valor.value = null;
  describe.value = null;
  alert("Produto salvo com sucesso!\n\nCódigo do produto: "+novoItem.codigo);
};
