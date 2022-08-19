/* //ENTREGAS SEMANA 1
const nome1 = 'Bife de Ancho'
const preco1 = 88.0
const semGluten1 = false

const nome2 = 'Bife de Chorizo'
const preco2 = 80.0
const semGluten2 = false

const nome3 = 'Assado de Tira'
const preco3 = 65.0
const semGluten3 = false

const precoMedio = console.log((preco1 + preco2 + preco3) / 3) // Cálculo do valor médio dos pratos do restaurante

const restauranteSemGluten = console.log(semGluten1 && semGluten2 && semGluten3) // Verificação lógica se o restaurante é Gluten Free.

//ENTREGAS SEMANA 2
const acompanhamentos1 = ['Arroz Branco', 'Batata Rústica', 'Farofa']
const acompanhamentos2 = ['Arroz Branco', 'Batata Rústica', 'Farofa']
const acompanhamentos3 = ['Arroz Branco', 'Batata Rústica', 'Farofa'] 

console.log(`${nome1.toUpperCase()}
Preço: R$ ${preco1} 
Contém Gluten? ${semGluten1} 
Acompanhamentos:
- ${acompanhamentos1[0]},
- ${acompanhamentos1[1]},
- ${acompanhamentos1[2]}`)

console.log(`${nome2.toUpperCase()}
Preço: R$ ${preco2} 
Contém Gluten? ${semGluten2} 
Acompanhamentos:
- ${acompanhamentos2[0]},
- ${acompanhamentos2[1]},
- ${acompanhamentos2[2]}`)

console.log(`${nome3.toUpperCase()}
Preço: R$ ${preco3} 
Contém Gluten? ${semGluten3} 
Acompanhamentos:
- ${acompanhamentos3[0]},
- ${acompanhamentos3[1]},
- ${acompanhamentos3[2]}`) */

//ENTREGAS DA SEMANA 3
item1 = {
  nome: 'Bife de Ancho',
  preco: 88,
  contemGlutem: true,
  acompanhamento: ['Arroz Branco', 'Batata Rústica', 'Farofa']
}
item2 = {
  nome: 'Bife de Chorizo',
  preco: 80,
  contemGlutem: true,
  acompanhamento: ['Arroz Branco', 'Batata Rústica', 'Farofa']
}
item3 = {
  nome: 'Assado de Tira',
  preco: 88,
  contemGlutem: true,
  acompanhamento: ['Arroz Branco', 'Batata Rústica', 'Farofa']
}

const cardapio = [] //CRIAÇÃO DO CARDAPIO

if (item1.contemGlutem === true) {
  cardapio.push(item1)
} else {
  alert(`O item ${item1.nome} não foi adicionado`)
}
if (item2.contemGlutem === true) {
  cardapio.push(item2)
} else {
  alert(`O item ${item2.nome} não foi adicionado`)
}
if (item3.contemGlutem === true) {
  cardapio.push(item3)
} else {
  alert(`O item ${item3.nome} não foi adicionado`)
}

cardapio.push(
  (item3 = {
    nome: 'Linguiça Parrillera',
    preco: 30.0,
    contemGlutem: true,
    acompanhamento: ['Farofa', 'Limão Siciliano']
  })
)

for (var i = 0; i < cardapio.length; i++) {
  console.log('=====================================================')
  console.log(cardapio[i].nome.toUpperCase())
  console.log(`R$ ${cardapio[i].preco.toFixed(2)}`)
  if (cardapio[i].contemGlutem) {
    console.log('Contém Gluten')
  } else {
    console.log('Gluten Free')
  }
  console.log('ACOMPANHAMENTOS')
  for (var j = 0; j < cardapio[i].acompanhamento.length; j++) {
    console.log('- ' + cardapio[i].acompanhamento[j])
  }
}
