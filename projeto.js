// O tema que escolhi para o projeto é Serial Killers. Mas vou alterar para algo que eu gosto mais, que serão plantas.

let nome1 = "Aegon Targaryen"
let conjuge1 = "Visenya e Rhaenys Targaryen"
let montavaDragão1 = true
let anosdeReinado1 = 37
//let descendentes1 = "Aenys e Maegor"

let nome2 = "Aenys Targaryen"
let conjuge2 = "Alyssa Velaryon"
let montavaDragão2 = true
let anosdeReinado2 = 5
//let descendentes2 = "Rhaena, Aegon, Viserys, Jaehaerys, Alysanne e Vaella"

let nome3 = "Jaehaerys Targaryen"
let conjuge3 = "Alysanne Targaryen"
let montavaDragão3 = true
let anosdeReinado3 = 55
//let descendentes3 = "Aegon, Daenerys, Aemon, Baelon, Alyssa, Maegelle, Vaegon, Daella, Saera, Viserra, Gaemon, Valerion e Gael"

let nome4 = "Viserys Targaryen"
let conjuge4 = "Aemma Arryn e Alicent Hightwoer"
let montavaDragão4 = false
let anosdeReinado4 = 26
//let descendentes4 = "Rhaenyra, Baelon, Aegon, Helaena, Aemond e Daeron"


// Cálculo da média entre as variáveis Anos de Reinado. 

let media = ((anosdeReinado1+anosdeReinado2+anosdeReinado3+anosdeReinado4)/4) 
console.log (`Média do tempo de reinado para cada rei: ${media}`)

// Resultado que checa se todos os booleanas até aqui são verdadeiros.

const dragonRiders = montavaDragão1 && montavaDragão2 && montavaDragão3 && montavaDragão4
console.log (dragonRiders)

// Criando novos arrays

const descendentes1 = ["Aenys", "Maegor"]
const descendentes2 = ["Rhaena","Aegon", "Viserys", "Jaehaerys", "Alysanne", "Vaella"]
const descendentes3 = ["Aegon", "Daenerys", "Aemon", "Baelon", "Alyssa", "Maegelle", "Vaegon", "Daella", "Saera", "Viserra", "Gaemon", "Valerion","Gael"]
const descendentes4 = ["Rhaenyra", "Baelon", "Aegon", "Helaena", "Aemond", "Daeron"]

// Console log de todas os itens

console.log (`

    Nome: ${nome1.toUpperCase()} 
    Cônjuge: ${conjuge1} 
    Montava Dragão: ${montavaDragão1}
    Anos de reinado: ${anosdeReinado1}
    Descendentes: ${descendentes1}

`)

console.log (`

    Nome: ${nome2.toUpperCase()} 
    Cônjuge: ${conjuge2} 
    Montava Dragão: ${montavaDragão2}
    Anos de reinado: ${anosdeReinado2}
    Descendentes: ${descendentes2}

`)

console.log (`

    Nome: ${nome3.toUpperCase()} 
    Cônjuge: ${conjuge3} 
    Montava Dragão: ${montavaDragão3}
    Anos de reinado: ${anosdeReinado3}
    Descendentes: ${descendentes3}

`)

console.log (`

    Nome: ${nome4.toUpperCase()} 
    Cônjuge: ${conjuge4} 
    Montava Dragão: ${montavaDragão4}
    Anos de reinado: ${anosdeReinado4}
    Descendentes: ${descendentes4}

`)