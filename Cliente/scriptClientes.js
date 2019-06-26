function Cliente(codigoCliente, nomeCliente, endereço, numTel, email){
    this.codigoCliente = codigoCliente;
    this.nomeCliente = nomeCliente;
    this.endereço = endereço;
    this.numTel = numTel;
    this.email = email;
}

function salvarCliente(){
  getElementsHTML();
  let codigoCliente = Math.random().toFixed(6).toString().substring(2);
  const novoCliente = new Cliente (codigoCliente, nomeCliente.value, endereço.value, numTel.value, email.value);
  const clienteJSON = JSON.stringify(novoCliente);
  localStorage.setItem("c" + novoCliente.codigoCliente, clienteJSON);
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
