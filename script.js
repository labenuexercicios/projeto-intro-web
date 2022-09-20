//----SEMANA 1 e 3 criação do tema e lista de itens como objeto.media  e checagem de booleanos.


const desenho1 = {
    nome: 'Dragon Ball',
    criador: ['Akira Toriyama'],
    duracaoEpisodios: 519,
    personagens: ['Son Goku', 'Vegeta,', 'Kuririn ', 'Bulma', 'Kame-Sennin', ' Piccolo', ' Chi-Chi', ' Gohan', 'Freeza', 'Cell', 'Boo '],
    anoLancamento: 1984,
    enredo: ['A história de Dragon Ball começa com Son Goku, um garoto ingênuo e puro com cauda de macaco e uma força extraordinária. Ele mora sozinho após a morte de seu avô adotivo em uma montanha chamada Paozu. Um dia ele conhece Bulma, uma garota muito inteligente da cidade, que estava em busca das sete Esferas do Dragão. Persuadido, Goku concorda em ajudar Bulma a encontrar as Esferas. Os dois partem em uma longa jornada, durante a qual eles fazem muitos amigos. Depois, Goku passa por um treinamento com Kame-Sennin, onde o garoto Kuririn se torna seu parceiro, e participa de vários torneios mundiais de artes marciais. No curso de seu crescimento e seu desenvolvimento, ele enfrenta inúmeros inimigos, incluindo Piccolo, que depois se torna seu aliado. Quando jovem adulto, Goku se casa com Chi-Chi, cumprindo uma promessa feita por ele quando ambos eram crianças, e possui seu primeiro filho chamado Gohan. Goku acaba descobrindo que pertence à raça extraterrestre Saiyajin, e que foi enviado à Terra quando criança para conquistar o planeta. Pouco depois de sua chegada, no entanto, ele tinha sofrido um ferimento na cabeça, perdendo desta forma a memória da missão e sua natureza agressiva. No entanto, o jovem decide continuar a defender seu planeta adotado do ataque de inimigos cada vez mais difíceis, incluindo o príncipe dos sayajins Vegeta, que depois também se torna seu aliado. Desta forma, juntamente com sua família e seus amigos, Goku luta contra inimigos como Freeza, Cell, Boo, entre outros, se tornando o protetor da Terra e todo o universo.'],
    isContinuacao: true,
}
const desenho2 = {
    nome: 'Pica-Pau',
    criador: ['Walter Lantz', 'Ben Hardaway'],
    duracaoEpisodios: 196,
    personagens: ['Pica-Pau', 'Pé de Pano', 'Winnie Pica-Pau', '	Leôncio', 'Zeca Urubu', 'Zé Jacaré', ' Dooley', 'Meany Ranheta', 'Smedley', 'Tweaky'],
    anoLancamento: 1957,
    enredo: ['O pássaro falante Pica-Pau sempre tenta se dar bem em qualquer situação. Na companhia de seu amigo, o cavalo medroso Pé de Pano, ele adora pregar peças em seus inimigos Zeca Urubu, Zé Jacaré, Meany Ranheta, entre outros'],
    isContinuacao: true,

}
const desenho3 = {
    nome: 'Pantera Cor-de-Rosa',
    criador: ['Blake Edwards', ' Friz Freleng', 'Hawley Pratt', ' Manu Kumar'],
    duracaoEpisodios: 120,
    personagens: ['Pantera Cor-de-Rosa', 'Inspetor Clouseau', 'Charles Lytton', 'Simone Clouseau', 'Princesa Dahla'],
    anoLancamento: 1963,
    enredo: ['O diamante conhecido como Pantera Cor-de-Rosa está na mira de um ousado ladrão europeu e seu sobrinho, que tem a intenção de colocar a culpa do roubo no tio. Só que para isso, eles terão que despistar o desajeitado inspetor francês Jacques Clouseau.'],
    isContinuacao: true,
}
const desenho4 = {
    nome: `Tom e Jerry`,
    criador: ['William Hanna`,`Joseph Barbera'],
    duracaoEpisodios: 162,
    personagens: [`Tom`, `Jerry`, `Mammy Two Shoes`, `Spike`, `Butch, o gato de rua`, `Toodles`, `Joan`, `George`, `Patinho`, `Narrador`],
    anoLancamento: 1940,
    enredo: [`O centro da trama se baseia geralmente em tentativas frustradas de Tom tentando capturar Jerry, com o caos e a destruição que ainda se seguem.Tom raramente consegue capturar Jerry, principalmente por causa das habilidades do engenhoso ratinho, e também por causa de sua própria estupidez. As perseguições eram eletrizantes e sempre vinham acompanhadas por uma boa trilha sonora. Também eram utilizadas diversas armadilhas e truques que no final não davam resultado satisfatório, como bombas e ratoeiras, coisas que eram fundamentais na rivalidade entre o gato e o rato. Alguns personagens também marcam presença na trama, como o bulldog Spike e o rival de Tom, o gato Butch.`],
    isContinuacao: true,

}
const desenho5 = {
    nome: `The Flintstones`,
    criador: [`William Hanna`, `Joseph Barbera`],
    duracaoEpisodios: 166,
    personagens: [`Fred Flintstone `, `Wilma Flintstone`, `Barney Rubble`, `Betty Rubble`, `Pedrita`, `Bam-Bam`, `Dino`, `Gazoo`, `SrPedregulho`],
    anoLancamento: 1960,
    enredo: [`As vidas das famílias de classe média Flintstone e Rubble e suas aventuras na idade da pedra, lidando com as versões pré-históricas das tecnologias dos anos 60, quase sempre movidas a tração animal. Fred Flintstone gosta de comer e jogar boliche, além de frequentemente se meter em confusões e arrastar seu melhor amigo Barney junto. Quando isso acontece suas esposas precisam se meter e salvá-los`],
    isContinuacao: false,

}
const desenho6 = {
    nome: `Caverna do Dragão `,
    criador: [`Kevin Paul Coates`, `Mark Evanier`, `Dennis Marks`],
    duracaoEpisodios: 28,
    personagens: [`Hank`, `Eric`, `Diana `, `Sheila`, `Presto`, `Bobby `, `Mestre dos Magos`, `Uni`, `Vingador`, `Tiamat`, `Demônio das Sombras`,],
    anoLancamento: 1983,
    enredo: [`Um grupo de crianças vai a um parque de diversões e lá se deparam com o brinquedo Caverna do Dragão. Ao entrarem nele, são enviados a um mundo mágico, aonde vivem muitas aventuras e contam com a ajuda de Mestre dos Magos para tentar voltar para casa`],
    isContinuacao: false,

}
const desenho7 = {
    nome: `As Aventuras de Jackie Chan`,
    criador: [`John Rogers`, `Duane Capizzi`, `Jeff Kline`],
    duracaoEpisodios: 95,
    personagens: [`Jackie Cahn`, `Jade Chan`, `Tio`, `Tohru`, `Valmont`, `Hak Foo,`, `Paco`, `Viper`, ` El Tuero Fuert`, `Daolan`, `Shendu`, `Finn`, `Capitão Black`],
    anoLancamento: 2000,
    enredo: [`Jackie Chan, um arqueólogo amador, preferiria fazer seu trabalho discretamente para a universidade local, mas o destino deu outra mão. Isso acontece quando ele descobre que um escudo contendo um talismã é apenas o primeiro de uma dúzia perseguido por uma organização criminosa chamada A Mão Negra liderada por um homem chamado Valmont e guiado por um espírito chamado Shendu. Contra isso Jackie, sua sobrinha Jade e seu tio devem cooperar com a organização secreta de aplicação da lei, Seção 13, para se opor a essa ameaça. Ao longo do caminho, nossos heróis devem enfrentar perigos selvagens que exigirão toda a habilidade de Jackie em artes marciais e sua ousadia de superar.`],
    isContinuacao: false,

}

