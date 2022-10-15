// SEMANA 1 E 2
const titulo1 = "Homem de Ferro";
const duracaoDoFilme1 = 2.06;
const assistidoAteOFim1 = false;
const elenco1 = ["Robert Downey Jr.", "Jon Favreau", "Gwyneth Paltrow", "Terrence Howard", "Jeff Bridges"];

const titulo2 = "Homem de Ferro 2";
const duracaoDoFilme2 = 2.05;
const assistidoAteOFim2 = false;
const elenco2 = ["Robert Downey Jr.", "Jon Favreau", "Mickey Rourke", "Don Cheadle", "Scarlett Johansson"];

const titulo3 = "Homem de Ferro 3";
const duracaoDoFilme3 = 2.11;
const assistidoAteOFim3 = true;
const elenco3 = ["Robert Downey Jr.", "Ben Kingsley", "Don Cheadle", "Guy Pearce", "Jon Favreau"];
//
const titulo4 = "Thor";
const duracaoDoFilme4 = 1.54;
const assistidoAteOFim4 = false;
const elenco4 = ["Chris Hemsworth", "Natalie Portman", "Tom Hiddleston", "Anthony Hopkins", "Jaimie Alexander"];

const titulo5 = "Thor O Mundo Sombrio";
const duracaoDoFilme5 = 1.52;
const assistidoAteOFim5 = false;
const elenco5 = ["Chris Hemsworth", "Natalie Portman", "Tom Hiddleston", "Kat Dennings", "Christopher Eccleston"];

const titulo6 = "Thor Ragnarok";
const duracaoDoFilme6 = 2.11;
const assistidoAteOFim6 = true;
const elenco6 = ["Chris Hemsworth", "Taika Waititi", "Cate Blanchett", "Jeff Goldblum", "Mark Ruffalo"];

