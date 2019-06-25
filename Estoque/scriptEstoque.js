function Item(codig, quantidade, valor, describe){
    this.codigo = codig;
    this.quantidade = quantidade;
    this.valor = valor;
    this.describe = describe;
}
function getElements() {
  var codigo = document.getElementById("codigo"),
  quantidade = document.getElementById("quantidade"),
  valor = document.getElementById("valor"),
  describe = document.getElementById("describe");
}
function gravar(){
  getElements();
  const novoItem = new Item(codigo.value, quantidade.value, valor.value, describe.value);
  const itemJSON = JSON.stringify(novoItem);
  localStorage.setItem("e" + novoItem.codigo, itemJSON);
  codigo.value = null;
  quantidade.value = null;
  valor.value = null;
  describe.value = null;
  alert("Salvo com sucesso!");
};

function recuperarItem(){
  const item = JSON.parse(localStorage.getItem("e" + prompt("Informe o código do produto")));
  getElements();
  codigo.value = item.codigo;
  quantidade.value = item.quantidade;
  valor.value = item.valor;
  describe.value = item.describe;
};
