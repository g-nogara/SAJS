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
  sessionStorage.setItem(novoItem.codigo, itemJSON);
};

function recuperarItem(){
  const item = JSON.parse(sessionStorage.getItem(prompt("Informe o código do produto")));
  getElements();
  codigo.value = item.codigo;
  quantidade.value = item.quantidade;
  valor.value = item.valor;
  describe.value = item.describe;
};
