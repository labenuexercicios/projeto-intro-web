const playerOne = {
    
    fonte: "https://www.basketball-reference.com/players/j/jordami01.html",
    foto: "./img-nba/michael.jpg",
    name: "Michael Jordan",
    height: 198,
    still: false,
    position:  "Ala-Armador, Armador",
    draft: "Chicago Bulls",
    origin: "Estados Unidos",
    time: "15 anos", 
}


const playerTwo = {
 
    fonte: "https://www.basketball-reference.com/players/j/jamesle01.html" ,
    foto: "./img-nba/james.png",
    name: "Lebron James",
    heigth: 206,
    still: true,
    position: "Ala-Armador, Armador, Ala-Pivô, Ala",
    draft: "Cleveland Cavaliers",
    origin: "Estados Unidos",
    time: "19 anos", 
}

const playerThree = {

    foto: "./img-nba/oneal.png" ,
    name: "Shanquille O'Neal",
    heigth: 216,
    still: false,
    position:  "Pivô",
    draft: "Orlando Magic",
    origin: "Estados Unidos",
    time: "19 anos", 
}

const playerFour = {
        
    foto: "./img-nba/iverson.png" ,
    name: "Allen Iverson",
    height: 183,
    still: false,
    position: "Ala-Armador,Armador",
    draft: "Philadelphia 76ers",
    origin: "Estados Unidos",
    time: "14 anos", 
} 

const playerFive = {
  
    foto: "./img-nba/oneal.png" ,
    name: "Dominique Wilkins",
    heigth: 203,
    still: false,
    position:  "Ala-Armador",
    draft: "Utah Jazz",
    origin: "Frances",
    time: "15 anos", 
}


const playerSix = {

    foto: "./img-nba/michael.jpg",
    name: "Kareem Abdul-Jabbar",
    height: 218,
    still: false,
    position: "Pivô",
    draft: "Milwaukee Bucks",
    origin: "Estados Unidos",
    time: "20 anos", 
}

const playerSeven = {

    foto: "./img-nba/james.png",
    name: "Wilt Chamberlain",
    heigth: 216,
    still: false,
    position: "Pivô",
    draft: "Philadelphia Warriors",
    origin: "Estados Unidos",
    time: "14 anos", 
}

const playerEight = {
        
    foto: "./img-nba/oneal.png" ,
    name: " Dirk Nowitzki",
    heigth: 213,
    still: false,
    position:  "Ala-Pivô, Pivô",
    draft: "Milwaukee Bucks",
    origin: "Alemanhã",
    time: "21 anos", 
} 

const playerNine = {

    foto: "./img-nba/iverson.png" ,
    name: "Kyrie Irving",
    height: 188,
    still: true,
    position: "Armador",
    draft: "Cleveland Cavaliers",
    origin: "Australia",
    time: "11 anos",
}

const playerTen = {
        
    foto: "./img-nba/oneal.png" ,
    name: " Stephen Curry",
    heigth: 188,
    still: true,
    position:  "Armador",
    draft: "Golden State Warriors",
    origin: "Estados Unidos",
    time: "13 anos", 
} 

const playerEleven = {

    foto: "./img-nba/iverson.png" ,
    name: "Giannis Antetokounmpo",
    height: 213,
    still: true,
    position: " Ala-Pivô, Ala, Ala-Armador, Armador",
    draft: "Milwaukee Bucks",
    origin: "Grecia",
    time: "9 anos", 
}

const playerTwelve = {

    foto: "./img-nba/iverson.png" ,
    name: "Kobe Bryant",
    height: 198,
    still: false,
    position: "Ala-Armador,Armador",
    draft: "Charlotte Hornets",
    origin: "Estados Unidos",
    time: "20 anos", 
} 


const allPlayer = []


for (player of allPlayer) {
    for(propriedade in player){


    console.log(`${propriedade}:${player[propriedade]}`)
    }
    console.log("----------------------");
}


function objetoParaString(relatorio) {
   
        console.log(relatorio)
    }
objetoParaString(playerOne)


// ************** SEMANA 6 **********************






allPlayer.push(playerOne,playerTwo, playerThree, playerFour, playerFive, playerSix, playerSeven, playerEight, playerNine, playerTen, playerEleven, playerTwelve)


allPlayer.forEach(adicionaJogadores)

