// // Cria um item com tres valores, string, number, boleano
// // 🎬 Filme
// // * Título;
// // * Sinopse;
// // * Duração em minutos;
// // * Ano de Lançamento;
// // * Gênero (terror, suspense, ação, comédia etc);
// // * É um remake?

const itemSerie1 = {
    nome: 'The last kingdon',
    sinopse: 'um jovem garota perde seu pai e seu castelo, mais tarde depois de anos ele retoma o que lhe foi tirado, que é dele por direito', 
    duração: 2700,
    anoDeInicioDaSerie: 2015, 
    generoDaSerie: ['tema medieval', 'histórico', 'drama', 'ação'], 
    isRemake: false 
   
}
 const itemSerie2 = {
    nome: 'the walking dead', 
    sinopse: 'após um apocalipse de zumbis e ao acordar de um coma sozinho, um policia se ve em uma trama onde busca pela sua familia e por sobrevivencia', 
    duração: 2700,
    anoDeInicioDaSerie: 2011, 
    generoDaSerie:['terror', 'suspense', 'drama', 'ação'],
    isRemake: false 
 
}
 const itemFilme1 = {
    nome: 'clube da luta', 
    sinopse: 'Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído',
    duração: 258,
    anoDeInicioDoFilme: 1999,
    generoDoFilme: ['suspense', 'humor ácido', 'drama', 'crime', 'ação'],
    isRemake: false 
 }

 
//    💡A média deve ser igual à soma dos itens, dividida pelo total de itens.
// tres objetos
// soma de 2700 + 2700 + 258 divido por 3
// 
// 

   let calculoDeTempoDeDuração = Number(itemSerie1.duração + itemSerie2.duração + itemFilme1.duração) 
   console.log(calculoDeTempoDeDuração)
   const mediaDeTempoDeDuração = Number(calculoDeTempoDeDuração / 3)
   console.log(mediaDeTempoDeDuração)

   
   let calculoDeAno = Number(itemSerie1.anoDeInicioDaSerie + itemSerie2.anoDeInicioDaSerie + itemFilme1.anoDeInicioDoFilme)
   console.log(calculoDeAno)
   const mediaDoCalculoDeAno = Number(calculoDeAno / 3)
   console.log(mediaDoCalculoDeAno)


 
// 4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.
// 💡 Exemplo

// const verificaEmails = verificouEmail1 && verificouEmail2 && verificouEmail3;
// console.log(verificaEmails);
// // nesse caso, vai imprimir false, pois verificouEmail1 === false

const verificandoBoleano = (itemFilme1.isRemake && itemSerie1.isRemake && itemSerie2.isRemake)
console.log(verificandoBoleano === false? 'valores verdadeiros' : 'não são reais')


// mini calculadora
// let a = Number(prompt('fale um numero'))
// let b = Number(prompt('fale outro numero'))
// let aB = a + b 
// console.log(aB)




 
 