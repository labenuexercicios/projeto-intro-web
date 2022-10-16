// SEMANA 01/02

const filme01 = "Meu amigo Totoro".toUpperCase();
const anoDeLancamento01 = 1988
const duracaoEmMinutos01 = 86;
const RoteiroDeHayaoMiyazaki01 = true
const elenco01 = ["Chika Sakamoto", "Noriko Hidaka", "Hitoshi Takagi"]

const filme02 = "O Serviço de Entregas da Kiki".toUpperCase();
const anoDeLancamento02 = 1989
const duracaoEmMinutos02 = 103;
const RoteiroDeHayaoMiyazaki02 = true
const elenco02 = ["Minami Takayama", "Rei Sakuma", "Kappei Yamaguchi"]

const filme03 = "Sussurros do Coração".toUpperCase();
const anoDeLancamento03 = 1995
const duracaoEmMinutos03 = 111;
const RoteiroDeHayaoMiyazaki03 = true
const elenco03 = ["Yoko Honna","Issei Takahashi", "Takashi Tachibana", "Shigeru Muroi", "Shigeru Tsuyuguchi", "Keiju Kobayashi"]

const filme04 = "Mononoke Hime".toUpperCase();
const anoDeLancamento04 = 1997
const duracaoEmMinutos04 = 133;
const RoteiroDeHayaoMiyazaki04 = true
const elenco04 = ["Yoji Matsuda", "Yuriko Ishida","Yuko Tanaka","Kaoru Kobayashi",
    "Masahiko Nishimura","Tsunehiko Kamijo","Akihiro Miwa"," Mitsuko Mori","Hisaya Morishige"]

const filme05 = "A Viagem de Chihiro".toUpperCase();
const anoDeLancamento05 = 2001
const duracaoEmMinutos05 = 125;
const RoteiroDeHayaoMiyazaki05 = true
const elenco05 = [	"Rumi Hiiragi","Miyu Irino","Mari Natsuki","Takeshi Naito",
    "Yasuko Sawaguchi","Tsunehiko Kamijo","Takehiko Ono","Bunta Sugawara"]

const filme06 = "O Reino dos Gatos".toUpperCase();
const anoDeLancamento06 = 2002
const duracaoEmMinutos06 = 75;
const RoteiroDeHayaoMiyazaki06 = true
const elenco06 = ["	Chizuru Ikewaki","Yoshihiko Hakamada","Aki Maeda","Takayuki Yamada",
    "Hitomi Sato",'Kenta Satoi',"Mari Hamada","Tetsu Watanabe"]

const filme07 = "O Castelo Animado".toUpperCase();
const anoDeLancamento07 = 2004
const duracaoEmMinutos07 = 119;
const RoteiroDeHayaoMiyazaki07 = true
const elenco07 = ["Chieko Baisho", "Takuya Kimura", "Akihiro Miwa"]

const filme08 = "Ponyo – Uma Amizade Que Veio do Mar".toUpperCase();
const anoDeLancamento08 = 2008
const duracaoEmMinutos08 = 101 ;
const RoteiroDeHayaoMiyazaki08 = true
const elenco08 = ["Tomoko Yamaguchi","Kazushige Nagashima","Yuki Amami","George Tokoro",
    "Yuria Nara", "Hiroki Doi", "Rumi Hiiragi", "Akiko Yano", "Kazuko Yoshiyuki", "Tomoko Naraoka"]

const filme09 = "Vidas ao Vento".toUpperCase();
const anoDeLancamento09 = 2013
const duracaoEmMinutos09 = 126 ;
const RoteiroDeHayaoMiyazaki09 = true
const elenco09 = ["Hideaki Anno", "Miori Takimoto", "Hidetoshi Nishijima","Masahiko Nishimura", "Morio Kazama", "Keiko Takeshita",
    "Mirai Shida", "Jun Kunimura", "Shinobu Otake", "Mansai Nomura"]

const media = (duracaoEmMinutos01 + duracaoEmMinutos02 + duracaoEmMinutos03 + duracaoEmMinutos04 + duracaoEmMinutos05 + duracaoEmMinutos06 + duracaoEmMinutos07 + duracaoEmMinutos08 + duracaoEmMinutos09) / 9
console.log(media, "minutos");

const verificarRoterista = (RoteiroDeHayaoMiyazaki01 && RoteiroDeHayaoMiyazaki02 && RoteiroDeHayaoMiyazaki03 && RoteiroDeHayaoMiyazaki04 && RoteiroDeHayaoMiyazaki05 && RoteiroDeHayaoMiyazaki06 && RoteiroDeHayaoMiyazaki07 && RoteiroDeHayaoMiyazaki08 && RoteiroDeHayaoMiyazaki09) 
console.log(verificarRoterista);