function adicionaJogadores (cadaJogador, index, arr) {
    console.log(cadaJogador)
    
    //Criando referência para lista não ordenada
    let divReferenciaLista = document.getElementById("principal");
    let paiJogadores = document.createElement("div");
    paiJogadores.setAttribute("class", "pai-jogadores");
    paiJogadores.setAttribute("id", `nba${index+1}`);
    let secaoAlinhamento = document.createElement("div");
    secaoAlinhamento.setAttribute("class", "alinhamento");
    secaoAlinhamento.setAttribute("id", `box${index+1}`);
    
    divReferenciaLista.insertAdjacentElement('beforeend', paiJogadores);
    paiJogadores.insertAdjacentElement('beforeend', secaoAlinhamento);
    
    let imagemJogadorNba = document.createElement("img");
    imagemJogadorNba.setAttribute("src", cadaJogador.foto);
    imagemJogadorNba.setAttribute("alt", cadaJogador.name);
    secaoAlinhamento.insertAdjacentElement('beforeend', imagemJogadorNba);
    let listaNaoOrdenadaAtributos = document.createElement("ul");    
    secaoAlinhamento.insertAdjacentElement('beforeend', listaNaoOrdenadaAtributos);
        
    //Criando items da lista
    let namePlayerNba = document.createElement("li");
    let heigthPlayerNba = document.createElement("li");
    let stillPlayerNba = document.createElement("li");
    let positionPlayerNba = document.createElement("li");
    let draftPlayerNba = document.createElement("li");
    let originPlayerNba = document.createElement("li");
    let timePlayerNba = document.createElement("li");
    
    //Adicionando hiperlink
    namePlayerNba.setAttribute("id", `link${index+1}`)
    let linkJogador = document.createElement("a");
    linkJogador.setAttribute("href", cadaJogador.fonte)  
    linkJogador.setAttribute("target", "_blank")
        
    //Criando texto dos cards
    let conteudoNamePlayerNba = document.createTextNode(`Nome:  ${cadaJogador.name}`);
    let conteudoHeigthPlayerNba = document.createTextNode(`Altura: ${cadaJogador.height}`);
    let conteudoStillPlayerNba = document.createTextNode(`Ainda em atividade: ${cadaJogador.still}`);
    let conteudoPositionPlayerNba = document.createTextNode(`Posição: ${cadaJogador.position}`);
    let conteudoDraftPlayerNba = document.createTextNode(`Posição: ${cadaJogador.draft}`);
    let conteudoOriginPlayerNba = document.createTextNode(`Posição: ${cadaJogador.origin}`);
    let conteudoTimePlayerNba = document.createTextNode(`Posição: ${cadaJogador.time}`);
    
    //Adicionando conteúdos às tags
    namePlayerNba.appendChild(conteudoNamePlayerNba);
    linkJogador.appendChild(conteudoNamePlayerNba);
    heigthPlayerNba.appendChild(conteudoHeigthPlayerNba);
    stillPlayerNba.appendChild(conteudoStillPlayerNba);
    positionPlayerNba.appendChild(conteudoPositionPlayerNba);
    draftPlayerNba.appendChild(conteudoDraftPlayerNba);
    originPlayerNba.appendChild(conteudoOriginPlayerNba);
    timePlayerNba.appendChild(conteudoTimePlayerNba);
        


    listaNaoOrdenadaAtributos.insertAdjacentElement('afterbegin', namePlayerNba);
    listaNaoOrdenadaAtributos.insertAdjacentElement('beforeend', linkJogador);
    listaNaoOrdenadaAtributos.insertAdjacentElement('beforeend', heigthPlayerNba);
    listaNaoOrdenadaAtributos.insertAdjacentElement('beforeend', stillPlayerNba);
    listaNaoOrdenadaAtributos.insertAdjacentElement('beforeend', positionPlayerNba);
    listaNaoOrdenadaAtributos.insertAdjacentElement('beforeend', draftPlayerNba);
    listaNaoOrdenadaAtributos.insertAdjacentElement('beforeend', originPlayerNba);
    listaNaoOrdenadaAtributos.insertAdjacentElement('beforeend', timePlayerNba);
    //Posicionando âncora de link da fonte

    linkJogador.insertAdjacentElement('beforeend', heigthPlayerNba)
    listaNaoOrdenadaAtributos.insertAdjacentElement('beforeend', namePlayerNba);
      
    console.log(namePlayerNba);
}




// **************  Função do Botão *********************

function NbaAction() {
    let input = document.getElementById("buscaJogador").value
    console.log(NbaAction);

    input = input.toLowerCase();
    let cadaJogador = document.getElementsByClassName("pai-jogadores");

    for (i = 0; i < cadaJogador.length; i++) {
        if (!cadaJogador[i].innerText.toLowerCase().includes(input)) {
            cadaJogador[i].style.display = "none";
        }
        else {
            
            cadaJogador[i].style.display = "flex";
            
        } 

    }

    if(input === "") {
         alert("Digite algo, né mano!!")

    }
}


// ********** tentando fazer uma função que atualize a pagina ao clicar no h1


// const h1 = document.querySelector("#refresh")

// h1.addEventListener('reloand', () =>{
//     location.reload()
// })




// function abrirPag(a){
//     let localPag = document.querySelector(".refresh")
//     let pag = new XMLHttpRequest()

//     pag.onreadystatechange = () => {
//         if(pag.readyState == 4 && pag.status == 200){
//             localPag.innerHTML = pag.response
//         }
//     }
//     pag.open("GET", './${a}.html')
//     pag.send()
// }