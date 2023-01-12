
let input = document.getElementById("search");
console.log(input);
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    printSearch()
  }
});

//list de objects 
const chemicalCompound = [
    {
        nome: "Hipoclorito de sódio",
        nomeMaisConhecido: "Água Sanitária",
        atomosDaFormula: ["Sódio", "Cloro", "Oxigênio"],
        massaMolar: 74.44,
        usos: ["Remoção de manchas de roupas sujas", "desenfetar superfícies", "desinfecção da água potável"],
        solubilidadeEmAgua: true
    },

    {
        nome: "Ácido acético",
        nomeMaisConhecido: "Vinagre",
        atomosDaFormula: ["Carbono", "Hidrogênio", "Oxigênio"],
        massaMolar: 60.052,
        usos: ["Condimentar saladas", "produção da aspirina", "síntese de perfumes e corantes"],
        solubilidadeEmAgua: true
    },
    {
        nome: "Ácido ascórbico",
        nomeMaisConhecido: "Vitamina C",
        atomosDaFormula: ["Carbono", "Hidrogênio", "Oxigênio"],
        massaMolar: 176.09,
        usos: ["Suplementação alimentar", "adubo para plantas", "conservação de alimentos industrializados"],
        solubilidadeEmAgua: true
    }]

//Verificar se é true ou false 

const specimen = []
function verificar(list) {
    for (const i in list) {
        if (list[i].solubilidadeEmAgua === true) {
            specimen.push(list)
        }
        else {
            alert(`${list[i].nome} não é solúvel em água`)

        }
    }
}
verificar(chemicalCompound)

//cálculo das médias 

function averageCalculation(list) {
    let numerator = 0
    for (const i in list) {
        numerator += list[i].massaMolar
    }
    return numerator / list.length
}

averageCalculation(chemicalCompound)

console.log(`A média dos valores de massa molar é: ${averageCalculation(chemicalCompound).toFixed(2)}`)
console.log("\n")

//refatoração 
function print(array) {
    for (const object of array) {
        for (const property in object) {
            if (Array.isArray(object[property])) {
                console.log(`${property}: ${object[property].join(", ")}`)
            } else {
                console.log(`${property}: ${object[property]}`);
            }
        }
        console.log("\n")
    }

}
print(chemicalCompound)

//função de busca
function returnName(array, string) {
    let busca
    for (i in array) {
        if (array[i].nome.toUpperCase().includes(string.toUpperCase())) {
            busca = array[i]
            break
        } else {
            busca = null
        }
    }
    return (busca)
}

function printSearch() {
    let container = document.getElementsByClassName("container")
    for (container of document.getElementsByClassName("container")) {
        container.style.display="none"
    }
    let item = document.getElementById("search").value
    const card = returnName(chemicalCompound, item)

    if (card !== null){
        container.style.display="block"
    }
}


