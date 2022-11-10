//Pense em alguma coisa do cotidiano que seja contável e estruturada. Por enquanto, vamos chamar esta coisa de item. Com esse item, nós vamos construir nossas lógicas e evoluir no projeto através das semanas
// Exemplo: 🎬 Filme
// * Título;
// * Sinopse;
// * Duração em minutos;
// * Ano de Lançamento;
// * Gênero (terror, suspense, ação, comédia etc);
// * É um remake?
// Eu vou esolher Jogos de pc.
// 1. Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características para definir exemplos destes objetos usando o código.
// Você precisará criar pelo menos:
//   * uma característica String;
//   * uma característica Number;
//   * uma característica Boolean;
// As características escolhidas são o nome, empresa fabricante, ano de lançamento e se tem na Steam

// 2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.

// The Last of Us
// const jogo1 = "The last of us"
// const desenvolvedora1 = "NaughtyDog"
// const lancamento1 = 2013
// const temNaSteam1 = false
// const premios1 = ["Melhor jogo ", "Melhor Audio ", "História ", "Desepenho"]

//Daying Light
// const jogo2 = "Daying Light"
// const desenvolvedora2 = "Techland"
// const lancamento2 = 2015
// const temNaSteam2 = true
// const premios2 = ["Lighting/Texturing ", "Animation ", "Technical"]

//The Witcher 3
// const jogo3 = "The Witcher 3"
// const desenvolvedora3 = "CD PROJEKT RED"
// const lancamento3 = 2016
// const temNaSteam3 = true
// const premios3 = ["Jogo do ano ", "Jogo mais aguardado ", "Melhor RPG"]

// //3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;

// const mediaLancamento = (lancamento1 + lancamento2 + lancamento3) /3
// console.log (mediaLancamento)

// //4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.
// const verifiSteam = temNaSteam1 && temNaSteam2 && temNaSteam3
// console.log(verifiSteam)

// //5. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.
// //6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
// //6-1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.
// console.log ("Nome do Jogo: " + jogo1.toUpperCase() + "\nDesenvolvedora: " + desenvolvedora1 + "\nLançado em: " + lancamento1 + "\nO jogo esta na steam? " + temNaSteam1 + "\nPremios recebidos pelo jogo: ", premios1)

// console.log ("Nome do Jogo: " + jogo2.toUpperCase() + "\nDesenvolvedora: " + desenvolvedora2 + "\nLançado em: " + lancamento2 + "\nO jogo esta na steam? " + temNaSteam2 + "\nPremios recebidos pelo jogo: ", premios2)

// console.log ("Nome do Jogo: " + jogo3.toUpperCase() + "\nDesenvolvedora: " + desenvolvedora3 + "\nLançado em: " + lancamento3 + "\nO jogo esta na steam? " + temNaSteam3 + "\nPremios recebidos pelo jogo: ",  premios3)

let superJogos = [
jogo1 = {
  imagem: "https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/eEczyEMDd2BLa3dtkGJVE9Id.png",
  link: "https://pt.wikipedia.org/wiki/The_Last_of_Us",
  nome: "The Last of Us",
  desenvolvedora: "NaughtyDog",
  lancamento: 2013,
  temNaSteam: false,
  premios: ["Melhor jogo", " Melhor Audio", " Melhor História", " Desepenho"]
},

jogo2 = {
  imagem: "https://www.mobygames.com/images/covers/l/298981-dying-light-playstation-4-front-cover.jpg",
  link: "https://pt.wikipedia.org/wiki/Dying_Light",
  nome: "Dying Light",
  desenvolvedora: "Techland",
  lancamento: 2015,
  temNaSteam: true,
  premios: ["Lighting/Texturing", " Animation", " Technical"]
},

jogo3 = {
  imagem: "https://image.api.playstation.com/vulcan/img/rnd/202009/2913/TQKAd8U6hnIFQIIcz6qnFh8C.png",
  link: "https://pt.wikipedia.org/wiki/The_Witcher_3:_Wild_Hunt",
  nome: "The Witcher 3",
  desenvolvedora: "CD PROJEKT RED",
  lancamento: 2016,
  temNaSteam: true,
  premios: ["Jogo do ano", " Jogo mais aguardado", " Melhor RPG"]
}
];

