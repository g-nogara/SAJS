function salvarDados(){
    const nome = document.getElementById("nome").value,
    codigo = document.getElementById("codigo").value,
    cargo = document.getElementById("cargo").value,
    dataAdmissao = document.getElementById("admissao").value;
    sessionStorage.setItem(codigo, [nome,cargo,dataAdmissao]);
}