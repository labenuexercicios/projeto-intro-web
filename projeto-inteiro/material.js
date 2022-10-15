
const arrayVazio = []
const itemSerie1 = {
    nome: 'The Last Kingdon',
    sinopse: `<p>um jovem garoto perde seu pai e seu castelo, depois de anos<br>ele retoma o que lhe foi tirado, e que é dele por direito<p>`,
    duracao: 2700,
    anoDeInicio: 2015,
    genero: ['tema medieval', 'hitórico', 'drama', 'ação'],
    isRemake: false,
    imagem: "../the last kingdon.jpeg",
    linkDeReferencia: '<a href="https://pt.wikipedia.org/wiki/The_Last_Kingdom_(série_de_televisão)" target="_blanck">LINK PRA PÁGINA</a>'
}
const itemSerie2 = {
    nome: 'The Walking Dead',
    sinopse: `<p>após um apocalipse de zumbis e ao acordar de um coma sozinho<br> um policia se ve em uma trama onde busca pela sua familia e por sobrevivencia<p>`,
    duracao: 2700,
    anoDeInicio: 2011,
    genero: ['terror', 'suspense', 'drama', 'ação'],
    isRemake: false,
    imagem: "../the walking dead.jpeg",
    linkDeReferencia: '<a href="https://pt.wikipedia.org/wiki/The_Walking_Dead_(série_de_televisão)" target="_blanck">LINK PARA A PÁGINA</a>' 
}
const itemFilme1 = {
    nome: 'Clube da luta',
    sinopse: `<p>Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler<br> Durden e se vê morando em uma casa suja depois <br> que seu perfeito apartamento é destruído</p>`,
    duracao: 258,
    anoDeInicio: 1999,
    genero: ['suspense', 'humor ácido', 'drama', 'crime', 'ação'],
    isRemake: false,
    imagem: "../clube da luta.jpeg",
    linkDeReferencia: '<a href="https://pt.wikipedia.org/wiki/Fight_Club"   target="_blanck">LINK PARA A PÁGINA</a>'
}
const itemFilme2 = {
    nome: 'Rambo: até o fim',
    sinopse: `<p>O tempo passou para Rambo, que agora vive recluso em um rancho. Sua vida marcada por lutas <br>violentas<br> ficou para trás, mas deixou marcas inesquecíveis. No entanto, quando uma jovem de uma <br>família amiga é sequestrada, Rambo precisa confrontar seu passado<br> e resgatar suas habilidades de combate para enfrentar o mais perigoso<br> cartel mexicano. A busca logo se transforma em uma caçada por justiça<br> na qual nenhum criminoso é perdoado.`,
    duracao: 129,
    anoDeInicio: 2019,
    genero: ['suspense', 'faroeste', 'ação'],
    isRemake: false,
    imagem: "../pasta-de-fotos/rambo.jpg", 
    linkDeReferencia: '<a href="https://pt.wikipedia.org/wiki/Rambo:_Last_Blood" target="_blanck">LINK PARA A PÁGINA</a>'
}
const itemSerie3 = {
    nome: 'Vikings',
    sinopse: `<p>retrata Ragnar como um fazendeiro que alcança a fama por seus ataques bem-sucedidos <br> na Inglaterra e<br> mais tarde, se torna um Rei escandinavo, com o apoio de sua família e colegas <br>guerreiros: seu irmão Rollo<br> seu filho Bjorn Flanco de Ferro, e suas esposas, a escudeira Lagertha e a princesa Aslaug<p>`,
    duracao: 3569,
    anoDeInicio: 2013,
    genero: ['drama', 'guerra', 'ação', 'obra de época', 'aventura', 'minissérie', 'ficção hitórica', 'military ficction'],
    isRemake: false,
    imagem: "../pasta-de-fotos/vikings.jpg", 
    linkDeReferencia: '<a " href="https://en.wikipedia.org/wiki/Vikings_(TV_series)" target="_blank">LINK PARA A PÁGINA</a>'
}
// console.log(itemFilme1)
// console.log(itemSerie1)
// console.log(itemSerie2)
// console.log(itemSerie3)
// console.log(itemFilme2)
// //💡 média de calculo de tempo de duração no filme 
const calculoDeTempoDeDuração = Number(itemSerie1.duracao + itemSerie2.duracao + itemFilme1.duracao + itemFilme2.duracao + itemSerie3.duracao)
const mediaDeTempoDeDuração = Number(calculoDeTempoDeDuração / 3)
console.log("MÉDIA DE TEMPO DE DURAÇÃO:", mediaDeTempoDeDuração, "Horas")
// console.log(Number(`VMédia de tempo de duração: ${mediaDeTempoDeDuração} horas`))
// //verificação com if ternário
// //💡 verificando operção lógica que checa os boleanos das variáveis
const verificandoBoleano = (itemFilme1.isRemake && itemSerie1.isRemake && itemSerie2.isRemake && itemFilme2.isRemake && itemSerie3.isRemake)
console.log(verificandoBoleano === false ? 'BOLEANOS VERIFICADOS = valores corretos' : 'são incorretos')