console.log(
    "Filme: " + filme01.toUpperCase() + 
    "\nAno de Lanaçamento: " + anoDeLancamento01 +
    "\nDuração: " + duracaoEmMinutos01 +
    "\nRoterista: " + RoteiroDeHayaoMiyazaki01 +
    "\nElenco: " +  elenco01
    );

console.log(
    "Filme: " + filme02.toUpperCase() + 
    "\nAno de Lanaçamento: " + anoDeLancamento02 +
    "\nDuração: " + duracaoEmMinutos02 +
    "\nRoterista: " + RoteiroDeHayaoMiyazaki02 +
    "\nElenco: " +  elenco02
    );

console.log(
    "Filme: " + filme03.toUpperCase() + 
    "\nAno de Lanaçamento: " + anoDeLancamento03 +
    "\nDuração: " + duracaoEmMinutos03 +
    "\nRoterista: " + RoteiroDeHayaoMiyazaki03 +
    "\nElenco: " +  elenco03
    );

console.log(
    "Filme: " + filme04.toUpperCase() + 
    "\nAno de Lanaçamento: " + anoDeLancamento04 +
    "\nDuração: " + duracaoEmMinutos04 +
    "\nRoterista: " + RoteiroDeHayaoMiyazaki04 +
    "\nElenco: " +  elenco04
    );    

console.log(
    "Filme: " + filme05.toUpperCase() + 
    "\nAno de Lanaçamento: " + anoDeLancamento05 +
    "\nDuração: " + duracaoEmMinutos05 +
    "\nRoterista: " + RoteiroDeHayaoMiyazaki05 +
    "\nElenco: " +  elenco05
    );

console.log(
    "Filme: " + filme06.toUpperCase() + 
    "\nAno de Lanaçamento: " + anoDeLancamento06 +
    "\nDuração: " + duracaoEmMinutos06 +
    "\nRoterista: " + RoteiroDeHayaoMiyazaki06 +
    "\nElenco: " +  elenco06
    );

console.log(
    "Filme: " + filme07.toUpperCase() + 
    "\nAno de Lanaçamento: " + anoDeLancamento07 +
    "\nDuração: " + duracaoEmMinutos07 +
    "\nRoterista: " + RoteiroDeHayaoMiyazaki07 +
    "\nElenco: " +  elenco07
    );

console.log(
    "Filme: " + filme08.toUpperCase() + 
    "\nAno de Lanaçamento: " + anoDeLancamento08 +
    "\nDuração: " + duracaoEmMinutos08 +
    "\nRoterista: " + RoteiroDeHayaoMiyazaki08 +
    "\nElenco: " +  elenco08
    );

console.log(
    "Filme: " + filme09.toUpperCase() + 
    "\nAno de Lanaçamento: " + anoDeLancamento09 +
    "\nDuração: " + duracaoEmMinutos09 +
    "\nRoterista: " + RoteiroDeHayaoMiyazaki09 +
    "\nElenco: " +  elenco09
    );

objeto1 = {
    titulo: "Meu amigo Totoro",
    duracaoDoFilme: 86,
    assistidoAteOFim: true,
    elenco: ["Chika Sakamoto", "Noriko Hidaka"]
   }
   
   objeto2 = {
    titulo: "O Serviço de Entregas da Kiki",
    duracaoDoFilme: 103,
    assistidoAteOFim: true,
    elenco: ["Minami Takayama", "Rei Sakuma"]
   }
   
   objeto3 = {
    titulo: "Sussurros do Coração",
    duracaoDoFilme: 111,
    assistidoAteOFim: true,
    elenco: ["Yoko Honna","Issei Takahashi", "Takashi Tachibana", "Shigeru Muroi",
     "Shigeru Tsuyuguchi"]    
   }
   
   objeto4 = {
    titulo: "Mononoke Hime",
    duracaoDoFilme: 133,
    assistidoAteOFim: true,
    elenco: ["Yoji Matsuda", "Yuriko Ishida","Yuko Tanaka","Kaoru Kobayashi",
       "Masahiko Nishimura","Tsunehiko Kamijo","Akihiro Miwa"," Mitsuko Mori"]    
   }
   
   objeto5 = {
    titulo: "A Viagem de Chihiro",
    duracaoDoFilme: 125,
    assistidoAteOFim: true,
    elenco: [	"Rumi Hiiragi","Miyu Irino","Mari Natsuki","Takeshi Naito",
       "Yasuko Sawaguchi","Tsunehiko Kamijo","Takehiko Ono"]
   }
   
   objeto6 = {
    titulo: "O Reino dos Gatos",
    duracaoDoFilme: 75,
    assistidoAteOFim: true,
    elenco: ["	Chizuru Ikewaki","Yoshihiko Hakamada","Aki Maeda","Takayuki Yamada",
       "Hitomi Sato",'Kenta Satoi',"Mari Hamada"]    
   }
   objeto7 = {
    titulo: "O Castelo Animado",
    duracaoDoFilme: 119,
    assistidoAteOFim: true,
    elenco: ["Chieko Baisho", "Takuya Kimura"]    
   }
   
   objeto8 = {
    titulo: "Ponyo – Uma Amizade Que Veio do Mar",
    duracaoDoFilme: 101 ,
    assistidoAteOFim: true,
    elenco: ["Tomoko Yamaguchi","Kazushige Nagashima","Yuki Amami","George Tokoro",
       "Yuria Nara", "Hiroki Doi", "Rumi Hiiragi", "Akiko Yano", "Kazuko Yoshiyuki"]
   }
   
   objeto9 = {
    titulo: "Vidas ao Vento",
    duracaoDoFilme: 126 ,
    assistidoAteOFim: true,
    elenco: ["Hideaki Anno", "Miori Takimoto", "Hidetoshi Nishijima",
    "Masahiko Nishimura", "Morio Kazama", "Keiko Takeshita",
   "Mirai Shida", "Jun Kunimura", "Shinobu Otake"]
   }
   
