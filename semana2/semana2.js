/* 1. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.
const nome; //string
const idade; //number
const verificouEmail; //boolean
const projetos; //array de strings
2. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
  1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.
FULANO
idade: 33
verificou email?: false
projetos: ["Projeto de HTML", "Projeto de CSS", "Projeto React"] 
 */

const unidadeSaude = {
    paciente1 : {
    nome : "M.B,S",
    prontuario : 1001,
    emDesintox : true,
    pts : ["auriculoterapia", "grupo de meditação", "psicologia"],
},

    paciente2 : {
    nome : "F.R.T",
    prontuario : 1002,
    emDesintox : true,
    pts : ["avaliação psiquiátrica", "terapia ocupacional", "grupo criarte"],
},

    paciente3 : {
    nome : "J.R.C",
    prontuario : 1003,
    emDesintox : false,
    pts : ["avaliação clínica", "auriculoterapia", "grupo cabeça feita"],
}

}


console.log(paciente1.nome.toUpperCase())

console.log(paciente2.nome.toUpperCase())

console.log(paciente3.nome.toUpperCase())
