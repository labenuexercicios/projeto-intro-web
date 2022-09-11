objeto1 = {
nome: "Seya",
idade: 16,
cavaleiroAtena: true, 
golpes: ["meteoro de pagaso", " cometa de pegaso", " turbilhão de pagaso"]}

objeto2 = {
nome: "Hyoga",
idade: 16,
cavaleiroAtena: true,
golpes: ["círculo de gelo", " trovão aurora", " pó de diamante"]
}

objeto3 = {
nome:  "Shiryu",
idade: 15,
cavaleiroAtena: true, 
golpes: ["cólera do dragão", " dragão voador", " dragão nascente"]
}

console.log(objeto1, objeto2, objeto3);


// const cavaleirosDeAthena = cavaleiroAtena1 && cavaleiroAtena2 && cavaleiroAtena3

// console.log(cavaleirosDeAthena);

// console.log(`Nome = ${nome1.toUpperCase()}
// Idade = ${idade1}
// é um cavaleiro de atena = ${cavaleiroAtena1}
// Golpes = ${golpes1}`);

// console.log(`Nome = ${nome2.toUpperCase()}
// Idade = ${idade2}
// é um cavaleiro de atena = ${cavaleiroAtena2}
// Golpes = ${golpes2}`);

// console.log(`Nome = ${nome3.toUpperCase()}
// Idade = ${idade3}
// é um cavaleiro de atena = ${cavaleiroAtena3}
// Golpes = ${golpes3}`);

const cavaleirosDeAthena = []

cavaleirosDeAthena.push(objeto1, objeto2, objeto3)



objeto4 = {
    nome:  "Shun",
    idade: 13,
    cavaleiroAtena: true, 
    golpes: ["corrente de andrômeda", "tempestade nebulosa", "onda relâmpago"]
    }

cavaleirosDeAthena.push(objeto4)

console.log(cavaleirosDeAthena);