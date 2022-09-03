const tipoRoupaAcademia1 = "calça-Leg"
const quantidade1 = 5 
const verificouMarca1 = false
const marca1 = ["adidas", "nike","sortidos"]

const tipoRoupaAcademia2 = "top"
const quantidade2 = 6 
const verificouMarca2 = true
const marca2 = ["adidas", "nike","sortidos"]

const tipoRoupaAcademia3 = "short"
const quantidade3 = 3 
const verificouMarca3 = true
const marca3 = ["adidas", "nike","sortidos"]

const media = (quantidade1+quantidade2+quantidade3)/3  // Faça um cálculo de média, entre os valores numéricos respectivos de cada item. 
console.log("A média total de quantidade é:", media)   // Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;

const verificaMARCA = verificouMarca1 && verificouMarca2 && verificouMarca3   //imprima o resultado de uma operação lógica 
console.log("Verificou marca verdadeiro?", verificaMARCA)   //que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.


const copiaMarca1 = marca1.slice()
const copiaMarca2 = marca2.slice() 
const copiaMarca3 = marca3.slice()   
//console.log("Copia do marca:", marca1)
//console.log("Copia do marca:", marca2)
//console.log("Copia do marca:", marca3)
console.log("Tipo de roupa que escolheu: "+tipoRoupaAcademia1.toLocaleUpperCase()+"\nQuantidade que deseja: "+quantidade1+" \nMarca desejada: "+verificouMarca1+" \nQual marca que pediu: "+copiaMarca1.splice(0,1)+" ") 
console.log("Marcas Existentes:", marca1)

console.log("Tipo de roupa que escolheu: "+tipoRoupaAcademia2.toLocaleUpperCase()+"\nQuantidade que deseja: "+quantidade2+" \nMarca desejada: "+verificouMarca2+" ") 
console.log("Marcas Existentes:", marca2)

console.log("Tipo de roupa que escolheu: "+tipoRoupaAcademia3.toLocaleUpperCase()+"\nQuantidade que deseja: "+quantidade3+" \nMarca desejada: "+verificouMarca3+" ") 
console.log("Marcas Existentes:", marca3)

//.toLocaleUpperCase()
/*  sobre a avariavel COPIA MARCA 1
tem que fazer uma copia para mostrar só uma valor de marca, quando perguntar qual marcar escolheu
tem que mostrar só uma, ai chama a copia, pq vai excluir as outras com o splice
pq senão quando der um splice, ele modifica a variavel original e depois n mostra ela completa,
quando pedi p perguntar quais marcas existem

*/