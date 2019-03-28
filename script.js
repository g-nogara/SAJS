function getUserName() {
    var cnpj = document.getElementById('cnpj').value;
    var result = document.getElementById('result');
    
    if (cnpj.length < 14 || cnpj.length > 18 ) {
        result.textContent = "CNPJ deve conter entre 14 e 18 digitos";
      
    } else {
        result.textContent = "Seu CNPJ é: " + cnpj;
    }
    }
    var subButton = document.getElementById('subButton');
    subButton.addEventListener('click', getUserName, false); 