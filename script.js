
const filmes =  [
{
    nome: "De Repente Uma Família",
    genero: "Comédia/Drama",
    anoDeLancamento: 2018,
    duracaoEmMinutos: 119,
    filmesSemelhantes: ["O Que Esperar Quando Você Está Esperando, Cartas  Para Julieta, Ensinando A Viver"],
    ehRemake: false,
    img:"./capa de fundo/filme de repente uma familia/download.jpeg"
},

{
    nome: "Tropa De Elite",
    genero: "Policial/Ação",
    anoDeLancamento: 2007,
    duracaoEmMinutos: 115,
    filmesSemelhantes: ["O Rei De Nova York, O Resgate", "Atraídos Pelo Crime"],
    ehRemake: true,
    img:"./capa de fundo/filme tropa de elite/download (1).jpeg"
},

{
    nome: "Sorria",
    genero: "Terror",
    anoDeLancamento: 2022,
    duracaoEmMinutos: 105,
    filmesSemelhantes: ["Mar Do Medo, Gritos Do Além, Predadores"],
    ehRemake: false,
    img:"./capa de fundo/filme sorria/download.jpeg"
}]

//aqui é o código onde faço a pesquisa de filmes
const buscaFilmes = document.getElementById("pai");
const acessarInput = document.getElementById("input");

acessarInput.addEventListener("input", () => {
    console.log("funcionou!", input.value);

    let filtrarFilmes = filmes.filter((pesquisa) => {
        return pesquisa.nome.toLowerCase().includes(input.value.toLowerCase());
    });
    buscaFilmes.innerHTML = "";
    let informacoesFilmes = "";
    for (pesquisa of filtrarFilmes) {
        console.log("laço", pesquisa);
        informacoesFilmes += 
        `
        <section class="pesquisa">
            <img src="${pesquisa.img}">
            <h3>${pesquisa.nome}</h3>
            <p>${pesquisa.genero}</p>
            <p>${pesquisa.anoDeLancamento}</p>
            <p>${pesquisa.duracaoEmMinutos}</p>
            <p>${pesquisa.filmesSemelhantes}</p>
            <p>${pesquisa.ehRemake}</p>
        </section>
        `
    }
    buscaFilmes.innerHTML += informacoesFilmes;
})










































/*
const verificando = filmes.filter((item) => {
    return item.ehRemake === true;
})

console.log(verificando);

console.log("")
console.log("")

const transformandoString = (filmes) => {
    for(let i in filmes){
       console.log(filmes[i].filmesSemelhantes = filmes[i].filmesSemelhantes.join());
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