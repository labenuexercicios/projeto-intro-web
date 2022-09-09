//SEMANA1

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

//SEMANA 2

//1. Transforme os itens que criamos nas últimas semanas em objetos.

const brig1 = {
    saborBrig1: "Brigadeiro sabor: Chocolate",
    preçoBrig1: 3.50,
    brig1ContemLactose: true,
    ingredientesBrig1: ["Chocolate ao leite em pó", "leite condensado", "creme de leite", "manteiga"]
}

const brig2 = {
    saborBrig2: "Brigadeiro sabor: Cajuzinho",
    preçoBrig2: 3.50,
    brig2ContemLactose: true,
    ingredientesBrig2: ["Chocolate Meio Amargo", "leite condensado", "creme de leite", "manteiga"]
}

const brig3 = {
    saborBrig3: "Brigadeiro sabor: Beijinho",
    preçoBrig3: 3.20,
    brig3ContemLactose: true,
    ingredientesBrig3: ["Coco ralado", "leite condensado", "creme de leite", "manteiga"]
}

//2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;

const brigadeiros = []

//3. Adicione os objetos criados no item 1 ao array de objetos criado no item 2, utilizando o push()

// brigadeiros.push(brig1, brig2, brig3)
// console.log("Objetos criados e adicionados ao array", brigadeiros)

//4. Altere o item “Adicione os novos objetos no array de objetos, utilizando o push()” (item 3), para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;
//5. Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push

if (brig1.brig1ContemLactose === true){
    brigadeiros.push(brig1)
}else{
    alert(`O item ${brig1.saborBrig1} não foi adicionado`)
}
if (brig2.brig2ContemLactose === true){
    brigadeiros.push(brig2)
}else{
    alert(`O item ${brig2.saborBrig2} não foi adicionado`)
}
if (brig3.brig3ContemLactose === true){
    brigadeiros.push(brig3)
}else{
    alert(`O item ${brig3.saborBrig3} não foi adicionado`)
}

console.log(brigadeiros)