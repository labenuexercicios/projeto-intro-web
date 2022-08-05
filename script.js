// // Semana 1

// // Exercicio 1
// let nome
// let anoLancamento = 0
// let isSerie
// let totTemporadas = 0
// let genero = []
// let elencoPrincipal = []

// // Exercicio 2
// let nome1 = 'greys anatomy'
// let anoLancamento1 = Number(2005)
// let isSerie1 = true
// let totTemporadas1 = Number(19)
// let genero1 = ['drama', 'ficção medica', 'romance', 'comedia dramatica']
// let elencoPrincipal1 = ['ellen pompeo', 'patrick dempsey', 'sandra oh']

// let nome2 = 'lá casa de papel'
// let anoLancamento2 = Number(2017)
// let isSerie2 = true
// let totTemporadas2 = Number(4)
// let genero2 = ['assalto', 'drama', 'suspense', 'crime']
// let elencoPrincipal2 = ['alvaro morte', 'alba flores', 'miguel herran']


// let nome3 = 'vikings'
// let anoLancamento3 = Number(2013)
// let isSerie3 = true
// let totTemporadas3 = Number(6)
// let genero3 = ['guerra', 'drama', 'ação', 'aventura']
// let elencoPrincipal3 = ['travis fimmel', 'clive standen', 'gustaf skarsgard']

// // Exercicio 3
// const mediaGa = (anoLancamento1 + totTemporadas1) / 2
// const mediaLCP = (anoLancamento2 + totTemporadas2) / 2
// const mediaVk = (anoLancamento3 + totTemporadas3) / 2

// // Exercicio 4
// if (isSerie1 === true && isSerie2 === true && isSerie3 === true) {
//     console.log('Os valores são verdadeiros')
// } else {
//     console.log('Os valores são falsos')
// }

// // Semana 2

// //Exercicio 2
// console.log('Nome da serie: ' + nome1.toUpperCase(), '\nLançamento: ' + anoLancamento1 + ' \nE uma serie: ' + isSerie1 + '\nTotal de de temporadas: ' + totTemporadas1 + '\nGenero: ' + genero1 + '\nElenco principal: ' + elencoPrincipal1)
// console.log('\n\n')
// console.log('Nome da serie: ' + nome2.toUpperCase(), '\nLançamento: ' + anoLancamento2 + ' \nE uma serie: ' + isSerie2 + '\nTotal de de temporadas: ' + totTemporadas2 + '\nGenero: ' + genero2 + '\nElenco principal: ' + elencoPrincipal2)
// console.log('\n\n')
// console.log('Nome da serie: ' + nome3.toUpperCase(), '\nLançamento: ' + anoLancamento3 + ' \nE uma serie: ' + isSerie3 + '\nTotal de de temporadas: ' + totTemporadas3 + '\nGenero: ' + genero3 + '\nElenco principal: ' + elencoPrincipal3)

// Semana 3
// Ecercicio 1
const series = {
    nome: '',
    anoLancamento: 0,
    isSerie: true,
    totTemporadas: 0,
    genero: [],
    elencoPrincipal: []
}

const greysAnatomy = {...series,
    nome: 'greys anatomy',
    anoLancamento: Number(2005),
    isSerie: false,
    totTemporadas: Number(19),
    genero: ['drama', 'ficção medica', 'romance', 'comedia dramatica'],
    elencoPrincipal1: ['ellen pompeo', 'patrick dempsey', 'sandra oh']
}

const laCasaDePapel = {...series,
    nome: 'lá casa de papel',
    anoLancamento: Number(2017),
    isSerie: true,
    totTemporadas: Number(4),
    genero: ['assalto', 'drama', 'suspense', 'crime'],
    elencoPrincipal1: ['alvaro morte', 'alba flores', 'miguel herran']
}
const vikings = {...series,
    nome: 'vikings',
    anoLancamento: Number(2013),
    isSerie: true,
    totTemporadas: Number(6),
    genero: ['guerra', 'drama', 'ação', 'aventura'],
    elencoPrincipal1: ['travis fimmel', 'clive standen', 'gustaf skarsgard']
}
// Exercicio 2
const bdSeries = []
// Exercicio 3
if(laCasaDePapel.isSerie){
    bdSeries.push(laCasaDePapel)
}else{
    alert('A serie ',laCasaDePapel.nome,'não foi adicionada.')
    
}

if(greysAnatomy.isSerie){
    bdSeries.push(greysAnatomy)
}else{
    alert('A serie ',greysAnatomy.nome,' não foi adicionado')
}

if (vikings.isSerie) {
    bdSeries.push(vikings)
} else {
    alert('A serie ',vikings.nome,' não foi adicionado')
}


console.log(bdSeries)