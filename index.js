//Crie três conjuntos de variáveis utilizando as características que você definiu acima. 
//Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.

const saborBrig1 = "Brigadeiro sabor: Chocolate"
const preçoBrig1 = 3.50
const brig1ContemLactose = true

const saborBrig2 = "Brigadeiro sabor: Cajuzinho"
const preçoBrig2 = 3.50
const brig2ContemLactose = true

const saborBrig3 = "Brigadeiro sabor: Beijinho"
const preçoBrig3 = 3.20
const brig3ContemLactose = true

//Faça um cálculo de média, entre os valores numéricos respectivos de cada item. 
//Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;

const mediaPreço = ((preçoBrig1 + preçoBrig2 + preçoBrig3)/3)
console.log("Média de preço dos Brigadeiros R$", mediaPreço)

//Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas 
//criadas até aqui são verdadeiras.

const verifLactose = brig1ContemLactose && brig2ContemLactose && brig3ContemLactose
console.log("Contém lactose", verifLactose)

//Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. 
//Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.

const ingredientesBrig1 = ["Chocolate ao leite em pó", "leite condensado", "creme de leite", "manteiga"]
const ingredientesBrig2 = ["Chocolate Meio Amargo", "leite condensado", "creme de leite", "manteiga"]
const ingredientesBrig3 = ["Coco ralado", "leite condensado", "creme de leite", "manteiga"]

//Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui

console.log(saborBrig1.toUpperCase(), "Preço: R$", preçoBrig1, "Ingredientes:", ingredientesBrig1, "Contém Lactose:", brig1ContemLactose)
console.log(saborBrig2.toUpperCase(), "Preço: R$", preçoBrig2, "Ingredientes:", ingredientesBrig2, "Contém Lactose:", brig2ContemLactose)
console.log(saborBrig3.toUpperCase(), "Preço: R$", preçoBrig3, "Ingredientes:", ingredientesBrig3, "Contém Lactose:", brig3ContemLactose)