function getCNPJ() {
    let cnpj = document.getElementById('cnpj').value;
    let result = document.getElementById('result');
    
    if (cnpj.length < 14 || cnpj.length > 18 ) {
        result.textContent = "CNPJ deve conter entre 14 e 18 digitos";
      
    } else {
        result.textContent = "Seu CNPJ é: " + cnpj;
    }
}
subButton = document.getElementById('subButton');
subButton.addEventListener('click', getCNPJ, false); 