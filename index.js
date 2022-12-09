//lista de Objetos 
const compostoQuimico = [
    {
        nome: "Hipoclorito de sódio",
        nomeMaisConhecido: "Água Sanitária",
        atomosDaFormula: ["Sódio", "Cloro", "Oxigênio"],
        massaMolar: 74.44,
        usos: ["Remoção de manchas de roupas sujas", "Desenfetar superfícies", "Desinfecção da água potável"],
        solubilidadeEmAgua: true
    },

    {
        nome: "Ácido acético",
        nomeMaisConhecido: "Vinagre",
        atomosDaFormula: ["Carbono", "Hidrogênio", "Oxigênio"],
        massaMolar: 60.052,
        usos: ["Condimentar saladas", "Produção da aspirina", "Síntese de perfumes e corantes"],
        solubilidadeEmAgua: true
    },
    {
        nome: "Ácido ascórbico",
        nomeMaisConhecido: "Vitamina C",
        atomosDaFormula: ["Carbono", "Hidrogênio", "Oxigênio"],
        massaMolar: 176.09,
        usos: ["Suplementação alimentar", "Adubo para plantas", "Conservação de alimentos industrializados"],
        solubilidadeEmAgua: true
    }]

//Verificar se é true ou false 

const especime = []
function verificar(lista) {
    for (const i in lista) {
        if (lista[i].solubilidadeEmAgua === true) {
            especime.push(lista)
        }
        else {
            alert("Não é solúvel em água")
        }
    }
}
verificar(compostoQuimico)

//cálculo das médias 
let numerador = 0
function calculoDaMedia(lista) {
    for (const i in lista) {
        numerador += lista[i].massaMolar
        if (lista[i].massaMolar.length > 0) {
            return numerador / lista[i].massaMolar.length
        }

    }
}
media = calculoDaMedia(compostoQuimico)

console.log(`A média dos valores de massa molar é: ${media.toFixed(2)}`)
console.log("\n")

//refatoração 
function impressao(array) {
    for (const objeto in array) {
        for (const propriedade of objeto) {
            console.log(`${propriedade}: ${objeto.propriedade}`);

        }
    }
    console.log("\n")
}
impressao(compostoQuimico)

// 4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.
function returnName(array, string) {
    let busca

    for (i in array) {
        if (array[i].name.toUpperCase() === string.toUpperCase()) {
            busca = array[i]
            return (busca)
        } else if (array[i].name.toUpperCase() !== string.toUpperCase()) {
            busca = "Não encontrado."
        }
    }

    if (busca === "Não encontrado.") {
        alert(`${string} não foi encontrado.`)
    }
}

returnName(compostoQuimico, "Ácido acético")
