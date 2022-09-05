//  SEMANA 01
//Curso de Reciclagem para Condutores Infratores
//Informação
//Inscrição
//Conteúdo Programático
//Estudo
//Certificado



//1. Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características para definir exemplos destes objetos usando o código.
//Você precisará criar pelo menos:
//  * uma característica String;
//  * uma característica Number;
//  * uma característica Boolean;

const curso = "Reciclagem" //string
const duraçãoDoCurso = 30 //number
const certificado = true //boolean



//2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. 
//Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.

const módulo1 = "Legislação de Trânsito" //string
const cargaHorária1 = 12 //number
const avaliação1 = true //boolean

const módulo2 = "Direção Defensiva" //string
const cargaHorária2 = 8 //number
const avaliação2 = true //boolean

const módulo3 = "Noções de Primeiros Socorros" //string
const cargaHorária3 = 4 //number
const avaliação3 = true //boolean

const módulo4 = "Relacionamento Interpessoal" //string
const cargaHorária4 = 6 //number
const avaliação4 = true //boolean

//3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;
//A média deve ser igual à soma dos itens, dividida pelo total de itens.

const somaTotalDaCargaHorária = cargaHorária1 + cargaHorária2 + cargaHorária3 + cargaHorária4 / 3
console.log(somaTotalDaCargaHorária)


//4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.

const checarAvaliação = avaliação1 && avaliação2 && avaliação3 && avaliação4
console.log(checarAvaliação)



//5. Crie pelo menos mais uma característica para o item que você criou. 
//Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.

const dadosDoUsuário = ["Nome do Aluno", "Idade", "Email"] 




//6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
//  a) O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.

console.log(`O Módulo 01: ${módulo1.toUpperCase()} \nCarga Horária: ${cargaHorária1}\nConcluído: ${avaliação1}`)
console.log(`O Módulo 02: ${módulo2.toUpperCase()} \nCarga Horária: ${cargaHorária2}\nConcluído: ${avaliação2}`)
console.log(`O Módulo 03: ${módulo3.toUpperCase()} \nCarga Horária: ${cargaHorária3}\nconcluído: ${avaliação3}`)
console.log(`O Módulo 04: ${módulo4.toUpperCase()} \nCarga Horária: ${cargaHorária4}\nconcluído: ${avaliação4}`)

//   SEMANA2
//1. Transforme os itens que criamos nas últimas semanas em objetos.

const objeto1 = {
   módulo1: "Legislação de Trânsito",
   cargaHorária1: 12,
   avaliação1: true 
}

const objeto2 = {
  módulo2: "Direção Defensiva",
  cargaHorária2: 8,
  avaliação2: true
}

const objeto3 = {
 módulo3: "Noções de Primeiros Socorros",
 cargaHorária3: 4,
 avaliação3: true,
}

const objeto4 = {
 módulo4: "Relacionamento Interpessoal",
 cargaHorária4: 6,
 avaliação4: true
}

//2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;

const todosOsObjetos = []
console.log(todosOsObjetos)

//3. Adicione os objetos criados no item 1 ao array de objetos criado no item 2, utilizando o push()

todosOsObjetos.push(objeto1, objeto2, objeto3, objeto4)
   
//console.log(todosOsObjetos)


//4. Altere o item “Adicione os novos objetos no array de objetos, utilizando o push()” (item 3), para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;
//5. Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push.



if(checarAvaliação == true) {
   console.log("Você foi Aprovado!", todosOsObjetos.push())
   /*Se todas as avaliações forem true, o usuário foi aprovado*/
}
 else if (checarAvaliação == false){
   console.log(alert("Você foi reprovado, refaça suas avaliações!"))
   /*Se alguma avaliação for false, o usuário está reprovado*/
}

