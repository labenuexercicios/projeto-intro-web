//SEMANA1

//Crie três conjuntos de variáveis utilizando as características que você definiu acima. 
//Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.

const saborBrig1 = "Brigadeiro sabor: Chocolate"
const precoBrig1 = 3.50
const brig1ContemLactose = true

const saborBrig2 = "Brigadeiro sabor: Cajuzinho"
const precoBrig2 = 3.50
const brig2ContemLactose = true

const saborBrig3 = "Brigadeiro sabor: Beijinho"
const precoBrig3 = 3.20
const brig3ContemLactose = true

//Faça um cálculo de média, entre os valores numéricos respectivos de cada item. 
//Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;

const mediaPreco = ((precoBrig1 + precoBrig2 + precoBrig3) / 3)
console.log("SEMANA 1")
console.log("Média de preço dos Brigadeiros R$", mediaPreco)

//Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas 
//criadas até aqui são verdadeiras.

const verifLactose = brig1ContemLactose && brig2ContemLactose && brig3ContemLactose
console.log("Contém lactose", verifLactose)

//Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. 
//Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.

const ingredientesBrig1 = ["Chocolate ao leite em pó", "leite condensado", "creme de leite", "manteiga"]
const ingredientesBrig2 = ["Chocolate Meio Amargo", "amendoim", "leite condensado", "creme de leite", "manteiga"]
const ingredientesBrig3 = ["Coco ralado", "leite condensado", "creme de leite", "manteiga"]

//Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui

console.log(saborBrig1.toUpperCase(), "Preço: R$", precoBrig1, "Ingredientes:", ingredientesBrig1, "Contém Lactose:", brig1ContemLactose)
console.log(saborBrig2.toUpperCase(), "Preço: R$", precoBrig2, "Ingredientes:", ingredientesBrig2, "Contém Lactose:", brig2ContemLactose)
console.log(saborBrig3.toUpperCase(), "Preço: R$", precoBrig3, "Ingredientes:", ingredientesBrig3, "Contém Lactose:", brig3ContemLactose)

//SEMANA 2

//1. Transforme os itens que criamos nas últimas semanas em objetos.

const brig1 = {
    sabor: "Brigadeiro sabor: Chocolate",
    preco: 3.50,
    contemLactose: true,
    ingredientes: ["Chocolate ao leite em pó", "leite condensado", "creme de leite", "manteiga"]
}

const brig2 = {
    sabor: "Brigadeiro sabor: Cajuzinho",
    preco: 3.50,
    contemLactose: true,
    ingredientes: ["Chocolate Meio Amargo", "amendoim", "leite condensado", "creme de leite", "manteiga"]
}

const brig3 = {
    sabor: "Brigadeiro sabor: Beijinho",
    preco: 3.20,
    contemLactose: true,
    ingredientes: ["Coco ralado", "leite condensado", "creme de leite", "manteiga"]
}

//2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;

const brigadeiros = []

//3. Adicione os objetos criados no item 1 ao array de objetos criado no item 2, utilizando o push()

// brigadeiros.push(brig1, brig2, brig3)
// console.log("Objetos criados e adicionados ao array", brigadeiros)

//4. Altere o item “Adicione os novos objetos no array de objetos, utilizando o push()” (item 3), para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;
//5. Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push

if (brig1.contemLactose === true) {
    brigadeiros.push(brig1)
} else {
    alert(`O item não foi adicionado`)
}
if (brig2.contemLactose === true) {
    brigadeiros.push(brig2)
} else {
    alert(`O item não foi adicionado`)
}
if (brig3.contemLactose === true) {
    brigadeiros.push(brig3)
} else {
    alert(`O item não foi adicionado`)
}

console.log("SEMANA 2")
console.log(brigadeiros)

//SEMANA 3

//1. Reescrevendo o relatório criado utilizando console.log() que começamos na semana 2, altere a forma que a característica de array dos itens seja escrita como um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. 
//Utilize esta string no relatório.

console.log("SEMANA 3 - ITEM 1")

console.log("Sabor:" + brigadeiros[0].sabor)
console.log("Preço:" + brigadeiros[0].preco)
console.log("Contém Lactose:" + brigadeiros[0].contemLactose)
console.log("Ingredientes:" + brigadeiros[0].ingredientes)

console.log("Sabor:" + brigadeiros[1].sabor)
console.log("Preço:" + brigadeiros[1].preco)
console.log("Contém Lactose:" + brigadeiros[1].contemLactose)
console.log("Ingredientes:" + brigadeiros[1].ingredientes)

console.log("Sabor:" + brigadeiros[2].sabor)
console.log("Preço:" + brigadeiros[2].preco)
console.log("Contém Lactose:" + brigadeiros[2].contemLactose)
console.log("Ingredientes:" + brigadeiros[2].ingredientes)

// for (i in brigadeiros) {
//     console.log(
//         [brigadeiros[i].sabor,
//         brigadeiros[i].preço,
//         brigadeiros[i].ContemLactose,
//         brigadeiros[i].ingredientes.join(", ")])
// }


//2. Ainda no relatório, altere-o para que ele seja criado utilizando um laço. Ou seja, você não deve mais imprimir individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.
console.log("SEMANA 3 - ITEM 2")

for (let brigadeiro of brigadeiros) {
    for (let propriedades in brigadeiro)
        console.log(`${propriedades}: ${brigadeiro[propriedades]}`)
}

//3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.
console.log("SEMANA 3 - ITEM 3")

const doces = (objeto) => {
    let string = ' ';
        for (let propriedade in objeto) {
            if(typeof objeto[propriedade] == 'string'){
                console.log(string[propriedade])
            }            
        }
}
(doces(brigadeiros))

//4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.