// MOTO
// Marca da moto
// Ano de fabricação
// Cilindrada
// Preço
// Trabalho ou viagem?
// Tem mais de 10 anos de fabricação?
// É econômica?

//Parte 1
// MOTO HONDA
const marca = "Honda"
const anofab = 2015
const economia = true
const cilind = [125, 150, 160, 250]

//MOTO YAMAHA
const marca1 = "Yamaha"
const anofab1 = 2010
const economia1 = true
const cilind1 = [120, 150, 160, 250]

//MOTO KAWASAKI
const marca2 = "Kawasaki"
const anofab2 = 2018
const economia2 = false
const cilind2 = [125, 240, 300, 400]

const media = (anofab + anofab1 + anofab2)/3
console.log(media.toFixed(0)) //2014

//Parte 2
const economias = economia && economia1 && economia2
console.log(economias) //false

//Se fosse tabelado
//const titulo = "MOTO 1"
//console.table(titulo)
/*const informacoes = [
    { Nome: 'MOTO1',
      Marca: 'Honda',
      Ano: '2015',
      Economica: true,
      Cilindrada: '125'
    },
    { Nome: 'MOTO2',
    Marca: 'Yamaha',
    Ano: '2010',
    Economica: true,
    Cilindrada: '160'
    },
    {Nome: 'MOTO3',
    Marca: 'Kawasaki',
    Ano: '2018',
    Economica: false,
    Cilindrada: '400'
}
]
console.table(informacoes)
*/
console.log(`MOTO HONDA
Marca: ${marca}
Ano: ${anofab}
Econômica: ${economia}
Cilindrada: ${cilind}`
)
console.log(`MOTO YAMAHA 
Marca: ${marca1}
Ano: ${anofab1}
Econômica: ${economia1}
Cilindrada: ${cilind1}`)

console.log(`MOTO KAWASAKI
Marca: ${marca2}
Ano: ${anofab2}
Econômica: ${economia2}
Cilindrada: ${cilind2}`)
