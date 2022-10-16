const bandas = [
    {
        nome: 'Whitechapel' ,
        estilo: 'Deathcore' ,
        ano: 2006 ,
        ativa: true ,
        pais: 'Reino Unido',
        ultimoalbum: 'Kin',
    },
    {
        nome: 'Slaughter to Prevail',
        estilo: 'Deathcore',
        ano: 2014,
        ativa: true,
        pais: 'Russia',
        ultimoalbum: 'Kostolon',
    },
    {
        nome: 'Thy art is murder',
        estilo: 'Deathcore',
        ano: 2006,
        ativa: true,
        pais: 'Australia',
        ultimoalbum: 'Human Target'
    },
    {
        nome: 'A ultima Theoria',
        estilo: 'New Metal',
        ano: 2010,
        ativa: true,
        pais: 'Brasil',
        ultimoalbum: 'Luciferina, a pestilência do Amor',
    },
    {
        nome: 'System of a down',
        estilo: 'New Metal',
        ano: 1994,
        ativa: false,
        pais: 'Estados Unidos',
        ultimoalbum: 'Hypnotize',
    },
    {
        nome: 'Aurora Rules',
        estilo: 'Alternativa/indie',
        ano: 2008,
        ativa: true,
        pais: 'Brasil',
        ultimoalbum: 'A Sombra do Presente',
    },
    {
        nome: 'Bullet Bane',
        estilo: 'Emo',
        ano: 2016,
        ativa: true,
        pais: 'Brasil',
        ultimoalbum: 'BLLT',
    },
]


console.log(bandas);
//Exibir soma dos anos de criação das bandas
const soma = bandas[0].ano + bandas[1].ano + bandas[2].ano + bandas[3].ano + bandas[4].ano + bandas[5].ano + bandas[6].ano;
console.log("Soma dos anos de criação das bandas:", soma);
//Exibir media do ano de criação das bandas
const media = soma / 7;
console.log("Media de ano de criação das bandas:", media);
//Exibir se todas as bandas estão ativas
const verificaativa = bandas[0].ativa && bandas[1].ativa && bandas[2].ativa && bandas[3].ativa && bandas[4].ativa && bandas[5].ativa && bandas[6].ativa;
console.log("Todas bandas estão ativas?", verificaativa);

function pesquisar(){
    var input,filtro,menu,menuItens,links;
    input = document.getElementById("pesquisa");
    filtro = input.value.toUpperCase();
    menu = document.getElementById("menu");
    menuItens = menu.getElementsByTagName("li");
    for(var i=0;i<menuItens.length;i++){
        links = menuItens[i].getElementsByTagName("a")[0];
        if(links.innerHTML.toUpperCase().indexOf(filtro)>-1){
            menuItens[i].style.display="Banda encontrada";
        }else{
            menuItens[i].style.display="none";
        }
    }
}
