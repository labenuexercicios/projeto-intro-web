let campoFiltro = document.querySelector("#inputJogador");

campoFiltro.addEventListener("input", function () {
    console.log(this.value);

    let jogador = document.querySelectorAll(".card")
    
    console.log(jogador)

    if (this.value.length > 0) {
        for (var i = 0; i < jogador.length; i++){
            var jogado = jogador[i];
            var liNome = jogado.querySelector(".info-nome");
            var nome = liNome.textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome)) {
                jogado.classList.add("invisivel");
            } else {
                jogado.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < jogador.length; i++){
            var jogado = jogador[i];
            jogado.classList.remove("invisivel");
        }
    }
})

