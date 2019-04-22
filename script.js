function loginCheck () {
    const realLogin = document.getElementById('login').value;
    const realPWD = document.getElementById('password').value;

    if (realLogin === "Admin" && realPWD === "senha" ) {
        window.location.href = 'http://www.google.com';
    } 
    else {
        result.textContent = "Login/Senha Inválidos";
}
botaoAcesso = document.getElementById('botaoAcesso');
botaoAcesso.addEventListener('click', loginCheck, false); 