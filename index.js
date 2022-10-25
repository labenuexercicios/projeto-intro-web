// Transformando em Objetos 

objAegon = {
    nome: "AEGON TARGARYEN",
    conjuge: "Visenya e Rhaenys Targaryen",
    montavaDragão: true,
    anosdeReinado: 37,
    descendentes: ["Aenys", "Maegor"]
}

objAenys = {
    nome: "AENYS TARGARYEN",
    conjuge: "Alyssa Velaryon",
    montavaDragão: true,
    anosdeReinado: 5,
    descendentes: ["Rhaena","Aegon", "Viserys", "Jaehaerys", "Alysanne", "Vaella"]
}

objJaehaerys = {
    nome: "JAEHAERYS TARGARYEN",
    conjuge: "Alysanne Targaryen",
    montavaDragão: true,
    anosdeReinado: 55,
    descendentes: ["Aegon", "Daenerys", "Aemon", "Baelon", "Alyssa", "Maegelle", "Vaegon", "Daella", "Saera", "Viserra", "Gaemon", "Valerion","Gael"]
}

objViserys = {
    nome: "VISERYS TARGARYEN",
    conjuge: "Aemma Arryn e Alicent Hightower",
    montavaDragão: false,
    anosdeReinado: 26,
    descendentes: ["Rhaenyra", "Baelon", "Aegon", "Helaena", "Aemond", "Daeron"]
}

// Media dos anos de reinado


const dragonRiders = []

/* if (objAegon.montavaDragão === true) {
    dragonRiders.push(objAegon)
} else {alert('Este rei não é um montador de Dragão. Não foi adicionado a categoria "Montador de dragão"')}

if (objAenys.montavaDragão === true) {
    dragonRiders.push(objAenys)
} else {alert('Este rei não é um montador de Dragão. Não foi adicionado a categoria "Montador de dragão"')}

if (objJaehaerys.montavaDragão === true) {
    dragonRiders.push(objJaehaerys)
} else {alert('Este rei não é um montador de Dragão. Não foi adicionado a categoria "Montador de dragão"')}

if (objViserys.montavaDragão === true) {
    dragonRiders.push(objViserys)
} else {alert('Este rei não é um montador de Dragão. Não foi adicionado a categoria "Montador de dragão"')}
 */
/////////////////////////////////////////////////

let dragonKings = [objAegon,objAenys,objJaehaerys,objViserys]

for (let objeto of dragonKings) {
    objeto.descendentes = objeto.descendentes.join(", ")
}

// Relatório impresso com as informações de cada item: 

/* console.log(objAegon)
console.log(objAenys)
console.log(objJaehaerys)
console.log(objViserys) */

// Atividade 2

function impressao (objeto){
    for (i in objeto) {
        console.log(objeto[i])
    }
}

impressao (objAegon)
impressao (objAenys)
impressao (objJaehaerys)
impressao (objViserys) 

// Atividade 3 - 3. Crie uma função que receba como parâmetro um objeto, 
// e devolva a string do relatório com os dados do objeto.

function devolverString (arrayDragon) {
    for (objeto of arrayDragon) {
        for (propriedade in objeto) {
            console.log(`${propriedade}:${objeto[propriedade]}`)
        } console.log('--------------------')
    }
}

devolverString (dragonKings)

