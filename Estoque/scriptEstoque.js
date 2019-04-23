let itens = {
    inserir: function (codig, quantidade, valor, describe) {
        this.codig = codig;
        this.quantidade = quantidade;
        this.valor = valor;
        this.describe = describe;
    }
};

function gravar(){
  let codigo = document.getElementById("codigo").value, quantidade = document.getElementById("quantidade").value,
  valor = document.getElementById("valor").value, describe = document.getElementById("describe").value
  itens.inserir(codigo, quantidade, valor, describe);
  console.log(itens);
}
