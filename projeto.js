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

/* console.log(dragonRiders) */

/////////////////////////////////////////////////

let dragonKings = [objAegon,objAenys,objJaehaerys,objViserys]

for (let objeto of dragonKings) {
    objeto.descendentes = objeto.descendentes.join(", ")
}

console.log(objAegon)
console.log(objAenys)
console.log(objJaehaerys)
console.log(objViserys)

// Atividade 2

function impressao (objeto){
    for (i in objeto) {
        console.log(objeto[i])
    }
}

impressao (objAegon)
impressao (objAenys)
impressao (objJaehaerys)
impressao (objViserys) 

// Atividade 3 - 3. Crie uma função que receba como parâmetro um objeto, 
// e devolva a string do relatório com os dados do objeto.

function devolverString (arrayDragon) {
    for (objeto of arrayDragon) {
        for (propriedade in objeto) {
            console.log(`${propriedade}:${objeto[propriedade]}`)
        } console.log('--------------------')
    }
}

devolverString (dragonKings)

// Atividade 4 - 

const recebeArray = (array, string) => {
        for (objeto of array) {
        if(objeto.nome === string) {
            console.log(objeto, string)
        } else {alert("Não encontrado")}
        }
    }
    
recebeArray (dragonKings, prompt("Digite um rei Targaryen"))

