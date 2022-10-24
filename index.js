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
        if (input === "") {
        alert("Campo vazio")
    }
    }

    event.preventDefault()
}