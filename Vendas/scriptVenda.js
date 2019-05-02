/*
let itens = {
    inserir: function (codig, quantidade, valor, describe) {
        this.codig = codig;
        this.quantidade = quantidade;
        this.valor = valor;
        this.describe = describe;
    }
};
*/
let relatorioVendas = {
    codigo: 0,
    nomeVendedor: "", //Código vendedor é preferível que nome.
    quantidadeVendas: 0,
};
function Vender(){
  const codigo = document.getElementById("codigo").value, quantidade = document.getElementById("quantidade").value;
  let obj = sessionStorage.getItem(codigo);
  obj = JSON.parse(obj);
  obj.quantidade -= quantidade;
  

}

function recuperar(){
  const obj = sessionStorage.getItem(parseInt(prompt("Informe o código do produto")));
  console.log(JSON.parse(obj));
  document.getElementById("exibir").innerHTML+= obj;

}
