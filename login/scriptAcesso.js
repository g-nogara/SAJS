function acesso(form) {
  if (form.inputUsuario.value =="mestre" && form.inputSenha.value =="0000") {
    window.open("../Funcionario/func.html");
} else if (form.inputUsuario.value =="editor mestre" && form.inputSenha.value =="0000"){
    window.open("../Funcionario/consultaFunc.html");
  }else {
    alert("Falha no login, dados incorretos");
    window.open("../index.html");
  }
}
function redirecionar(form) {
    acesso(form);
    window.close();
}