// SEMANA 4----------------------------------------------------------
// let verificação = prompt('Diga se a boleana é: (V) verdadeira ou (F)falsa')
// if(verificação === 'V'){
//     const novoArray = itemFilme1.genero.push('ficção')  
//     console.log('verdadeiro')
//     console.log(novoArray)
//     console.log(itemFilme1)
// }else if(verificação === 'F'){
//     alert('falso, não foi adicionado o valor ao array de objetos')
//     console.log(itemFilme1)
//     console.log("VALORES SEM O OBJETO ADICIONADO", itemFilme1)

// }
//SEMANA 5--------------------------------------------------
//refatoração
if (itemFilme1.isRemake === false) {
    console.log('aceito, itemFilme1 foi alocado no arraVazio')
    arrayVazio.push(itemFilme1)

} else {
    alert('não é possivel adiciona-lo ao arrayVazio')
}

if (itemSerie1.isRemake === false) {
    console.log('aceito, itemSerie1 foi alocado no arraVazio')
    arrayVazio.push(itemSerie1)

} else {
    alert('não é possivel adiciona-lo ao arrayVazio')
}

if (itemSerie2.isRemake === false) {
    console.log('aceito, itemSerie2 foi alocado no arraVazio')
    arrayVazio.push(itemSerie2)
}
if (itemFilme2.isRemake === false) {
    console.log('aceito, itemFilme2 foi alocado no arrayVazio')
    arrayVazio.push(itemFilme2)
} else {
    alert('não é possivel adiciona-lo ao arrayVazio')
}
if (itemSerie3.isRemake === false) {
    console.log('aceito, itemSerie3 foi alocado no arrayVazio')
    arrayVazio.push(itemSerie3)
} else {
    alert('não é possivel adiciona-lo ao arrayVazio')
}

console.log("tudo dentro do array que estava vazio", arrayVazio)

for (let i = 0; i < arrayVazio.length; i++) {
    console.log(`Nome: ${arrayVazio[i].nome.toLocaleUpperCase()}\n Sinopse: ${arrayVazio[i].sinopse} \n Duracao: ${arrayVazio[i].duracao}\n AnoDeInicio: ${arrayVazio[i].anoDeInicio} \n Genero: ${arrayVazio[i].genero} \n Isremake: ${arrayVazio[i].isRemake} \n Imagem: ${arrayVazio[i].imagem}`)
}
//SEMANA 6---------------------------------------
// 1. Crie uma função que receba como parâmetro um objeto
// e devolva a string do relatório com os dados do objeto.
// 2. Crie uma função que recebe um array de objetos e uma string
// Esta função deve retornar um objeto
// e o objeto retornado deve possuir apenas os itens que tenham
// o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba
// um ALERT indicando que nenhum item foi encontrado.
 function funcaoModular(arraVazio1, valorString){

    let objARetornar = {}

    for(let i = 0; i < arraVazio1.length; i++){

      if(arraVazio1[i].nome.toLowerCase() === valorString.toLowerCase()){
          objARetornar.nome = arraVazio1[i].nome
          objARetornar.sinopse = arraVazio1[i].sinopse
          objARetornar.duracao = arraVazio1[i].duracao
          objARetornar.anoDeInicio = arraVazio1[i].anoDeInicio
          objARetornar.genero = arraVazio1[i].genero
          objARetornar.isRemake = arraVazio1[i].isRemake
       // objARetornar = {...arraVazio1};
      }
    }
    if(objARetornar.nome.toLowerCase() !== valorString.toLowerCase()){
        alert("filme ou série não encontrada")
    }else{
        return objARetornar
    }

 }
//  const objARetornar2 = funcaoModular(arraVazio1, 'itemFilme2')
//  console.log(objARetornar2)

