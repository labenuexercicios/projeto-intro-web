let serie1 = ["The Office", "Esta versão americana de \"The Office\" é uma comédia que gira em torno do cotidiano de um escritório. Esta sátira descreve a vida dos funcionários da fábrica de papel Dunder Miffin, situada em Scranton, na Pensilvânia.", 9, 201, false, ["Steve Carrell", "Rainn Wilson", "John Krasinski", "Jenna Fischer", "B. J. Novak", "Angela Kinsey", "Brian Baumgartner", "Oscar Nunez", "Leslie David Baker", "Creed Bratton", "Phyllis Smith", "MIndy Kaling", "Kate Flannery", "Paul Lieberstein", "Craig Robinson", "Ed Helms", "Ellie Kemper"]]

let serie2 = ["Brooklyn 99", "A série gira em torno de Jake Peralta (Andy Samberg), um imaturo, mas talentoso, detetive da polícia de Nova York na fictícia 99. ª Delegacia do Brooklyn, que muitas vezes entra em conflito com seu novo comandante, o sério e severo capitão Raymond Holt (Andre Braugher).", 8, 153, true, ["Andy Samberg", "Melissa Fumero", "Stephanie Beatriz", "Chelsea Peretti", "Terry Crews", "Andre Braugher", "Joe Lo Truglio", "Dirk Blocker", "Joel McKinnon Miller", "Marc Evan Jackson", "Jason Mantzoukas", "Craig Robinson"]]

let serie3 = ["The Crown", "The Crown é uma série de TV britânica produzida para a Netflix. A história acompanha a rainha Elizabeth II e os primeiros-ministros que, juntos, deram forma à Grã-Bretanha depois da Segunda Guerra Mundial.", 4, 40, true, ["Claire Foy", "Olivia Colman", "Matt Smith", "Tobias Menzies", "Vanessa Kirby", "Helena Bonham Carter", "Eilen Atkins", "Victoria Hamilton", "Pip Torrens", "John Lithgow", "Ben Miles"]]

console.log(serie1);
console.log(serie2);
console.log(serie3);

const numEpisodios = (serie1[3] + serie2[3] + serie3[3]) / 3
//console.log(numEpisodios);

const temNetflix = serie1[4] && serie2[4] && serie3[4]
//console.log(`Todas as séries estãos na Netflix? ${temNetflix}`)

const copia1 = serie1.slice()
copia1[0] = serie1[0].toUpperCase()
console.log(copia1);

const copia2 = serie2.slice()
copia2[0] = serie2[0].toUpperCase()
console.log(copia2);

const copia3 = serie3.slice()
copia3[0] = serie3[0].toUpperCase()
console.log(copia3);