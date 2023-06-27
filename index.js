let input = document.getElementById("search");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        printSearch()
    }
});
/* - [*]  Tela de listagem com título
- [*]  ao menos três itens listados */
const chemicalCompoundList = [
    {
        id: "0",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Sodium-hypochlorite.png/1024px-Sodium-hypochlorite.png",
        nomeCientifico: "Hipoclorito de sódio",
        nomeMaisConhecido: "Água Sanitária",
        atomosDaFormula: ["Sódio", "Cloro", "Oxigênio"],
        massaMolar: 74.44,
        usos: ["Remoção de manchas de roupas sujas", "desenfetar superfícies", "desinfecção da água potável"],
        solubilidadeEmAgua: true,
        link: "https://pt.wikipedia.org/wiki/Hipoclorito_de_s%C3%B3dio"
    },

    {
        id: "1",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Acetic-acid-2D-flat.png/1024px-Acetic-acid-2D-flat.png",
        nomeCientifico: "Ácido acético",
        nomeMaisConhecido: "Vinagre",
        atomosDaFormula: ["Carbono", "Hidrogênio", "Oxigênio"],
        massaMolar: 60.052,
        usos: ["Condimentar saladas", "produção da aspirina", "síntese de perfumes e corantes"],
        solubilidadeEmAgua: true,
        link: "https://pt.wikipedia.org/wiki/%C3%81cido_etanoico"
    },
    {
        id: "2",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/L-Ascorbic_acid.svg/1024px-L-Ascorbic_acid.svg.png",
        nomeCientifico: "Ácido ascórbico",
        nomeMaisConhecido: "Vitamina C",
        atomosDaFormula: ["Carbono", "Hidrogênio", "Oxigênio"],
        massaMolar: 176.09,
        usos: ["Suplementação alimentar", "adubo para plantas", "conservação de alimentos industrializados"],
        solubilidadeEmAgua: true,
        link: "https://pt.wikipedia.org/wiki/%C3%81cido_asc%C3%B3rbico"

    },
    {
        id: "3",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethanol_flat_structure.png/1024px-Ethanol_flat_structure.png",
        nomeCientifico: "Etanol",
        nomeMaisConhecido: "Álcool etílico",
        atomosDaFormula: ["Carbono", "Hidrogênio", "Oxigênio"],
        massaMolar: 46.06,
        usos: ["Utilizado como combustível para veículos", "matéria prima na indústria de tintas, solventes e vernizes", "emprego de álcool hidratado é na indústria farmacêutica, alcoolquímica e de bebidas"],
        solubilidadeEmAgua: true,
        link: "https://pt.wikipedia.org/wiki/Etanol"

    },
    {
        id: "4",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Hydrogen-peroxide-2D.png/1024px-Hydrogen-peroxide-2D.png",
        nomeCientifico: "Peróxido de hidrogênio",
        nomeMaisConhecido: "Água oxigenada",
        atomosDaFormula: ["Hidrogênio", "Oxigênio"],
        massaMolar:34.02,
        usos: [" Uso medicinal e como clareador da roupa e do cabelo", " como combustível para ajuste e correção nas trajetórias e órbitas de satélites artificiais no espaço", "componente da espuma de borracha orgânica e outras substâncias químicas"],        solubilidadeEmAgua: true,
        link: "https://pt.wikipedia.org/wiki/Per%C3%B3xido_de_hidrog%C3%AAnio"

    },
    {
        id: "5",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Acetone-2D-skeletal.svg/800px-Acetone-2D-skeletal.svg.png",
        nomeCientifico: "Propanona",
        nomeMaisConhecido: "Acetona",
        atomosDaFormula: ["Carbono", "Hidrogênio", "Oxigênio"],
        massaMolar: 58.08,
        usos: ["Serve como solvente em esmaltes, tintas, vernizes e supercola", "extração de óleos", "fabricação de fármacos"],
        solubilidadeEmAgua: true,
        link: "https://pt.wikipedia.org/wiki/Acetona"

    }
]
/* - [*]  Itens listados **utilizando manipulação do DOM** */
function render(chemicalCompoundList) {
    const cards = document.getElementById("cards")
    let card = "";
    for (const chemicalCompound of chemicalCompoundList) {
        card += `
        <div id="${chemicalCompound.id}" class = "container">
        <img class= "molecule" src= "${chemicalCompound.image}">
        <ul>
            <li id ="${chemicalCompound.nomeCientifico}">Nome Científico: <a href="${chemicalCompound.link}"> ${chemicalCompound.nomeCientifico}</a></li>
            <li>Nome mais conhecido: ${chemicalCompound.nomeMaisConhecido}</li>
            <li>Usos: ${chemicalCompound.usos.join(", ")}</li>
            <li>Massa Molar: ${chemicalCompound.massaMolar} g/mol</li>
            </ul>

        </div>`
    }
    cards.innerHTML = card;
}
render(chemicalCompoundList)
/* - [*]  Verificação de valores booleanos true impressa no console */
const specimen = []
function verificar(list) {
    for (const i in list) {
        if (list[i].solubilidadeEmAgua === true) {
            specimen.push(list)
        }
        else {
            alert(`${list[i].nomeCientifico} não é solúvel em água`)

        }
    }
}
verificar(chemicalCompoundList)
/* - [*]  Média numérica calculada e impressa no console */
function averageCalculation(list) {
    let numerator = 0
    for (const i in list) {
        numerator += list[i].massaMolar
    }
    return numerator / list.length
}
averageCalculation(chemicalCompoundList)
console.log(`A média dos valores de massa molar é: ${averageCalculation(chemicalCompoundList).toFixed(2)}`)
console.log("\n")
/* - [*]  Relatório impresso no console com as informações de cada item */
/* - [*]  título dos itens em letras maiúsculas */
function print(array) {
    for (const object of array) {
        for (const property in object) {
            if ((object[property]) === object["nomeCientifico"]) {
                console.log(`${object["nomeCientifico"].toUpperCase()}`)
            }
            else if (Array.isArray(object[property])) {
                console.log(`${property}: ${object[property].join(", ")}`)
            }

            else if ((object[property]) === object["id"] || ((object[property]) === object["image"])) {
                continue
            }

            else if ((object[property]) === object["link"] || ((object[property]) === object["image"])) {
                continue
            }
            else {
                console.log(`${property}: ${object[property]}`);
            }

        }
        console.log("\n")
    }

}
print(chemicalCompoundList)
/* - [*]  Barra de pesquisa com alerta se tentar pesquisar com campo em branco
- [*]  Clique do botão executa busca entre os itens  */

function displayElement(chemicalCompoundList, searchString) {
    for (i in chemicalCompoundList) {
        if (chemicalCompoundList[i].nomeCientifico.toUpperCase().includes(searchString.toUpperCase())) {
            let item = document.getElementById(chemicalCompoundList[i].id)
            item.style.display = "block"
        }
    }
}

function printSearch() {
    let containerList = document.getElementsByClassName("container")
    for (container of containerList) {
        container.style.display = "none"
    }
    let item = document.getElementById("search").value
    if (document.getElementById("search").value.length ===0) {
        alert("Digite algo no campo de pesquisa")
    }
    else {
        displayElement(chemicalCompoundList, item)
    }
}
