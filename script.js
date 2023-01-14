
const filmes =  [
{
    nome: "Avatar: O Caminho da Água",
    genero: " Ação, Aventura, Ficção científica",
    duracaoEmMinutos: 192,
    anoDeLancamento: 2022,
    elenco: ["Alex Lucas, Alicia Vela-Bailey, Andrew Arrabito, Anthony Ahern, Ava Diakhaby"],
    ehRemake: false,
    img:"./capa de fundo/Avatar/mbYQLLluS651W89jO7MOZcLSCUw.jpg",
    linkImage: "https://megaflix.co/filme/avatar-o-caminho-da-agua-2022-assistir-online-1673142983/"
},

{
    nome: "O Homem das Sombras",
    genero: "Mistério, Terror",
    duracaoEmMinutos: 106,
    anoDeLancamento: 2012,
    elenco: ["Colleen Wheeler, Eve Harlow, Ferne Downey, Garwin Sanford, Jakob Davies"],
    ehRemake: false,
    img:"./capa de fundo/homem das saombras/dMX0JwFggsMKbl3StoNF3uqExuB.jpg",
    linkImage: "https://www.primevideo.com/dp/amzn1.dv.gti.00b79a41-ec96-6348-4877-bab5b40cb8b0?autoplay=0&ref_=atv_cf_strg_wb"
},

{
    nome: "Indecente",
    genero: "Drama, Mistério",
    duracaoEmMinutos: 94,
    anoDeLancamento: 2022,
    elenco: ["Alison Araya, Alyssa Milano, Barry W. Levy, Colleen Wheeler, Daniel Diemer"],
    ehRemake: false,
    img:"./capa de fundo/indecente/A5v6Wi7lYR3a9m6CzntZWAcGFGV.jpg",
    linkImage: "https://megaflix.co/filme/indecente-assistir-online-1671139288/"
},
{
    nome: "Ódio",
    genero: "Ação, Crime",
    duracaoEmMinutos: 119,
    anoDeLancamento: 2017,
    elenco: ["Alcione Mazzeo, André Ramiro, Carlo Mossy, Deo Garcez, Edwin Luisi"],
    ehRemake: false,
    img:"./capa de fundo/odio/fXU6DJ7luOuXbbmvOpDv5JZreV4.jpg",
    linkImage: "https://megaflix.co/filme/odio-2017-assistir-online/"
},

{
    nome: "O Lobo entre Nós",
    genero: "Drama/Ficção científica",
    duracaoEmMinutos: 70,
    anoDeLancamento: 2019,
    elenco: ["Alexey Dyachkov, Asya Oztyurk, Evgeny Dal, Evgeny Danchevsky, Fyodor Lavrov"],
    ehRemake: false,
    img:"./capa de fundo/lobo entre nos/43RUnOBA7VgEXzXw6Gx3lifullJ.jpg",
    linkImage: "https://megaflix.co/filme/o-lobo-entre-nos-2019-assistir-online/"
},

{
    nome: "Mundo Estranho",
    genero: "Animação, Ficção científica, Aventura, Família",
    duracaoEmMinutos: 102,
    anoDeLancamento: 2022,
    elenco: ["Jaboukie Young-White, Jake Gyllenhaal, Gabrielle Union, Dennis Quaid, Lucy Liu, Alan Tudyk"],
    ehRemake: false,
    img:"./capa de fundo/mundoestranho.jpg",
    linkImage: "https://megaflix.co/filme/mundo-estranho-2022-assistir-online/"
},

{
    nome: "Os 4 Malfeitores",
    genero: "Ação, Comédia, Crime",
    duracaoEmMinutos: 141,
    anoDeLancamento: 2022,
    elenco: ["Michelle Tahalea, Marthino Lio., Putri Marino, Kristo Immanuel, Arie Kriting"],
    ehRemake: false,
    img:"./capa de fundo/malfeitores.jpg",
    linkImage: "https://megaflix.co/filme/os-4-malfeitores-2022-assistir-online/"
},

{
    nome: "High Heat",
    genero: "Ação, Comédia, Crime",
    duracaoEmMinutos: 84,
    anoDeLancamento: 2022,
    filmesSemelhantes: ["Eduardo Capetillo, Esmeralda Pimentel, Ana Jimena Villanueva, Iván Amozurrutia, Oka Giner"],
    ehRemake: false,
    img:"./capa de fundo/high heat.jpg",
    linkImage: "https://www.imdb.com/title/tt15721088/"
},

{
    nome: "Hex",
    genero: "Ação, Terror",
    duracaoEmMinutos: 88,
    anoDeLancamento: 2022,
    filmesSemelhantes: ["Christina Cole, Jemina Rooper, Laura Pyper, Michael, Amber Sainsbury, Jamie Davis"],
    ehRemake: false,
    img:"./capa de fundo/hex.jpg",
    linkImage: "https://www.interfilmes.com/filme_402366_Hex.html"
},

{
    nome: "Top Gun: Maverick",
    genero: "Ação, Drama",
    duracaoEmMinutos: 131,
    anoDeLancamento: 2022,
    filmesSemelhantes: ["Tom Cruise, Miles Teller, Val Kilmer, Gleen Powell, Jennifer Connelly, Jon Hamm"],
    ehRemake: false,
    img:"./capa de fundo/topgun.jpg",
    linkImage: "https://megaflix.co/filme/top-gun-maverick-2022-assistir-online-1662774810/"
},

{
    nome: "Pinóquio",
    genero: "Fantasia, Aventura, Família",
    duracaoEmMinutos: 111,
    anoDeLancamento: 2022,
    filmesSemelhantes: ["Tom Hanks, Cynthia Erivo, Luke Evans, Joseph Gordon-Levitt, Kyanne Lamaya, Sheila Atim"],
    ehRemake: true,
    img:"./capa de fundo/pinoquio.jpg",
    linkImage: "https://megaflix.co/filme/pinoquio-2022-assistir-online-1663463723/"
},

{
    nome: "Gemini: O Planeta Sombrio",
    genero: "Ficção científica",
    duracaoEmMinutos: 98,
    anoDeLancamento: 2022,
    filmesSemelhantes: ["Alyona Konstantinova, Egor Koreshkov, Dmitriy Frid, Viktor Potapeshkin, Pyotr Romanov, Nikita Dyuvbanov"],
    ehRemake: false,
    img:"./capa de fundo/gemini.jpg",
    linkImage: "https://cinepop.com.br/gemini-o-planeta-sombrio-329920/"
},
{
    nome: "Gato de Botas",
    genero: "Comédia/Drama",
    anoDeLancamento: 2011,
    duracaoEmMinutos: 119,
    filmesSemelhantes: ["Antonio Banderas, Salma Hayek, Chris Miller, Jessica Schulte, Guillermo Del Toro, Joshua Rush"],
    ehRemake: true,
    img:"./capa de fundo/gatodebotss.jpg",
    linkImage: "https://megaflix.co/filme/gato-de-botas-assistir-online/"
},

{
    nome: "Sonic 2 - O Filme",
    genero: "Ação, Aventura, Família, Comédia",
    duracaoEmMinutos: 122,
    anoDeLancamento: 2022,
    filmesSemelhantes: ["Jim Carrey, Tika Sumpter, Ben Schwarts,James Marsden, Idris Elba, Shemar Moore"],
    ehRemake: true,
    img:"./capa de fundo/sonic.jpg",
    linkImage: "https://megaflix.co/filme/sonic-2-o-filme-2022-assistir-online-1652733314/"
},

{
    nome: "O Menu",
    genero: "Comédia, Terror, Thriller",
    duracaoEmMinutos: 107,
    anoDeLancamento: 2022,
    filmesSemelhantes: ["Anya Tayor-Joy, Ralph Fiennes, Nicholas Hoult, Janet Mc Teer, Hong Chau, Aimee Castro"],
    ehRemake: false,
    img:".//capa de fundo/menu.jpg",
    linkImage: "https://megaflix.co/filme/o-menu-2022-assistir-online-1673621591/"
},
{
    nome: "Megan",
    genero: "Ficção científica, Terror, Comédia",
    duracaoEmMinutos: 102,
    anoDeLancamento: 2023,
    filmesSemelhantes: ["Amie Donald, Jenna Davis, Alisson Williams, Violet McGraw, Kimberley Crossman, Brian Jordan Alvarez"],
    ehRemake: false,
    img:"./capa de fundo/megan.jpg",
    linkImage: "https://cinepop.com.br/m3gan-344271/"
},

{
    nome: "O Troll da Montanha",
    genero: "Fantasia, Ação, Aventura",
    duracaoEmMinutos: 103,
    anoDeLancamento: 2022,
    filmesSemelhantes: ["Ine Marie, Billy Campbell, Dennis Storhoi, Ingrid Vollan, Eric Vorenholt, Karoline Viktoria"],
    ehRemake: false,
    img:"./capa de fundo/trool.jpg",
    linkImage: "https://megaflix.co/filme/o-troll-da-montanha-2022-assistir-online-1671682539/"
},

{
    nome: "As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa",
    genero: "Terror",
    duracaoEmMinutos: 105,
    anoDeLancamento: 2005,
    filmesSemelhantes: ["Skandar Keynes, Anna Popplewell, Georgie Henley, William Moseley, Will Poulter, Ben Barnes"],
    ehRemake: true,
    img:"./capa de fundo/cronicaas.jpg",
    linkImage: "https://megaflix.co/filme/as-cronicas-de-narnia-o-leao-a-feiticeira-e-o-guarda-roupa-2005-assistir-online/"
},
{
    nome: "Desencantada",
    genero: "Comédia, Família, Fantasia",
    duracaoEmMinutos: 120,
    anoDeLancamento: 2022,
    filmesSemelhantes: ["Rachel Covey, Patrick Dempsey, James Marsden, Idina Menzel, Maya Rudolph, Gabriella Baldacchino"],
    ehRemake: false,
    img:"./capa de fundo/desencantada.jpg",
    linkImage: "https://megaflix.co/filme/desencantada-2022-assistir-online-1670131282/"
},

{
    nome: "Uma Noite no Museu: O Retorno de Kahmunrah",
    genero: "Animação, Comédia, Família, Fantasia",
    duracaoEmMinutos: 77,
    anoDeLancamento: 2022,
    filmesSemelhantes: ["Ben Stiller, Owen Wilson, Shawn Levy, Robin Williams, Rami Malek, Ricky Gervais"],
    ehRemake: false,
    img:"./capa de fundo/uma noite no museu.jpg",
    linkImage: "https://megaflix.co/filme/uma-noite-no-museu-o-retorno-de-kahmunrah-2022-assistir-online-1673003738/"
},

{
    nome: "L'oubliée d'Amboise",
    genero: "Crime, Cinema TV",
    duracaoEmMinutos: 96,
    anoDeLancamento: 2022,
    filmesSemelhantes: ["Philippe Bas, Pauline Bression, Hélene Stadnicki, Agathe de La Boulaye, Édouard Montoute, François-Eric Gendron"],
    ehRemake: false,
    img:"./capa de fundo/ouiu.jpg",
    linkImage: "https://www.allocine.fr/film/fichefilm_gen_cfilm=297097.html"
},
{
    nome: "Tom & Jerry: Terra do Boneco de Neve",
    genero: "Família, Comédia, Animação, Aventura",
    duracaoEmMinutos: 76,
    anoDeLancamento: 2022,
    filmesSemelhantes: ["Kath Soucie, Kevin Michael Richardson, Laraine Newman, William Hanna, Carlos Alazraqui, Kimberly Brooks"],
    ehRemake: false,
    img:"./capa de fundo/tom.jpg",
    linkImage: "https://redecanais.to/tom-jerry-terra-do-boneco-de-neve-dublado-2022-1080p_4fabd70bc.html"
},

{
    nome: "Encanto",
    genero: "Animação, Comédia, Família, Fantasia",
    duracaoEmMinutos: 102,
    anoDeLancamento: 2021,
    filmesSemelhantes: ["Stephanie Beatriz, Wilmer Valderrama, John Leguizamo,Sarah-Nicole Robles, Alan Tudyk, Maluma"],
    ehRemake: false,
    img:"./capa de fundo/encanto.jpg",
    linkImage: "https://megaflix.co/filme/encanto-assistir-online-1650158333/"
},

{
    nome: "Scrooge: Um Conto de Natal",
    genero: "Animação, Família, Fantasia, Drama",
    duracaoEmMinutos: 96,
    anoDeLancamento: 2022,
    filmesSemelhantes: ["Luke Evans, Jessie Buckley, Olivia Colman, Jonathan Pryce, Johnny Flyn, James Cosmo"],
    ehRemake: false,
    img:"./capa de fundo/stroo.jpg",
    linkImage: "https://megaflix.co/filme/scrooge-um-conto-de-natal-2022-assistir-online/"
},
{
    nome: "A Grande Aventura de Blue na Cidade",
    genero: "Família, Aventura, Música, Animação",
    anoDeLancamento: 2022,
    duracaoEmMinutos: 74,
    filmesSemelhantes: ["Joshua Dela Cruz, Steven Burns, Donovan Patton, Traci Paige Johnson, Amanda Dela Cruz, Jessic Gower"],
    ehRemake: false,
    img:"./capa de fundo/blued.jpg",
    linkImage: "https://megaflix.co/filme/a-grande-aventura-de-blue-na-cidade-2022-assistir-online/"
},

{
    nome: "Uncharted: Fora do Mapa",
    genero: "Ação, Aventura",
    anoDeLancamento: 2022,
    duracaoEmMinutos: 116,
    filmesSemelhantes: ["Tom Holland, Mark Wahlberg, Sophia Taylor Ali, Tati Gabrielle, Rudy Pankow, Antonio Banderas"],
    ehRemake: true,
    img:"./capa de fundo/unchar.jpg",
    linkImage: "https://megaflix.co/filme/uncharted-fora-do-mapa-assistir-online-1647641189/"
},

{
    nome: "As Aventuras de Tadeo e a Tábua de Esmeralda",
    genero: "Animação, Aventura, Comédia, Família, Fantasia",
    anoDeLancamento: 2022,
    duracaoEmMinutos: 89,
    filmesSemelhantes: ["Luis Posada, Alexandra Jiménez, Michelle Jenner,óscar Barberán, José Corbacho, Manuel Burque"],
    ehRemake: false,
    img:"./capa de fundo/tadeo.jpg",
    linkImage: "https://megaflix.co/filme/as-aventuras-de-tadeo-e-a-tabua-de-esmeralda-2022-assistir-online/"
},

]


