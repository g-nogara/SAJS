function Funcionario(nome, codigo, cargo, admissao){
    this.nome = nome;
    this.codigo = codigo;
    this.cargo = cargo;
    this.dataAdmissao = admissao;
}

function gravar(){
  getElementsHTML();
  const novoFunc = new Funcionario (nome.value, codigo.value, cargo.value, admissao.value);
  const funcJSON = JSON.stringify(novoFunc);
  localStorage.setItem("f" + novoFunc.codigo, funcJSON);
  nome.value = null;
  codigo.value = null;
  cargo.value = null;
  admissao.value = null;
  alert("Salvo com sucesso!");


  function getElementsHTML() {
    const nome = document.getElementById("nome"),
    codigo = document.getElementById("codigo"),
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
