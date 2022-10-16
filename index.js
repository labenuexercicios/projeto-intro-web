console.log("Semana 2")
//Projeto-integrador - semana 2
//1 Transformar as variaveis que criamos em objetos

const serie1 = {
     título: "Outlander",
     temporadas: 6,
     temNaNetflix: true,
     imagem: "outlander",
     personagensPrincipais: ["Claire Fraser", "Jamie Fraser", "Jonathan Randall"]
 }

 const serie2 = {
     título: "The Handmands Tale",
     temporadas: 5,
     temNaNetflix: false,
     imagem: "hand",
     personagensPrincipais: ["June Osborne", "Serena Joy","Comandante"]
 }

 const serie3 = {
     título: "Greys Anatomy",
     temporadas: 19,
     temNaNetflix: false,
     imagem: "greys",
     personagensPrincipais: ["Meredith Grey", "Derek Shepherd", "Cristina Yang"]
 }

 console.log(`Melhores séries (em objetos):`, serie1, serie2, serie3)

//2 Crie um array para guardar esses objetos
let series = []

//3 Adicione os objetos ao array de objetos "series"
// series.push(serie1, serie2, serie3)
// console.log(`Melhores séries (em um unico array com objetos):`, series)

//APOS o 2 e 3, ficara assim: (um array que guarda objetos que tem array dentro)

//   series = [
//      { 
//         titulo: "Outlander",
//         temporadas: 6,
//         temNaNetflix: true,
//         imagem: "outlander",
//         personagensPrincipais: ["Claire Fraser", "Jamie Fraser", "Jonathan Randall"]
//        },

//        { 
//       titulo: "The Handmands Tale",
//         temporadas: 5,
//         temNaNetflix: false,
//         imagem: "hand",
//         personagensPrincipais: ["June Osborne", "Serena Joy","Comandante"]
//        },

//        { 
//         titulo: "Greys Anatomy",
//         temporadas: 19,
//         temNaNetflix: false,
//         imagem: "greys",
//         personagensPrincipais: ["Meredith Grey", "Derek Shepherd", "Cristina Yang"]
//        },
//      ]


//4 Altere o item 3.Adicione uma verificação antes de dar o push(antes de adicionar os objetos ao array de objetos). CONDICIONAIS
//5 Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item não foi adicionado. E nesse caso não sera feito o push.
     if (serie1.temNaNetflix===true){
        series.push(serie1)
      alert("O título \'Outlander'\ é exibido no streaming Netflix, e por isso, foi adicionado a lista")
        } else {
      alert("O título \'Outlander'\ não pode ser adicionado a lista, pois não é exibido no streaming Netflix")
     }

     if (serie2.temNaNetflix===true){
       series.push(serie2)
      alert("O título \'The handmands Tale'\ é exibido no streaming Netflix, e por isso, foi adicionado a lista")
        } else {
      alert("O título \'The handmands Tale'\ não pode ser adicionado a lista, pois não é exibido no streaming Netflix")
     }

     if (serie3.temNaNetflix===true){
      series.push(serie3)
      alert("O título \'Greys Anatomy'\ é exibido no streaming Netflix, e por isso, foi adicionado a lista")
        } else {
      alert("O título \'Greys Anatomy'\ não pode ser adicionado a lista, pois não é exibido no streaming Netflix")
     }

  console.log(`Séries com exibição no streaming Netflix:`, series) 
  //impresso no console apenas o que foi para o array SERIES atraves do push (ou seja, apenas os itens que são exibidos na streaming netflix)