const titulo7 = "Thor Amor e Trovao";
const duracaoDoFilme7 = 1.59;
const assistidoAteOFim7 = true;
const elenco7 = ["Chris Hemsworth", "Natalie Portman", "Christian Bale", "Taika Waititi", "Tessa Thompson"];
//
const titulo8 = "Os Vingadores The Avengers";
const duracaoDoFilme8 = 2.23;
const assistidoAteOFim8 = true;
const elenco8 = ["Robert Downey Jr.", "Scarlett Johansson", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth"];

const titulo9 = "Vingadores Era de Ultron";
const duracaoDoFilme9 = 2.21;
const assistidoAteOFim9 = true;
const elenco9 = ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Scarlett Johansson", "Chris Hemsworth"];

const titulo10 = "Vingadores Guerra Infinita";
const duracaoDoFilme10 = 2.29;
const assistidoAteOFim10 = true;
const elenco10 = ["Robert Downey Jr.", "Chris Evans", "Chris Hemsworth", "Josh Brolin", "Mark Ruffalo"];

const titulo11 = "Vingadores Ultimato";
const duracaoDoFilme11 = 3.02;
const assistidoAteOFim11 = true;
const elenco11 = ["Robert Downey Jr.", "Chris Evans", "Chris Hemsworth", "Scarlett Johansson", "Mark Ruffalo"];
//
const titulo12 = "Homem Aranha: De Volta ao Lar";
const duracaoDoFilme12 = 2.13;
const assistidoAteOFim12 = true;
const elenco12 = ["Tom Holland", "Zendaya", "Michael Keaton", "Marisa Tomei", "Laura Harrier"];

const titulo13 = "Homem Aranha: Longe de Casa";
const duracaoDoFilme13 = 2.11;
const assistidoAteOFim13 = true;
const elenco13 = ["Tom Holland", "Zendaya", "Jake Gyllenhaal", "Samuel L. Jackson", "Marisa Tomei" ];

const titulo14 = "Homem Aranha: Sem Volta para Casa";
const duracaoDoFilme14 = 2.28;
const assistidoAteOFim14 = true;
const elenco14 = ["Tom Holland", "Zendaya", "Tobey Maguire", "Andrew Garfield", "Marisa Tomei"];
//
const titulo15 = "Pantera Negra";
const duracaoDoFilme15 = 2.15;
const assistidoAteOFim15 = true;
const elenco15 = ["Chadwick Boseman", "Lupita Nyong'o", "Michael B. Jordan", "Danai Gurira", "Letitia Wright"];

const titulo16 = "Viuva Negra";
const duracaoDoFilme16 = 2.13;
const assistidoAteOFim16 = true;
const elenco16 = ["Scarlett Johansson", "Florence Pugh", "David Harbour", "Rachel Weisz", "Olga Kurylenko"];

const titulo17 = "Doutor Estranho no Multiverso da Loucura";
const duracaoDoFilme17 = 2.06;
const assistidoAteOFim17 = true;
const elenco17 = ["Elizabeth Olsen", "Xochitl Gomez", "Rachel McAdams", "Benedict Cumberbatch", "John Krasinski"];

const mediaDeDuracaoDosFilmes = (duracaoDoFilme1 + duracaoDoFilme2 + duracaoDoFilme3 + duracaoDoFilme4 + duracaoDoFilme5 +
    duracaoDoFilme6 + duracaoDoFilme7 + duracaoDoFilme8 + duracaoDoFilme9 + duracaoDoFilme10 + duracaoDoFilme11 +
    duracaoDoFilme12 + duracaoDoFilme13 + duracaoDoFilme14 + duracaoDoFilme15 + duracaoDoFilme16 + duracaoDoFilme17)/ 17;


console.log(`A média de duração dos filmes é: ${parseFloat(mediaDeDuracaoDosFilmes.toFixed(2))} horas`); 

const assistidoAteOFimGeral = assistidoAteOFim1 && assistidoAteOFim2 && assistidoAteOFim3 && assistidoAteOFim4 && 
    assistidoAteOFim5 && assistidoAteOFim6 && assistidoAteOFim7 && assistidoAteOFim8  && assistidoAteOFim9 && 
    assistidoAteOFim10 && assistidoAteOFim11 && assistidoAteOFim12 && assistidoAteOFim13 && assistidoAteOFim14  && 
    assistidoAteOFim15 && assistidoAteOFim16  && assistidoAteOFim17;

console.log(`Todos os filmes foram assistidos até o fim? ${assistidoAteOFimGeral}`);

/*

console.log(`${titulo1.toUpperCase()} \nDuração: ${duracaoDoFilme1} \nFoi assistido até o fim: ${assistidoAteOFim1} \nElenco: ${elenco1}`);
console.log(`${titulo2.toUpperCase()} \nDuração: ${duracaoDoFilme2} \nFoi assistido até o fim: ${assistidoAteOFim2} \nElenco: ${elenco2}`);
console.log(`${titulo3.toUpperCase()} \nDuração: ${duracaoDoFilme3} \nFoi assistido até o fim: ${assistidoAteOFim3} \nElenco: ${elenco3}`);
console.log(`${titulo4.toUpperCase()} \nDuração: ${duracaoDoFilme4} \nFoi assistido até o fim: ${assistidoAteOFim4} \nElenco: ${elenco4}`);
console.log(`${titulo5.toUpperCase()} \nDuração: ${duracaoDoFilme5} \nFoi assistido até o fim: ${assistidoAteOFim5} \nElenco: ${elenco5}`);
console.log(`${titulo6.toUpperCase()} \nDuração: ${duracaoDoFilme6} \nFoi assistido até o fim: ${assistidoAteOFim6} \nElenco: ${elenco6}`);
console.log(`${titulo7.toUpperCase()} \nDuração: ${duracaoDoFilme7} \nFoi assistido até o fim: ${assistidoAteOFim7} \nElenco: ${elenco7}`);
console.log(`${titulo8.toUpperCase()} \nDuração: ${duracaoDoFilme8} \nFoi assistido até o fim: ${assistidoAteOFim8} \nElenco: ${elenco8}`);
console.log(`${titulo9.toUpperCase()} \nDuração: ${duracaoDoFilme9} \nFoi assistido até o fim: ${assistidoAteOFim9} \nElenco: ${elenco9}`);
console.log(`${titulo10.toUpperCase()} \nDuração: ${duracaoDoFilme10} \nFoi assistido até o fim: ${assistidoAteOFim10} \nElenco: ${elenco10}`);
console.log(`${titulo11.toUpperCase()} \nDuração: ${duracaoDoFilme11} \nFoi assistido até o fim: ${assistidoAteOFim11} \nElenco: ${elenco11}`);
console.log(`${titulo12.toUpperCase()} \nDuração: ${duracaoDoFilme12} \nFoi assistido até o fim: ${assistidoAteOFim12} \nElenco: ${elenco12}`);
console.log(`${titulo13.toUpperCase()} \nDuração: ${duracaoDoFilme13} \nFoi assistido até o fim: ${assistidoAteOFim13} \nElenco: ${elenco13}`);
console.log(`${titulo14.toUpperCase()} \nDuração: ${duracaoDoFilme14} \nFoi assistido até o fim: ${assistidoAteOFim14} \nElenco: ${elenco14}`);
console.log(`${titulo15.toUpperCase()} \nDuração: ${duracaoDoFilme15} \nFoi assistido até o fim: ${assistidoAteOFim15} \nElenco: ${elenco15}`);
console.log(`${titulo16.toUpperCase()} \nDuração: ${duracaoDoFilme16} \nFoi assistido até o fim: ${assistidoAteOFim16} \nElenco: ${elenco16}`);
console.log(`${titulo17.toUpperCase()} \nDuração: ${duracaoDoFilme17} \nFoi assistido até o fim: ${assistidoAteOFim17} \nElenco: ${elenco17}`);

*/

// SEMANA 3 E 4

objeto1 = {
    titulo: "Homem de Ferro",
    duracaoDoFilme: 2.06,
    assistidoAteOFim: false,
    elenco:["Robert Downey Jr.", "Jon Favreau", "Gwyneth Paltrow", "Terrence Howard", "Jeff Bridges"]
}

objeto2 = {
    titulo: "Homem de Ferro 2",
    duracaoDoFilme: 2.05,
    assistidoAteOFim: false,
    elenco: ["Robert Downey Jr.", "Jon Favreau", "Mickey Rourke", "Don Cheadle", "Scarlett Johansson"]
}

objeto3 = {
    titulo: "Homem de Ferro 3",
    duracaoDoFilme: 2.11,
    assistidoAteOFim: true,
    elenco: ["Robert Downey Jr.", "Ben Kingsley", "Don Cheadle", "Guy Pearce", "Jon Favreau"]
}

objeto4 = {
    titulo: "Thor",
    duracaoDoFilme: 1.54,
    assistidoAteOFim: false,
    elenco: ["Chris Hemsworth", "Natalie Portman", "Tom Hiddleston", "Anthony Hopkins", "Jaimie Alexander"]
}

objeto5 = {
    titulo:  "Thor O Mundo Sombrio",
    duracaoDoFilme:  1.52,
    assistidoAteOFim:  false,
    elenco: ["Chris Hemsworth", "Natalie Portman", "Tom Hiddleston", "Kat Dennings", "Christopher Eccleston"]
}

objeto6 = {
    titulo: "Thor Ragnarok",
    duracaoDoFilme: 2.11,
    assistidoAteOFim: true,
    elenco: ["Chris Hemsworth", "Taika Waititi", "Cate Blanchett", "Jeff Goldblum", "Mark Ruffalo"]
}

objeto7 = {
    titulo: "Thor Amor e Trovao",
    duracaoDoFilme: 1.59,
    assistidoAteOFim: true,
    elenco: ["Chris Hemsworth", "Natalie Portman", "Christian Bale", "Taika Waititi", "Tessa Thompson"]
}

objeto8 = {
    titulo: "Os Vingadores The Avengers",
    duracaoDoFilme: 2.23,
    assistidoAteOFim: true,
    elenco: ["Robert Downey Jr.", "Scarlett Johansson", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth"]
}

objeto9 = {
    titulo: "Vingadores Era de Ultron",
    duracaoDoFilme: 2.21,
    assistidoAteOFim: true,
    elenco: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Scarlett Johansson", "Chris Hemsworth"]
}

objeto10 = {
    titulo: "Vingadores Guerra Infinita",
    duracaoDoFilme: 2.29,
    assistidoAteOFim: true,
    elenco: ["Robert Downey Jr.", "Chris Evans", "Chris Hemsworth", "Josh Brolin", "Mark Ruffalo"] 
}

objeto11 = {
    titulo: "Vingadores Ultimato",
    duracaoDoFilme: 3.02,
    assistidoAteOFim: true,
    elenco: ["Robert Downey Jr.", "Chris Evans", "Chris Hemsworth", "Scarlett Johansson", "Mark Ruffalo"]
}

objeto12 = {
    titulo: "Homem Aranha De Volta ao Lar",
    duracaoDoFilme: 2.13,
    assistidoAteOFim: true,
    elenco: ["Tom Holland", "Zendaya", "Michael Keaton", "Marisa Tomei", "Laura Harrier"]
}

objeto13 = {
    titulo: "Homem Aranha Longe de Casa",
    duracaoDoFilme: 2.11,
    assistidoAteOFim: true,
    elenco: ["Tom Holland", "Zendaya", "Jake Gyllenhaal", "Samuel L. Jackson", "Marisa Tomei"]
}

objeto14 = {
    titulo: "Homem Aranha Sem Volta para Casa",
    duracaoDoFilme: 2.28,
    assistidoAteOFim: true,
    elenco: ["Tom Holland", "Zendaya", "Tobey Maguire", "Andrew Garfield", "Marisa Tomei"]
}

objeto15 = {
    titulo: "Pantera Negra",
    duracaoDoFilme: 2.15,
    assistidoAteOFim: true,
    elenco: ["Chadwick Boseman", "Lupita Nyong'o", "Michael B. Jordan", "Danai Gurira", "Letitia Wright"]
}

objeto16 = {
    titulo: "Viuva Negra",
    duracaoDoFilme: 2.13,
    assistidoAteOFim: true,
    elenco: ["Scarlett Johansson", "Florence Pugh", "David Harbour", "Rachel Weisz", "Olga Kurylenko"]
}

objeto17 = {
    titulo: "Doutor Estranho no Multiverso da Loucura",
    duracaoDoFilme: 2.06,
    assistidoAteOFim: true,
    elenco: ["Elizabeth Olsen", "Xochitl Gomez", "Rachel McAdams", "Benedict Cumberbatch", "John Krasinski"]
}

const filmesGeral = [];
const filmes = [];

filmesGeral.push(objeto1,objeto2, objeto3, objeto4, objeto5, objeto6, objeto7, objeto8, 
    objeto9, objeto10, objeto11,objeto12, objeto13, objeto14, objeto15, objeto16, objeto17
);

if (objeto1.assistidoAteOFim === true) {
    filmes.push(objeto1)
} else {
    alert(`${objeto1.titulo} não foi adicionado pois não foi assistido até o fim.`)
}

if (objeto2.assistidoAteOFim === true) {
    filmes.push(objeto2)
} else {
    alert(`${objeto2.titulo} não foi adicionado pois não foi assistido até o fim.`)
}

if (objeto3.assistidoAteOFim === true) {
    filmes.push(objeto3)
} else {
    alert(`${objeto3.titulo} não foi adicionado pois não foi assistido até o fim.`)
}

if (objeto4.assistidoAteOFim === true) {
    filmes.push(objeto4)
} else {
    alert(`${objeto4.titulo} não foi adicionado pois não foi assistido até o fim.`)
}

if (objeto5.assistidoAteOFim === true) {
    filmes.push(objeto5)
} else {
    alert(`${objeto5.titulo} não foi adicionado pois não foi assistido até o fim.`)
}

if (objeto6.assistidoAteOFim === true) {
    filmes.push(objeto6)
} else {
    alert(`${objeto6.titulo} não foi adicionado pois não foi assistido até o fim.`)
}

if (objeto7.assistidoAteOFim === true) {
    filmes.push(objeto7)
} else {
    alert(`${objeto7.titulo} não foi adicionado pois não foi assistido até o fim.`)
}

if (objeto8.assistidoAteOFim === true) {
    filmes.push(objeto8)
} else {
    alert(`${objeto8.titulo} não foi adicionado pois não foi assistido até o fim.`)
}

if (objeto9.assistidoAteOFim === true) {
    filmes.push(objeto9)
} else {
    alert(`${objeto9.titulo} não foi adicionado pois não foi assistido até o fim.`)
}

if (objeto10.assistidoAteOFim === true) {
    filmes.push(objeto10)
} else {
    alert(`${objeto10.titulo} não foi adicionado pois não foi assistido até o fim.`)
}

if (objeto11.assistidoAteOFim === true) {
    filmes.push(objeto11)
} else {
    alert(`${objeto11.titulo} não foi adicionado pois não foi assistido até o fim.`)
}

if (objeto12.assistidoAteOFim === true) {
    filmes.push(objeto12)
} else {
    alert(`${objeto12.titulo} não foi adicionado pois não foi assistido até o fim.`)
}

if (objeto13.assistidoAteOFim === true) {
    filmes.push(objeto13)
} else {
    alert(`${objeto13.titulo} não foi adicionado pois não foi assistido até o fim.`)
}

if (objeto14.assistidoAteOFim === true) {
    filmes.push(objeto14)
} else {
    alert(`${objeto14.titulo} não foi adicionado pois não foi assistido até o fim.`)
}

if (objeto15.assistidoAteOFim === true) {
    filmes.push(objeto15)
} else {
    alert(`${objeto15.titulo} não foi adicionado pois não foi assistido até o fim.`)
}

if (objeto16.assistidoAteOFim === true) {
    filmes.push(objeto16)
} else {
    alert(`${objeto16.titulo} não foi adicionado pois não foi assistido até o fim.`)
}

if (objeto17.assistidoAteOFim === true) {
    filmes.push(objeto17)
} else {
    alert(`${objeto17.titulo} não foi adicionado pois não foi assistido até o fim.`)
}


/* Mostra o array de itens que foram adicionados na lista

console.log(filmes);

*/

// SEMANA 5

// adicionando item no array de objetos antes do laço
objeto1.lancamento = (2018);
objeto2.lancamento = (2010);
objeto3.lancamento = (2013);
objeto4.lancamento = (2011);
objeto5.lancamento = (2013);
objeto6.lancamento = (2017);
objeto7.lancamento = (2022);
objeto8.lancamento = (2012);
objeto9.lancamento = (2015);
objeto10.lancamento = (2018);
objeto11.lancamento = (2019);
objeto12.lancamento = (2017);
objeto13.lancamento = (2019);
objeto14.lancamento = (2021);
objeto15.lancamento = (2018);
objeto16.lancamento = (2021);
objeto17.lancamento = (2022);


console.log("Lista dos filmes adicionados: ");

for (const i in filmes) {
    let texto = `Título: ${filmes[i].titulo.toUpperCase()} \nDuração do filme: ${filmes[i].duracaoDoFilme} horas \nFoi assistido até o fim: ${filmes[i].assistidoAteOFim} \nElenco: `
    for (const j of filmes[i].elenco) {
        if (filmes[i].elenco.length - 1 === filmes[i].elenco.lastIndexOf(j)) {
            texto += `${j}.`
        }else{
            texto += `${j}, `
        }
        
    }
    console.log(texto);
}

// adicionando item no array de objetos depois do laço

objeto1.elenco.push("Leslie Bibb");
objeto2.elenco.push("Gwyneth Paltrow");
objeto3.elenco.push("Gwyneth Paltrow");
objeto4.elenco.push("Idris Elba");
objeto5.elenco.push("Jaimie Alexander");
objeto6.elenco.push("Tessa Thompson");
objeto7.elenco.push("Luke Hemsworth");
objeto8.elenco.push("Jeremy Renner");
objeto9.elenco.push("Elizabeth Olsen");
objeto10.elenco.push("Scarlett Johansson");
objeto11.elenco.push("Jeremy Renner");
objeto12.elenco.push("Tony Revolori");
objeto13.elenco.push("Angourie Rice");
objeto14.elenco.push("Willem Dafoe");
objeto15.elenco.push("Winston Duke");
objeto16.elenco.push("Ryan Kiera Armstrong");
objeto17.elenco.push("Hayley Atwell");

// SEMANA 6

// 1. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.


const recebendoObjeto = objeto => {
    let string = ``
    for (const i in objeto) {
        string += `Título: ${objeto[i].titulo.toUpperCase()} \nDuração do filme: ${objeto[i].duracaoDoFilme} horas \nFoi assistido até o fim: ${objeto[i].assistidoAteOFim} \nElenco: ${objeto[i].elenco} \n \n`
        
    }
    return string
}

console.log("Lista com todos os filmes:");
console.log(recebendoObjeto(filmesGeral));

// 2.
const verificacaoDeTitulo = (objeto, string) => {
    objeto = filmesGeral
    string = document.getElementById("texto");
    let pesquisa = "procurando"
   
    
    if (document.querySelector(`.invisivel1`) || document.querySelector(`.invisivel2`) || document.querySelector(`.invisivel3`) || document.querySelector(`.invisivel4`) ||
    document.querySelector(`.invisivel5`) || document.querySelector(`.invisivel6`) || document.querySelector(`.invisivel7`) || document.querySelector(`.invisivel8`) || 
    document.querySelector(`.invisivel9`) || document.querySelector(`.invisivel10`) || document.querySelector(`.invisivel11`) || document.querySelector(`.invisivel12`) || 
    document.querySelector(`.invisivel13`) || document.querySelector(`.invisivel14`) || document.querySelector(`.invisivel15`) || document.querySelector(`.invisivel16`) || 
    document.querySelector(`.invisivel17`)) {
        
        pesquisa = "barrada"
        alert("Clique no ícone da casinha para voltar para a lista")

    } else {
        for (const i in objeto) {
            if (objeto[i].titulo.toUpperCase() === string.value.toUpperCase()) {
                pesquisa = "achado"
                
                for (let i = 0; i < objeto.length; i++) {
                    const classe = document.querySelector(`.caixa-dos-filmes${i + 1}`)
                    classe.classList.remove(`caixa-dos-filmes${i + 1}`)
                    classe.classList.add(`invisivel${i + 1}`)
                }
                
                for (let i = 0; i < objeto.length; i++) {
                    if (objeto[i].titulo.toUpperCase() === string.value.toUpperCase()) {
                        const classe = document.querySelector(`.invisivel${i + 1}`)
                        classe.classList.remove(`invisivel${i + 1}`)
                        classe.classList.add(`caixa-dos-filmes${i + 1}`)  
                    }
                    
                }
                
                const classeH1 = document.querySelector(".titulo");
                classeH1.classList.remove("titulo")
                classeH1.classList.add("titulo-invisivel")
            }
        }
         
    }

    if (string.value === "" && pesquisa !== "barrada") {
        pesquisa = "vazio"
        alert("Campo de busca vazio")    
    }
    
    if (pesquisa === "procurando") {
        alert("Não encontrado")
    
    }
    string.value = ""
}



// SEMANA 7

// imagem da lista
objeto1.imagem = "/img/Homem de Ferro 2008.jpg"
objeto2.imagem = "/img/Homem de Ferro  2010.jpg"
objeto3.imagem = "/img/Homem de Ferro 3 2013.jpg"
objeto4.imagem = "/img/Thor  2011.jpg"
objeto5.imagem = "/img/Thor O Mundo Sombrio  2013 .jpg"
objeto6.imagem = "/img/Thor Ragnarok - 2017 .jpg"
objeto7.imagem = "/img/Thor Amor e Trovao - 2022.png"
objeto8.imagem = "/img/Os Vingadores – The Avengers  2012.jpg"
objeto9.imagem = "/img/Vingadores Era de Ultron - 2015.jpg"
objeto10.imagem = "/img/Vingadores Guerra Infinita - 2018 ‧.jpg"
objeto11.imagem = "/img/Vingadores Ultimato - 2019.png"
objeto12.imagem = "/img/Homem-Aranha De Volta ao Lar - 2017.jpg"
objeto13.imagem = "/img/Homem-Aranha Longe de Casa - 2019.jpg"
objeto14.imagem = "/img/Homem-Aranha Sem Volta para Casa - 2021.jpg"
objeto15.imagem = "/img/Pantera Negra - 2018 .jpg"
objeto16.imagem = "/img/Viuva Negra - 2021.jpg"
objeto17.imagem = "/img/Doutor Estranho no Multiverso da Loucura (2022).jpeg"

// link que fica linkado no titulo
objeto1.linkInformacao = "https://pt.wikipedia.org/wiki/Homem_de_Ferro_(filme)"
objeto2.linkInformacao = "https://pt.wikipedia.org/wiki/Homem_de_Ferro_2"
objeto3.linkInformacao = "https://pt.wikipedia.org/wiki/Homem_de_Ferro_3"
objeto4.linkInformacao = "https://pt.wikipedia.org/wiki/Thor_(filme)"
objeto5.linkInformacao = "https://pt.wikipedia.org/wiki/Thor:_The_Dark_World" 
objeto6.linkInformacao = "https://pt.wikipedia.org/wiki/Thor:_Ragnarok"
objeto7.linkInformacao = "https://pt.wikipedia.org/wiki/Thor:_Amor_e_Trov%C3%A3o"
objeto8.linkInformacao = "https://pt.wikipedia.org/wiki/The_Avengers_(2012)"
objeto9.linkInformacao = "https://pt.wikipedia.org/wiki/Avengers:_Age_of_Ultron"
objeto10.linkInformacao = "https://pt.wikipedia.org/wiki/Avengers:_Infinity_War"
objeto11.linkInformacao = "https://pt.wikipedia.org/wiki/Avengers:_Endgame"
objeto12.linkInformacao = "https://pt.wikipedia.org/wiki/Spider-Man:_Homecoming"
objeto13.linkInformacao = "https://pt.wikipedia.org/wiki/Homem-Aranha:_Longe_de_Casa"
objeto14.linkInformacao = "https://pt.wikipedia.org/wiki/Spider-Man:_No_Way_Home" 
objeto15.linkInformacao = "https://pt.wikipedia.org/wiki/Black_Panther_(filme)"
objeto16.linkInformacao = "https://pt.wikipedia.org/wiki/Vi%C3%BAva_Negra_(filme)"
objeto17.linkInformacao = "https://pt.wikipedia.org/wiki/Doutor_Estranho_no_Multiverso_da_Loucura"

// SEMANA 11

for (let i = 0; i < filmesGeral.length; i++) {

    const tagImg = document.createElement("img");
    const elementoPai1 = document.getElementById(`conteiner${i + 1}`);
    elementoPai1.insertAdjacentElement("beforeend", tagImg);
    tagImg.setAttribute("src",`${filmesGeral[i].imagem}`);

    const div = document.createElement("div")
    elementoPai1.insertAdjacentElement("beforeend", div)
    div.setAttribute("id", `div-${1 + i}`)

    const li1 = document.createElement("li")
    const elementoPai2 = document.getElementById(`div-${1 + i}`)
    elementoPai2.insertAdjacentElement("beforeend", li1)
    li1.setAttribute("id", `li1-${1 + i}`)

    const elemento = document.createElement("a")
    const titulo = document.createTextNode(`${filmesGeral[i].titulo.toUpperCase()}`)
    elemento.appendChild(titulo)
    const elementoPai3 = document.getElementById(`li1-${1 + i}`)
    elementoPai3.insertAdjacentElement("beforeend", elemento)
    elemento.setAttribute("href", `${filmesGeral[i].linkInformacao}`)
    elemento.setAttribute("target", "_blank")

    const li2 = document.createElement("li")
    const elementoPai4 = document.getElementById(`div-${1 + i}`)
    elementoPai4.insertAdjacentElement("beforeend", li2)
    li2.setAttribute("id", `li2-${1 + i}`)

    const elemento2 = document.createElement("li")
    const titulo2 = document.createTextNode(`Duração: ${filmesGeral[i].duracaoDoFilme} horas`)
    elemento2.appendChild(titulo2)
    const elementoPai5 = document.getElementById(`li2-${1 + i}`)
    elementoPai5.insertAdjacentElement("beforeend", elemento2)
    
    const li3 = document.createElement("li")
    const elementoPai6 = document.getElementById(`div-${1 + i}`)
    elementoPai6.insertAdjacentElement("beforeend", li3)
    li3.setAttribute("id", `li3-${1 + i}`)

    const elemento3 = document.createElement("li")
    const titulo3 = document.createTextNode(`Lançamento: ${filmesGeral[i].lancamento}`)
    elemento3.appendChild(titulo3)
    const elementoPai7 = document.getElementById(`li3-${1 + i}`)
    elementoPai7.insertAdjacentElement("beforeend", elemento3)

}