const filmesGeral = [];
const filmes = [];

filmesGeral.push(objeto1,objeto2, objeto3, objeto4, objeto5, objeto6, objeto7, objeto8, 
    objeto9);

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


/* Mostra o array de itens que foram adicionados na lista
console.log(filmes);
*/

// SEMANA 5

// adicionando item no array de objetos antes do laço
objeto1.lancamento = (1988);
objeto2.lancamento = (1989);
objeto3.lancamento = (1995);
objeto4.lancamento = (1997);
objeto5.lancamento = (2001);
objeto6.lancamento = (2002);
objeto7.lancamento = (2004);
objeto8.lancamento = (2008);
objeto9.lancamento = (2013);


console.log("Lista dos filmes adicionados: ");

for (const i in filmes) {
    let texto = `Título: ${filmes[i].titulo.toUpperCase()} \nDuração do filme: ${filmes[i].duracaoDoFilme} minutos \nFoi assistido até o fim: ${filmes[i].assistidoAteOFim} \nElenco: `
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

objeto1.elenco.push("Hitoshi Takagi");
objeto2.elenco.push("Kappei Yamaguchi");
objeto3.elenco.push("Keiju Kobayashi");
objeto4.elenco.push("Hisaya Morishige");
objeto5.elenco.push("Bunta Sugawara ");
objeto6.elenco.push("Tetsu Watanabe ");
objeto7.elenco.push("Akihiro Miwa ");
objeto8.elenco.push("Tomoko Naraoka ");
objeto9.elenco.push(" Mansai Nomura");

// SEMANA 6

// 1. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.


const recebendoObjeto = objeto => {
    let string = ``
    for (const i in objeto) {
        string += `Título: ${objeto[i].titulo.toUpperCase()} \nDuração do filme: ${objeto[i].duracaoDoFilme} minutos \nFoi assistido até o fim: ${objeto[i].assistidoAteOFim} \nElenco: ${objeto[i].elenco} \n \n`
        
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
    document.querySelector(`.invisivel9`)) {
        
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
objeto1.imagem = "img/1988-Meu-Amigo-Totoro.webp"
objeto2.imagem = "img/1989-O-Serviço-de-Entregas-da-Kiki.webp"
objeto3.imagem = "img/Sussurros-do-Coração.webp"
objeto4.imagem = "img/1997-Princesa-Mononoke.webp"
objeto5.imagem = "img/2001-A-Viagem-de-Chihiro.webp"
objeto6.imagem = "img/O-Reino-dos-Gatos.webp"
objeto7.imagem = "img/2004-O-Castelo-Animado.webp"
objeto8.imagem = "img/2008-Ponyo.webp"
objeto9.imagem = "img/2013-Vidas-ao-Vento.webp"


// link que fica linkado no titulo
objeto1.linkInformacao = "https://studioghibli.com.br/filmografia/meu-amigo-totoro/"
objeto2.linkInformacao = "https://studioghibli.com.br/filmografia/o-servico-de-entregas-da-kiki/"
objeto3.linkInformacao = "https://studioghibli.com.br/filmografia/sussurros-do-coracao/"
objeto4.linkInformacao = "https://studioghibli.com.br/filmografia/princesa-mononoke/"
objeto5.linkInformacao = "https://studioghibli.com.br/filmografia/a-viagem-de-chihiro/" 
objeto6.linkInformacao = "https://studioghibli.com.br/filmografia/o-reino-dos-gatos/"
objeto7.linkInformacao = "https://studioghibli.com.br/filmografia/o-castelo-animado/"
objeto8.linkInformacao = "https://studioghibli.com.br/filmografia/ponyo-uma-amizade-que-veio-do-mar/"
objeto9.linkInformacao = "https://studioghibli.com.br/filmografia/vidas-ao-vento/https://pt.wikipedia.org/wiki/Avengers:_Age_of_Ultron"

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
    const titulo2 = document.createTextNode(`Duração: ${filmesGeral[i].duracaoDoFilme} minutos`)
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












