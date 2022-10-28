let todosOsSucos = [{
    suco: 'DEMOLIDOR',
    descricao: "Produto 100% natural, embalado a vácuo e congelado.",
    ingrediente: ['Beterraba, cenoura, maça, gengibre, limão e chia.'],
    preco: 6,
    isverde: false,
},
{
    suco: "MAIS BELA",
    descricao: "Produto 100% natural, embalado a vácuo e congelado.",
    ingrediente: ['Couve, maça, limão e chia.'],
    preco: 7,
    isverde: true,
},
{
    suco: "MARIA BONITA",
    descricao: "Produto 100% natural, embalado a vácuo e congelado.",
    ingrediente: ['Couve, maça, pepino, limão e chia.'],
    preco: 8,
    isverde: true,
}]
for (listaSucos of todosOsSucos) {
    for (propriedade in listaSucos) {
        console.log(`${propriedade}: ${listaSucos[propriedade]}`)
    }
}
let totalValoresSuco = todosOsSucos[0].preco + todosOsSucos[1].preco + todosOsSucos[2].preco
console.log("Média de preço sucos: R$" + totalValoresSuco / 3 + ".")
function MeusSucos() {
    let input = document.getElementById("Pesquisar").value
    input = input.toLowerCase()
    let y = document.getElementsByClassName("SucosDaLista")
    for (i = 0; i < y.length; i++) {
        if (!y[i].innerHTML.toLowerCase().includes(input)) {
            y[i].style.display = "none";
        } else {
            y[i].style.display = "block"
        }
    }
    if (input === "") {
        alert("Produto não encontrado.")
    }
}
