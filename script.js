function lclStg () {
    let realCNPJ = document.getElementById('cnpj').value;
    const result = document.getElementById('result');

    if (cnpj.length < 14 || cnpj.length > 18 ) {
        result.textContent = "CNPJ deve conter entre 14 e 18 digitos";
    } 
    else {
        window.localStorage.setItem('CNPJ', cnpj);
        result.textContent = "CNPJ salvo com sucesso";
}
subButton = document.getElementById('subButton');
subButton.addEventListener('click', lclStg, false); 