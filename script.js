// //Semana 1, Ex. 1, 2 e 4

let listaDeFilmes = [

filme1 = {
    titulo: `The Big Lebowski`,
    link: `https://www.imdb.com/title/tt0118715/?ref_=nv_sr_srsg_0`,
    sinopse: `Jeff The Dude Lebowski, foi confundido por um milionário do mesmo nome e procurará restituçao com a ajuda do seus amigos.`,
    duracao: 117,
    ano: 1998,
    genero: [`Comédia`],
    remake: false ,
    elenco: [`Jeff Bridges`, `John Goodman`, `Juliane Moore`]
},
filme2 = {
    titulo: `Casablanca`,
    link: `https://www.imdb.com/title/tt0034583/?ref_=nv_sr_srsg_0`,
    sinopse: `O proprietário cético de uma boate protege um antigo amor e seu marido dos nazistas no Marrocos.`,
    duracao: 102,
    ano: 1942,
    genero: [`Romance`, `Policial`, `Guerra`],
    remake: false ,
    elenco: [`Humphrey Bogart`, `Ingrid Bergman`, `Paul Henreid`]
},
filme3 = {
    titulo: `Interestellar`,
    link: `https://www.imdb.com/title/tt0816692/?ref_=nv_sr_srsg_1`,
    sinopse: `Uma equipe de exploradores viaja através de um buraco de minhoca no espaço, na tentativa de garantir a sobrevivência da humanidade.`,
    duracao: 169,
    ano: 2014,
    genero: [`Aventura`, `Drama`, `Scifi`],
    remake: false,
    elenco: [`Matthew McConaughey`, `Anne Hathaway`, `Jessica Chastain`]
},
filme4 = {
    titulo: `Dune: Part One`,
    link: `https://www.imdb.com/title/tt1160419/?ref_=nv_sr_srsg_1`,
    sinopse: `Adaptação do romance de ficção científica de Frank Herbert, sobre o filho de uma família nobre encarregada de proteger um planeta temperado.`,
    duracao: 155,
    ano: 2021,
    genero: [`Ação`, `Aventura`, `Drama`],
    remake: true ,
    elenco: [`Timothée Chalamet`, `Rebecca Ferguson`, `Oscar Isaac`]
},
filme5 = {
    titulo: `Pulp Fiction`,
    link: `https://www.imdb.com/title/tt0110912/?ref_=nv_sr_srsg_0`,
    sinopse: `As vidas de dois assassinos da máfia, um boxeador, um gângster e sua esposa, e um par de bandidos se entrelaçam em quatro histórias de violência e redenção.`,
    duracao: 154,
    ano: 1994,
    genero: [`Policial`, `Drama`],
    remake: false ,
    elenco: [`Samuel L. Jackson`, `John Travolta`, `Uma Thurman`]
},
filme6 = {
    titulo: `The Wrestler`,
    link: `https://www.imdb.com/title/tt1125849/?ref_=nv_sr_srsg_0`,
    sinopse: `Um lutador profissional deve se aposentar, mas acha que sua procura por uma nova vida fora do ringue é uma luta desanimadora.`,
    duracao: 109,
    ano: 2008,
    genero: [`Drama`, `Esportes`],
    remake: false ,
    elenco: [`Mickey Rourke`, `Marisa Tomei`, `Evan Rachel Wood`]
},
filme7 = {
    titulo: `The Hateful Eight`,
    link: `https://www.imdb.com/title/tt3460252/?ref_=nv_sr_srsg_0`,
    sinopse: `No inverno de Wyoming, um caçador de recompensas e seu prisioneiro encontram refúgio em uma cabana atualmente habitada por uma coleção de personagens infames.`,
    duracao: 168,
    ano: 2015,
    genero: [`Policial`, `Drama`, `Mistério`],
    remake: false ,
    elenco: [`Samuel L. Jackson`, `Kurt Russel`, `Jennifer Jason Leigh`]
},
filme8 = {
    titulo: `Big Hero 6`,
    link: `https://www.imdb.com/title/tt2245084/?ref_=nv_sr_srsg_0`,
    sinopse: `A ligação especial que se desenvolve entre o robô Baymax e o prodígio Hiro Hamada, que se juntam a um grupo de amigos para formar uma banda de heróis tecnologicos.`,
    duracao: 102,
    ano: 2014,
    genero: [`Animação`, `Ação`, `Aventura`],
    remake: false ,
    elenco: [`Ryan Potter`, `Scott Adsit`, `Jamie Chung`]
},
filme9 = {
    titulo: `Fight Club`,
    link: `https://www.imdb.com/title/tt0137523/?ref_=nv_sr_srsg_0`,
    sinopse: `Um trabalhador de escritório e um fabricante de sabonetes que cuidam do diabo formam um clube de luta clandestino que evolui para algo muito maior.`,
    duracao: 139,
    ano: 1999,
    genero: [`Drama`],
    remake: false ,
    elenco: [`Edward Norton`, `Brad Pitt`, `Helena Bonham Carter`]
},
filme10 = {
    titulo: `The Wizard of Oz`,
    link: `https://www.imdb.com/title/tt0032138/?ref_=nv_sr_srsg_1`,
    sinopse: `A Dorothy Gale é levada por um tornado até a mágica cidade de Oz e vá numa viagem com novos amigos que la ajudar a voltar para casa.`,
    duracao: 102,
    ano: 1939,
    genero: [`Aventura`, `Família`, `Fantasia`],
    remake: false ,
    elenco: [`Judy Garland`, `Frank Morgan`, `Ray Bolger`]
}

]

