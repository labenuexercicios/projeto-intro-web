    // Comida

const comida1 = "vaca atolada"
const preçoVacaAtolada = R$30
const vegetariano1 = false
const ingredientesVa = ["costela bovina", "cebola", "mandioca", "tomate", "alho","cheiro verde", "água" ]
mensagem1 = `Nome: ${comida1.toUpperCase()} \npreço: ${preçoVacaAtolada} \nvegetariano: ${vegetariano1} \ningredientes: ${ingredientesVa}`
console.log(mensagem1)



const comida2 = "feijoada"
const preçoFeijoada = R$50
const vegetariano2 = false
const ingredientesFei = ["feijão preto", "carne seca", "linguiça calabresa", "costela de porco", "bacon","cebola", "alho"]
mensagem2 = `Nome: ${comida2.toUpperCase()} \npreço: ${preçoFeijoada} \nvegetariano: ${vegetariano2} \ningredientes: ${ingredientesFei}`
console.log(mensagem2)


const comida3 = "minestrone"
const preçoMinestrone = R$40
const vegetariano3 = true
const ingredientesMine = ["cenoura", "cebola", "abobrinha", "tomate", "feijão franês", "ervilhas", "macarrão", "manjeiricão"]
mensagem3 = `Nome: ${comida3.toUpperCase()} \npreço: ${preçoMinestrone} \nvegetariano: ${vegetariano3} \ningredientes: ${ingredientesMine}`
console.log(mensagem3)


const media = (preçoVacaAtolada+ preçoFeijoada+ preçoMinestrone /3)
console.log(media);
const ValorMedia = 40

const verificaVegetariano = vegetariano1 && vegetariano2 && vegetariano3;
console.log(verificaVegetariano);