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

// //Parte 2
const economias = economia && economia1 && economia2
console.log(economias) //false

// //Se fosse tabelado
// //const titulo = "MOTO 1"
// //console.table(titulo)
// /*const informacoes = [
//     { Nome: 'MOTO1',
//       Marca: 'Honda',
//       Ano: '2015',
//       Economica: true,
//       Cilindrada: '125'
//     },
//     { Nome: 'MOTO2',
//     Marca: 'Yamaha',
//     Ano: '2010',
//     Economica: true,
//     Cilindrada: '160'
//     },
//     {Nome: 'MOTO3',
//     Marca: 'Kawasaki',
//     Ano: '2018',
//     Economica: false,
//     Cilindrada: '400'
// }
// ]
// console.table(informacoes)
// */
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

//Semana 2
// Item 3

const informacoes = []

moto1 = {
   nome: "MOTO1",
  marca: "Honda",
  ano: 2015,
  economica: true,
  cilindrada: 125
};

moto2 = { 
mome: "MOTO2",
marca: "Yamaha",
ano: 2010,
economica: true,
cilindrada: 160
};

moto3 =  {
nome: "MOTO3",
marca: "Kawasaki",
ano: 2018,
economica: false,
cilindrada: 400
};


//Altere o item 3 “Adicione os novos objetos no array de objetos,
//utilizando o push()”, para criar uma verificação antes de dar o push.
//A caraterística booleana do objeto deve ser validada.
// Isto é, o objeto só deve ser adicionado ao array 
//se a propriedade booleana for true;


if (moto1.economica === true) {
  informacoes.push(moto1)
  console.table(moto1)
}else{
  alert(moto1.nome +  " Não é econômica")
}
if (moto2.economica === true) {
  informacoes.push(moto2)
  console.table(moto2)
}else{
  alert(moto2.nome +  " Não é econômica")
}
if(moto3.economica === true){
  informacoes.push(moto3)
}else{
  alert(moto3.nome + " Não é econômica")
}