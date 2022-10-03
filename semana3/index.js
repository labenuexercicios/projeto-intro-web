
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
    duração: 250,
    anoDeInicioDoFilme: 1999,
    generoDoFilme: ['suspense', 'humor ácido', 'drama', 'crime', 'ação'],
    isRemake: false 
 }

    const calculoDeTempo = itemSerie1.duração + itemSerie2.duração + itemFilme1.duração 
    console.log(calculoDeTempo)