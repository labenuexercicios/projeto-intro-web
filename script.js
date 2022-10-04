const series = {
    nome: '',
    anoLancamento: 0,
    isSerie: true,
    totTemporadas: 0,
    genero: [],
    elencoPrincipal: []
}

const greysAnatomy = {
    ...series,
    nome: 'greys anatomy',
    anoLancamento: 2005,
    isSerie: true,
    totTemporadas: 19,
    genero: ['drama', 'ficção medica', 'romance', 'comedia dramatica'],
    elencoPrincipal: ['ellen pompeo', 'patrick dempsey', 'sandra oh']
}

const laCasaDePapel = {
    ...series,
    nome: 'lá casa de papel',
    anoLancamento: Number(2017),
    isSerie: true,
    totTemporadas: Number(4),
    genero: ['assalto', 'drama', 'suspense', 'crime'],
    elencoPrincipal: ['alvaro morte', 'alba flores', 'miguel herran']
}
const vikings = {
    ...series,
    nome: 'vikings',
    anoLancamento: Number(2013),
    isSerie: true,
    totTemporadas: Number(6),
    genero: ['guerra', 'drama', 'ação', 'aventura'],
    elencoPrincipal: ['travis fimmel', 'clive standen', 'gustaf skarsgard']
}
// Exercicio 2
const bdSeries = []
// Exercicio 3
if (laCasaDePapel.isSerie) {
    bdSeries.push(laCasaDePapel)
} else {
    console.log('A serie ', laCasaDePapel.nome, 'não foi adicionada.')

}

if (greysAnatomy.isSerie) {
    bdSeries.push(greysAnatomy)
} else {
    console.log('A serie ', greysAnatomy.nome, ' não foi adicionado')
}

if (vikings.isSerie) {
    bdSeries.push(vikings)
} else {
    console.log('A serie ', vikings.nome, ' não foi adicionado')
}
// console.log(teste)

let txtVikings = vikings.elencoPrincipal.toString()
let txtGreysAnatomy = greysAnatomy.elencoPrincipal.toString()
let txtLaCasaDePapel = laCasaDePapel.elencoPrincipal.toString()

let = stringGreysAnatomy = ""
for (let i in greysAnatomy.elencoPrincipal) {
    stringGreysAnatomy += greysAnatomy.elencoPrincipal[i] + " "
}

let = stringLaCasaDePapel = ""
for (let i in laCasaDePapel.elencoPrincipal) {
    stringLaCasaDePapel += laCasaDePapel.elencoPrincipal[i] + " "
}

let = stringVikings = ""
for (let i in vikings.elencoPrincipal) {
    stringVikings += vikings.elencoPrincipal[i] + " "
}

function relatorio(objeto) {
    let txt = ""
    for (keys in objeto) {
        txt += keys + ": " + objeto[keys] + "\n"
    }
    return txt.toString()
}


function addElem() {

    const main = document.getElementById('main');
    // Criando elemento section
    const section = document.createElement('section')
    // Inserindo elemento SECTION no HTML
    main.appendChild(section)
    const ul = document.createElement('ul')
    for (prop in greysAnatomy) {
        //  Criando elemento lista
        const li = document.createElement('li')
        li.innerHTML += greysAnatomy[prop]
        section.appendChild(li)
        
    }
}
addElem()