function Funcionario(nome, codigo, cargo, admissao){
    this.nome = nome;
    this.codigo = codigo;
    this.cargo = cargo;
    this.dataAdmissao = admissao;
}

function gravar(){
  getElementsHTML();
  const codigo = Math.random().toFixed(6).toString().substring(2);
  const novoFunc = new Funcionario (nome.value, codigo, cargo.value, admissao.value);
  const funcJSON = JSON.stringify(novoFunc);
  localStorage.setItem("f" + novoFunc.codigo, funcJSON);
  nome.value = null;
  cargo.value = null;
  admissao.value = null;
  alert("Salvo com sucesso! \n O código do funcionário é " + codigo);


  function getElementsHTML() {
    const nome = document.getElementById("nome"),
    cargo = document.getElementById("cargo"),
    admissao = document.getElementById("admissao");
  }
};

function recuperar(){
  const ojb = localStorage.getItem(parseInt(prompt("Informe o código do funcionário")));
  console.log(JSON.parse(ojb));
  document.getElementById("exibir").innerHTML+= ojb;
  nome.value = item.nome;
  codigo.value = item.codigo;
  cargo.value = item.cargo;
  dataAdmissao.value = item.admissao;
};