//  nome: 
//  sinopse:
//  duracao: 
//  anoDeInicio:
//  genero: 
//  isRemake: 
//SEMANA 7--------------------------------------------
//1. Crie uma página HTML, e nesta página, dê um título para sua lista de itens;
//2. Crie um cabeçalho, uma seção principal, e um footer para a página;
//3. Na seção principal. Crie duas divisões. Uma deve possuir um input e um botão. A outra, deve possuir sections para criar os itens da lista;
//4. Crie uma section para cada item da lista;
//5. Para cada um dos três itens criados deve possuir todas as informações do array de objetos. As informações devem estar elencadas como lista não ordenada. Esta tela não precisa interagir com o JavaScript, tendo seus dados escritos diretamente nos elementos.
//6. Transforme o nome/título do item em um link para um artigo sobre este item (pode ser do google, de algum blog ou da Wikipédia)
//💡 Recomendamos adicionar imagens a seus itens agora. Ao fazer isso, lembre-se de criar mais uma propriedade String nos seus objetos, para guardar o caminho do link até a imagem.
//FEITO
//SEMANA 8-------------------------------------------------
//estilização 
//SEMANA 9----------------------------------------
//TRANSFORMAR OS ELEMENTOS EM FLEXBOX
//OU O CONTAINER INTEIRO EM FLEXBOX
//SEMANA 10----------------------------------------------------------
//1. Transforme os elementos da lista de itens em Grid;
//2. Faça com que a página se torne responsiva, exibindo 
//corretamente as informações em desktop e móvel;
//OU
//1. Transforme o container da tela toda em Grid;
//2. Faça com que a página se torne responsiva, exibindo 
//corretamente as informações em desktop e móvel;


//SEMANA 11 e SEMANA 12--------------------------------------------------
//MANIPULAR O DOM E COLOCAR UM BOTÃO DE BUSCA 
//arrayVazio
//itemFilme1
//itemFilme2
//itemSerie1
//itemSerie2
//itemSerie3

//itemSerie1
//---pegando o título do objeto ---------------------------------------
const entrandoDom1 = document.getElementById('Dom1')
const criandoElemt1 = document.createElement('li')
entrandoDom1.insertAdjacentElement('beforeend', criandoElemt1)
criandoElemt1.innerHTML = `Título: ${itemSerie1.nome}`
//----- pegando o link de referencia de página -------------------
const entrandoDom1L = document.getElementById('Dom1')
const criandoOelement = document.createElement('li')
entrandoDom1L.insertAdjacentElement('beforeend', criandoOelement)
criandoOelement.innerHTML += `Link sobre a série: ${itemSerie1.linkDeReferencia}`
//------pegando a sinopse da serie--------------------------------
const entrandoNoDom1 = document.getElementById('Dom1')
const sinopse1 = document.createElement('li')
entrandoNoDom1.insertAdjacentElement('beforeend', sinopse1)
sinopse1.innerHTML += `Sinopse: um jovem garoto perde seu pai e seu castelo, depois de <br> 
anos ele retoma o que lhe foi tirado, e que é dele por direito <br>`
//----------pegando o tempo de duração
const Dom1 = document.getElementById('Dom1')
const criandoElemt01 = document.createElement('li')
Dom1.insertAdjacentElement('beforeend', criandoElemt01)
criandoElemt01.innerHTML += `Tempo de duração: ${itemSerie1.duracao} minutos`

//itemSerie2
//---pegando o título do objeto
const entrandoDom2 = document.getElementById('Dom2')
const elemento2 = document.createElement('li')
entrandoDom2.insertAdjacentElement('beforeend', elemento2)
elemento2.innerHTML += `Título: ${itemSerie2.nome}`
//-----pegando o link de referencia
const entrandoDom2L = document.getElementById('Dom2')
const criandoOelemen2 = document.createElement('li')
entrandoDom2L.insertAdjacentElement('beforeend', criandoOelemen2)
criandoOelemen2.innerHTML += `Referencia sobre a série: ${itemSerie2.linkDeReferencia}`
//------sinopse
const entrandoNaDom2 = document.getElementById('Dom2')
const criandoElwm2 = document.createElement('li')
entrandoNaDom2.insertAdjacentElement('beforeend', criandoElwm2)
criandoElwm2.innerHTML += `Sinopse: ${itemSerie2.sinopse}`
//---duração
const Dom2 = document.getElementById('Dom2')
const criandoElemt02 = document.createElement('li')
Dom2.insertAdjacentElement('beforeend', criandoElemt02)
criandoElemt02.innerHTML += `Tempo de duração da série: ${itemSerie2.duracao} minutos`

