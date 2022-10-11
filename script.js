
    
/* Semana 1    */

/*const nome1 = "Aranha-marrom"
const tempoMedioDeVida1 = 2
const extinto1 = false
const arrayCores1 = [ "Marrom" ]

const nome2 = "Viuva-negra"
const tempoMedioDeVida2 = 3
const extinto2 = false
const arrayCores2 = [ "Preta" ]

const nome3 = "Aranha-armadeira"
const tempoMedioDeVida3 = 2
const extinto3 = false
const arrayCores3 = [ "Marrom" ]

*/

const animal1 = {
    nome: "Aranha marrom (Loxosceles)",
    link: "https://pt.wikipedia.org/wiki/Loxosceles",
    imagem:"imagens/imagem_2_aranha-marrom-caracteristicas-prevencao-e-controle-eficaz.jpg",
    tempoMedioDeVida: 2,
    arrayCores: [ "Marrom" ],
    extinto: false
}

const animal2 = {
    nome: "Viuva negra (Latrodectus)",
    link: "https://pt.wikipedia.org/wiki/Latrodectus",
    imagem: "imagens/destaque-1.jpg" ,
    tempoMedioDeVida: 3,
    arrayCores: [ "preta" ],
    extinto: false
    
}


const animal3 = { 
    nome: "Aranha armadeira (Phoneutria)",
    imagem: "imagens/armadeira3.jpg" ,
    tempoMedioDeVida: 2 ,
    arrayCores: [ "marrom" ],
    extinto: false
}

//-----------------------------//

const animal5 = { 
    nome: "Aranha teia de funil (Atrax robustus)",
    link: "https://pt.wikipedia.org/wiki/Atrax_robustus",
    imagem: "imagens/aranha teia de funil.jpg",
    tempoMedioDeVida: 2 ,
    arrayCores: [ "Preta" ],
    extinto: false
}

const animal6 = { 
    nome: "Aranha de alçapão de cabeça vermelha",
    imagem: "imagens/aranha-rato.jpg",
    tempoMedioDeVida: 25 ,
    arrayCores: [ "Preta" ],
    extinto: false
}

const animal7 = { 
    nome: "Aranha da areia (Aptostichus sp)",
    link: "https://pt.wikipedia.org/wiki/Aptostichus",
    imagem: "imagens/aranhas-mais-venenosas-perigosas-do-mundo-5.jpg",
    tempoMedioDeVida: 0 ,
    arrayCores: [ "Branca" ],
    extinto: false
}








console.log('--- Calculando media Semana 1 abaixo --- ')

let mediaDeTempoDeVida = animal1.tempoMedioDeVida + animal2.tempoMedioDeVida + animal3.tempoMedioDeVida + animal5.tempoMedioDeVida + animal6.tempoMedioDeVida + animal7.tempoMedioDeVida /3

console.log("A media de vida é:", mediaDeTempoDeVida)

const verificarExtinto = animal1.extinto && animal2.extinto && animal3.extinto && animal5.extinto && animal6.extinto && animal7.extinto

console.log(verificarExtinto)

// --- Semana 2 ----

console.log('Semana 2 exibindo')

console.log(

        `${animal5.nome.toLocaleUpperCase()} 
        Tempo de vida media: ${animal5.tempoMedioDeVida}
        Qual a cor da aranha: ${animal5.arrayCores}
        Ela esté extinta? ${animal5.extinto}`
            
                   )
console.log(

        `${animal6.nome.toLocaleUpperCase()} 
        Tempo de vida media: ${animal6.tempoMedioDeVida}
        Qual a cor da aranha: ${animal6.arrayCores}
        Ela esté extinta? ${animal6.extinto}`
            
                   )
console.log(

        `${animal7.nome.toLocaleUpperCase()} 
        Tempo de vida media: ${animal7.tempoMedioDeVida}
        Qual a cor da aranha: ${animal7.arrayCores}
        Ela esté extinta? ${animal7.extinto}`
            
                   )
console.log(

        `${animal1.nome.toLocaleUpperCase()} 
        Tempo de vida media: ${animal1.tempoMedioDeVida}
        Qual a cor da aranha: ${animal1.arrayCores}
        Ela esté extinta? ${animal1.extinto}`
            
                   )
 console.log(
        
        `${animal2.nome.toLocaleUpperCase()} 
        Tempo de vida media: ${animal2.tempoMedioDeVida}
        Qual a cor da aranha: ${animal2.arrayCores}
        Ela esté extinta? ${animal2.extinto}`
            
                   )
 console.log(
        
        `${animal3.nome.toLocaleUpperCase()} 
        Tempo de vida media: ${animal3.tempoMedioDeVida}
        Qual a cor da aranha: ${animal3.arrayCores}
        Ela esté extinta? ${animal3.extinto}`
            
                   )
