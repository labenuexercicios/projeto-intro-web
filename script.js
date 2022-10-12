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
  acompanhamentos: ['Arroz Branco', 'Batata Rústica', 'Farofa'],
  imagem: './ancho.jpeg',
  href: 'https://www.sociedadedacarne.com.br/blog/conheca-origem-do-verdadeiro-bife-ancho/'
}
item2 = {
  nome: 'Bife de Chorizo',
  preco: 80,
  contemGlutem: true,
  acompanhamentos: ['Arroz Branco', 'Batata Rústica', 'Farofa'],
  imagem: './chorizo.jpeg',
  href: 'https://www.emporio481.com.br/carnes-cortes/o-que-e-bife-de-chorizo/'
}
item3 = {
  nome: 'Assado de Tira',
  preco: 88,
  contemGlutem: true,
  acompanhamentos: ['Arroz Branco', 'Batata Rústica', 'Farofa'],
  imagem: './assado.jpeg',
  href: 'https://es.wikipedia.org/wiki/Asado_de_tira'
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

cardapio.push({
  nome: 'Linguiça Parrillera',
  preco: 30.0,
  contemGlutem: true,
  acompanhamentos: ['Farofa', 'Limão Siciliano'],
  imagem: './parrillera.jpeg',
  href: 'https://pt.wikipedia.org/wiki/Lingui%C3%A7a'
})

for (i in cardapio) {
  let card = `Acompanhamentos: `
  console.log(cardapio[i].nome.toUpperCase())
  console.log(`R$ ${cardapio[i].preco.toFixed(2)}`)
  if (cardapio[i].contemGlutem) {
    console.log('Contém Gluten')
  } else {
    console.log('Gluten Free')
  }
  for (j in cardapio[i].acompanhamentos) {
    card += `${cardapio[i].acompanhamentos[j]}${
      j < cardapio[i].acompanhamentos.length - 1 ? ', ' : '.'
    }`
  }
  console.log(card)
}

function listarProdutos() {
  let campoBusca = document.getElementById('busca-item')
  // let resultadoBusca = campoBusca.value
  console.log(campoBusca.value)
  const listarProdutos = cardapio.filter(
    item => item.nome.toUpperCase() === campoBusca.value.toUpperCase()
  )
  if (listarProdutos.length) {
    imprimeCard(listarProdutos)
  } else {
    imprimeCard(cardapio)
    alert('Objeto não encontrado.')
  }
}

function imprimeCard(cardapio) {
  let acessaLista = document.getElementById('lista-resultados')
  acessaLista.innerHTML = ''
  for (let k = 0; k < cardapio.length; k++) {
    let newItem = document.createElement('div')
    newItem.classList.add('lista-item')
    newItem.setAttribute('id', `item-${[k + 1]}`)
    acessaLista.insertAdjacentElement('beforeend', newItem)

    let acessaItem = document.getElementById(`item-${[k + 1]}`)
    let newImage = document.createElement('img')
    newImage.classList.add('imagem-produto')
    newImage.setAttribute('src', `${cardapio[k].imagem}`)
    acessaItem.insertAdjacentElement('beforeend', newImage)

    let newDetalhe = document.createElement('div')
    newDetalhe.classList.add('detalhe-produto')
    newDetalhe.setAttribute('id', `detalhe-produto-${[k + 1]}`)
    acessaItem.insertAdjacentElement('beforeend', newDetalhe)

    let newItemDetalhe = document.getElementById(`detalhe-produto-${[k + 1]}`)
    let newNome = document.createElement('a')
    newNome.classList.add('nome-produto')
    newNome.setAttribute('href', `${cardapio[k].href}`)
    newNome.setAttribute('id', `nome-produto-${[k + 1]}`)
    newNome.setAttribute('target', '_blank')
    newItemDetalhe.insertAdjacentElement('afterbegin', newNome)
    newNome = document.getElementById(`nome-produto-${[k + 1]}`)
    newNome.innerHTML = cardapio[k].nome

    let newPreco = document.createElement('p')
    newPreco.classList.add('preco-produto')
    newPreco.setAttribute('id', `preco-produto-${[k + 1]}`)
    newItemDetalhe.insertAdjacentElement('beforeend', newPreco)
    newPreco = document.getElementById(`preco-produto-${[k + 1]}`)
    newPreco.innerHTML = `R$ ${cardapio[k].preco.toFixed(2)}`

    let gluten = ''
    if (cardapio[k].contemGlutem) {
      gluten = 'Contém Gluten'
    } else {
      gluten = 'Gluten Free'
    }

    let newContemGluten = document.createElement('p')
    newContemGluten.classList.add('glutem-produto')
    newContemGluten.setAttribute('id', `glutem-produto-${[k + 1]}`)
    newItemDetalhe.insertAdjacentElement('beforeend', newContemGluten)
    newContemGluten = document.getElementById(`glutem-produto-${[k + 1]}`)
    newContemGluten.innerHTML = gluten

    let card = `Acompanhamentos: `
    for (l in cardapio[k].acompanhamentos) {
      card += `${cardapio[k].acompanhamentos[l]}${
        l < cardapio[k].acompanhamentos.length - 1 ? ', ' : '.'
      }`
    }

    let newAcompanhamento = document.createElement('p')
    newAcompanhamento.classList.add('acompanhamento-produto')
    newAcompanhamento.setAttribute('id', `acompanhamento-produto-${[k + 1]}`)
    newItemDetalhe.insertAdjacentElement('beforeend', newAcompanhamento)
    newAcompanhamento = document.getElementById(
      `acompanhamento-produto-${[k + 1]}`
    )
    newAcompanhamento.innerHTML = card
  }
}

imprimeCard(cardapio)
