let serie1 = {nome :"The Office", 
sinopse: "Esta versão americana de \"The Office\" é uma comédia que gira em torno do cotidiano de um escritório. Esta sátira descreve a vida dos funcionários da fábrica de papel Dunder Miffin, situada em Scranton, na Pensilvânia.", 
temps: 9, 
episodios: 201, 
temNetflix: false, 
elenco :["Steve Carrell", "Rainn Wilson", "John Krasinski", "Jenna Fischer", "B. J. Novak", "Angela Kinsey", "Brian Baumgartner", "Oscar Nunez", "Leslie David Baker", "Creed Bratton", "Phyllis Smith", "MIndy Kaling", "Kate Flannery", "Paul Lieberstein", "Craig Robinson", "Ed Helms", "Ellie Kemper"]
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

if(serie1.temNetflix){
    arraySeries.push(serie1) 
}else{
    alert(`A série ${serie1.nome} não está presente no catálogo da Netflix`)
}

if (serie2.temNetflix) {
    arraySeries.push(serie2)
}else{
    alert(`A série ${serie2.nome} não está presente no catálogo da Netflix`)
}

    if(serie3.temNetflix){
    arraySeries.push(serie3)
}else{
    alert(`A série ${serie3.nome} não está presente no catálogo da Netflix`)
}

// Tirando média do número de episodios das 3 séries

const numEpisodios = (serie1.episodios + serie2.episodios + serie3.episodios) / 3
console.log(` Média de episódios das 3 séries: ${numEpisodios.toFixed(0)}`);

// Tirando média de episódios por temporada de cada série
// const mediaTemps1 = serie1.episodios / serie1.temps
// console.log(mediaTemps1.toFixed(0));

// const mediaTemps2 = serie2.episodios / serie2.temps
// console.log(mediaTemps2.toFixed(0));

// const mediaTemps3 = serie3.episodios / serie3.temps
// console.log(mediaTemps3.toFixed(0));

// Verificando se todas as séries estão na Netflix

const temNetflix1 = serie1.temNetflix && serie2.temNetflix && serie3.temNetflix
console.log(`Todas as séries estãos na Netflix? ${temNetflix1}`)

// Alterando o nome ds séries para maiúsculo

serie1.nome = serie1.nome.toUpperCase()
serie2.nome = serie2.nome.toUpperCase()
serie3.nome = serie3.nome.toUpperCase()

// Imprimindo os objetos e o array com os objetos dentro

console.log(serie1);
console.log(serie2);
console.log(serie3);

console.log(arraySeries);