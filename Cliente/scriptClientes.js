function Funcionario(nomeCliente, endereço, numTel, email){
    this.nomeCliente = nomeCliente;
    this.endereço = endereço;
    this.numTel = numTel;
    this.email = email;
}

function salvarCliente(){
  getElementsHTML();
  const novoCliente = new Funcionario (nomeCliente.value, endereço.value, numTel.value, email.value);
  const clienteJSON = JSON.stringify(novoCliente);
  localStorage.setItem("c" + novoCliente.numTel, clienteJSON);
  nomeCliente.value = null;
  endereço.value = null;
  numTel.value = null;
  email.value = null;
  alert("Salvo com sucesso!");


  function getElementsHTML() {
    const nomeCliente = document.getElementById("nomeCliente"),
    endereço = document.getElementById("endereço"),
    numTel = document.getElementById("numTel"),
    email = document.getElementById("email");
  }
};

function recuperar(){
  const ojb = localStorage.getItem(parseInt(prompt("Informe o nome do cliente")));
  console.log(JSON.parse(ojb));
  document.getElementById("exibir").innerHTML+= ojb;
  nomeCliente.value = item.nomeCliente;
  endereço.value = item.endereço;
  numTel.value = item.numTel;
  email.value = item.email;
};
