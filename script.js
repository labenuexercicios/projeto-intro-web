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
    elencoPrincipal: ['ellen pompeo', 'patrick dempsey', 'sandra oh'],
    imagem: "imgs/graysAnatomyLogo.jpg"
}

const laCasaDePapel = {
    ...series,
    nome: 'lá casa de papel',
    anoLancamento: Number(2017),
    isSerie: true,
    totTemporadas: Number(4),
    genero: ['assalto', 'drama', 'suspense', 'crime'],
    elencoPrincipal: ['alvaro morte', 'alba flores', 'miguel herran'],
    imagem: "imgs/laCasaDePapelLogo.png"
}
const vikings = {
    ...series,
    nome: 'vikings',
    anoLancamento: Number(2013),
    isSerie: true,
    totTemporadas: Number(6),
    genero: ['guerra', 'drama', 'ação', 'aventura'],
    elencoPrincipal: ['travis fimmel', 'clive standen', 'gustaf skarsgard'],
    imagem: "imgs/vikings.jpg"
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


// console.log(relatorio(greysAnatomy))


function addElem(obj) {
    const propiedades = ['nome', 'ano de lançamento', 'E uma serie?', 'Total de temporadas', 'genero', 'elenco', 'imagem']
    // Elemento de referencia
    const main = document.getElementById('main');
    // Criando elemento section
    const section = document.createElement('section')
    // Elemento imagem
    const img = document.createElement('img')
    // Inserindo atributos na imagem
    img.setAttribute('src', obj.imagem)
    img.setAttribute('class', 'img')
    // Inserindo atributos na SECTION
    section.setAttribute('class', 'card')
    section.setAttribute('id', 'card')
    // Inserindo imagem no HTML
    section.appendChild(img)
    // Inserindo elemento SECTION no HTML
    main.appendChild(section)
    const ul = document.createElement('ul')
    // Inserindo atributos na tag UL
    ul.setAttribute('class', 'listaInformacoes')
    // Inserindo ul no HTML
    section.appendChild(ul)
    let cont = 0
    for (prop in obj) {
        if (propiedades[cont] != 'imagem') {
            //  Criando elemento lista
            const li = document.createElement('li')
            li.innerHTML += ` ${propiedades[cont]}: ${obj[prop]}`
            ul.appendChild(li)
        }
        if (cont < propiedades.length) {
            cont = cont + 1
        }
    }
}







function cards(array) {
    for (let obj = 0; obj < bdSeries.length; obj++) {
        addElem(bdSeries[obj])
    }
}

function busca() {
    const btn = document.querySelector("#send")

    btn.addEventListener("click", function (e) {
        e.preventDefault()

        const name = document.getElementById("name")

        const value = name.value

        for (let obj = 0; obj < bdSeries.length; obj++) {
            if (value === bdSeries[obj].nome) {
                addElem(bdSeries[obj])

            } else {
                console.log('errado')
            }
        }
    })
}


cards(bdSeries)
busca()