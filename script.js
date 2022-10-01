const series = {
    nome: '',
    anoLancamento: 0,
    isSerie: true,
    totTemporadas: 0,
    genero: [],
    elencoPrincipal: []
}

const greysAnatomy = {...series,
    nome: 'greys anatomy',
    anoLancamento: Number(2005),
    isSerie: true,
    totTemporadas: Number(19),
    genero: ['drama', 'ficção medica', 'romance', 'comedia dramatica'],
    elencoPrincipal: ['ellen pompeo', 'patrick dempsey', 'sandra oh'],
    sinopse:`Conheça Meredith Grey, uma brilhante estagiária cirúrgica do primeiro ano do Seattle Grace Hospital. Juntamente com seus colegas residentes em treinamento, Meredith navega pelos traumas diários e pelas minas sociais da vida dentro do hospital e no mundo real.`,
    imagem: `C:\Users\mathe\OneDrive\Documentos\projeto-intro-web\imagens\greysAnatomy.jpg`
}

const laCasaDePapel = {...series,
    nome: 'lá casa de papel',
    anoLancamento: Number(2017),
    isSerie: true,
    totTemporadas: Number(4),
    genero: ['assalto', 'drama', 'suspense', 'crime'],
    elencoPrincipal: ['alvaro morte', 'alba flores', 'miguel herran'],
    sinopse:`Oito ladrões se trancam com reféns na Casa da Moeda da Espanha. Seu líder manipula a polícia para realizar um plano. Será o maior roubo da história, ou uma missão em vão?`,
    imagem: `C:\Users\mathe\OneDrive\Documentos\projeto-intro-web\imagens\laCasaDePapel.jpg`
}
const vikings = {...series,
    nome: 'vikings',
    anoLancamento: Number(2013),
    isSerie: true,
    totTemporadas: Number(6),
    genero: ['guerra', 'drama', 'ação', 'aventura'],
    elencoPrincipal: ['travis fimmel', 'clive standen', 'gustaf skarsgard'],
    sinopse: `Esta série dramática acompanha a vida do viking Ragnar Lothbrok em sua jornada para ampliar o domínio nórdico e desafiar um líder incompetente e sem visão.`,
    imagem: `C:\Users\mathe\OneDrive\Documentos\projeto-intro-web\imagens\vijings.jpg`
}
// Exercicio 2
const bdSeries = []
// Exercicio 3
if(laCasaDePapel.isSerie){
    bdSeries.push(laCasaDePapel)
}else{
    console.log('A serie ',laCasaDePapel.nome,'não foi adicionada.')
    
}

if(greysAnatomy.isSerie){
    bdSeries.push(greysAnatomy)
}else{
    console.log('A serie ',greysAnatomy.nome,' não foi adicionado')
}

if (vikings.isSerie) {
    bdSeries.push(vikings)
} else {
    console.log('A serie ',vikings.nome,' não foi adicionado')
}
// console.log(teste)

let txtVikings = vikings.elencoPrincipal.toString()
let txtGreysAnatomy = greysAnatomy.elencoPrincipal.toString()
let txtLaCasaDePapel = laCasaDePapel.elencoPrincipal.toString()

let = stringGreysAnatomy = ""
for(let i in greysAnatomy.elencoPrincipal){
    stringGreysAnatomy += greysAnatomy.elencoPrincipal[i] + " "
}

let = stringLaCasaDePapel = ""
for(let i in laCasaDePapel.elencoPrincipal){
    stringLaCasaDePapel += laCasaDePapel.elencoPrincipal[i] + " "
}

let = stringVikings = ""
for(let i in vikings.elencoPrincipal){
    stringVikings += vikings.elencoPrincipal[i] + " "
}

function relatorio(objeto) {
    let txt = ""
    for(keys in objeto){
        txt += keys +": "+ objeto[keys] + "\n"
    }
    return txt.toString()
}
const teste = relatorio(greysAnatomy)
console.log(teste)

const busca = (array,string)=>{
    const b = array.filter( (titulo) => {return titulo.nome == string})
    return b.length > 0 ?  b  : console.log("não foi encontrado")    
}