// semana 3
//enviando quase todos os objetos pra dentro do array
let arrayAnimais = []

arrayAnimais.push(animal1 , animal2 , animal3 , animal5 , animal6, animal7)

console.log(arrayAnimais)

//semana 4

const aranha4 = {
    nome: "Uraraneida (Aptostichusararaneida)" , 
    imagem: "imagens/ancient-spider-like-creature.jpg" ,
    link:"https://pt.wikipedia.org/wiki/Aptostichusararaneida",
    tempoMedioDeVida4: 0,
    arrayCores: [ "Amarelada" ],
    extinto: true,    
}


//enviando aranha 4 pro array 

if(aranha4.extinto === true){
    arrayAnimais.push(aranha4)
}else{
    console.log("o item não foi adicionado")
    alert("o item não foi adicionado")
}




console.log(`semana 5`)


console.log(arrayAnimais)



console.log('semana6')
// funçao passando dentro de todas as informaçoes 

function funcaoRetornar(arrayAnimais, valorString){

    let objRetornando = {}

for(let i=0; i<arrayAnimais.length; i++){

   if(arrayAnimais[i].nome === valorString){
    objRetornando.nome = arrayAnimais[i].nome
    objRetornando.imagem = arrayAnimais[i].imagem
    objRetornando.link = arrayAnimais[i].link
    objRetornando.tempoMedioDeVida = arrayAnimais[i].tempoMedioDeVida
    objRetornando.arrayCores = arrayAnimais[i].arrayCores
    objRetornando.extinto = arrayAnimais[i].extinto
    


   }
}

if(objRetornando.nome !== valorString){
    alert("Nenhum item foi encontrado")
}else{
    return objRetornando
}
}



// const buscando = funcaoRetornar(arrayAnimais, 'Aranha armadeira')
// console.log(buscando)



// semana 7 no html

// semana 8 no html

// semana 9 no css

// semana 10 no css

// semana 11

const listaAranhas = document.createElement("ul")
//criando lista
const container = document.getElementById("sectionPrincipal")
//atribuindo o ultimo lugar pra lista dentro da lista aranhas
container.insertAdjacentElement('beforeend', listaAranhas)
//passando id e pra lista criada
listaAranhas.setAttribute("id", "lista-Aranhas")
// dando sentido pro meu elemento lista aranhas
const elementoDeLista = document.getElementById("lista-Aranhas")
//for pegando todos os objetos e imprimindo no html com suas propriedades
for (let i = 0; i < arrayAnimais.length; i++) {
    elementoDeLista.innerHTML += `
    
                      <article class="container">
                           <h2><a href="${arrayAnimais[i].link}" target="_blank">${arrayAnimais[i].nome} </a></h2>
    
                           <ul>
                            <li>Tempo medio de vida: ${arrayAnimais[i].tempoMedioDeVida}</li>
                            <li>Cor: ${arrayAnimais[i].arrayCores}</li>
                            <li>Extinto: ${arrayAnimais[i].extinto}</li>
                           </ul>
                           <img src="${arrayAnimais[i].imagem}" alt="">
                        
                       </article>
               `
}

// Semana12

console.log("semana12")
//funçao buscar e substituindo
function buscarAranhas(){
    const buscarAranhaDigitada = document.getElementById("pesquisa")
    console.log(buscarAranhaDigitada.value)
    const aranhaRetornada =  funcaoRetornar(arrayAnimais, buscarAranhaDigitada.value)
    console.log(aranhaRetornada)

    const elementoDeLista = document.getElementById("sectionPrincipal")
    elementoDeLista.innerHTML=
    `<section>
    <article class="container">
    <h2><a href="${aranhaRetornada.link}" target="_blank">${aranhaRetornada.nome}</a></h2>

             <ul>
                            <li>Tempo medio de vida: ${aranhaRetornada.tempoMedioDeVida} </li>
                            <li>Cor: ${aranhaRetornada.arrayCores}</li>
                            <li>Extinto: ${aranhaRetornada.extinto}</li>
                            <img src="${aranhaRetornada.imagem}" alt="">
             </ul> 
     </article> 
     </section>
`
}











