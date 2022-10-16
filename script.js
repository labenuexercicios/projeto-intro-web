const jogo1 = {
    nome: "league of legends",
    preco: 0,
  empresa: "Riot Games",
   usacheat: false,
   img:"https://s2.glbimg.com/M4Df2YVeiwElmr4cqNv1J_-gVgQ=/800x0/smart/filters:strip_icc()/s.glbimg.com/po/tt2/f/original/2014/04/03/league-of-legends-10.jpg",
   link:"https:pt.wikipedia.org/wiki/League_of_Legends"

}
const jogo2 = {
    nome: "valorant",
    preco: 0,
    empresa: "rio games",
   usacheat: false,
   link:"https://valorant.fandom.com/pt-br/wiki/Wiki_Valorant",
   img:"https://cdn.folhape.com.br/upload/dn_arquivo/2021/06/valorant.jpg"
}
const jogo3 = {
    nome: "counter strike : global offensive",
    preco: 0,
    empresa: "valve",
    usacheat: false,
    link:"https://pt.wikipedia.org/wiki/Counter-Strike:_Global_Offensive" ,
    img:  "https://dropsdejogos.uai.com.br/wp-content/uploads/sites/10/2020/03/cs-950x528.jpg"
}
const jogo4 = {
    nome: "FIFA23",
    preco: 300,
    empresa: "EA SPORTS ",
    tusacheat: false,
    link:"https:pt.wikipedia.org/wiki/FIFA_23?" ,
    img:"https://cdn1.epicgames.com/offer/f5deacee017b4b109476933f7dd2edbd/EGS_EASPORTSFIFA23StandardEdition_EACanada_S1_2560x1440-aaf9c5273c27a485f2cce8cb7e804f5c"
}
const jogo5 = {
    nome: "TFT",
    preco: 0,
    empresa: "Riot Games",
    usacheat: false,
    link:"https://leagueoflegends.fandom.com/wiki/Teamfight_Tactics",
    img:"https://notagamer.net/wp-content/uploads/2022/05/TFT-1.jpg"
}


const mediaPreco = (jogo1.preco+jogo2.preco+jogo3.preco+jogo4.preco)/4; 
console.log("Média de preço dos jogos: R$" + mediaPreco);


// //semana 3
let arrayJogos = [];
arrayJogos.push(jogo1);
arrayJogos.push(jogo2);
arrayJogos.push(jogo3);
arrayJogos.push(jogo4);
arrayJogos.push(jogo5);
console.log(arrayJogos);

// //semana 4

if (jogo1.usacheat){
   console.log(jogo1.nome + "usou hack;")
}else{
   console.log(jogo1.nome + " usou hack;")
}
if (jogo2.usacheat){
   console.log(jogo2.nome + "usou hack;")
}else{
   console.log(jogo2.nome +  "usou hack;")
}
if (jogo3.usacheat){
   console.log(jogo3.nome + "usou hack;")
}else{
   console.log(jogo3.nome +  "usou hack;")
}
if (jogo4.usacheat){
   console.log(jogo4.nome + "usou hack;")
}else{
   console.log(jogo4.nome +  "usou hack;")
}
if (jogo5.usacheat){
   console.log(jogo5.nome + "usou hack;")
}else{
   console.log(jogo5.nome +  "usou hack;")
}



// semana 6

function imprimirObj(jogo) {
    let game = `O jogo ${jogo.nome.toUpperCase()}, empresa ${jogo.empresa}, vale ${jogo.preco}`
    return game
}



function buscaJog(jogos, pesquisa) {
    let jogoFiltrado = jogos.filter(jogo => {
        return jogo.nome.toUpperCase().includes(pesquisa.toUpperCase());
    })
    if (jogoFiltrado.length === 0) {
    } else {
        return jogoFiltrado;
    }
    let jogoFiltrado2 = jogos.filter(jogo => {
        return jogo.marca.toUpperCase().includes(pesquisa.toUpperCase());
    })
    if (jogoFiltrado2.length === 0) {
    } else {
        return jogoFiltrado2;
    }

};

function buscaJog() {
    let container;
    const search = document.querySelector("#search-input").value;
    if (!search) {
        alert("Digite o jogo");
    } else {
        const jogs = buscaJog(arrayJogos, search);
        console.log(jogs);
        container = `
        <main>
        <section class="jogos" >
        <img src=${jogs[0].img}>
        <ul>
            <li><a href= ${jogs[0].link}
                    target="_blank"><b>${jogs[0].nome}</b></a></li>
        
            <li>Preço:${jogs[0].preco}</li>
            <li>Empresa: ${jogs[0].empresa}</li>
           >
        </ul>
    </section>`;
        document.querySelector("#itemContainer").innerHTML = "";
        document.querySelector("#itemContainer").innerHTML = container;
    }
}