//aqui é o código onde faço a pesquisa de filmes
const buscaFilmes = document.getElementById("pai");
const acessarInput = document.getElementById("input");

acessarInput.addEventListener("input", () => {
    //console.log("funcionou!", input.value);

    let filtrarFilmes = filmes.filter((pesquisa) => {
        return pesquisa.nome.toLowerCase().includes(input.value.toLowerCase());
    });
    buscaFilmes.innerHTML = "";
    let informacoesFilmes = "";
    for (pesquisa of filtrarFilmes) {
        //console.log("laço", pesquisa);
        informacoesFilmes += 
        /*`
        <section class="pesquisa">
            <img src="${pesquisa.img}">
            <h3>${pesquisa.nome}</h3>
            <p>${pesquisa.genero}</p>
            <p>${pesquisa.anoDeLancamento}</p>
            <p>${pesquisa.duracaoEmMinutos}</p>
            <p>${pesquisa.elenco}</p>
        </section>
        */
       /*
       `
       <div class="caixa-pai">
            <section class="item-pai">
                <section class="item1">
                    <div class="caixa-2">
                        <img src="${pesquisa.img}" class="img-item">
                        <ul class="ul-item1">
                            <li>
                                <b>${pesquisa.nome}</b>
                            </li>
                            <li>
                                <b>${pesquisa.genero}</b>
                            </li>
                            <li>
                                <b>${pesquisa.anoDeLancamento}</b>
                            </li>
                            <li>
                                <b>${pesquisa.duracaoEmMinutos}</b>
                            </li>
                            <li>
                                <b>${pesquisa.elenco}</b>
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
       </div>
       `*/

       `
     <div class="caixa-pai-2">
       <section class="item-pai-2">
           <section class="item1-pai">
               <div class="caixa-2-pai">
                 <a href="${pesquisa.linkImage}" target="_blank">
                    <img class="img-item" src="${pesquisa.img}">
                 </a> 
               </div>
           </section>
       </section>
     </div>
       `
    }
    
    buscaFilmes.innerHTML += informacoesFilmes;
})


