let itens = {
    inserir: function (código, quantidade, valor, describe) {
        this.código = código;
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

};

function recuperar(){
  const ojb = sessionStorage.getItem(parseInt(prompt("Informe o código do produto")));
  console.log(JSON.parse(ojb));
  document.getElementById("exibir").innerHTML+= ojb;

};
