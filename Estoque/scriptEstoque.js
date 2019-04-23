let itens = {
    inserir: function (codig, quantidade, valor, describe) {
        this.codig = codig;
        this.quantidade = quantidade;
        this.valor = valor;
        this.descibre = descibre;
    }
};
botaoGravar = document.getElementById('btnGravar');
botaoGravar.addEventListener('click', itens.inserir($("#codigo"),$("#quantidade"),$("#valor"),$("#describe")), false);
botaoGravar.addEventListener('click', setDelay(console.log(itens.codig), 500), false);