function voltaFilmes () {
    if (input.value == "") {
        return buscaFilmes;
    } else {
        return informacoesFilmes.innerHTML;
    }
}

































//aqui eu calculo a média das somas dos ano de lançamento
const mediaDoObjeto = (filmesMedia) => {
    let mediaSoma = 0;
    let mediaDividida;
        for (let media in filmesMedia) {
            mediaSoma = mediaSoma + filmesMedia[media].anoDeLancamento;
            mediaDividida = mediaSoma/filmesMedia.length; 
        }

        return mediaDividida.toFixed(2);
}

console.log((mediaDoObjeto(filmes)));


/*
const verificando = filmes.filter((item) => {
    return item.ehRemake === true;
})

console.log(verificando);

console.log("")
console.log("")

const transformandoString = (filmes) => {
    for(let i in filmes){
       console.log(filmes[i].elenco = filmes[i].filmesSemelhantes.join());
        console.log("");
    }
}

transformandoString(filmes);

console.log("");
console.log("");


for(let filme of filmes){
    for(propriedade in filme){
        console.log(`${propriedade}: ${filme[propriedade]}`)
    }
    console.log("")
    console.log("")
}


console.log(filmes)
function objetoParametro (filmes) {
 for( let retornaObjeto of filmes){
  //console.log(retornaObjeto)
    for(objeto in retornaObjeto){
        //console.log(`${objeto}: ${retornaObjeto[objeto].toString()}`)
    }
 }
}

objetoParametro(filmes)


function recebeArray (filmes, titulo){
    const filmesFiltrados  = []; 
    for(let i in filmes){
        if(filmes[i].nome.includes(titulo)){
            filmesFiltrados.push(filmes[i]);
        }
    }
    if(filmesFiltrados == ""){
        alert("Nenhum item foi encontrado")
    }

    return {
        filmes: filmesFiltrados
    }
  
};

console.log(recebeArray(filmes, "Tropa De Elite"));
*/