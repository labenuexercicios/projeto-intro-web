const roupa = String
const preco = Number
const masculino = Boolean
const cor = ["verde", "amarelo", "rosa", "jeans"]

const primeiraRoupa = "camiseta"
const primeiroPreco = 20.00.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
const primeiroMasculino = true
const primeiraCor = cor[0]

const segundaRoupa = "calça"
const segundoPreco = 50.00.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
const segundoMasculino = false
const segundaCor = cor[3]

const terceiraRoupa = "cueca"
const terceiroPreco = 15.00.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
const terceiroMasculino = true
const terceiraCor = cor[2]

//Verificando a média dos valores dos itens selecionados
const media = (primeiroPreco + segundoPreco + terceiroPreco) / 2
console.log(`A média de preço de todos os produtos é: ${media.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)

//Verificando se as roupas selecionadas são para os sexo masculino
const verificaSexo = primeiroMasculino && segundoMasculino && terceiroMasculino
console.log(`Todas as roupas são masculinas? ${verificaSexo}`)

//Imprimindo um relatório de todos os itens listados
console.log("------------------------LISTA DE ROUPAS------------------------")
console.log(primeiraRoupa.toUpperCase(),`\nPreço: ${primeiroPreco}\nÉ masculino? ${primeiroMasculino}\nQual a cor?: ${primeiraCor}`)
console.log(segundaRoupa.toUpperCase(),`\nPreço: ${segundoPreco}\nÉ masculino? ${segundoMasculino}\nQual a cor?: ${segundaCor}`)
console.log(terceiraRoupa.toUpperCase(),`\nPreço: ${terceiroPreco}\nÉ masculino? ${terceiroMasculino}\nQual a cor?: ${terceiraCor}`)