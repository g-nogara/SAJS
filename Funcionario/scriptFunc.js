function Funcionario(nome, cod, cargo, admissao){
    this.nome = nome;
    this.cod = cod;
    this.cargo = cargo;
    this.dataAdmissao = admissao;
}

function gravar(){
  getElementsHTML();
  const novoFunc = new Funcionario (nome, codigo, cargo, admissao);
  const funcJSON = JSON.stringify(novoFunc);
  sessionStorage.setItem("f" + novoFunc.cod, funcJSON);


  function getElementsHTML() {
    const nome = document.getElementById("nome").value,
    codigo = document.getElementById("codigo").value,
    cargo = document.getElementById("cargo").value,
    admissao = document.getElementById("admissao").value;
  }
};

function recuperar(){
  const ojb = sessionStorage.getItem(parseInt(prompt("Informe o código do produto")));
  console.log(JSON.parse(ojb));
  document.getElementById("exibir").innerHTML+= ojb;

};
