function Funcionario(nome, cod, cargo, admissao){
    this.nome = nome;
    this.cod = cod;
    this.cargo = cargo;
    this.dataAdmissao = admissao;
}

function gravar(){
  getElementsHTML();
  const novoFunc = new Funcionario (nome.value, codigo.value, cargo.value, admissao.value);
  const funcJSON = novoFunc;
  sessionStorage.setItem("f" + novoFunc.cod, JSON.stringify(funcJSON));
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
  const ojb = sessionStorage.getItem(parseInt(prompt("Informe o código do produto")));
  console.log(JSON.parse(ojb));
  document.getElementById("exibir").innerHTML+= ojb;

};
