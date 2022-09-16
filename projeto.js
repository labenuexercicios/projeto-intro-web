// Transformando em Objetos 

objAegon = {
    nome: "Aegon Targaryen",
    conjuge: "Visenya e Rhaenys Targaryen",
    montavaDragão: true,
    anosdeReinado: 37,
    descendentes: ["Aenys", "Maegor"]
}

objAenys = {
    nome: "Aenys Targaryen",
    conjuge: "Alyssa Velaryon",
    montavaDragão: true,
    anosdeReinado: 5,
    descendentes: ["Rhaena","Aegon", "Viserys", "Jaehaerys", "Alysanne", "Vaella"]
}

objJaehaerys = {
    nome: "Jaehaerys Targaryen",
    conjuge: "Alysanne Targaryen",
    montavaDragão: true,
    anosdeReinado: 55,
    descendentes: ["Aegon", "Daenerys", "Aemon", "Baelon", "Alyssa", "Maegelle", "Vaegon", "Daella", "Saera", "Viserra", "Gaemon", "Valerion","Gael"]
}

objViserys = {
    nome: "Viserys Targaryen",
    conjuge: "Aemma Arryn e Alicent Hightower",
    montavaDragão: false,
    anosdeReinado: 26,
    descendentes: ["Rhaenyra", "Baelon", "Aegon", "Helaena", "Aemond", "Daeron"]
}

const dragonRiders = []


if (objAegon.montavaDragão === true) {
    dragonRiders.push(objAegon)
} else {alert('Este rei não é um montador de Dragão. Não foi adicionado a categoria "Montador de dragão"')}

if (objAenys.montavaDragão === true) {
    dragonRiders.push(objAenys)
} else {alert('Este rei não é um montador de Dragão. Não foi adicionado a categoria "Montador de dragão"')}

if (objJaehaerys.montavaDragão === true) {
    dragonRiders.push(objJaehaerys)
} else {alert('Este rei não é um montador de Dragão. Não foi adicionado a categoria "Montador de dragão"')}

if (objViserys.montavaDragão === true) {
    dragonRiders.push(objViserys)
} else {alert('Este rei não é um montador de Dragão. Não foi adicionado a categoria "Montador de dragão"')}

console.log(dragonRiders)

