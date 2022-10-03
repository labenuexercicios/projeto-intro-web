//* Objetos

const risoto1 = {
    nome: 'RISOTO TOSCANO',
    tempoPreparo: 30,
    ingredientes: ['cebola', 'alho', 'caldo', 'arroz tipo arbóreo', 'linguiça', 'vinho tinto', 'manteiga', 'queijo parmesão'],
    vegan: false
}

const risoto2 = {
    nome: 'RISOTO COGUMELO',
    tempoPreparo: 35,
    ingredientes: ['cebola', 'alho', 'caldo', 'arroz tipo arbóreo', 'vinho branco', 'cog shimeji', 'cog shitake', 'cog paris'],
    vegan: true
}

const risoto3 = {
    nome: 'RISOTO CAPRESE',
    tempoPreparo: 30,
    ingredientes: ['cebola', 'alho', 'caldo', 'arroz tipo arbóreo', 'vinho branco', 'tomate seco', 'mussarela de bufala', 'manjericão', 'manteiga', 'queijo parmesão'],
    vegan: false
}

const risoto4 = {
    nome: 'RISOTO FRUTOS DO MAR',
    tempoPreparo: 40,
    ingredientes: ['cebola', 'alho', 'caldo', 'arroz tipo arbóreo', 'vinho branco', 'alho poró', 'lula', 'camarão', 'mexilhão', 'polvo', 'manteiga', 'queijo parmesão'],
    vegan: false
}

const risoto5 = {
    nome: 'RISOTO GORGONZOLA',
    tempoPreparo: 30,
    ingredientes: ['cebola', 'alho', 'caldo', 'arroz tipo arbóreo', 'vinho branco', 'gorgonzola', 'pera', 'manteiga', 'queijo parmesão'],
    vegan: false
}

const risoto6 = {
    nome: 'RISOTO VEGETARIANO',
    tempoPreparo: 30,
    ingredientes: ['cebola', 'alho', 'caldo', 'arroz tipo arbóreo', 'vinho branco', 'alho poró', 'palmito', 'brocolhes', 'tomate cereja', 'aspargos'],
    vegan: true
}

const arrayObjetos = []
arrayObjetos.push(risoto1, risoto2, risoto3, risoto4, risoto5, risoto6)

//* Variável com a média do tempo de preparo dos pratos

const mediaTempoPreparo = (risoto1.tempoPreparo + risoto2.tempoPreparo + risoto3.tempoPreparo + risoto4.tempoPreparo + risoto5.tempoPreparo + risoto6.tempoPreparo) / 6
console.log('A média do tempo de preparo dos pratos é de: ', mediaTempoPreparo)

//* Variável de verificação dos valores das chaves vegan

const verificaEhVegan = risoto1.vegan && risoto2.vegan && risoto3.vegan && risoto4.vegan && risoto5.vegan && risoto6.vegan
console.log('Todos as opções são veganas? ', verificaEhVegan)

// semana 4

const cardapioVegano = []

risoto1.vegan ? cardapioVegano.push(risoto1) : alert("O risoto1 não foi adicionado")
risoto2.vegan ? cardapioVegano.push(risoto2) : alert("O risoto2 não foi adicionado")
risoto3.vegan ? cardapioVegano.push(risoto3) : alert("O risoto3 não foi adicionado")
risoto4.vegan ? cardapioVegano.push(risoto4) : alert("O risoto4 não foi adicionado")
risoto5.vegan ? cardapioVegano.push(risoto5) : alert("O risoto5 não foi adicionado")
risoto6.vegan ? cardapioVegano.push(risoto6) : alert("O risoto6 não foi adicionado")

console.log('No cardápio vegano, temos as seguintes opções', cardapioVegano)

// semana 5

let string1 = ``
for (i in risoto1.ingredientes) {
    string1 += `${risoto1.ingredientes[i]}, `
}
console.log(string1)

let string2 = ``
for (i in risoto2.ingredientes) {
    string2 += `${risoto2.ingredientes[i]}, `
}
console.log(string2)

let string3 = ``
for (i in risoto3.ingredientes) {
    string3 += `${risoto3.ingredientes[i]}, `
}
console.log(string3)

let string4 = ``
for (i in risoto4.ingredientes) {
    string4 += `${risoto4.ingredientes[i]}, `
}
console.log(string4)

let string5 = ``
for (i in risoto5.ingredientes) {
    string5 += `${risoto5.ingredientes[i]}, `
}
console.log(string5)

let string6 = ``
for (i in risoto6.ingredientes) {
    string6 += `${risoto6.ingredientes[i]}, `
}
console.log(string6)

console.log(`Nome: ${risoto1.nome}\n Tempo de Preparo: ${risoto1.tempoPreparo}\n Ingredientes: ${string1}\n É vegano? ${risoto1.vegan}`)

for (i in arrayObjetos) {
    console.log(`Nome: ${arrayObjetos[i].nome}\n Tempo de Preparo: ${arrayObjetos[i].tempoPreparo}\n Ingredientes: ${arrayObjetos[i].ingredientes}\n É vegano? ${arrayObjetos[i].vegan}`)
}


//semana 6

const relatorio = (obj) => {
    let str = `Nome: ${obj.nome.toUpperCase()}\nTempo de Preparo: ${obj.tempoPreparo}\nIngredientes: ${obj.ingredientes}\nÉ vegano? ${obj.vegan}`
    console.log(str)
}

for (i of arrayObjetos) {
    relatorio(i)
}

const buscaString = (array, string) => {
    string = string.toUpperCase().trim()
    const arrayBusca = array.filter((array) => {
        return array.nome === string
    })

    if (arrayBusca.length === 1) {
        return arrayBusca[0]
    } else {
        alert("O risoto não foi encontrado")
    }
}

buscaString(arrayObjetos, "Risoto Caprese")
console.log(buscaString(arrayObjetos, "Risoto Cogumelo"))

