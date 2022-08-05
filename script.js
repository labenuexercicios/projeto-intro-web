// Semana 1

// Exercicio 1
let nome
let anoLancamento = 0
let isSerie
let totTemporadas = 0
let genero = []
let elencoPrincipal = [{
    nomeAtor: '',
    personagem: '',
}]

// Exercicio 2
let nome1 = 'greys anatomy'
let anoLancamento1 = Number(2005)
let isSerie1 = true
let totTemporadas1 = Number(19)
let genero1 = ['drama', 'ficção medica', 'romance', 'comedia dramatica']
let elencoPrincipal1 = [{ nomeAtor: 'ellen pompeo', personagem: 'meridith grey' },
{ nomeAtor: 'patrick dempsey', personagem: 'derek sherperd' },
{ nomeAtor: 'sandra oh', personagem: 'cristina yang' }]

let nome2 = 'lá casa de papel'
let anoLancamento2 = Number (2017)
let isSerie2 = true
let totTemporadas2 = Number(4)
let genero2 = ['assalto', 'drama', 'suspense', 'crime']
let elencoPrincipal2 = [{nomeAtor:'alvaro morte' ,personagem:'professor'},
{nomeAtor:'alba flores', personagem:'nairobi'},
{nomeAtor: 'miguel herran', personagem: 'rio'}]

let nome3 = 'vikings'
let anoLancamento3 = Number (2013)
let isSerie3 = true
let totTemporadas3 = Number(6)
let genero3 = ['guerra', 'drama', 'ação', 'aventura']
let elencoPrincipal3 = [{nomeAtor:'travis fimmel' ,personagem:'ragnar lothbrok'},
{nomeAtor:'clive standen', personagem:'rollo'},
{nomeAtor: 'gustaf skarsgard', personagem: 'floki'}]

// Exercicio 3
const mediaGa = (anoLancamento1 + totTemporadas1)/2 
const mediaLCP = (anoLancamento2 + totTemporadas2)/2 
const mediaVk = (anoLancamento3 + totTemporadas3)/2 

// Exercicio 4
if (isSerie1 === true && isSerie2 === true && isSerie3 === true) {
    console.log('Os valores são verdadeiros')
} else {
    console.log('Os valores são falsos')
}