// Atividade 4 

    aegonT = { 
        conjuge: "Cônjuge: Visenya e Rhaenys Targaryen",
        anosdeReinado: "Anos de Reinado: 37",
        descendentes: "Descendentes: Aenys e Maegor",
        historia: "Aegon I, ou Aegon, o Conquistador, foi o primeiro rei de Westeros. Ele, junto de suas duas irmãs-esposas, Visenya e Rhaenys, conquistou 6 reinos com seus dragões, exceto Dorne. Aegon montava o maior dragão vivo, chamado Balerion, o Terror Negro. Ele também portava a espada de aço valiriano chamada Fogonegro. Aegon teve dois filhos, um com cada irmã esposa."
    }

    aenysT = {
        conjuge: "Cônjuge: Alyssa Velaryon",
        anosdeReinado: "Anos de Reinado: 5",
        descendentes: "Descendentes: Rhaena, Aegon, Viserys, Jaehaerys, Alysanne, Vaella",
        historia: "Aenys foi o primeiro filho de Aegon, o Conquistar, com a rainha-irmã Rhaenys, que morreu ao tentar conquistar dorne. Aenys era considerado um rei passivo e muito interessado nas artes. Era visto como um rei fraco pois em seu reinado houveram diversas rebeliões e levantes da fé militante que não foram combatidos. Aenys desde criança adoecia com facilidade e aos 35 anos aparentava ter 60. Montava o dragão Quicksilver, que foi morto por Balerion, o Terror Negro, na tentativa de seu filho, Aegon, tentar recuperar o trono de seu tio, Maegor."
    }

    jaehaerysT = {
        conjuge: "Cônjuge: Alysanne Targaryen",
        anosdeReinado: "Anos de Reinado: 55",
        descendentes: "Descendentes: Aegon, Daenerys, Aemon, Baelon, Alyssa, Maegelle, Vaegon, Daella, Saera, Viserra, Gaemon, Valerion e Gael",
        historia: "Jaehaerys, o Conciliador foi o rei que teve o reinado mais longo da história. Era também chamado de Velho Rei, nos últimos anos de reinado. Casou-se com a sua irmã Alysanne e juntos tiveram 13 filhos. Jaehaerys herdou o trono após a morte de seu tio Maegor, o Cruel e é considerado o melhor rei que já passou por Westeros. No seu reinado foram construídas as estradas que cruzam o país e foram aprovadas diversas leis para a vida e segurança das mulheres, obras da rainha Alysanne. Jaeharys montava seu dragão Vermithor, o segundo maior dragão vivo até a dança dos dragões."
    }

    viserysT = {
        conjuge: "Cônjuge: Aemma Arryn e Alicent Hightower",
        anosdeReinado: "Anos de Reinado: 26",
        descendentes: "Descendentes: Rhaenyra, Baelon, Aegon, Helaena, Aemond e Daeron",
        historia: "Viserys foi o quinto rei da dinastia Targaryen, neto do rei Jaehaerys, o Conciliador. Seu reinado foi pacifico e sem grandes revoltas ou questões políticas, no entanto, foi responsável por semear as sementes da Dança dos Dragões. Viserys casou com Aemma Arryn, sua prima, e teve com ela sua querida e amada filha, Rhaenyra, conhecida como o deleite do reino. Mais tarde, após a morte de sua esposa, casou-se novamente com Alicent Hightower. Viserys foi o último montador do dragão Balerion, o terror negro, que morreu um ano após esse evento. Era amante dos torneios e bailes da corte e não era conhecido por ser um bom lutador."
    }

    maegorT = {
        conjuge: "Cônjuge: Ceryse Hightower, Alys Harroway, Tyanna da Torre, Elinor Costayne, Rhaena Targaryen, Jeyne Westerling",
        anosdeReinado: "Anos de Reinado: 6",
        descendentes: "Descendentes: nenhum",
        historia: "Maegor I, chamado de Maegor, o Cruel, foi o terceiro rei Targaryen a se sentar no Trono de Ferro. Era filho de Aegon, o Conquistador e Visenya Targaryen. Maegor foi considerado um guerreiro habilidoso, distinguindo-se bem em torneios e contendas. Em seu reinado, terminou a construção do castelo Fortaleza Vermelha, iniciado no reinado de seu pai, Aegon I. Quando as obras foram concluídas, Maegor organizou uma festa para todos os operários e mandou todos serem executados, pois queria que somente ele conhecesse as passagens secretas do castelo. Maegor casou-se diversas vezes pois era infértil e não conseguiu gerar herdeiros. Por fim, amanheceu morto sentado no trono de ferro, um mistério nunca solucionado. "
    }

    aegoniiT = {
        conjuge: "Cônjuge: Helaena Targaryen",
        anosdeReinado: "Anos de Reinado: 2",
        descendentes: "Descendentes: Jaehaerys, Jaehaera e Maelor ",
        historia: "Aegon II foi o sexto rei Targaryen a sentar no Trono de Ferro, sucedendo seu pai, Viserys I. Sua ascensão foi disputada com sua meia-irmã mais velha, Rhaenyra Targaryen, e ambos pereceram na guerra que travaram, a Dança dos Dragões. Quando o rei Viserys I Targaryen faleceu em 129 d.C., a princesa Rhaenyra Targaryen ainda era sua herdeira presuntiva ao Trono de Ferro e foi conspirado para que Aegon fosse rei, usurpando o trono de sua irmã. Após a dança dos dragões, o povo de Westeros não lembrava bem de seu reinado. Aegon montava o dragão Sunfyre e foi coroado com a coroa de Aegon, o Conquistador."
    }

    rhaenyraT = {
        conjuge: "Cônjuge: Laenor Velaryon e Daemon Targaryen",
        anosdeReinado: "Anos de Reinado: 1",
        descendentes: "Descendentes: Jacaerys, Lucerys, Joffrey, Aegon e Viserys",
        historia: "Rhaenyra Targaryen foi a filha mais velha do Rei Viserys I. Ela disputou o Trono de Ferro com seu meio-irmão mais novo, Aegon II, numa guerra civil que ficou conhecida como Dança dos Dragões. Foi casada duas vezes, a primeira com seu primo Laenor Velaryon e depois de sua morte, casou-se com seu tio, Daemon Targaryen. Mãe de cinco filhos, entres os quais Aegon e Viserys, sendo que ambos se tornaram reis após sua morte. Ela era uma cavaleira de dragão, montando Syrax. Era chamada de deleite do reino pois era considerada a donzela mais bonita da corte na sua juventude. "
    }

    aegoniiiT = {
        conjuge: "Cônjuge: Jaehaera Targaryen e Daenaera Velaryon",
        anosdeReinado: "Anos de Reinado: 14",
        descendentes: "Descendentes: Daeron, Baelor, Daena, Rhaena, Elaena", 
        historia: "Aegon III, também conhecido como Aegon, o Jovem, e posteriormente como Aegon, Desgraça dos Dragões, foi o sétimo rei Targaryen a se sentar no Trono de Ferro. Foi sucessor de seu tio, Aegon II Targaryen, no desfecho da Dança dos Dragões, no qual os vitoriosos apoiadores de sua falecida mãe, Rhaenyra Targaryen, o puseram no trono. Quando era criança, ele possuía um dragão chamado Stormcloud. Aegon manteve o reino unido apesar das divisões que se seguiram à guerra civil com a ajuda de seu irmão, Príncipe Viserys, a quem ele nomeou Mão do Rei. O reinado de Aegon terminou com sua morte por tuberculose em 157 d.C., aos 36 anos de idade."
    }

function addObjeto (objeto, id) {
    for (i in objeto) {
        const novoItem = document.getElementById(id)
        const tipoItem = document.createElement("li")
        tipoItem.innerHTML = `${objeto[i]}`
        novoItem.appendChild(tipoItem)
    }
}

addObjeto (aegonT, "aegon")
addObjeto (aenysT, "aenys")
addObjeto (jaehaerysT, "jaehaerys")
addObjeto (viserysT, "viserys")
addObjeto (maegorT, "maegor")
addObjeto (aegoniiT, "aegonII")
addObjeto (aegoniiiT, "aegonIII")
addObjeto (rhaenyraT, "rhaenyra")


function pesquisar (event) {

    let input = document.getElementById("busca").value
    input=input.toLowerCase();
    let lista = document.getElementsByClassName("dragon");

    for (i = 0; i < lista.length; i++) { 
        if (!lista[i].innerHTML.toLowerCase().includes(input)) {
            lista[i].style.display="none";
        }
        else {
            lista[i].style.display="list-item";
        }         
    }

    if (input === "") {
        alert("Campo vazio")
    }

    event.preventDefault()
}