const itens = {
    inserir: function (codig, quantidade, valor, describe) {
        this.codig = codig;
        this.quantidade = quantidade;
        this.valor = valor;
        this.describe = describe;
    }
};
let index = [];
function gravar(){
  const codigo = document.getElementById("codigo").value, quantidade = document.getElementById("quantidade").value,
  valor = document.getElementById("valor").value, describe = document.getElementById("describe").value
  itens.inserir(codigo, quantidade, valor, describe);
  console.log(itens);
  const itemJSON = JSON.stringify(itens);
  console.log(itemJSON);
  sessionStorage.setItem(itens.codigo, itemJSON);
  index[index.length + 1] = itens.codigo;

};

function recuperar(){
  const ojb = sessionStorage.getItem(index[variavel]);
  console.log(JSON.parse(ojb));

};