//itemFilme1
const entrandoDom3 = document.getElementById('Dom3')
const criandoObjeto = document.createElement('li')
entrandoDom3.insertAdjacentElement('beforeend', criandoObjeto)
criandoObjeto.innerHTML += `Título: ${itemFilme1.nome}`
//-----link
const entrandoDom3Link = document.getElementById('Dom3')
const criandoLInk = document.createElement('li')
entrandoDom3Link.insertAdjacentElement('beforeend', criandoLInk)
criandoLInk.innerHTML += `Link sobre a série: ${itemFilme1.linkDeReferencia}`
//------sinopse
const entrandoNOcontainerItem04 = document.getElementById('Dom3')
const crianDoElmn04 = document.createElement('li')
entrandoNOcontainerItem04.insertAdjacentElement('beforeend', crianDoElmn04)
crianDoElmn04.innerHTML += `Sinopse: ${itemFilme1.sinopse}`
//---duração
const duracaoDom3 = document.getElementById('Dom3')
const criacaoDeElemnto3 = document.createElement('li')
duracaoDom3.insertAdjacentElement('beforeend', criacaoDeElemnto3)
criacaoDeElemnto3.innerHTML += `Tempo de duração do filme: ${itemFilme1.duracao} duas horas e cinquenta e oito minutos`

//itemFilme2 
const entrandoDom4 =  document.getElementById('Dom4')
const criacaoDeElmt4 = document.createElement('li')
entrandoDom4.insertAdjacentElement('beforeend', criacaoDeElmt4)
criacaoDeElmt4.innerHTML += `Título:${itemFilme2.nome}`
//---------link de referencia 
const linkDeReferenciaDom4 = document.getElementById('Dom4')
const criandoELemtno4 = document.createElement('li')
linkDeReferenciaDom4.insertAdjacentElement('beforeend', criandoELemtno4)
criandoELemtno4.innerHTML += `Link sobre o filme: ${itemFilme2.linkDeReferencia}`
//------sinopse
const sinopseParaAP = document.getElementById('Dom4')
const criandoeLEm04 = document.createElement('li')
sinopseParaAP.insertAdjacentElement('beforeend', criandoeLEm04)
criandoeLEm04.innerHTML += `Sinopse:${itemFilme2.sinopse}`
//---duração
const entrandoNOdom4PraPEGARimagem = document.getElementById('Dom4')
const elemento4Imagem = document.createElement('li')
entrandoNOdom4PraPEGARimagem.insertAdjacentElement('beforeend', elemento4Imagem)
elemento4Imagem.innerHTML += `Tempo de duração do filme: ${itemFilme2.duracao} 1hora e 29 minutos`

//itemSerie3
const entrandoNoDom5 = document.getElementById('Dom5')
const elementoDoDom5 = document.createElement('li')
entrandoNoDom5.insertAdjacentElement('beforeend', elementoDoDom5)
elementoDoDom5.innerHTML += `Título: ${itemSerie3.nome}`

const entrandoDomm5 = document.getElementById('Dom5')
const elementoPRaguardarLink = document.createElement('li')
entrandoDomm5.insertAdjacentElement('beforeend', elementoPRaguardarLink)
elementoPRaguardarLink.innerHTML += `Referencia sobre a série ${itemSerie3.linkDeReferencia}`
//------sinopse
const sinopseVIkings = document.getElementById('Dom5')
const elementoPraguardar = document.createElement('li')
sinopseVIkings.insertAdjacentElement('beforeend', elementoPRaguardarLink)
sinopseVIkings.innerHTML += `Sinopse:${itemSerie3.sinopse}`
//---duração
const entraPRpegardURACAO = document.getElementById('Dom5')
const elementoPraGuardarDuração = document.createElement('li')
entraPRpegardURACAO.insertAdjacentElement('beforeend', elementoPraGuardarDuração)
elementoPraGuardarDuração.innerHTML += `Tempo de duração da série: ${itemSerie3.duracao}`
//219 a 325



//INPUT COM BOTÃO
// function insereItem(){
//     const elementoDeForma = document.getElementById("inputS")
//     const buscadorElmn = elementoDeForma.value
    
//     const retorno = filtro(objARetornar, buscadorElmn)
//     if(retorno.nome){
//       const elementoListado = document.getElementById("divConteudo")
//       elementoListado.innerHTML = `<li>${retorno.nome}<li/>`
//     }else{
//         alert('não encontrado')
//     }    
// }

// function umMostrandoValor(event) {
//     const input = document.getElementById("divConteudo");
//     const input2 = event.target;
//     const teclaApertada = event.getModifierState("CapsLock");
//     console.log(teclaApertada);

// }
