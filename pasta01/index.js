console.log("Ola mundo!")

// const valoreDeReferencia =[
//     {pressaoArterial: "Pressão Arterial 110 e 120 mmHg",frequenciaCardiaca:"60 – 160 batimentos/minuto",frequencairespiratória: "Frequencia Respiratória 10 – 35mpm"},
//     {pressaoArterial: "Pressão Arterial 120/80mmHg",frequenciaCardiaca:"160 - 240bpm",frequencairespiratória: "Frequencia Respiratória: 10 - 40 mpm"},
//     {pressaoArterial: "Pressão Arterial 120/80mmHg",frequenciaCardiaca:"160 - 240bpm",frequencairespiratória: "Frequencia Respiratória: 10 - 40 mpm"},
// ]
const vacinas = ["Vacina A","Vacina B", "Vacina C", "Vacina D", "Vacina E"]

const animal01=[
    {nome:"Cachorro",           familia:"Canídeos",      nomeCientifico:"Canis lupus familiaris",    tempoMedioDeVida:15, classe:"Mamifero",},
    {nome:"Gato",               familia:"Felídeos",      nomeCientifico:"Felis catus",               tempoMedioDeVida:15, classe:"Mamifero",},
    {nome:"Boi",                familia:"Bovídeos",      nomeCientifico:"Bos taurus",                tempoMedioDeVida:20, classe:"Mamifero",},
    {nome:"Cavalo",             familia:"Equídeos",      nomeCientifico:"Equus ferus caballus",      tempoMedioDeVida:30, classe:"Mamifero",},
    {nome:"Asno",               familia:"Equídeos",      nomeCientifico:"Equus asinus",              tempoMedioDeVida:34, classe:"Mamifero",},
    {nome:"Ovelha",             familia:"Bovídeos",      nomeCientifico:"Ovis aries",                tempoMedioDeVida:11, classe:"Mamifero",},
    {nome:"Cabra",              familia:"Bovídeos",      nomeCientifico:"Capra aegagrus hircus",     tempoMedioDeVida:16, classe:"Mamifero",},
    {nome:"Lobo",               familia:"Canídeos",      nomeCientifico:"Canis lupus",               tempoMedioDeVida:16, classe:"Mamifero",},
    {nome:"Onça-pintada",       familia:"Felídeos",      nomeCientifico:"Panthera onca",             tempoMedioDeVida:14, classe:"Mamifero",},
    {nome:"Gato-do-mato",       familia:"Felídeos",      nomeCientifico:"Leopardus tigrinus",        tempoMedioDeVida:20, classe:"Mamifero",},
    {nome:"Zebra",              familia:"Equídeos",      nomeCientifico:"Equus quagga",              tempoMedioDeVida:40, classe:"Mamifero",},
    {nome:"Papagaio-chauá",     familia:"Psittacidae",   nomeCientifico:"Amazona rhodocorytha",      tempoMedioDeVida:60, classe:"Ave",     },
    {nome:"Arara-canindé",      familia:"Psittacidae",   nomeCientifico:"Ara ararauna",              tempoMedioDeVida:70, classe:"Ave",     },
    {nome:"Arara-azul-grande",  familia:"Psittacidae",   nomeCientifico:"Anodorhynchus hyacinthinus",tempoMedioDeVida:50, classe:"Ave",     },
    {nome:"papagaio-cinzento",  familia:"Psittacidae",   nomeCientifico:"Psittacus erithacus",       tempoMedioDeVida:23, classe:"Ave",     },
    // {nome:"Iguana de rabo de padeiro",familia:"Iguanidae",nomeCientifico:"",tempoMedioDeVida: ,classe:"réptil", valoreDeReferencia},
    // {nome:"",familia:"Iguanidae",nomeCientifico:"",tempoMedioDeVida: ,classe:"réptil", valoreDeReferencia},
    // {nome:"",familia:"Iguanidae",nomeCientifico:"",tempoMedioDeVida: ,classe:"réptil", valoreDeReferencia},
    // {nome:"",familia:"Iguanidae",nomeCientifico:"",tempoMedioDeVida: ,classe:"réptil", valoreDeReferencia},
]

const animal02 = animal01.map((item)=>{
    return item
})
const listaDeFamilia = animal02.map((item)=>{
    return item.familia
})
const listaDeAnimal = animal02.map((item)=>{
    return item.nome
})
console.log(animal02)
//console.log(listaDeFamilia)
//console.log(listaDeAnimal)
let nomeBicho = "Gato" //prompt("Escolha um animal?")
for (null;!listaDeAnimal.includes(nomeBicho);null){
    alert("Tente outro bicho")
    nomeBicho = prompt("Escolha um animal?")
}

let familiaPergunta = "Psittacidae" //prompt("Qual a familia?")
for (null;!listaDeFamilia.includes(familiaPergunta);null) {
    alert("Familia não encontrada!")
    familiaPergunta =prompt("Qual a familia?")
    }

const nomeFamilia = animal02.filter((item)=>{
    return item.familia===familiaPergunta
}).map((item)=>{
    return item.nome
})
console.log(nomeFamilia)

const bichoCracha = animal02.filter((item)=>{
    return item.nome === nomeBicho
})

for(objeto of bichoCracha){
        for (item in objeto){
            console.log(`${item}: ${objeto[item]}`)
    }}

// console.log(`${bichoCracha[0].nome}
// ${bichoCracha[0].nomeCientifico}`)

// IMPRIME A PORRA TODA
// for(objeto of animal02){
//     for (item in objeto){
//         console.log(`${item}: ${objeto[item]}`)
// }}
