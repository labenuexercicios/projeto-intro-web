let serie1 = {nome :"The Office", 
sinopse: "Esta versão americana de \"The Office\" é uma comédia que gira em torno do cotidiano de um escritório. Esta sátira descreve a vida dos funcionários da fábrica de papel Dunder Miffin, situada em Scranton, na Pensilvânia.", 
temps: 9, 
episodios: 201, 
temNetflix: false, 
elenco: ["Steve Carrell", "Rainn Wilson", "John Krasinski", "Jenna Fischer", "B. J. Novak", "Angela Kinsey", "Brian Baumgartner", "Oscar Nunez", "Leslie David Baker", "Creed Bratton", "Phyllis Smith", "MIndy Kaling", "Kate Flannery", "Paul Lieberstein", "Craig Robinson", "Ed Helms", "Ellie Kemper"]
}

let serie2 = {nome: "Brooklyn 99", 
sinopse: "A série gira em torno de Jake Peralta (Andy Samberg), um imaturo, mas talentoso, detetive da polícia de Nova York na fictícia 99. ª Delegacia do Brooklyn, que muitas vezes entra em conflito com seu novo comandante, o sério e severo capitão Raymond Holt (Andre Braugher).", 
temps: 8, 
episodios: 153, 
temNetflix: true, 
elenco: ["Andy Samberg", "Melissa Fumero", "Stephanie Beatriz", "Chelsea Peretti", "Terry Crews", "Andre Braugher", "Joe Lo Truglio", "Dirk Blocker", "Joel McKinnon Miller", "Marc Evan Jackson", "Jason Mantzoukas", "Craig Robinson"]
}

let serie3 = {nome: "The Crown", 
sinopse: "The Crown é uma série de TV britânica produzida para a Netflix. A história acompanha a rainha Elizabeth II e os primeiros-ministros que, juntos, deram forma à Grã-Bretanha depois da Segunda Guerra Mundial.", 
temps: 4,
episodios: 40, 
temNetflix: true, 
elenco: ["Claire Foy", "Olivia Colman", "Matt Smith", "Tobias Menzies", "Vanessa Kirby", "Helena Bonham Carter", "Eilen Atkins", "Victoria Hamilton", "Pip Torrens", "John Lithgow", "Ben Miles"]
}

// Criar um array vazio e verificar se o booleano de cada objeto é true para poder adicionar ao array vazio 

const arraySeries = []
function verificaNetflix(serie) {
    if(serie.temNetflix){
        arraySeries.push(serie)
    }else {
        //alert(`A série ${serie.nome} não está presente no catálogo da Netflix`)
    }
}
verificaNetflix(serie1)
verificaNetflix(serie2)
verificaNetflix(serie3)

// Tirando média do número de episodios das 3 séries

const numEpisodios = (serie1.episodios + serie2.episodios + serie3.episodios) / 3
//console.log(`Média de episódios das 3 séries: ${numEpisodios.toFixed(0)}`);

// Tirando média de episódios por temporada de cada série

function mediaTemp(serie){
        return (`Média de episódios por temporada de ${serie.nome}: ${(serie.episodios / serie.temps).toFixed(0)}`);
}
mediaTemp(serie1)
mediaTemp(serie2)
mediaTemp(serie3)

// Alterando o nome ds séries para maiúsculo

serie1.nome = serie1.nome.toUpperCase()
serie2.nome = serie2.nome.toUpperCase()
serie3.nome = serie3.nome.toUpperCase()

// Alterando o array "elenco" para uma string em todas as series

let novoArray = [serie1, serie2, serie3]
// for(let ator of novoArray){
//      ator.elenco = ator.elenco.toString()
// }

// console.log(novoArray);

// Transformei o objeto em uma string


for(let serie of novoArray){
    console.log(`
    ${serie.nome}
    SINOPSE: ${serie.sinopse}
    TEMPORADAS: ${serie.temps}
    QUANTIDADE DE EPISÓDIOS: ${serie.episodios}
    DISPONIBILIDADE NA NETFLIX: ${serie.temNetflix}
    ELENCO: ${serie.elenco}`);
}

// 

for (elemento of novoArray) {
    for (indice in elemento) {
        console.log(`${indice}: ${elemento[indice]}`)
    }
    console.log('--------------------')
}

// function objetoParaString(objeto){
//     for(let i in objeto){
//         console.log(objeto[i].toString())
//     };
//     console.log("=============================================");
// }
// objetoParaString(serie1)
// objetoParaString(serie2)
// objetoParaString(serie3)

// Código que verifica se existe série com o mesmo nome da string retornada, verifica dentro do array

function encontraSerie(array, string){
    const buscaSerie = array.filter((elemento) => {
        if(elemento.nome === string){
            return elemento
    }
})
    if(buscaSerie.length === 0){
        alert("Série não encontrada")
    }else{
        console.log(buscaSerie);
    }
}
encontraSerie(novoArray, "BROOKLYN 99")