//---- push para array de objetos!--------

const desenhoArray = []
desenhoArray.push(desenho1, desenho2, desenho3, desenho4, desenho5, desenho6, desenho7)
// console.log(desenhoArray)

//----- media de episodios

const mediaEpisodios = desenhoArray.map(objeto => objeto.duracaoEpisodios).reduce((episodio, episodio2,) => episodio + episodio2, 0) / desenhoArray.length
// console.log(mediaEpisodios);

// Alteração SEMANA 4  , verificando itens e adicionando ao array.
const desenhoContinuacao = []
const desenhoSemContinuacao = []
const verificaContinuacao = (array) => {
    for (let i in array) {
        if (array[i].isContinuacao) {
            desenhoContinuacao.push(array[i].nome)
        } else {
            desenhoSemContinuacao.push(array[i].nome)
            // aler/t('item não foi adicionado ao desenhoContinuacao')
        }
    } return
}
verificaContinuacao(desenhoArray)
// console.log(desenhoContinuacao);
// console.log(desenhoSemContinuacao)


//------SEMANA 2 nome maiusculo e adicionando array no objetos.
const caixaAlta = (array) => {
    for (let i in array) {
        console.log(array[i].nome.toUpperCase())

    }
    return
}
// caixaAlta(desenhoArray)

// -----------SEMANA 5 Reescrevendo o relatório criado utilizando console.log() que começamos na semana 2, altere a forma que a característica de array dos itens seja escrita como um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório.

const mostraStringSeparadas = (array) => {

    for (let i in array) {
        for (let j in array[i]) {
            console.log(`${array[i][j]}`);
        }
    }
    return
}
// console.log( mostraStringSeparadas(desenhoArray))
const retornaString = (array) => {
    let texto = ``
    let lista = 1
    for (let i in array) {
        texto = console.log(`${lista++}) Desenho :  ${array[i].nome}, Criado por : ${array[i].criador}. Quantidade de episodios:  ${array[i].duracaoEpisodios} . Enredo : ${array[i].enredo}`)
    }
    return texto
}
// console.log(retornaString(desenhoArray))


// ------ SEMANA 6 --- Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objetO
const stringDeInfo = (objeto) => {
    let string = ""
    for (let i in objeto) {
        string += console.log(`${[i]} : ${objeto[i]}`)

    } return string
}
stringDeInfo(desenho1)

//---------2. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.

const verificarNome =(array, string)=>{
    let verificarString = array.filter((nome)=>{
        return nome.nome ===string
    })
    if(verificarString.length ===0){
        alert (`Item não encontrado`)
    }return verificarString
}
// console.log(verificarNome(desenhoArray,'As Aventuras de Jackie Chan'))


          

            


