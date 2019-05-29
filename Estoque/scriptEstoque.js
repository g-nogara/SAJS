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
  getElements();
  const itemJSON = JSON.stringify(itens);
  sessionStorage.setItem(itens.codig, itemJSON);
  array2.push(itens.codig);


  function getElements() {
    const codigo = document.getElementById("codigo").value, quantidade = document.getElementById("quantidade").value, valor = document.getElementById("valor").value, describe = document.getElementById("describe").value;
    itens.inserir(codigo, quantidade, valor, describe);
  }
};

function recuperar(){
  const ojb = sessionStorage.getItem(parseInt(prompt("Informe o código do produto")));
  console.log(JSON.parse(ojb));
  document.getElementById("exibir").innerHTML+= ojb;

};