calculaMediaDeDuracao = (arrayDeFilmes) => { // Calcula média de duração dos filmes
    
    let mediaDeDuracao = 0;
    
    for (let indiceDuracao in arrayDeFilmes) {
        mediaDeDuracao += arrayDeFilmes[indiceDuracao].duracao / arrayDeFilmes.length;
    }

    const mediaDeDuracaoConverted = mediaDeDuracao; // Semana 1, Ex. 3    
    console.log(`A média de duração dos filmes é de: ${Math.round(mediaDeDuracaoConverted)} minutos!`);
}

calculaMediaDeAno = (arrayDeFilmes) => { // Calcula média de ano dos filmes

    let mediaDeAno = 0;
    
    for (let indiceMedia in arrayDeFilmes) {
        mediaDeAno += arrayDeFilmes[indiceMedia].ano / arrayDeFilmes.length;
    }

    const mediaDeAnoConverted = mediaDeAno; // Semana 1, Ex. 3
    console.log(`A média de ano é de: ${Math.round(mediaDeAnoConverted)}`);

}

apresentaFilmes = (arrayDeFilmes) => { // Organiza e apresenta filmes no console

    let elencoTratado = ``;
    let generoTratado = ``;
    
    for (let filme of arrayDeFilmes) {

        for (let f = 0; f < filme.elenco.length; f++) { //Organiza o elenco em uma string
            if (f === 0) {
                elencoTratado = `${filme.elenco[f]}`;
            }
            else {
                elencoTratado += `, ${filme.elenco[f]}`;
            }
    
        }

        elencoTratado += `.`;

        for (let b = 0; b < filme.genero.length; b++) { //Organiza o elenco em uma string
            if (b === 0) {
                generoTratado = `${filme.genero[b]}`;
            }
            else {
                generoTratado += `, ${filme.genero[b]}`;
            }

        }
        generoTratado += `.`;
        
        stringDosFilme =`Título: ${filme.titulo.toUpperCase()}\nSinopse: ${filme.sinopse}\nDuração: ${filme.duracao} minutos\nLançamento: ${filme.ano}\nGênero: ${generoTratado}\nElenco: ${elencoTratado}`;

        console.log(stringDosFilme);

        if (filme.remake === true) {
                    console.log(`É um remake!`);
                }else{
                    console.log(`Não é um remake!`);
            }

        console.log(`\n`)
    }

}

verificaBooleano = (arrayDeFilmes) => { // Verifica se o filme é um remake e os organiza em uma lista #S4
    
    let numeroDeRemakes = 0;
    let numeroDeNaoRemakes = 0;
    
    for (let j = 0; j < arrayDeFilmes.length; j++){
        if (arrayDeFilmes[j].remake === true) {
            numeroDeRemakes += 1;
        }else{
            numeroDeNaoRemakes += 1;
        }
    }
    
    if (numeroDeRemakes === 0){
        console.log(`Nenhum remake!`);
    }
    if (numeroDeNaoRemakes === 0){
        console.log(`Todos remakes!`);
    }   
    else{
        console.log(`Nem todos são remakes!`);
    }
    
    // console.log(`Número de remakes: ${numeroDeRemakes}`);
    // console.log(`Número de não-remakes: ${numeroDeNaoRemakes}`);
}

