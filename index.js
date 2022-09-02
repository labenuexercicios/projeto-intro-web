//One Piece

//Pense em alguma coisa do cotidiano, que seja contável e vamos chamar esta coisa de item. Iremos construir nossas lógicas e evoluir
//o projeto através das semanas. Pode ser qualquer coisa que possa ser descrita com características escritas.

//1. Para este item, você precisa criar pelo menos 1 String, 1 Number, 1 Boolean
//2. Crie 3 conjuntos de variaveis utilizando as caracteristicas que você definiu. Com dados diferentes.

let contagem = 1
const nome1 = "Monkey D. Luffy" //string
const recompensa1 = 3000000000 //number
const pirata1 = true //boolean
const haki1 = ["Haki do Rei","Haki do Armamento", "Haki da Observação"]

contagem = contagem + 1
const nome2 = "\"God\" Usopp" //string
const recompensa2 = 500000000 //number
const pirata2 = true //boolean
const haki2 = ["Haki da Observação"]

contagem = contagem + 1
const nome3 = "Kizaro" //string
const recompensa3 = 0 //number
const pirata3 = false //boolean
const haki3 = ["Haki do Armamento", "Haki da Observação"]

//3. Faça uma média entre os valores númericos respectivos de cada item. Imprima o valor da média utilizando um console.log. 
//Guarde em uma const

console.log("A média de recompensas é de "+(recompensa1+recompensa2+recompensa3)/contagem+" de berries")

//4. Imprima o resultado se todos os valores booleanos são verdadeiros

console.log("Todos os personagens são piratas? "+pirata1&&pirata2&&pirata3)

//5. Crie mais um item, deve ser um array. (Ok)

console.log("")
console.log("Nome: "+nome1.toUpperCase())
console.log("Recompensa: B. "+recompensa1)
console.log("Pirata(S/N): "+pirata1)
console.log("Haki: "+haki1)

console.log("Nome: "+nome2.toUpperCase())
console.log("Recompensa: B. "+recompensa2)
console.log("Pirata(S/N): "+pirata2)
console.log("Haki: "+haki2)

console.log("Nome: "+nome3.toUpperCase())
console.log("Recompensa: B. "+recompensa3)
console.log("Pirata(S/N): "+pirata3)
console.log("Haki: "+haki3)