// console.log(superJogos)
if (jogo1.temNaSteam) {
  console.log(`${jogo1.nome} tem na Steam`);

} else {
  console.log(`${jogo1.nome} não tem na Steam`);
}

if (jogo2.temNaSteam) {
    console.log(`${jogo2.nome} tem na Steam`);

  } else {
    console.log(`${jogo2.nome} não tem na Steam`);

  }
 if (jogo3.temNaSteam) {
    console.log(`${jogo3.nome} tem na Steam`);

  } else {
    console.log(`${jogo3.nome} não tem na Steam`);

  }

// console.log(superJogos)
let media = (jogo1.lancamento + jogo2.lancamento + jogo3.lancamento) / 3
console.log(`A média entre os 3 anos de lançamento é ${media}`)

// semana 3
// for (let i in superJogos) {
//   superJogos[i].premios = superJogos[i].premios.toString() + ","
// }
// console.log(superJogos)

// for (let i in superJogos) {
//   superJogos[i].temNaSteam = superJogos[i].temNaSteam.toString() + ","
// }
// console.log(superJogos)
// for (let i in naoTemNaSteam) {
//   naoTemNaSteam[i].premios = naoTemNaSteam[i].premios.toString() + ","
//}
//console.log(naoTemNaSteam)
//. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.
// function busca(objeto1) {
//   return console.log(objeto1.nome)
// }
// busca(jogo2)
// 4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.


console.log(jogo2)
console.log(jogo1)
console.log(jogo3)
const fazerABusca = (event) => {

  event.preventDefault()

  let nomeDoJogo = document.getElementById("buscador");


  // console.log(nomeDoJogo.value)



  return buscaNoObjeto(superJogos, nomeDoJogo.value)

};

// let lastOfUs = document.getElementById("nomeJogo1")
// lastOfUs.innerHTML = naoTemNaSteam[0].nome
// console.log(superJogos[0].nome)
// console.log(lastOfUs)
// console.log(superJogos)


let lista = document.getElementById("containerTotal")



superJogos.filter(jogos => {
  function listarJogos() {
    lista.innerHTML += `<section>

       <img src="${jogos.imagem}" alt="The last of Us" class="primeiraimagem">

        <ul class="jogo" id="jogo">

          <li><a href="${jogos.link}" target="_blank" class="nomejogo" id="nomeJogo">${jogos.nome.toUpperCase()}</a>          
          </li>

          <li id="produtora1">${jogos.desenvolvedora}</li>

          <li id="anoDoLancamento">${jogos.lancamento}</li>

          

          <li id="premios">${jogos.premios}</li>

        </ul>
        
    </section>`

  }
  listarJogos()
})

// console.log(superJogos)

function buscaNoObjeto(arrayObjetos, string) {
  for (let i in arrayObjetos) {
    string = string.toUpperCase()
    if (arrayObjetos[i].nome.toUpperCase() === string) {
      console.log(arrayObjetos[i])
      return lista.innerHTML = `<section>

      <img src="${arrayObjetos[i].imagem}" alt="The last of Us" class="primeiraimagem">

       <ul class="jogo" id="jogo">

         <li><a href="${arrayObjetos[i].link}" target="_blank" class="nomejogo" id="nomeJogo">${arrayObjetos[i].nome.toUpperCase()}</a>          
         </li>

         <li id="produtora1">${arrayObjetos[i].desenvolvedora}</li>

         <li id="anoDoLancamento">${arrayObjetos[i].lancamento}</li>

         

         <li id="premios">${arrayObjetos[i].premios}</li>

       </ul>
       
   </section>`
    }
  }
  lista.innerHTML = ""
  superJogos.filter(jogos => {
    function listarJogos() {
      lista.innerHTML += `<section>
  
         <img src="${jogos.imagem}" alt="The last of Us" class="primeiraimagem">
  
          <ul class="jogo" id="jogo">
  
            <li><a href="${jogos.link}" target="_blank" class="nomejogo" id="nomeJogo">${jogos.nome.toUpperCase()}</a>          
            </li>
  
            <li id="produtora1">${jogos.desenvolvedora}</li>
  
            <li id="anoDoLancamento">${jogos.lancamento}</li>
  
            
  
            <li id="premios">${jogos.premios}</li>
  
          </ul>
          
      </section>`

    }
    listarJogos()
  })
  return alert("Não foi possivel encontrar o item buscado!")
}