separaFilmesPorRemake = (arrayDeFilmes) => { // Separa os filmes em 2 arrays de acordo com a propriedade remake

let listaDeFilmesRemake = [];
let listaDeFilmesNaoRemake = [];
let listaDeFilmesRemakeTratada = ``;
let listaDeFilmesNaoRemakeTratada = ``;

    for (let r = 0; r < arrayDeFilmes.length; r++) { // S4.E2
        if (arrayDeFilmes[r].remake === true) {
        listaDeFilmesRemake.push(arrayDeFilmes[r].titulo)
        }   
        else {
        listaDeFilmesNaoRemake.push(arrayDeFilmes[r].titulo)
        // alert(`O filme ${arrayDeFilmes[r].titulo} não é um remake!`)
        }
    }
    
    for (let s = 0; s < listaDeFilmesRemake.length; s++) {
        if (s === 0) {
            listaDeFilmesRemakeTratada = `${listaDeFilmesRemake[s]}`;
        }
        else {
            listaDeFilmesRemakeTratada += `, ${listaDeFilmesRemake[s]}`;
        }
        
    }
    
    for (let t = 0; t < listaDeFilmesNaoRemake.length; t++) {
        if (t === 0) {
            listaDeFilmesNaoRemakeTratada = `${listaDeFilmesNaoRemake[t]}`;
        }
        else {
            listaDeFilmesNaoRemakeTratada += `, ${listaDeFilmesNaoRemake[t]}`;
        }
        
    }
    
    // console.log(`${listaDeFilmesRemakeTratada}`);
    // console.log(listaDeFilmesNaoRemakeTratada);
    
}

// resumoDeFilme = (arrayDeFilmes) => { // função que recebe um objeto e retorna uma string com informações do objeto //S6.1
//     let resumo = arrayDeFilmes.map((filme, index, array) => {
        
//         return `RESUMÃOOO: O filme é ${filme.titulo}. Sinopse: ${filme.sinopse}. Duração: ${filme.duracao} minutos!`; }

//     )
//     console.log(resumo);
// }

buscaFilme = (arrayDeFilmes, filmeBuscado) => { // S6.2
    let result = false
    let filmeQueTamoAtrás = arrayDeFilmes.filter((filme)=> { 

        if (filme.titulo.toUpperCase() === filmeBuscado.toUpperCase()){
        result = true;
        return true;
        }
        
    })

    if (result === true){
        console.log(filmeQueTamoAtrás);
    }else{
        alert("Filme não encontrado!");
    }
}

let containerMain = document.getElementById('main');
    
let criandoTag = document.createElement('section');
criandoTag.setAttribute('id', 'listadefilmes');
containerMain.insertAdjacentElement('beforeend', criandoTag);

listafilmes = (arrayPraTodos) => {
    for (let z = 0; z < arrayPraTodos.length; z++) { //lista filmes no HTML

    let criandoUl = document.createElement('ul');
    
    let sectionContainer = document.getElementById('listadefilmes');
    
    criandoUl.setAttribute('id', 'filme'+z);
    
    sectionContainer.insertAdjacentElement('beforeend', criandoUl);
    let listContainer = document.getElementById(`filme${z}`);
    
    for (let propriedades in arrayPraTodos[z]) { //mapeia as propriedades
        let criandoLi = document.createElement('li');
        
        criandoLi.setAttribute('id', `${propriedades}`);
        propriedadeAtual = arrayPraTodos[z][propriedades];

        listContainer.insertAdjacentElement('beforeend', criandoLi);

        let conteudoSection = document.createTextNode(`${propriedades.toUpperCase()}: ${propriedadeAtual}`);
        criandoLi.appendChild(conteudoSection);
        // console.log(conteudoSection);
    }
}        
}

chamaTodas = (arrayPraTodos) => {
    
        apresentaFilmes(arrayPraTodos);
        calculaMediaDeDuracao(arrayPraTodos);
        calculaMediaDeAno(arrayPraTodos);
        verificaBooleano(arrayPraTodos);
        separaFilmesPorRemake(arrayPraTodos);
        // resumoDeFilme(arrayPraTodos);
        // buscaFilme(arrayPraTodos, ``); //função que recebe um array e uma string. caso a string seja igual ao titulo do objeto, retorna o objeto // S6.2
        listafilmes(arrayPraTodos);

}
    
chamaTodas(listaDeFilmes);
    
buscaFilminho = () => { //função que recebe informação do botão de busca
        let filmeProcurado = document.getElementById(`campofilme`);
        
        let testinho = buscaFilme(listaDeFilmes, filmeProcurado.value);
        
        console.log(testinho);
}   


