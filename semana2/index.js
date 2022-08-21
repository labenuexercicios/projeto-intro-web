// const itemNovo = [{
//     nome: 'victor',
//     idade: 21,
//     emailFoiVerificado: true,
//     produtorExecutivo: ['Arnon Milchan'],

// }]
// const nomeMaiusculo = itemNovo.produtorExecutivo.toUpperCase()
// console.log(itemNovo.produtorExecutivo)


// 1. Crie pelo menos mais uma característica para o item que você criou. 
// Esta característica deve ser um array. Mantenha o tipo de dado 
// do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.

// exemplo
// const nome; //string
// const idade; //number
// const verificouEmail; //boolean
// const projetos; //array de strings
// const pacoteCompleto = {...itemFilme1, ... itemSerie1, ...itemSerie2}



const item1 = {
    nome: 'The last kingdon'.toUpperCase(),
    sinopse: 'um jovem garota perde seu pai e seu castelo, mais tarde depois de anos ele retoma o que lhe foi tirado, que é dele por direito', 
    duração: 2700,
    anoDeInicioDaSerie: 2015, 
    generoDaSerie: ['tema medieval', 'histórico', 'drama', 'ação'], 
    isRemake: false,
    produtorExecutivo: ['Stephen Butchard Nigel Marchant Gareth Neame']

}
 const item2 = {
    nome: 'the walking dead'.toUpperCase(), 
    sinopse: 'após um apocalipse de zumbis e ao acordar de um coma sozinho, um policia se ve em uma trama onde busca pela sua familia e por sobrevivencia', 
    duração: 2700,
    anoDeInicioDaSerie: 2011, 
    generoDaSerie:['terror', 'suspense', 'drama', 'ação'],
    isRemake: false,
    produtorExecutivo: [' Frank Darabont']

 
}
 const item3 = {
    nome: 'clube da luta'.toUpperCase(), 
    sinopse: 'Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído',
    duração: 258,
    anoDeInicioDoFilme: 1999,
    generoDoFilme: ['suspense', 'humor ácido', 'drama', 'crime', 'ação'],
    isRemake: false,
    produtorExecutivo: ['Arnon Milchan']

 }

   let calculoDeTempoDeDuração = Number(item1.duração + item2.duração + item1.duração) 
   console.log(calculoDeTempoDeDuração)
   const mediaDeTempoDeDuração = Number(calculoDeTempoDeDuração / 3)
   console.log(mediaDeTempoDeDuração)
   let calculoDeAno = Number(item1.anoDeInicioDaSerie + item2.anoDeInicioDaSerie + item3.anoDeInicioDoFilme)
   console.log(calculoDeAno)
   const mediaDoCalculoDeAno = Number(calculoDeAno / 3)
   console.log(mediaDoCalculoDeAno)
 
   const verificandoBoleano = (item1.isRemake && item2.isRemake && item3.isRemake)
   console.log(verificandoBoleano === true? 'valores verdadeiros' : 'não são reais')

   // 2. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
  //  1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS 
  //   MAIÚSCULAS.


console.log("THE LAST KINGDON", item1)
console.log("THE WALKING DEAD", item2)
console.log("CLUBE DA LUTA", item3)

